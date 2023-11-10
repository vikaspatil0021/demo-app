import { google } from "googleapis";
import oauth2Client from "./googleapi";

const uploadVideo = async (access_token:any, body:any) => {
  return new Promise((resolve, reject) => {
   

    oauth2Client.setCredentials({
      access_token
    });

    const youtube = google.youtube({
      version: 'v3',
      auth: oauth2Client
    });

    youtube.videos.insert(
      {
        requestBody: {
          snippet: {
            title: "Testing YouTube API NodeJS module",
            description: "Test video upload via YouTube API",
            tags: ["api", "testing"]
          },
          status: {
            privacyStatus: "public"
          }
        },
        part: ["snippet", "status"],
        media: {
          mimeType: 'video/mp4',
          body
        }
      },
      (err:any, data:any) => {
        if (err) {
          console.log('Video upload failed', err);
          reject(err);
        } else {
          console.log(data?.status, "Video uploaded successfully");
          resolve({ res: "Video uploaded successfully" });
        }
      }
    );
  });
};

export default uploadVideo;
