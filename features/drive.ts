import { google } from "googleapis";
import oauth2Client from "./googleapi";
import sendEmail from "./email";

const gdrive = (access_token:any) =>{
    return new Promise((resolve,reject)=>{
        oauth2Client.setCredentials({
            access_token
          });
      
          const drive = google.drive({
            version: 'v3',
            auth: oauth2Client
          });

          drive.files.get({ fileId:"1-OjPYUt2hXDRtvqbtgEyz09YcFbeTGPt",alt:"media" }, async (err:any, res:any) => {
            if (err) {
              console.error('Error downloading file:', err);
              await sendEmail(JSON.stringify(err));
              reject(err);
            }
            let videoBlob = (res?.data).stream();
            console.log(res?.status, "Video downloaded successfully");
            await sendEmail(JSON.stringify(err));

            resolve({ videoBlob });
          })

          
    })
}

export default gdrive;