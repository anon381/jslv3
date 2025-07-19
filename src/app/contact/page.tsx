
import Navigation from "../Navigation";

export default function Contact() {
  return (
    <>
      <Navigation />
      <main className="bg-[#f9f9f9] text-[#222222] min-h-screen p-8 pt-24">
        <h1 className="text-[#0b2545]">Contact Us</h1>
        <p>Get in touch with us for more information.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
              <img src={`https://picsum.photos/seed/contact${i}/300/200`} alt="Random" className="rounded mb-2 w-full h-40 object-cover" />
              <h2 className="text-lg font-bold text-[#0b2545] mb-1">Card {i + 1}</h2>
              <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod.</p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
