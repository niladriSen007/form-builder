import { SignInButton, UserButton, useUser } from "@clerk/nextjs"
import { auth, clerkClient } from "@clerk/nextjs/server"
import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button"

const Navbar = () => {
  const { isSignedIn } = useUser
  return (
    <nav className="flex items-center justify-between px-20 h-16 ">
      <div>
        <Image
          src={"/logo.svg"}
          width={2500}
          height={2500}
          className="size-8 "
          alt="Brand logo"
        />
      </div>
      <div className="text-black">
        {isSignedIn ? (
          <div className="flex items-center space-x-4">
            <Link href={"/dashboard"}>
              {" "}
              <Button variant="ghost">Dashboard</Button>
            </Link>
            <UserButton />
          </div>
        ) : (
          <SignInButton>
            <Button>Get started</Button>
          </SignInButton>
        )}
      </div>
    </nav>
  )
}
export default Navbar
