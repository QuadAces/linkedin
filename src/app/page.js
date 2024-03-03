"use client";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { Context } from "../lib/context";
import styles from "./page.module.css";
import { Card } from "@nextui-org/react";
import { useSession } from "next-auth/react";
export default function Home() {
  const router = useRouter();
  const { setObject } = useContext(Context);
  const session = useSession();
  function formSubmit(e) {
    e.preventDefault();
    // const email = e[0].value
    const formData = new FormData(e.target); // Get form data
    const values = Object.fromEntries(formData.entries()); // Convert form data to object
    console.log("Form Values:", values); // Log form values
    console.log(session, "SESSION HERE");
    const mongoId = session._id;
    // const {data, error, isLoading} = useSWR(`${process.env.BACKEND_URL}/scrape/${e[url-info]}`, fetcher)
    //set object for context here

    setObject({ words: "hello!" });
    router.push(`http://localhost:3000/words`);
  }
  return (
    <main className={styles.main}>
      <img src="/assets/Blue_Logo.png" className="absolute w-16 h-12"></img>
      <div className="flex text-center content-evenly min-h-screen flex-grow bg-[#1E1E1E]">
        <Card className="bg-white m-auto flex flex-col p-12">
          <h1 className="pb-4 text-xl font-bold text-black">
            Hi! <br />
            Please enter your LinkedIn profile URL below!
          </h1>
          <form onSubmit={formSubmit} className="space-y-4">
            <input
              id="url"
              type="url"
              required
              name="url-info"
              placeholder="Linkedin: www.linkedin.com/in/[profile]"
              className="font-medium px-2 h-10 w-full bg-white text-black border border-black roundedfocus-within:outline-white/75 rounded"
            />
            <div>
              <input
                id="email"
                type="email"
                required
                name="email-info"
                placeholder="Email: email@domain.com"
                className="font-medium px-2 h-10 w-full bg-white text-black border border-black roundedfocus-within:outline-white/75 rounded"
              />
            </div>
            <div>
              <input
                id="phone"
                type="phone"
                required
                name="phone-info"
                placeholder="Phone Number: 04040404040404"
                className="font-medium px-2 h-10 w-full bg-white text-black border border-black roundedfocus-within:outline-white/75 rounded"
              />
            </div>
            <div style={{ paddingTop: "20px" }}>
              <button className="text-black bg-[#66b7f9] px-2 rounded-md h-8 hover:text-white transition-colors">
                Submit
              </button>
            </div>
          </form>
        </Card>
      </div>
    </main>
  );
}
