import { google } from "googleapis";

const oauth2Client = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    "https://demo-app-inky.vercel.app/api/auth/callback/google"
);

export default oauth2Client;