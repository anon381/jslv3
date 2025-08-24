import Image from "next/image";
import Navigation from "./Navigation";
import ScrollGasp from "./ScrollGasp";
import ParallaxBG from "./ParallaxBG";


 
export default function Home() {
  return (
    <>
      <Navigation />
      <ParallaxBG />
      <main className="bg-[#f9f9f9] text-[#222222] min-h-screen p-8 pt-24 space-y-12">
        {/* Welcome Section */}
        <ScrollGasp direction="left" className="text-center min-h-[90vh] flex flex-col justify-center bg-[#f9f9f9]">
          <ScrollGasp direction="right">
            <h1 className="text-3xl font-bold text-[#0b2545] mb-2">Encounter Jesus. Grow in the Word. Impact the World.</h1>
            <p className="text-lg mb-4">Join us for spirit-filled teachings, vibrant community, and engaging online presence.</p>
            <div className="flex flex-wrap justify-center gap-4 mb-4">
              <button className="bg-[#ffc857] text-[#1a1a40] px-6 py-2 rounded shadow hover:bg-[#e1ad01] transition">Visit Us This Sunday</button>
              <button className="bg-[#0b2545] text-white px-6 py-2 rounded shadow hover:bg-[#1a1a40] transition">Watch Latest Sermon</button>
              <button className="bg-[#f0f0f0] text-[#0b2545] px-6 py-2 rounded shadow hover:bg-[#ffc857] transition">Follow Us Online</button>
            </div>
          </ScrollGasp>
        </ScrollGasp>

        {/* About Section */}
        <ScrollGasp direction="right" className="w-full bg-[#e1ad01]/80 rounded-lg shadow min-h-[90vh] flex flex-col justify-center">
          <ScrollGasp direction="left">
            <h2 className="text-2xl font-bold text-[#0b2545] mb-2">About JSL Church</h2>
            <p className="mb-2">We are a Bible-teaching, Christ-centered church committed to proclaiming Jesus Christ and preaching the word of God. Founded by Pastor Zenebech Gessesse and her husband Engineer Luelkal Kassie Eleven years ago, we are dedicated to spreading the Gospel and building a strong community of believers.</p>
            <button className="bg-[#0b2545] text-white px-4 py-2 rounded hover:bg-[#1a1a40]">Learn More About Our Story</button>
          </ScrollGasp>
        </ScrollGasp>

        {/* Core Values Section */}
        <ScrollGasp direction="left" className="flex min-h-[90vh] items-center justify-center bg-[#0b2545]/80">
          <ScrollGasp direction="right" className="w-full h-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full h-full">
              <div className="bg-white rounded-lg shadow p-8 flex flex-col justify-center items-center h-full w-full text-center text-lg">
                <h3 className="text-2xl font-bold text-[#0b2545] mb-2">Scripture</h3>
                <p className="text-gray-600">Grounded in Biblical truth</p>
              </div>
              <div className="bg-white rounded-lg shadow p-8 flex flex-col justify-center items-center h-full w-full text-center text-lg">
                <h3 className="text-2xl font-bold text-[#0b2545] mb-2">Discipleship</h3>
                <p className="text-gray-600">Growing together in faith</p>
              </div>
              <div className="bg-white rounded-lg shadow p-8 flex flex-col justify-center items-center h-full w-full text-center text-lg">
                <h3 className="text-2xl font-bold text-[#0b2545] mb-2">Worship</h3>
                <p className="text-gray-600">Heartfelt praise and prayer</p>
              </div>
              <div className="bg-white rounded-lg shadow p-8 flex flex-col justify-center items-center h-full w-full text-center text-lg">
                <h3 className="text-2xl font-bold text-[#0b2545] mb-2">Outreach</h3>
                <p className="text-gray-600">Serving the community</p>
              </div>
              <div className="bg-white rounded-lg shadow p-8 flex flex-col justify-center items-center h-full w-full text-center text-lg">
                <h3 className="text-2xl font-bold text-[#0b2545] mb-2">Media Teaching</h3>
                <p className="text-gray-600">Dive deeper into God's Word with our weekly teachings</p>
              </div>
            </div>
          </ScrollGasp>
        </ScrollGasp>

        {/* Featured Sermon Section */}
        <ScrollGasp direction="right" className="w-full bg-[#ffc857]/80 rounded-lg shadow min-h-[90vh] flex flex-col justify-center">
          <ScrollGasp direction="left">
            <h2 className="text-2xl font-bold text-[#0b2545] mb-2">Featured Sermon</h2>
            <p className="mb-2">From Our Previous Consecutive Teaching Collection</p>
            <div className="mb-2">
              <span className="font-semibold">Book of Revelation</span> — Joining Engineer Pastor Luelkal Kassie to walk through the book of Revelation, line by line
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <div className="bg-[#f0f0f0] rounded p-4">
                <h3 className="font-bold text-[#0b2545]">The Power of Prayer</h3>
                <span className="text-xs text-gray-500">Jan 14</span>
                <p className="text-sm">Prayer</p>
              </div>
              <div className="bg-[#f0f0f0] rounded p-4">
                <h3 className="font-bold text-[#0b2545]">Living with Purpose</h3>
                <span className="text-xs text-gray-500">Jan 7</span>
                <p className="text-sm">Faith</p>
              </div>
              <div className="bg-[#f0f0f0] rounded p-4">
                <h3 className="font-bold text-[#0b2545]">God's Grace in Action</h3>
                <span className="text-xs text-gray-500">Dec 31</span>
                <p className="text-sm">Grace</p>
              </div>
            </div>
            <button className="bg-[#ffc857] text-[#1a1a40] px-4 py-2 rounded mt-4 hover:bg-[#e1ad01]">Explore More Teachings</button>
          </ScrollGasp>
        </ScrollGasp>

        {/* Stay Connected Section */}
        <ScrollGasp className="w-full bg-[#1a1a40]/80 rounded-lg shadow p-6 min-h-[90vh] flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-[#0b2545] mb-2">Stay Connected Online</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex flex-col items-center">
              <span className="font-bold">YouTube</span>
              <p className="text-sm">Weekly sermons, Bible studies, and worship sessions</p>
              <button className="bg-[#0b2545] text-white px-4 py-2 rounded mt-2 hover:bg-[#1a1a40]">Subscribe</button>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-bold">Telegram</span>
              <p className="text-sm">Daily inspiration, behind-the-scenes, and community moments</p>
              <button className="bg-[#ffc857] text-[#1a1a40] px-4 py-2 rounded mt-2 hover:bg-[#e1ad01]">Follow</button>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-bold">Facebook</span>
              <p className="text-sm">Event updates, live services, and community discussions</p>
              <button className="bg-[#f0f0f0] text-[#0b2545] px-4 py-2 rounded mt-2 hover:bg-[#ffc857]">Like Page</button>
            </div>
          </div>
        </ScrollGasp>

        {/* Plan Your Visit Section */}
        <ScrollGasp className="w-full bg-white/80 rounded-lg shadow p-6 min-h-[90vh] flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-[#0b2545] mb-2">Plan Your Visit</h2>
          <p className="mb-2">We'd love to meet you! Whether you're new to faith, just visiting, or looking for a church home — you're welcome here.</p>
          <div className="mb-2">
            <span className="font-semibold">Service Times</span>
            <ul className="list-disc ml-6">
              <li>Sunday Morning: 10:00 AM - 01:30 PM</li>
              <li>Monday Evening: 9:00 AM - 12:00 PM</li>
              <li>Tuesday Morning: 10:00 AM - 5:00 PM</li>
              <li>Thursday Evening: 05:00 PM - 08:30 PM</li>
            </ul>
          </div>
          <div className="mb-2">
            <span className="font-semibold">Location</span>
            <p>Addis Ketema Sub City, Asko-Addis Sefer Lizmender, Addis Ababa, Ethiopia</p>
          </div>
          <div className="mb-2">
            <span className="font-semibold">What to Expect</span>
            <ul className="list-disc ml-6">
              <li>Come as you are - casual dress is perfectly fine</li>
              <li>Free parking available on-site</li>
              <li>Children's programs during service</li>
              <li>Friendly greeters to help you feel at home</li>
            </ul>
          </div>
          <button className="bg-[#0b2545] text-white px-4 py-2 rounded hover:bg-[#1a1a40]">Let Us Know You're Coming</button>
        </ScrollGasp>

        {/* Impact Stories Section */}
        <ScrollGasp className="w-full bg-white/80 rounded-lg shadow p-6 min-h-[90vh] flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-[#0b2545] mb-2">Impact Stories</h2>
          <div className="space-y-4">
            <blockquote className="border-l-4 border-[#ffc857] pl-4 italic text-gray-700">
              "Since joining this church, I've grown deeper in my faith than I ever imagined possible."<br />
              <span className="block font-bold mt-2">Zerihun</span>
              <span className="text-xs text-gray-500">NEHMIA member</span>
            </blockquote>
            <blockquote className="border-l-4 border-[#ffc857] pl-4 italic text-gray-700">
              "The teaching here helped me understand the Bible in a whole new way."<br />
              <span className="block font-bold mt-2">Yohannes</span>
              <span className="text-xs text-gray-500">Youth Leader</span>
            </blockquote>
            <blockquote className="border-l-4 border-[#ffc857] pl-4 italic text-gray-700">
              "It's more than just a church  it's a family"<br />
              <span className="block font-bold mt-2">DR. Saron</span>
              <span className="text-xs text-gray-500">NEHMIA member</span>
            </blockquote>
          </div>
        </ScrollGasp>

        {/* Connect & Engage Section */}
        <ScrollGasp>
          <section className="w-screen bg-white/80 rounded-lg shadow min-h-screen flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-[#0b2545] mb-2">Connect & Engage</h2>
            <form className="space-y-4">
              <input type="text" placeholder="Your Name" className="w-full border rounded px-3 py-2" />
              <input type="email" placeholder="Your Email" className="w-full border rounded px-3 py-2" />
              <textarea placeholder="Prayer requests, questions, or how we can help..." className="w-full border rounded px-3 py-2" rows={3}></textarea>
              <button type="submit" className="bg-[#ffc857] text-[#1a1a40] px-4 py-2 rounded hover:bg-[#e1ad01]">Send Message</button>
            </form>
          </section>
        </ScrollGasp>
        <ScrollGasp>
        {/* Newsletter Section */}
        <section className="w-screen bg-white/80 rounded-lg shadow min-h-screen">
          <h2 className="text-2xl font-bold text-[#0b2545] mb-2">Stay Updated</h2>
          <form className="flex gap-2">
            <input type="email" placeholder="Your Email Address" className="flex-1 border rounded px-3 py-2" />
            <button type="submit" className="bg-[#0b2545] text-white px-4 py-2 rounded hover:bg-[#1a1a40]">Subscribe to Newsletter</button>
          </form>
        </section>
        </ScrollGasp>
<ScrollGasp>
        {/* Contact Info Section */}
        <section className="w-screen bg-white/80 rounded-lg shadow min-h-screen">
          <h2 className="text-2xl font-bold text-[#0b2545] mb-2">Contact Info</h2>
          <ul className="space-y-2">
            <li>+251 926 141 414</li>
            <li>+251 947 153 805</li>
            <li>your-church-email@example.com</li>
            <li>Kolfe Keraniyo Sub City, Asko-Addis Sefer Condominium Area, Addis Ababa, Ethiopia</li>
          </ul>
        </section>
        </ScrollGasp>

        {/* Partner with Us Section */}
        <ScrollGasp className="w-full bg-white/80 rounded-lg shadow text-center min-h-[90vh] flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-[#0b2545] mb-2">Partner with Us</h2>
          <p className="mb-4">Help us advance the Kingdom through your generous giving</p>
          <button className="bg-[#ffc857] text-[#1a1a40] px-6 py-2 rounded shadow hover:bg-[#e1ad01]">Give Now</button>
        </ScrollGasp>

        {/* Footer Section */}
        <footer className="mt-12 text-center text-sm text-gray-500">
          <div className="mb-2">JSL Church<br />Jesus the Spring of Life International</div>
          <div className="mb-2">Active in the World. A Church That Teaches, Reaches, and Welcomes All.</div>
          <div className="mb-2">Quick Links: Home | About Us | Sermons | Plan a Visit | Contact</div>
          <div className="mb-2">Service Times: Sunday Morning: 10:00 AM - 01:30 PM | Monday Morning: 9:00 AM - 12:00 PM | Tuesday Morning: 10:00 AM - 5:00 PM | Thursday Evening: 05:00 PM - 08:30 PM</div>
          <div className="mb-2">Addis Ketema Sub City, Asko-Addis Sefer Lizmender, Addis Ababa, Ethiopia</div>
          <div className="mb-2">Follow-Us</div>
          <div className="mb-2">© 2025 Jesus the Spring of Life International Church. All rights reserved.</div>
        </footer>
      </main>
    </>
  );
}

