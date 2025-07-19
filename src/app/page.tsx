import Image from "next/image";
import Navigation from "./Navigation";


 
export default function Home() {
  return (
    <>
      <Navigation />
      <main className="bg-white text-black min-h-screen p-8">
        <h1>Welcome to the Home Page</h1>
        <p>This is the main landing page of the site.</p>
      </main>
    </>
  );
}
           
