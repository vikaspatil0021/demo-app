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

          drive.files.get({ fileId:"1I73Cz1QwBqsi7QHNZ-CiMo1lS6zOdnjq",alt:"media" }, (err:any, res:any) => {
            if (err) {
              console.error('Error downloading file:', err);
              reject(err);
            }
        
            console.log(res?.status, "Video downloaded successfully");
            console.log(res?.data);
            resolve({ videoBlob: (res?.data).stream() });
          })

          
    })
}

export default gdrive;