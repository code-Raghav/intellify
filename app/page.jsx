import Nav from "@/components/Nav";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex md:grid md:grid-cols-3 min-h-screen items-center justify-between p-2 bg-std-pattern bg-center bg-white">
        <div className="hidden md:block"></div>
        <div className="flex-1 items-center justify-center">
          <h1 className="text-4xl text-center font-semibold">Meet your new</h1>
          <h1 className="text-4xl text-center font-semibold">
            AI legal assistant
          </h1>
          <p className="text-center">
            Legal Brain does have features like LawGPT, chat with a bot,
            transliteration, and drafting with results you can trust.
          </p>
        </div>
        <div className="hidden md:block"></div>
      </main>
      <main className="flex min-h-screen flex-col items-center justify-between p-2 bg-white"></main>
    </>
  );
}
