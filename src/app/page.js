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
    /*
    e.preventDefault();
    // const email = e[0].value
    const formData = new FormData(e.target); // Get form data
    const values = Object.fromEntries(formData.entries()); // Convert form data to object
    console.log("Form Values:", values); // Log form values
    console.log(session, "SESSION HERE");
    const mongoId = session._id;
    // const {data, error, isLoading} = useSWR(`${process.env.BACKEND_URL}/scrape/${e[url-info]}`, fetcher)
    //set object for context here
    */
    //setObject({ words: "hello!" });
    router.push(`http://localhost:3000/loading`);
  }
  return (
    <main className={styles.main}>
      <img src="/assets/Blue_Logo.png" className="absolute w-16 h-12"></img>
      <div className="flex text-center bg-gradient-to-r from-cyan-500 to-blue-500 content-evenly min-h-screen flex-grow bg-[#1E1E1E]">
        <Card className="bg-white/25 m-auto p-12 w-[54rem] shadow-lg">
          <h1 className="pb-4 text-xl font-bold text-white">
            Hi [Name]!
            <br />
            Please enter the following information:
          </h1>
          <div className="flex flex-row">
            <form onSubmit={formSubmit} className="space-x-4 flex flex-row flex-grow">
              <div className="flex flex-col space-y-4 flex-grow">
                <input
                  id="url"
                  type="url"
                  required
                  name="url-info"
                  placeholder="Linkedin: www.linkedin.com/in/[profile]"
                  className="font-medium px-2 h-10 w-full bg-transparent/50 text-white border-b focus-within:outline-white/75"
                />
                <div>
                  <input
                    id="email"
                    type="email"
                    required
                    name="email-info"
                    placeholder="Email: email@domain.com"
                    className="font-medium px-2 h-10 w-full bg-transparent/50  text-white border-b focus-within:outline-white/75"
                  />
                </div>
                <div>
                  <input
                    id="phone"
                    type="phone"
                    required
                    name="phone-info"
                    placeholder="Phone Number: 04040404040404"
                    className="font-medium px-2 h-10 w-full bg-transparent/50 text-white border-b focus-within:outline-white/75"
                  />
                </div>
              </div>
              <div className="border-l border-white h-full px-4 !items-center !flex">
                <button className="my-auto text-white bg-[#9DE49B] px-8 rounded-lg font-bold hover:shadow-white shadow-lg transition-shadow h-10 hover:text-white/75">
                  Go!
                </button>
              </div>
            </form>
          </div>
        </Card>
      </div>
    </main>
  );
}
