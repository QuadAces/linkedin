import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react"
import Link from "next/link"

export default function Nav() {

  return <Navbar shouldHideOnScroll className="bg-[#111618]/75">
    <NavbarBrand>
      <p className="font-bold text-inherit justify-start">Bill Gates</p>
    </NavbarBrand>
    <NavbarContent className="hidden sm:flex gap-4 !justify-end">
      <NavbarItem>
        <Link color="foreground" href="#">
          Home
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link href="#" aria-current="page">
          About Me
        </Link>
      </NavbarItem>
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