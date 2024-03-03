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
      <img src="/assets/Blue_Logo.png" className="absolute w-16 h-16"></img>
      <div className="flex text-center content-evenly min-h-screen flex-grow bg-[#1E1E1E]">
        <Card className="bg-white m-auto flex flex-col p-12">
          <h1 className="pb-4 text-xl font-bold text-black">
            Hi! <br />
            Please enter your linkedin profile URL below!
          </h1>
          <form onSubmit={formSubmit}>
            <div>
              <label
                htmlFor="url"
                className="text-black text-bold text-xl"
                style={{
                  color: "black",
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                  position: "absolute",
                  left: "4rem",
                  paddingTop: "25px",
                }}
              >
                Linkedin:
              </label>
              <input
                id="url"
                type="url"
                required
                name="url-info"
                placeholder="www.linkedin.com/in/[profile]"
                className=" border"
                {/*style={{
                  border: "1px solid #000",
                  width: "610px",
                  borderRadius: "1rem",
                  height: "60px",
                  padding: "20px",
                  textAlign: "center",
                  margin: "15px",
                  fontSize: "20px",
                  backgroundColor: "white",
                  color: "black",
                }}*/}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                style={{
                  color: "black",
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                  position: "absolute",
                  left: "4rem",
                  paddingTop: "25px",
                }}
              >
                Email:
              </label>

              <input
                id="email"
                type="email"
                required
                name="email-info"
                placeholder="email@domain.com"
                style={{
                  border: "1px solid #000",
                  width: "610px",
                  borderRadius: "1rem",
                  height: "60px",
                  padding: "20px",
                  textAlign: "center",
                  margin: "15px",
                  fontSize: "20px",
                  backgroundColor: "white",
                  color: "black",
                }}
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                style={{
                  color: "black",
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                  position: "absolute",
                  left: "4rem",
                  paddingTop: "25px",
                }}
              >
                Phone:
              </label>

              <input
                id="phone"
                type="phone"
                required
                name="phone-info"
                placeholder="Phone Number"
                style={{
                  border: "1px solid #000",
                  width: "610px",
                  borderRadius: "1rem",
                  height: "60px",
                  padding: "20px",
                  textAlign: "center",
                  margin: "15px",
                  fontSize: "20px",
                  backgroundColor: "white",
                  color: "black",
                }}
              />
            </div>
            <div style={{ paddingTop: "20px" }}>
              <button
                style={{
                  color: "black",
                  backgroundColor: "#66b7f9",
                  padding: "1.25rem 4rem",
                  borderRadius: "20px",
                }}
              >
                Submit
              </button>
            </div>
          </form>
        </Card>
      </div>
    </main>
  );
}
