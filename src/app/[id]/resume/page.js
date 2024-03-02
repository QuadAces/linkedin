"use client"

import Footer from "@/src/components/footer"
import Navbar from "@/src/components/navbar"
import Resume from "@/src/components/resume"

export default function ProfilePage() {
    return <div className="flex flex-col bg-[#1E1E1E] min-h-screen">
        <Navbar />
        <Resume />
        <Footer></Footer>
    </div>
}
