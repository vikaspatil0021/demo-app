import { google } from "googleapis";
import oauth2Client from "./googleapi";

const gdrive = (access_token:any) =>{
    return new Promise((resolve,reject)=>{
        oauth2Client.setCredentials({
            access_token
          });
      
          const drive = google.drive({
            version: 'v3',
            auth: oauth2Client
          });

          drive.files.get({ fileId:"1PgNzGNoJEo58vruQ_csq-2eZ1_SL6wdQ",alt:"media" }, (err:any, res:any) => {
            if (err) {
              console.error('Error downloading file:', err);
              reject(err);
            }
            let videoBlob = (res?.data).stream();
            console.log(res?.status, "Video downloaded successfully");
            resolve({ videoBlob });
          })

          
    })
}

export default gdrive;