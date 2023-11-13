import gdrive from "./drive";
import uploadVideo from "./youtube";

const driveToYt = async(access_token:any)=>{
    const {videoBlob}:any = await gdrive(access_token);

    await uploadVideo(access_token,videoBlob);
}


export {
    driveToYt
}