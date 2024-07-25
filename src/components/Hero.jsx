import Link from "next/link"
import { Button } from "./ui/button"

const Hero = () => {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-[80vh] lg:items-center">
        <div className="mx-auto max-w-3xl flex flex-col gap-2 justify-center items-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Create Your Forms{" "}
            <span className="text-blue-600 font-black text-3xl  sm:text-5xl">In Seconds</span>
          </h1>
            <strong className="text-3xl font-extrabold sm:text-5xl">
              {" "}
              Not in Minutes.{" "}
            </strong>

          <p className="mt-4 sm:text-xl/relaxed text-center">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            illo tenetur fuga ducimus numquam ea!
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link className="" href="#">
              <Button>Get Started</Button>
            </Link>

            <Link className="" href="#">
              <Button>Learn More</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Hero
