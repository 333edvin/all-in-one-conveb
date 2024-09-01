import Image from "next/image";

export default function Page(){
    return(
        <div className="bg-gray-900 text-white font-serif">
      {/* Header */}
      <header className="flex justify-between items-center p-6 bg-gray-800">
        <div className="text-2xl font-bold text-orange-400">RAVEN STUDIO</div>
        <nav className="flex space-x-4">
          <button className="text-sm bg-orange-500 px-4 py-2 rounded">Online Consultation</button>
          <button className="text-sm">Menu</button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('https://via.placeholder.com/1200x600')` }}>
        <h1 className="text-5xl font-bold mb-4">EXPRESS YOURSELF</h1>
        <p className="text-xl mb-6">Unleash a New Dimension of Art</p>
        <button className="bg-orange-500 px-8 py-3 rounded text-lg">Book Appointment</button>
      </section>

      {/* Exquisite Approach */}
      <section className="text-center py-12 px-4">
        <h2 className="text-3xl mb-4">EXQUISITE APPROACH TO CUSTOMERS</h2>
        <p className="max-w-xl mx-auto mb-8">Raven Studio is a tattoo salon that provides all kinds of tattooing & piercing services. Our skilled specialists will provide a free consultation and offer a variety of bespoke tattoo designs, or you may ask for any kind of custom design.</p>
        <Image src="https://via.placeholder.com/400x300" alt="Tattoo Process" className="mx-auto rounded-md" />
      </section>

      {/* Versatile Solutions */}
      <section className="py-12 px-4 bg-gray-800">
        <h2 className="text-3xl text-center mb-8">OUR VERSATILE SOLUTIONS</h2>
        <div className="max-w-5xl mx-auto">
          <details className="mb-4">
            <summary className="text-lg font-semibold">Permanent Tattooing</summary>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-4">
              <Image src="https://via.placeholder.com/400x300" alt="Permanent Tattoo" className="rounded-md" />
              <Image src="https://via.placeholder.com/400x300" alt="Permanent Tattoo" className="rounded-md" />
              <Image src="https://via.placeholder.com/400x300" alt="Permanent Tattoo" className="rounded-md" />
            </div>
            <p className="mt-4">The most popular type of tattooing that applies permanent color to your skin...</p>
          </details>
          <details className="mb-4">
            <summary className="text-lg font-semibold">Temporary Tattooing</summary>
            <p className="mt-4">Temporary designs for those who want to explore body art without commitment...</p>
          </details>
          <details className="mb-4">
            <summary className="text-lg font-semibold">Tattoo Sketching</summary>
            <p className="mt-4">Our artists will help bring your vision to life with a detailed sketch...</p>
          </details>
          <details className="mb-4">
            <summary className="text-lg font-semibold">Tattoo Correction</summary>
            <p className="mt-4">Correct or enhance your existing tattoos with expert touch-ups...</p>
          </details>
          <details className="mb-4">
            <summary className="text-lg font-semibold">Tattoo Removal</summary>
            <p className="mt-4">Remove unwanted tattoos safely with our advanced removal techniques...</p>
          </details>
          <details className="mb-4">
            <summary className="text-lg font-semibold">Piercing</summary>
            <p className="mt-4">Professional piercing services with a variety of options...</p>
          </details>
        </div>
      </section>

      {/* Stats */}
      <section className="text-center py-12 bg-gray-900">
        <div className="flex justify-around max-w-4xl mx-auto">
          <div>
            <h3 className="text-4xl font-bold">9</h3>
            <p>Years of Experience</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">12K</h3>
            <p>Customers Served</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">14K</h3>
            <p>Tattoos Inked</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">1K</h3>
            <p>Custom Sketches Drawn</p>
          </div>
        </div>
      </section>

      {/* Artists */}
      <section className="py-12 px-4 bg-gray-800">
        <h2 className="text-3xl text-center mb-8">ARTISTS WE&apos;RE PROUD OF</h2>
        <div className="max-w-4xl mx-auto flex flex-col items-center md:flex-row md:justify-between">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold">Jane Davies</h3>
            <p>Experience: 7 years</p>
            <p>Style: Realism, Portraiture, Classic</p>
            <p>Ranking: Senior</p>
            <button className="bg-orange-500 px-4 py-2 rounded mt-4">Go to portfolio</button>
          </div>
          <Image src="https://via.placeholder.com/200x200" alt="Jane Davies" className="rounded-full mt-6 md:mt-0" />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 px-4">
        <h2 className="text-3xl text-center mb-8">FREQUENTLY ASKED QUESTIONS</h2>
        <div className="max-w-4xl mx-auto">
          <details className="mb-4">
            <summary className="text-lg font-semibold">How to book an appointment?</summary>
            <p className="mt-4">There are lots of ways to book an appointment...</p>
          </details>
          <details className="mb-4">
            <summary className="text-lg font-semibold">How old should I be to get a tattoo?</summary>
            <p className="mt-4">The legal age varies by location but generally is 18...</p>
          </details>
          <details className="mb-4">
            <summary className="text-lg font-semibold">Does tattooing hurt?</summary>
            <p className="mt-4">Pain levels vary depending on the location and design...</p>
          </details>
          <details className="mb-4">
            <summary className="text-lg font-semibold">How to care for my tattoo?</summary>
            <p className="mt-4">Aftercare is crucial for healing; follow these steps...</p>
          </details>
          <details className="mb-4">
            <summary className="text-lg font-semibold">Can I offer my sketches to studio?</summary>
            <p className="mt-4">Yes, our artists love to collaborate on custom designs...</p>
          </details>
          <details className="mb-4">
            <summary className="text-lg font-semibold">How much does a tattoo cost?</summary>
            <p className="mt-4">Prices vary based on size, complexity, and artist expertise...</p>
          </details>
        </div>
      </section>

      {/* Appointment Form */}
      <section className="py-12 px-4 bg-gray-800">
        <h2 className="text-3xl text-center mb-8">BOOK AN APPOINTMENT</h2>
        <form className="max-w-xl mx-auto space-y-4">
          <input type="text" placeholder="Name" className="w-full p-3 rounded bg-gray-900 text-white" />
          <input type="email" placeholder="Email" className="w-full p-3 rounded bg-gray-900 text-white" />
          <input type="tel" placeholder="Phone" className="w-full p-3 rounded bg-gray-900 text-white" />
          <select className="w-full p-3 rounded bg-gray-900 text-white">
            <option>Select procedure</option>
            <option>Tattooing</option>
            <option>Piercing</option>
          </select>
          <textarea placeholder="Comments" className="w-full p-3 rounded bg-gray-900 text-white"></textarea>
          <button type="submit" className="bg-orange-500 px-8 py-3 rounded text-lg w-full">Book Now</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="py-6 px-4 bg-gray-900 text-center">
        <p className="text-sm">© Raven Studio. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="text-orange-500">Privacy Policy</a>
          <a href="#" className="text-orange-500">Terms of Service</a>
        </div>
        <div className="flex justify-center mt-4">
          <Image src="https://via.placeholder.com/300x200" alt="Map" className="rounded-md" />
        </div>
      </footer>
    </div>
    )
}