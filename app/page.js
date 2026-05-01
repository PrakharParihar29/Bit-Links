import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";

const poppins = localFont({
  src: "./Font/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});

export default function Home() {
  return (
    <main className="bg-linear-to-br from-purple-100 via-purple-200 to-purple-300 min-h-screen">
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-[80vh] md:h-[80vh] px-6 md:px-10 py-10 md:py-0">
        {/* Left Section */}
        <div className="flex flex-col gap-6 items-center justify-center text-center md:text-left order-2 md:order-1">
          <p
            className={`text-3xl sm:text-4xl md:text-5xl font-extrabold text-purple-700 drop-shadow-lg ${poppins.className}`}
          >
            The Best URL Shortener in the Market
          </p>
          <p className="max-w-xl text-gray-700 leading-relaxed text-sm sm:text-base">
            We are the most straight forward URL Shortener in the world. Unlike
            others, we don&#8217;t track you or force logins. Your privacy matters 
            that&#8217;s why we built this tool.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
            <Link href="/shorten">
              <button className="w-full sm:w-auto cursor-pointer bg-purple-600 hover:bg-purple-700 transition-all duration-300 rounded-lg shadow-lg px-6 py-2 font-bold text-white transform hover:scale-105">
                🚀 Try Now
              </button>
            </Link>
            <Link
              href="https://github.com/PrakharParihar29"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="w-full sm:w-auto cursor-pointer bg-gray-800 hover:bg-black transition-all duration-300 rounded-lg shadow-lg px-6 py-2 font-bold text-white transform hover:scale-105">
                 💻 GitHub
              </button>
            </Link>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex justify-center items-center relative order-1 md:order-2 mb-8 md:mb-0">
          <Image
            className="animate-fadeIn mix-blend-darken w-full max-w-[300px] sm:max-w-[400px] md:max-w-full h-auto"
            alt="Vector illustration"
            src={"/vector.jpg"}
            width={700}
            height={700}
            priority
          />
        </div>
      </section>
    </main>
  );
}