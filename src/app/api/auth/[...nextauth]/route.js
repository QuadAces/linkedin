import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import LinkedInProvider from "next-auth/providers/linkedin";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import { NextResponse } from "next/server";

import db from "@/src/lib/database";

const handler = NextAuth({
    providers: [
        LinkedInProvider({
            clientId: process.env.LINKEDIN_CLIENT_ID,
            clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
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
                    email: profile.email
                }
            },
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    adapter: MongoDBAdapter(db, {
        databaseName: "linkedinApp",
        collections: "users",
    }),
    debug: process.env.NODE_ENV !== "production",
    session: { strategy: "jwt" },
    callbacks: {
        async jwt({ token, account, profile }) {
            
            // const client = await db
            // const database = client.db("notes-app")
            // const data = await database.collection("users").findOne({})
            // console.log(data);

            // console.log("jwt things ACCOUNT", account);
            return {...token, ...account, ...profile}
        },
        async session({ session, user, token }) {
            // console.log("session things!");
        },
        async signIn({ user, account, profile, email, credentials }) {
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
return NextResponse.redirect("localhost:3000/");
        },
    },
    events: {
        async signIn(message) {},
    },
});

export { handler as GET, handler as POST };