import Image from "next/image";

export default function Page(){
    return(
        <div className="bg-black text-white font-sans">
      {/* Header Section */}
      <header className="flex flex-col items-center py-10">
        <div className="flex flex-col md:flex-row max-w-5xl w-full">
          <div className="relative flex-1">
            <Image
              src="https://via.placeholder.com/600x400"
              alt="Manny Di Presso"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
              <h2 className="text-2xl font-bold">MANNY DI PRESSO</h2>
              <p className="text-sm mt-2">Meet the tattoo artist</p>
            </div>
          </div>
          <div className="relative flex-1">
            <Image
              src="https://via.placeholder.com/600x400"
              alt="Genghis Cohen"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
              <h2 className="text-2xl font-bold">GENGHIS COHEN</h2>
              <p className="text-sm mt-2">Meet the tattoo artist</p>
            </div>
          </div>
        </div>
      </header>

      {/* Featured Artists Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Artist 1 */}
          <div className="flex flex-col items-center">
            <Image
              src="https://via.placeholder.com/300x400"
              alt="Phil Clark"
              className="mb-4 rounded-md shadow-lg"
            />
            <h3 className="text-xl font-semibold">PHIL CLARK</h3>
            <p className="text-center text-sm mt-2">
              Experienced tattoo artist specializing in detailed line work.
            </p>
          </div>

          {/* Artist 2 */}
          <div className="flex flex-col items-center">
            <Image
              src="https://via.placeholder.com/300x400"
              alt="Susie Marsh"
              className="mb-4 rounded-md shadow-lg"
            />
            <h3 className="text-xl font-semibold">SUSIE MARSH</h3>
            <p className="text-center text-sm mt-2">
              Up-and-coming artist known for her unique style.
            </p>
          </div>

          {/* Artist 3 */}
          <div className="flex flex-col items-center">
            <Image
              src="https://via.placeholder.com/300x400"
              alt="Tim Briggs"
              className="mb-4 rounded-md shadow-lg"
            />
            <h3 className="text-xl font-semibold">TIM BRIGGS</h3>
            <p className="text-center text-sm mt-2">
              Specializes in black and grey realism with intricate designs.
            </p>
          </div>
        </div>
      </section>

      {/* Iconography Banner */}
      <section className="py-10 bg-gray-900">
        <div className="flex justify-center space-x-6">
          <Image src="https://via.placeholder.com/50" alt="Icon 1" className="opacity-75 hover:opacity-100 transition" />
          <Image src="https://via.placeholder.com/50" alt="Icon 2" className="opacity-75 hover:opacity-100 transition" />
          <Image src="https://via.placeholder.com/50" alt="Icon 3" className="opacity-75 hover:opacity-100 transition" />
          <Image src="https://via.placeholder.com/50" alt="Icon 4" className="opacity-75 hover:opacity-100 transition" />
          <Image src="https://via.placeholder.com/50" alt="Icon 5" className="opacity-75 hover:opacity-100 transition" />
        </div>
      </section>

      {/* Discount Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative">
            <Image
              src="https://via.placeholder.com/500x300"
              alt="Discount 1"
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <p className="text-white text-3xl font-bold">50% Discount</p>
            </div>
          </div>
          <div className="relative">
            <Image
              src="https://via.placeholder.com/500x300"
              alt="Discount 2"
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <p className="text-white text-3xl font-bold">50% Discount</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Carousel */}
      <section className="py-20 bg-gray-900">
        <h2 className="text-center text-2xl font-bold mb-10">Meet Our Team</h2>
        <div className="flex overflow-x-auto space-x-4 px-4">
          {/* Team Member 1 */}
          <div className="w-80 flex-shrink-0 bg-gray-800 p-4 rounded-lg text-center">
            <Image
              src="https://via.placeholder.com/150"
              alt="Craig Ruiz"
              className="mb-2 rounded-full border-4 border-gray-700"
            />
            <h4 className="font-bold">Craig Ruiz</h4>
            <p className="text-sm">Tattoo Artist</p>
          </div>

          {/* Team Member 2 */}
          <div className="w-80 flex-shrink-0 bg-gray-800 p-4 rounded-lg text-center">
            <Image
              src="https://via.placeholder.com/150"
              alt="Susie Marsh"
              className="mb-2 rounded-full border-4 border-gray-700"
            />
            <h4 className="font-bold">Susie Marsh</h4>
            <p className="text-sm">Tattoo Artist</p>
          </div>

          {/* Team Member 3 */}
          <div className="w-80 flex-shrink-0 bg-gray-800 p-4 rounded-lg text-center">
            <Image
              src="https://via.placeholder.com/150"
              alt="Rita Medina"
              className="mb-2 rounded-full border-4 border-gray-700"
            />
            <h4 className="font-bold">Rita Medina</h4>
            <p className="text-sm">Tattoo Artist</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-black">
        <div className="text-center">
          <Image
            src="https://via.placeholder.com/100"
            alt="Logo"
            className="mx-auto mb-4"
          />
          <nav className="flex justify-center space-x-4 text-sm">
            <a href="#" className="hover:underline">
              Home
            </a>
            <a href="#" className="hover:underline">
              About
            </a>
            <a href="#" className="hover:underline">
              Blog
            </a>
            <a href="#" className="hover:underline">
              Portfolio
            </a>
            <a href="#" className="hover:underline">
              Shop
            </a>
            <a href="#" className="hover:underline">
              Landing
            </a>
          </nav>
          <p className="mt-4 text-sm">
            © 2024 Tattoo Studio. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
    )
}