import { google } from "googleapis";
import oauth2Client from "./googleapi";
import sendEmail from "./email";

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
       async (err:any, data:any) => {
        if (err) {
          console.log('Video upload failed', err);
          await sendEmail(JSON.stringify(err));
          reject(err);
        } else {
          console.log(data?.status, "Video uploaded successfully");
          await sendEmail(JSON.stringify(data));
          resolve({ res: "Video uploaded successfully" });
        }
      }
    );
  });
};

export default uploadVideo;
function asnyc(err: any, any: any, data: any, any1: any): import("googleapis-common").StreamMethodOptions {
  throw new Error("Function not implemented.");
}

function reject(err: any) {
  throw new Error("Function not implemented.");
}

function resolve(arg0: { res: string; }) {
  throw new Error("Function not implemented.");
}

