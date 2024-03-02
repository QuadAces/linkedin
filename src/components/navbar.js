import { useRouter } from "next/navigation"

export default function Navbar() {
    const router = useRouter();
    return (<div className="flex flex-row space-x-8 h-20 text-4xl justify-end mx-8">
        <div className="my-auto mr-auto">Bob Bob</div>
        <div className="my-auto cursor-pointer hover:underline" onClick={() => router.push(`http://localhost:3000/words`)}>Home</div>
        <div className="my-auto cursor-pointer hover:underline" onClick={() => router.push(`http://localhost:3000/words/resume`)}>Resume</div>
    </div>)
}