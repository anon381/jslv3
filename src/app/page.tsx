import Image from "next/image";
import Navigation from "./Navigation";


 
export default function Home() {
  return (
    <>
      <Navigation />
      <main className="bg-[#f9f9f9] text-[#222222] min-h-screen p-8">
        <h1 className="text-[#0b2545]">Welcome to the Home Page</h1>
        <p>This is the main landing page of the site.</p>
      </main>
    </>
  );
}
           
