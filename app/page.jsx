import Nav from "@/components/Nav";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="grid grid-rows-4 md:grid-rows-1 md:min-h-screen md:grid-cols-5 items-center justify-between p-2 py-15 pt-20 bg-std-pattern  bg-center bg-white">
        <div className="hidden md:block md:col-span-1 ">
          <Image src={"/Images/img2.png"} width={300} height={50} alt="Robot" />
        </div>
        <div className="flex-1 items-end justify-center row-span-4 py-10 md:col-span-3 md:h-full md:flex md:justify-center md:items-center">
          <div className="">
            <h1 className="text-4xl text-center font-semibold lg:text-5xl xl:text-7xl">
              Meet your new
            </h1>

            <h1 className="text-4xl pt-1 md:pt-3 text-center font-semibold lg:text-5xl xl:text-7xl">
              AI legal assistant
            </h1>
            <p className="text-center font-medium p-2 py-10 text-gray-500 md:text-xl xl:text-2xl">
              Legal Brain does have features like LawGPT, chat with a bot,
              transliteration, and drafting with results you can trust.
            </p>
            <div className="w-full flex justify-center items-center">
              <Link
                role="button"
                href={"#"}
                className="bg-blue-600 font-bold items-center hover:bg-blue-900 text-white text-sm px-6 py-4  border rounded-full"
              >
                Request Demo
              </Link>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 row-span-1 items-center md:grid-cols-1 md:col-span-1">
          <div className="flex items-center mx-auto md:hidden">
            <Image
              src={"/Images/img2.png"}
              width={300}
              height={50}
              alt="Robot"
              className="z-0"
            />
          </div>

          <div className="flex items-center mx-auto">
            <Image
              src={"/Images/img1.png"}
              width={300}
              height={50}
              alt="Robot"
              className="z-0"
            />
          </div>
        </div>
      </main>
      <main className="flex min-h-full flex-col items-center justify-between bg-white pt-5">
        <div className="pb-10 px- ">
          <h1 className="text-xl pt-1 md:pt-3 text-center font-semibold lg:text-3xl xl:text-5xl">
            Introducing LawGPT, India’s first reliable AI legal assistant
          </h1>
          <p className="text-center font-medium p-2 text-gray-500 text-xs md:text-xl xl:text-2xl">
            Let LawGPT handle your legal questions, provide insightful
            information, and assist you with legal discussions.
          </p>
        </div>
        <div className="px-2 md:px-4">
          <Image
            src={"/Images/img3.png"}
            width={1000}
            height={50}
            alt="Robot"
          />
        </div>
      </main>
      <main className="flex min-h-full flex-col items-center justify-between bg-white pt-5">
        <div className="pb-10 px-4">
          <h1 className="text-xl pt-1 pb-5 md:pt-3 text-center font-semibold lg:text-3xl xl:text-5xl">
            Our Features & Services
          </h1>
          <div className="grid grid-rows-2 grid-cols-6 gap-2">
            <Link
              role="button"
              href={"#"}
              className="items-center col-span-2 hover:bg-slate-300 font-semibold text-xs px-2 py-1 border border-blue-600 rounded-full"
            >
              LawGPT
            </Link>
            <Link
              role="button"
              href={"#"}
              className="items- col-span-2 hover:bg-slate-300 font-semibold text-xs px-2 py-1 border border-blue-600 rounded-full"
            >
              Drafting
            </Link>
            <Link
              role="button"
              href={"#"}
              className="items-center col-span-2 hover:bg-slate-300 font-semibold text-xs px-2 py-1 border border-blue-600 rounded-full"
            >
              Chat with a bot
            </Link>
            <Link
              role="button"
              href={"#"}
              className="items-center col-span-2 hover:bg-slate-300 font-semibold text-xs px-2 py-1 border border-blue-600 rounded-full"
            >
              Transliteration
            </Link>
            <Link
              role="button"
              href={"#"}
              className="items-center col-span-4 hover:bg-slate-300 font-semibold text-xs px-2 py-1 border border-blue-600 rounded-full"
            >
              Trademark & IP Management
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="px-4 pb-4">
            <h1 className="text-base pt-1 pb-5 md:pt-3 text-center font-semibold md:text-2xl md:px-10 lg:text-3xl xl:text-5xl">
              From idea to launch - and every feature in between
            </h1>
            <div className="bg-white border p-2 px-4 rounded flex md:mt-16">
              <div className="relative w-8 h-8 my-auto">
                <Image src={"/Logo/one.png"} fill alt="Robot" className="" />
              </div>
              <p className="text-xs font-semibold pl-4">
                1. Create an account or logs into an existing account.
              </p>
            </div>
            <div className="bgwhite my-6 border p-2 px-4 rounded flex">
              <div className="relative w-9 h-8 my-auto">
                <Image src={"/Logo/two.png"} fill alt="Robot" className="" />
              </div>
              <p className="text-xs font-semibold pl-4">
                2. Define a goal or task, and formulate a request or quory.
              </p>
            </div>
            <div className="bg-white border p-2 px-4 rounded flex">
              <div className="relative w-12 h-8 my-auto">
                <Image src={"/Logo/three.png"} fill alt="Robot" className="" />
              </div>
              <p className="text-xs font-semibold pl-4">
                3. LawGPT process the input and generates a output based on your
                request.
              </p>
            </div>
            <div className="w-full flex justify-center items-center mt-6">
              <Link
                role="button"
                href={"#"}
                className="bg-blue-600 font-bold items-center hover:bg-blue-900 text-white text-sm px-6 py-4  border rounded-full"
              >
                Request Demo
              </Link>
            </div>
          </div>

          <div className="w-full h-full flex justify-end">
            <Image
              src={"/Images/img4.png"}
              width={400}
              height={50}
              alt="Half Screen"
              className="hidden md:block"
            />
          </div>
        </div>
      </main>
    </>
  );
}
