import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import LinkedInProvider from "next-auth/providers/linkedin";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import { NextResponse } from "next/server";

import db from "@/src/lib/database";
import { ObjectId } from "mongodb";

const handler = NextAuth({
    providers: [
        LinkedInProvider({
            clientId: process.env.LINKEDIN_CLIENT_ID,
            clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
            // scope: 'r_liteprofile',
             
            //params has a url prop to send requests for scopes to?
            authorization: { params: { scope: 'profile email openid' } },
            issuer: 'https://www.linkedin.com',
            jwks_endpoint: "https://www.linkedin.com/oauth/openid/jwks",
            async profile(profile) {
                return {
                    id: profile.sub,
                    name: profile.name,
                    firstname: profile.given_name,
                    lastname: profile.family_name,
                    email: profile.email,
                    image: profile.image,


                }
            },
        }),
        // GitHubProvider({
        //     clientId: process.env.GITHUBID,
        //     clientSecret: process.env.GITHUBSECRET,
        // }),
        // GoogleProvider({
        //     clientId: process.env.GOOGLE_CLIENT_ID,
        //     clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        // }),
    ],
    adapter: MongoDBAdapter(db, {
        databaseName: "linkedinApp",
        collections: "users",
    }),
    debug: process.env.NODE_ENV !== "production",
    session: { strategy: "jwt" },
    callbacks: {
        async jwt({ token, account, profile }) {
            
            console.log(token, "TOKEN", account, "ACCOUNT", profile, "PROFILE");

            return token
          
        },
        async session({ session, token, user }) {
            // console.log("SESSION", session, "USER", user, "TOKEN", token);
            session.MongoId = token.sub
            

            return session;
            
        },
        async signIn({ user, account, profile, email, credentials }) {

            console.log("start",user, account, profile, email, credentials, "END");

            // console.log(account, "account!!");
            // const url = `https://api.linkedin.com/v2/people/(id: ${account.id_token})?oauth2_access_token=${account.access_token}` 
            // const response = await fetch(url, {
            //     method: 'GET',
            //     headers: {
            //         'Content-Type': 'application/json',
            //         'X-RestLi-Protocol-Version':'2.0.0'
            //     },})       
            //     const data = await response.json()
                // console.log("DATA HERE", data);    
                return true
        },
    },
    events: {
        async signIn(message) {},
    },
});

export { handler as GET, handler as POST };
