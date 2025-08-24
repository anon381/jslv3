
import Navigation from "../Navigation";

export default function About() {
  return (
    <>
      <Navigation />
      <main className="bg-[#f0f0f0] text-[#222222] min-h-screen p-8 pt-24">
        <h1 className="text-[#1a1a40]">About Us</h1>
        <p>Learn more about our mission and values.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="bg-white rounded-lg shadow p-4 flex flex-col items-center">

              <img src={`https://picsum.photos/seed/about${i}/300/200`} alt="Random" className="rounded mb-2 w-full h-40 object-cover" />
<h2 className="text-lg font-bold text-[#1a1a40] mb-1">Card {i + 1}</h2>
<p className="text-sm text-gray-600">
  Learn more about our mission, values, and the story behind what we do.
</p>

              
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
