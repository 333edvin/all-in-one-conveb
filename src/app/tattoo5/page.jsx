import Image from "next/image";

export default function Page(){
    return(
        <div className="bg-gray-100 text-gray-900">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <div className="text-2xl font-bold">ART STUDIO</div>
          <nav className="space-x-4">
            <a href="#" className="hover:underline">Home</a>
            <a href="#" className="hover:underline">About Us</a>
            <a href="#" className="hover:underline">Gallery</a>
            <a href="#" className="hover:underline">Artists</a>
            <a href="#" className="hover:underline">Contact Us</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://via.placeholder.com/1920x1080')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="text-center">
            <h1 className="text-6xl text-white font-bold">ART STUDIO</h1>
            <p className="text-xl text-white mt-4">Ink Your Story</p>
            <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg">Book Appointment</button>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-white text-center">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold">About Us</h2>
          <p className="text-lg mt-6 mx-auto max-w-2xl">Duisburg Latin uses a Latin text filled with references, and looks for and identifies the exotic, irrational, and other feelings in the work of visual artists.</p>
          <button className="mt-8 bg-gray-900 text-white px-6 py-3 rounded-lg">Read More</button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <Image src="https://via.placeholder.com/300x300" alt="Specific Style Tattoo" className="mx-auto rounded-lg" />
              <h3 className="text-xl font-semibold mt-4">Specific Style Tattoos</h3>
            </div>
            <div>
              <Image src="https://via.placeholder.com/300x300" alt="Piercing and Body Implants" className="mx-auto rounded-lg" />
              <h3 className="text-xl font-semibold mt-4">Piercing and Body Implants</h3>
            </div>
            <div>
              <Image src="https://via.placeholder.com/300x300" alt="Tattoo Like Art" className="mx-auto rounded-lg" />
              <h3 className="text-xl font-semibold mt-4">Tattoo Like Art</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Artists Section */}
      <section className="py-16 bg-white text-center">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12">Meet Our Artists</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Artist Card */}
            <div>
              <Image src="https://via.placeholder.com/200x200" alt="Artist 1" className="mx-auto rounded-full" />
              <h3 className="text-xl font-semibold mt-4">Charly Moon</h3>
              <p className="text-gray-600">Tattoo Artist</p>
            </div>
            {/* Repeat for other artists */}
            <div>
              <Image src="https://via.placeholder.com/200x200" alt="Artist 2" className="mx-auto rounded-full" />
              <h3 className="text-xl font-semibold mt-4">Lady McGrath</h3>
              <p className="text-gray-600">Tattoo Artist</p>
            </div>
            <div>
              <Image src="https://via.placeholder.com/200x200" alt="Artist 3" className="mx-auto rounded-full" />
              <h3 className="text-xl font-semibold mt-4">Jane Expanse</h3>
              <p className="text-gray-600">Tattoo Artist</p>
            </div>
            <div>
              <Image src="https://via.placeholder.com/200x200" alt="Artist 4" className="mx-auto rounded-full" />
              <h3 className="text-xl font-semibold mt-4">Mandy Muse</h3>
              <p className="text-gray-600">Tattoo Artist</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tattoo Prices Section */}
      <section className="py-16 bg-gray-100 text-center">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12">Tattoo Prices</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Tattoo Price Card */}
            <div className="bg-white p-8 shadow-md rounded-lg">
              <h3 className="text-xl font-bold">Thigh Tattoo</h3>
              <p className="text-gray-600 mt-2">$200</p>
              <p className="mt-4">Description of the thigh tattoo service.</p>
            </div>
            {/* Repeat for other tattoo prices */}
            <div className="bg-white p-8 shadow-md rounded-lg">
              <h3 className="text-xl font-bold">Back Tattoo</h3>
              <p className="text-gray-600 mt-2">$400</p>
              <p className="mt-4">Description of the back tattoo service.</p>
            </div>
            <div className="bg-white p-8 shadow-md rounded-lg">
              <h3 className="text-xl font-bold">Forearm Tattoo</h3>
              <p className="text-gray-600 mt-2">$150</p>
              <p className="mt-4">Description of the forearm tattoo service.</p>
            </div>
            <div className="bg-white p-8 shadow-md rounded-lg">
              <h3 className="text-xl font-bold">Chest Tattoo</h3>
              <p className="text-gray-600 mt-2">$300</p>
              <p className="mt-4">Description of the chest tattoo service.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Partner Brands */}
      <section className="py-16 bg-white text-center">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12">Our Partner Brands</h2>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-8">
            <Image src="https://via.placeholder.com/100x100" alt="Brand 1" className="mx-auto" />
            <Image src="https://via.placeholder.com/100x100" alt="Brand 2" className="mx-auto" />
            <Image src="https://via.placeholder.com/100x100" alt="Brand 3" className="mx-auto" />
            <Image src="https://via.placeholder.com/100x100" alt="Brand 4" className="mx-auto" />
            <Image src="https://via.placeholder.com/100x100" alt="Brand 5" className="mx-auto" />
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-gray-100 text-center">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12">Our Latest Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Image Gallery */}
            <Image src="https://via.placeholder.com/300x300" alt="Work 1" className="rounded-lg" />
            <Image src="https://via.placeholder.com/300x300" alt="Work 2" className="rounded-lg" />
            <Image src="https://via.placeholder.com/300x300" alt="Work 3" className="rounded-lg" />
            <Image src="https://via.placeholder.com/300x300" alt="Work 4" className="rounded-lg" />
          </div>
        </div>
      </section>

      {/* Appointment Section */}
      <section className="py-16 bg-white text-center">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12">Make An Appointment</h2>
          <form className="max-w-xl mx-auto">
            <div className="mb-4">
              <input type="text" placeholder="Your Name" className="w-full px-4 py-2 border rounded-lg" />
            </div>
            <div className="mb-4">
              <input type="email" placeholder="Your Email" className="w-full px-4 py-2 border rounded-lg" />
            </div>
            <div className="mb-4">
              <input type="text" placeholder="Your Phone" className="w-full px-4 py-2 border rounded-lg" />
            </div>
            <button className="bg-gray-900 text-white px-6 py-3 rounded-lg">Submit</button>
          </form>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="py-8 bg-gray-800 text-white text-center">
        <div className="container mx-auto">
          <p>&copy; 2024 Art Studio - All Rights Reserved.</p>
          <div className="mt-4 space-x-4">
            <a href="#" className="hover:underline">Facebook</a>
            <a href="#" className="hover:underline">Instagram</a>
            <a href="#" className="hover:underline">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
    )
}