import Image from "next/image";

export default function Page(){
    return(
        <div className="bg-black text-white">
        {/* Header */}
        <header className="flex justify-between items-center p-6 bg-black text-white">
          <nav className="flex space-x-6">
            <a href="#" className="hover:text-gray-400">Home</a>
            <a href="#" className="hover:text-gray-400">About</a>
            <a href="#" className="hover:text-gray-400">Services</a>
            <a href="#" className="hover:text-gray-400">Portfolio</a>
            <a href="#" className="hover:text-gray-400">Blog</a>
            <a href="#" className="hover:text-gray-400">Contact</a>
          </nav>
          <div className="logo font-bold text-xl">LOGO</div>
        </header>
  
        {/* Hero Section */}
        <section className="relative h-96 flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url('https://via.placeholder.com/1600x900')` }}>
          <div className="text-center">
            <h1 className="text-4xl font-bold">BRING TATTOO TO LIFE</h1>
            <p className="text-sm mt-2">We are leading tattoo salon with experienced artists</p>
            <button className="mt-4 px-6 py-2 bg-yellow-500 text-black">Get an Appointment</button>
          </div>
        </section>
  
        {/* Service Categories */}
        <section className="p-10 grid grid-cols-3 gap-4 text-center">
          {["Tattoo Design", "Henna Design", "Piercing & Body Modification"].map((service, index) => (
            <div key={index} className="relative bg-cover bg-center h-64" style={{ backgroundImage: `url('https://via.placeholder.com/500x500')` }}>
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <h3 className="text-2xl font-bold">{service}</h3>
              </div>
            </div>
          ))}
        </section>
  
        {/* Masterpiece Section */}
        <section className="bg-white text-black p-10 text-center">
          <h2 className="text-4xl font-bold">A MASTERPIECE</h2>
          <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p className="mt-6 font-signature">Signature</p>
          <div className="grid grid-cols-3 gap-4 mt-8">
            <div className="p-4 border">Tattoo Service 1</div>
            <div className="p-4 border">Tattoo Service 2</div>
            <div className="p-4 border">Tattoo Service 3</div>
          </div>
        </section>
  
        {/* Last Inks Gallery */}
        <section className="p-10">
          <h2 className="text-3xl font-bold text-center">Last Inks</h2>
          <div className="grid grid-cols-3 gap-4 mt-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <Image key={i} src="https://via.placeholder.com/400x400" alt="Gallery Image" className="w-full h-auto" />
            ))}
          </div>
        </section>
  
        {/* Meet Our Artists */}
        <section className="p-10 bg-gray-900 text-white text-center">
          <h2 className="text-3xl font-bold">Meet Our Artists</h2>
          <div className="grid grid-cols-3 gap-4 mt-8">
            {["Mark Johnson", "Martin Collins", "John Davis"].map((name, index) => (
              <div key={index} className="text-center">
                <Image src="https://via.placeholder.com/300x300" alt={name} className="mx-auto rounded-full" />
                <p className="mt-4">{name}</p>
              </div>
            ))}
          </div>
        </section>
  
        {/* Process Section */}
        <section className="p-10 bg-white text-black">
          <h2 className="text-3xl font-bold text-center">Process</h2>
          <div className="grid grid-cols-5 gap-4 mt-8 text-center">
            {["Your Idea", "Sketch", "Pricing", "Tattooing", "Aftercare"].map((step, index) => (
              <div key={index} className="p-4 border rounded-lg">
                <div className="bg-gray-200 h-20 mb-4"></div>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </section>
  
        {/* Custom Order Form */}
        <section className="p-10 bg-gray-100 text-black text-center">
          <h2 className="text-3xl font-bold">Order Custom Tattoo Stencil</h2>
          <form className="mt-8 grid grid-cols-3 gap-4">
            <input type="text" placeholder="Your Name" className="p-2 border" />
            <input type="text" placeholder="Tattoo Size" className="p-2 border" />
            <input type="file" className="p-2 border" />
            <button className="col-span-3 mt-4 px-6 py-2 bg-yellow-500 text-black">Submit</button>
          </form>
        </section>
  
        {/* Shop Section */}
        <section className="p-10">
          <h2 className="text-3xl font-bold text-center">From Our Shop</h2>
          <div className="grid grid-cols-3 gap-4 mt-8">
            {["Product 1", "Product 2", "Product 3"].map((product, index) => (
              <div key={index} className="p-4 border text-center">
                <Image src="https://via.placeholder.com/150x150" alt={product} className="mx-auto mb-4" />
                <p>{product}</p>
                <button className="mt-4 px-4 py-2 bg-yellow-500 text-black">Add to Cart</button>
              </div>
            ))}
          </div>
        </section>
  
        {/* News & Events */}
        <section className="p-10 bg-gray-200 text-black">
          <h2 className="text-3xl font-bold text-center">News & Events</h2>
          <div className="grid grid-cols-3 gap-4 mt-8">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="p-4 bg-white shadow-lg">
                <Image src="https://via.placeholder.com/300x200" alt="News" className="w-full h-auto mb-4" />
                <p>News or event details here...</p>
              </div>
            ))}
          </div>
        </section>
  
        {/* Instagram Section */}
        <section className="p-10 bg-black text-white">
          <h2 className="text-3xl font-bold text-center">Visit Us on Instagram</h2>
          <div className="grid grid-cols-4 gap-4 mt-8">
            {Array.from({ length: 8 }).map((_, i) => (
              <Image key={i} src="https://via.placeholder.com/150x150" alt="Instagram" className="w-full h-auto" />
            ))}
          </div>
        </section>
  
        {/* Newsletter Subscription */}
        <section className="p-10 bg-gray-900 text-white text-center">
          <h2 className="text-3xl font-bold">Do You Want to Follow Us?</h2>
          <div className="flex justify-center mt-4">
            <input type="email" placeholder="Enter your email" className="p-2 border mr-2" />
            <button className="px-6 py-2 bg-yellow-500 text-black">Subscribe</button>
          </div>
        </section>
  
        {/* Footer */}
        <footer className="p-10 bg-black text-white">
          <div className="flex justify-between">
            <div>
              <p className="font-bold">Address</p>
              <p>123 Tattoo Lane, Ink City</p>
            </div>
            <div>
              <p className="font-bold">Contact</p>
              <p>Email: info@tattooshop.com</p>
            </div>
            <div>
              <p className="font-bold">Working Hours</p>
              <p>Mon - Fri: 9am - 6pm</p>
            </div>
          </div>
          <p className="text-center mt-6">© 2024 Tattoo Shop. All rights reserved.</p>
        </footer>
      </div>
    )
}