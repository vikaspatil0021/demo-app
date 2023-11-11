import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github"

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            authorization: {
                params: {
                    scope: "openid profile email https://www.googleapis.com/auth/youtube.upload https://www.googleapis.com/auth/drive"
                }
            }
        })
    ],
    callbacks: {
        async jwt({ token, account }) {

            if (account) {

                token = Object.assign({}, token, { access_token: account.access_token, id_token:account.id_token });
            }
            return token
        },
        async session({ session, token }) {

            if (session) {
                session = Object.assign({}, session, { access_token: token.access_token, id_token:token.id_token })
            }
            return session
        }
    }
}


export default NextAuth(authOptions);
