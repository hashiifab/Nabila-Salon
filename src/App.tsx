import { useState } from "react";
import { Menu, X, Scissors, MapPin, Clock, Star } from "lucide-react";

function App() {
  // Deklarasi state untuk menu dan loading
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0">
              <a href="#">
                <img src="./logo.svg" alt="Nabila Beauty" />
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-900 hover:text-gray-600">
                Services
              </a>
              <a href="#about" className="text-gray-900 hover:text-gray-600">
                About
              </a>
              <a href="#gallery" className="text-gray-900 hover:text-gray-600">
                Gallery
              </a>
              <a href="#contact" className="text-gray-900 hover:text-gray-600">
                Contact
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-900 hover:text-gray-600"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
              <a
                href="#services"
                className="block px-3 py-2 text-gray-900 hover:text-gray-600"
              >
                Services
              </a>
              <a
                href="#about"
                className="block px-3 py-2 text-gray-900 hover:text-gray-600"
              >
                About
              </a>
              <a
                href="#gallery"
                className="block px-3 py-2 text-gray-900 hover:text-gray-600"
              >
                Gallery
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-gray-900 hover:text-gray-600"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-rose-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-8">
            Saatnya Tampil Lebih Percaya Diri!
          </h1>
          <p className="text-base sm:text-xl text-gray-600 max-w-2xl mb-8">
            Setiap hari adalah kesempatan untuk merasa lebih baik tentang diri
            sendiri. Kami di sini untuk bantu kamu tampil dengan cara yang
            paling natural dan menyenangkan. Yuk, mulai hari ini, tampil lebih
            fresh dan siap jalani hari dengan lebih percaya diri!
          </p>

          <button
            className="bg-gray-950 text-white border border-gray-400 border-b-4 font-medium overflow-hidden relative px-6 py-3 rounded-full text-sm sm:text-lg hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group"
            onClick={() => window.open("http://wa.me/6285790576066", "_blank")}
          >
            <span className="bg-rose-400 shadow-rose-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
            Book Appointment
          </button>
        </div>

        {/* SVG Background with gradient mask (right side) */}
        <div className="hidden lg:block absolute inset-0 z-0">
          <svg
            className="w-full h-full"
            viewBox="0 0 1440 800"
            xmlns="http://www.w3.org/2000/svg"
            style={{ transform: "translateX(20%)" }}
          >
            <defs>
              <mask id="mask1" x="0" y="0" width="100%" height="100%">
                <rect x="0" y="0" width="100%" height="100%" fill="white" />
                <rect x="0" y="0" width="65%" height="100%" fill="black" />
              </mask>
            </defs>
            <image
              href="./hero-bg.svg"
              width="1440"
              height="800"
              mask="url(#mask1)"
              style={{ objectFit: "cover" }}
            />
          </svg>
        </div>

        {/* SVG Background on the left side */}
        <div className="hidden lg:block lg:w-[200px] absolute right-[30%] bottom-0 z-0">
          <img src="./flower.svg" width={150} alt="flower" />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-12 text-center">
            Our Featured Services
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-4 sm:p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow relative"
              >
                {/* Gambar yang muncul saat hover */}
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ backgroundImage: `url(${service.image})` }}
                ></div>

                {/* Ikon atau konten awal yang tetap terlihat sampai di hover */}
                <div className="mb-4 text-rose-400 z-10">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12">
                    {service.icon}
                  </div>
                </div>

                <h3 className="text-xs sm:text-sm md:text-base lg:text-base font-bold mb-2 z-10">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm md:text-base lg:text-base text-gray-600 z-10 text-justify">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Gallery (Instagram Embed) */}
      <section id="gallery" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Work</h2>

          {/* Loading Spinner */}
          {isLoading && (
            <div className="flex justify-center items-center mb-8">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-coffee-accent border-4"></div>
            </div>
          )}

          {/* Instagram Embed */}
          <div className={`flex justify-center ${isLoading ? "hidden" : ""}`}>
            <iframe
              src="https://www.instagram.com/nabillasalon_beauty/embed"
              width="100%"
              height="800"
              frameBorder="0"
              scrolling="yes" // Menambahkan scrolling
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              onLoad={() => setIsLoading(false)} // Set loading state to false after iframe loads
              className="rounded-lg shadow-lg border border-coffee-accent overflow-auto md:w-[100%] md:h-[800px] h-[400px] overflow-y-auto"
            ></iframe>
          </div>

          {/* Link to Instagram */}
          <div className="text-center mt-8">
            <a
              href="https://www.instagram.com/nabillasalon_beauty/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-coffee-accent font-semibold text-lg underline hover:text-coffee-cream"
            >
              Visit Our Instagram
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src="./about.png"
                alt="Salon Interior"
                className="w-full max-w-full h-auto object-cover rounded-lg transition-all duration-300 ease-in-out transform hover:filter-none lg:filter lg:grayscale sm:h-[300px] md:h-[400px] lg:h-[500px]"
              />
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-8">
                Tentang Nabilla Salon
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-6">
                Selamat datang di Nabilla Salon! Kami di sini untuk bantu kamu
                tampil lebih percaya diri dengan layanan kecantikan yang tepat
                buat kamu.
              </p>
              <p className="text-base sm:text-lg text-gray-600 mb-6">
                Kami spesialis dalam hair styling, facial treatments, makeup,
                dan eyelash extensions. Semua layanan kami disesuaikan dengan
                apa yang kamu butuhkan.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-gray-600">
                  <Clock size={18} />
                  <span className="text-sm sm:text-base">
                    Buka setiap hari Senin - Sabtu: 08.00 - 17.00
                  </span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <MapPin size={40} />
                  <a
                    href="https://www.google.com/maps/place/Nabilla+Salon+%26+Beauty/data=!4m2!3m1!1s0x0:0x79d2eb76cca9aad2?sa=X&ved=1t:2428&ictx=111"
                    className="hover:underline"
                  >
                    <span className="text-sm sm:text-base">
                      Dusun Krembangan No. 95, RT.40/RW.09, Kepung Barat,
                      Kepung, Kec. Kepung, Kabupaten Kediri, Jawa Timur 64293
                      <br />
                      Balai Desa ke Utara Lurus
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-rose-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Book Your Appointment</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Siap tampil beda? Hubungi kami sekarang untuk jadwalkan kunjungan
            dan coba langsung layanan kecantikan dari kami.
          </p>

          <button
            className="bg-gray-950 text-white border border-gray-400 border-b-4 font-medium overflow-hidden relative px-6 py-3 rounded-full text-sm sm:text-lg hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group"
            onClick={() => window.open("http://wa.me/6285790576066", "_blank")}
          >
            <span className="bg-rose-400 shadow-rose-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
            Book Appointment
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <span className="text-sm text-gray-600 mb-4 md:mb-0">
            © 2025 Nabilla Salon. All rights reserved.
          </span>
          <span className="text-sm text-gray-600">
            Designed with ❤️ by{" "}
            <a
              href="https://www.instagram.com/temankami"
              className="hover:underline"
            >
              Teman Kami
            </a>
          </span>

          <div className="flex space-x-6">
            <a
              href="https://www.instagram.com/nabillasalon_beauty/"
              className="text-gray-600 hover:text-gray-900"
            >
              Instagram
            </a>
            <a
              href="http://wa.me/6285790576066"
              className="text-gray-600 hover:text-gray-900"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

const services = [
  {
    title: "Hair Styling",
    description:
      "Professional hair styling services tailored to your preferences",
    icon: <Scissors size={32} />,
    image:
      "https://images.pexels.com/photos/3065171/pexels-photo-3065171.jpeg?cs=srgb&dl=pexels-enginakyurt-3065171.jpg&fm=jpg",
  },
  {
    title: "Facial Whitening",
    description: "Advanced facial treatments for radiant, glowing skin",
    icon: <Star size={32} />,
    image:
      "https://static.hdmall.id/system/image_attachments/images/000/041/227/original/shutterstock_1921176536.jpg",
  },
  {
    title: "Professional Makeup",
    description: "Makeup services for any occasion, from natural to glamorous",
    icon: <Star size={32} />,
    image:
      "https://img.freepik.com/free-photo/make-up-artist-getting-model-ready-photoshootin_23-2149305147.jpg",
  },
  {
    title: "Eyelash Extensions",
    description:
      "Premium eyelash extensions for stunning, natural-looking lashes",
    icon: <Star size={32} />,
    image:
      "https://image.popbela.com/content-images/post/20190826/01f0d2a98e1e11e94c7cc902fdf68331.jpg?width=1600&format=webp&w=1600",
  },
];

/* const gallery = [
  {
    title: "Hair Styling",
    category: "Style Transformation",
    image:
      "https://images.pexels.com/photos/3065171/pexels-photo-3065171.jpeg?cs=srgb&dl=pexels-enginakyurt-3065171.jpg&fm=jpg",
  },
  {
    title: "Makeup",
    category: "Professional Makeup",
    image:
      "https://img.freepik.com/free-photo/make-up-artist-getting-model-ready-photoshootin_23-2149305147.jpg",
  },
  {
    title: "Facial Treatment",
    category: "Skincare",
    image:
      "https://theaestheticsskin.com/wp-content/uploads/2024/10/6631cf1265876b7874ba7fd1_different-kinds-of-facial-treatments-you-must-know-az-wilson-aesthetics.jpeg",
  },
  {
    title: "Eyelash Extensions",
    category: "Beauty Enhancement",
    image:
      "https://image.popbela.com/content-images/post/20190826/01f0d2a98e1e11e94c7cc902fdf68331.jpg?width=1600&format=webp&w=1600",
  },
]; */

export default App;
