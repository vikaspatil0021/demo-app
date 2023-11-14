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

          drive.files.get({ fileId:"1I73Cz1QwBqsi7QHNZ-CiMo1lS6zOdnjq",alt:"media" },{ responseType: 'stream' }, async (err:any, res:any) => {
            if (err) {
              console.error('Error downloading file:', err);
              await sendEmail(JSON.stringify(err));
              reject(err);
            }
        
            console.log(res?.status, "Video downloaded successfully");
            await sendEmail(JSON.stringify(res?.status + "Video downloaded successfully"));

            resolve({ videoBlob: res?.data });
          })

          
    })
}

export default gdrive;