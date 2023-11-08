import { S3Client, GetObjectCommand, PutObjectCommand} from "@aws-sdk/client-s3";
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

const s3Client = new S3Client({
    region:'ap-south-1',
    credentials:{
        accessKeyId: process.env.AWSID || '',
        secretAccessKey: process.env.AWSKEY || '',
    }
});

export const getImage = async (Key:any)=>{
    const command = new GetObjectCommand({
        Bucket:'youtube0021',
        Key
    });


    const url = await getSignedUrl(s3Client,command);

    return url;
}

export const putImage = async (Key:any ,ContentType:any)=>{
    const command = new PutObjectCommand({
        Bucket:'youtube0021',
        Key,
        ContentType
    });


    const url = await getSignedUrl(s3Client,command);

    return url;
}


export const sendObject = async()=>{
    const command = new GetObjectCommand({
        Bucket:'youtube0021',
        Key:'video0021'
    });
    const result  = await s3Client.send(command);
    return result;
}

