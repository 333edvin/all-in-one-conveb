import Image from "next/image";

export default function Page(){
    return(
        <div className="bg-black text-white">
    {/* Header */}
    <header className="flex justify-between items-center p-6">
      <nav className="flex space-x-6">
        <a href="#" className="hover:text-gray-400">Home</a>
        <a href="#" className="hover:text-gray-400">Pages</a>
        <a href="#" className="hover:text-gray-400">Portfolio</a>
        <a href="#" className="hover:text-gray-400">Blog</a>
        <a href="#" className="hover:text-gray-400">Shop</a>
        <a href="#" className="hover:text-gray-400">Landing</a>
      </nav>
      <div className="logo">LOGO</div>
    </header>

    {/* Hero Section */}
    <section className="relative h-96 flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url('/path/to/hero-image.jpg')` }}>
      <div className="text-center">
        <h1 className="text-4xl font-bold">TRISTERO</h1>
        <p className="text-sm mt-2">Subtitle text goes here</p>
        <button className="mt-4 px-6 py-2 bg-white text-black">Read More</button>
      </div>
    </section>

    {/* Price List */}
    <section className="p-10 text-center">
      <h2 className="text-3xl font-bold">Price List</h2>
      <div className="grid grid-cols-2 gap-4 mt-8">
        <div className="flex justify-between">
          <span>Small Tattoo</span>
          <span>100$</span>
        </div>
        <div className="flex justify-between">
          <span>Medium Tattoo</span>
          <span>200$</span>
        </div>
        {/* Add more items as per the design */}
      </div>
      <button className="mt-6 px-6 py-2 bg-white text-black">Read More</button>
    </section>

    {/* Promotional Banners */}
    <section className="flex flex-wrap mt-10">
      <div className="w-1/2 h-48 bg-cover bg-center relative" style={{ backgroundImage: `url('/path/to/banner1.jpg')` }}>
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <p className="text-2xl">50% Discount</p>
        </div>
      </div>
      <div className="w-1/2 h-48 bg-cover bg-center relative" style={{ backgroundImage: `url('/path/to/banner2.jpg')` }}>
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <p className="text-2xl">50% Discount</p>
        </div>
      </div>
    </section>

    {/* Amazing Artwork Gallery */}
    <section className="p-10">
      <h2 className="text-3xl font-bold text-center">Amazing Artwork</h2>
      <div className="grid grid-cols-3 gap-4 mt-8">
        <Image src="/path/to/image1.jpg" alt="Artwork 1" className="w-full h-auto" />
        <Image src="/path/to/image2.jpg" alt="Artwork 2" className="w-full h-auto" />
        <Image src="/path/to/image3.jpg" alt="Artwork 3" className="w-full h-auto" />
        {/* Add more images as per the design */}
      </div>
    </section>

    {/* Awards Section */}
    <section className="p-10 bg-gray-900">
      <h2 className="text-3xl font-bold text-center">Many Awards</h2>
      <div className="grid grid-cols-2 gap-6 mt-8">
        <div className="space-y-2">
          <p>2016 - Best Tattoo Agency of NYC</p>
          <p>2017 - Photofest in Berlin</p>
          {/* Add more awards as per the design */}
        </div>
        <div className="space-y-2">
          <p>2018 - Best Tattoo Agency of NYC</p>
          <p>2019 - Best Adobe Award</p>
          {/* Add more awards as per the design */}
        </div>
      </div>
    </section>

    {/* Working Hours and Map */}
    <section className="flex p-10">
      <div className="w-1/2 space-y-4">
        <h3 className="text-xl font-bold">Working Hours</h3>
        <p>Monday - Friday: 9am - 5pm</p>
        <p>Saturday: 9am - 3pm</p>
        <p>Sunday: Closed</p>
      </div>
      <div className="w-1/2">
        <iframe
          src="https://www.google.com/maps/embed?..."
          className="w-full h-48"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </section>

    {/* Footer */}
    <footer className="bg-black text-white p-6 text-center">
      <p>© 2023 Tristero Studio. All Rights Reserved.</p>
    </footer>
  </div>
    )
}