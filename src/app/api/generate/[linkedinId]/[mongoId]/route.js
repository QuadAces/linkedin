import db from "@/src/lib/database";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

// // This approach is taken from https://github.com/vercel/next.js/tree/canary/examples/with-mongodb
// import { MongoClient } from "mongodb"

// if (!process.env.MONGODB_URI) {
//   throw new Error('Invalid/Missing environment variable: "MONGODB_URI"')
// }

// const uri = process.env.MONGODB_URI
// const options = {}

// let client
// let db


//   // In production mode, it's best to not use a global variable.
//   client = new MongoClient(uri, options)
//   db =  client.db("linkedinApp")


// // Export a module-scoped MongoClient promise. By doing this in a
// // separate module, the client can be shared across functions.
// export default db


export async function GET(request, context) {
    //context is an object of params
    //next response something.
//connect to db etc...
const scriptURL = `https://754d-2001-8003-2c0f-b800-e19f-a408-5357-52a9.ngrok-free.app`;
const linkedinId = context.linkedinId
const mongoId = new ObjectId(context.mongoId)
    let profiles = await db.collection("profile").findOne({id: mongoId})

    let data;

        if (profiles == null || !profiles) {
            const uri = encodeURI(`${scriptURL}/${linkedinId}`)
            const response = await fetch(uri, {method: "GET"})
            
            if (!response.ok) {
                //send out array of data thats all bad 
                return NextResponse.status(100).json({status: "Internal server error"})
            }


            
            const profile = await response.json()

            await db.collection('profile').insertOne({id: mongoId, name: profile.name, byline: profile.byline, location: profile.location, description: profile.description,  
           
            pfp_link: profile.pfp_link, educations: profile.educations, experiences: profile.experiences,})
            data = await db.collection('profile').findOne({id: mongoId,})
            
        } else {
            //serve up profile
            data = await profiles
            //fetch data from db
           
        }
        try {
            res.json(data)
        } catch(e) {
            
        }
    
        


return NextResponse.json("words")

}



// app.get(`/:linkedinId/:mongoId`, async (req, res, next) => {

//    
//     
// });


