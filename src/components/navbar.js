import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react"
import Link from "next/link"
import { Button } from "@nextui-org/react"

export default function Nav() {

    return <Navbar shouldHideOnScroll style={{backgroundColor: "#111618", opacity: "0.7"}}>
    <NavbarBrand>
      <p style={{position: "relative", left: '-1vw', textAlign: "center",}} className="font-bold text-inherit">Really really really really long name</p>
    </NavbarBrand>
    <NavbarContent className="hidden sm:flex gap-4" justify="center">
      <NavbarItem>
        <Link color="foreground" href="#">
          Home
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link href="#" aria-current="page">
          My Empires
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link color="foreground" href="#">
          Contact
        </Link>
      </NavbarItem>
    </NavbarContent>
    <NavbarContent justify="end">
      
    </NavbarContent>
  </Navbar>
    // const router = useRouter();
    // return (
    // <div className="flex flex-row space-x-8 h-20 text-4xl justify-end mx-8">
    //     <div className="my-auto mr-auto">Bob Bob</div>
    //     <div className="my-auto cursor-pointer hover:underline" onClick={() => router.push(`http://localhost:3000/words`)}>Home</div>
    //     <div className="my-auto cursor-pointer hover:underline" onClick={() => router.push(`http://localhost:3000/words/resume`)}>Resume</div>
    // </div>)
}