import Image from "next/image";

export default function Page(){
    return(
        <div className="bg-gray-900 text-white font-sans">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 bg-black">
        <div className="text-2xl font-bold">STORIES ON SKIN</div>
        <nav className="flex space-x-6">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">Artists</a>
          <a href="#" className="hover:underline">Sessions</a>
          <a href="#" className="hover:underline">Gallery</a>
          <a href="#" className="hover:underline">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20 bg-black">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Image src="https://via.placeholder.com/600x600" alt="Tattooed Man" className="mx-auto rounded-lg" />
          <Image src="https://via.placeholder.com/600x600" alt="Tattoo Art" className="mx-auto rounded-lg" />
        </div>
        <h1 className="text-6xl font-bold mt-8">A TOUCH OF INK</h1>
        <button className="mt-6 bg-white text-black px-8 py-3 rounded-lg text-lg">Book an Appointment</button>
      </section>

      {/* New Tattoo Section */}
      <section className="py-16 bg-gray-100 text-black">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">NEW TATTOO DESTINE</h2>
          <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12">
            <Image src="https://via.placeholder.com/500x700" alt="Tattooed Back" className="rounded-lg" />
            <div className="text-lg">
              <p>At our studio, we believe that a tattoo is more than just ink on skin, it’s a piece of art that tells a story. From detailed designs to bold and creative styles, our artists ensure that your tattoo experience is unforgettable.</p>
              <button className="mt-6 bg-black text-white px-6 py-3 rounded-lg">View More Tattoo</button>
            </div>
          </div>
        </div>
      </section>

      {/* Tattoo Studio Services Section */}
      <section className="py-16 bg-gray-200 text-black">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">TATTOO STUDIO</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Image src="https://via.placeholder.com/500x700" alt="Tattoo Example" className="rounded-lg" />
            <div>
              <ul className="space-y-4">
                <li className="text-xl font-semibold">Japanese Tattoo</li>
                <li className="text-xl font-semibold">Geometric Tattoo</li>
                <li className="text-xl font-semibold bg-teal-500 text-white p-2 rounded-lg">Blackwork Tattoo</li>
                <li className="text-xl font-semibold">Dotwork Tattoo</li>
                <li className="text-xl font-semibold">Realistic Tattoo</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-gray-100 text-black">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">OUR GALLERY</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Image src="https://via.placeholder.com/400x500" alt="Gallery Image 1" className="rounded-lg" />
            <Image src="https://via.placeholder.com/400x500" alt="Gallery Image 2" className="rounded-lg" />
            <Image src="https://via.placeholder.com/400x500" alt="Gallery Image 3" className="rounded-lg" />
          </div>
          <button className="mt-8 bg-black text-white px-8 py-3 rounded-lg">Choose an Artist</button>
        </div>
      </section>

      {/* Eternal Tattoo Section */}
      <section className="py-16 bg-gray-200 text-black">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">ETERNAL TATTOO</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Image src="https://via.placeholder.com/500x700" alt="Eternal Tattoo" className="rounded-lg" />
            <div>
              <p className="text-lg">We take pride in our meticulous attention to detail and the passion we bring to every piece. Each tattoo is a reflection of our commitment to quality, precision, and artistry. Our studio offers a professional and safe environment.</p>
              <button className="mt-6 bg-black text-white px-6 py-3 rounded-lg">Choose an Artist</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black text-white text-center">
        <h2 className="text-2xl font-bold">A TOUCH OF INK</h2>
        <p className="mt-4">Artistry in ink chronicles of skin stories</p>
        <button className="mt-6 bg-teal-500 text-white px-8 py-3 rounded-lg">Save Now</button>
        <div className="flex justify-center space-x-6 mt-8">
          <a href="#" className="hover:text-teal-500">Facebook</a>
          <a href="#" className="hover:text-teal-500">Instagram</a>
          <a href="#" className="hover:text-teal-500">LinkedIn</a>
          <a href="#" className="hover:text-teal-500">Twitter</a>
        </div>
        <p className="mt-8 text-sm">&copy; Tattoo All Rights Reserved</p>
        <p className="mt-2 text-sm">Design by <a href="#" className="text-teal-500 hover:underline">Gabinguson.com</a></p>
      </footer>
    </div>
    )
}