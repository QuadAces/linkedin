"use client"
import { Input, Button, CardHeader, Card } from '@nextui-org/react'
import useSWR from 'swr'
import { NextResponse } from 'next/server'
import { Router } from 'next/router'
import { redirect } from 'next/dist/server/api-utils'
import { useRouter } from 'next/navigation'
import fetcher from '../fetcher'
import { useContext } from 'react'
import { Context } from '../lib/context'
import styles from './page.module.css'
// import { Card, CardHeader } from '@nextui-org/react'
export default function Home() {
  const router = useRouter()
  const {setObject} = useContext(Context)
  

  function formSubmit(e) {
e.preventDefault()
console.log("event triggered");
// const {data, error, isLoading} = useSWR(`${process.env.BACKEND_URL}/scrape/${e[url-info]}`, fetcher)
//set object for context here
setObject({words: "hello!"})
router.push(`http://localhost:3000/words`)
  }
  return (
    <main className={styles.main}>
      <img src='/assets/Blue_Logo.png' style={{position: "absolute", width: "120px"}}></img>
      <div className={styles.background} style={{ display: 'flex', textAlign: "center", justifyContent: "space-evenly", width: '100vw', height: "100vh",background: "linear-gradient(180deg, rgba(172,238,252,1) 0%, rgba(23,171,255,1) 100%)"}}>
      
<Card style={{backgroundColor: "white", position: "absolute", margin: "216px auto 400px auto", padding: "25px 260px 80px 260px", borderRadius: "80px"}}>
<CardHeader>
  <h1 style={{paddingBottom: "40px", color: "black", fontSize: "1.5rem", fontWeight: "bold"}}>Hi! <br></br>Please enter your linkedin profile URL below!</h1>
</CardHeader>
      <form onSubmit={(e) => {formSubmit(e)}}>
      <input type="url" required name='url-info' placeholder='www.linkedin.com/in/[profile]' style={{border: "1px solid #000",
  width: "610px", borderRadius: "1rem", height: "60px",
  padding: "20px", textAlign: "center",
  fontSize: "20px", backgroundColor: "white", color: "black", }}/>
    {/* <button type='submit' style={{borderRadius: "1rem", backgroundColor: ""}} >Submit</button> */}
      </form>
</Card>
      
      </div>
    </main>
  )
}
