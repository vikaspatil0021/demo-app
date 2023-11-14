import gdrive from "./drive";
import sendEmail from "./email";
import uploadVideo from "./youtube";

const driveToYt = async(access_token:any)=>{
    try {
        
        const {videoBlob}:any = await gdrive(access_token);
    
        await uploadVideo(access_token,videoBlob);
    } catch (error) {
        await sendEmail(JSON.stringify(error));
    }
}


export {
    driveToYt
}