"use client"
import { useRouter } from 'next/navigation'
import fetcher from '../fetcher'
import { useContext, useRef } from 'react'
import { Context } from '../lib/context'
import styles from './page.module.css'
import { Card, } from '@nextui-org/react'
export default function Home() {
  const router = useRouter()
  const {setObject} = useContext(Context)
  function formSubmit(e) {
e.preventDefault()
// const email = e[0].value
    const formData = new FormData(e.target); // Get form data
    const values = Object.fromEntries(formData.entries()); // Convert form data to object
    console.log('Form Values:', values); // Log form values
// const {data, error, isLoading} = useSWR(`${process.env.BACKEND_URL}/scrape/${e[url-info]}`, fetcher)
//set object for context here

setObject({words: "hello!"})
router.push(`http://localhost:3000/words`)
  }
  return (
    <main className={styles.main}>
      <img src='/assets/Blue_Logo.png' style={{position: "absolute", width: "120px"}}></img>
      <div className={styles.background} style={{ display: 'flex', textAlign: "center", justifyContent: "space-evenly", width: '100vw', height: "100vh",background: "linear-gradient(180deg, rgba(172,238,252,1) 0%, rgba(23,171,255,1) 100%)"}}>
      
<Card style={{backgroundColor: "white", position: "absolute", margin: "216px auto 400px auto", padding: "25px 260px 40px 260px", borderRadius: "80px", display: "grid", gridTemplate: "1fr 1fr", justifyContent: "space-evenly"}}>
  <h1 style={{paddingBottom: "30px", color: "black", fontSize: "1.5rem", fontWeight: "bold"}}>Hi! <br></br>Please enter your linkedin profile URL below!</h1>
      <form onSubmit={(e) => {formSubmit(e)}}>

     <div>
     <label htmlFor='url' style={{color: "black", fontWeight: 'bold', fontSize: "1.5rem", position: "absolute", left: "4rem", paddingTop: "25px"}}>Linkedin:</label>
    <input id='url' type="url"  required name='url-info' placeholder='www.linkedin.com/in/[profile]' style={{border: "1px solid #000",
  width: "610px", borderRadius: "1rem", height: "60px",
  padding: "20px", textAlign: "center", margin: "15px",
  fontSize: "20px", backgroundColor: "white", color: "black", }}/>

  </div>
  <div>

  <label htmlFor='email' style={{color: "black", fontWeight: 'bold', fontSize: "1.5rem", position: "absolute", left: "4rem", paddingTop: "25px"}}>Email:</label>

    <input id='email'   type="email" required name='email-info' placeholder='email@domain.com' style={{border: "1px solid #000",
  width: "610px", borderRadius: "1rem", height: "60px",
  padding: "20px", textAlign: "center", margin: "15px",
  fontSize: "20px", backgroundColor: "white", color: "black", }}/>
  </div>
  <div>
  <label htmlFor='phone' style={{color: "black", fontWeight: 'bold', fontSize: "1.5rem", position: "absolute", left: "4rem", paddingTop: "25px"}}>Phone:</label>

    <input id='phone' type="phone" required name='phone-info' placeholder='Phone Number' style={{border: "1px solid #000",
  width: "610px", borderRadius: "1rem", height: "60px",
  padding: "20px", textAlign: "center",margin: "15px",
  fontSize: "20px", backgroundColor: "white", color: "black", }}/>
  </div>
    <div style={{paddingTop: "20px"}}>
    <button style={{color: "black", backgroundColor: "#66b7f9", padding: "1.25rem 4rem", borderRadius: "20px"}}>Submit</button>
    </div>
      </form>
</Card>
      
      </div>
    </main>
  )
}
