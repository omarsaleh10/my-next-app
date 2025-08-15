import Image from "next/image";
import squareImage from "@/public/heroImage.png"
import Link from "next/link";
export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 lg:px-8 pb-8 pt-8">
        {/* Left Text Section */}
        <div className="max-w-lg text-center lg:text-left mb-12 lg:mb-0 order-2 lg:order-1">
          <p className="uppercase text-xs sm:text-sm tracking-widest text-gray-700 mb-3 sm:mb-4 font-medium">
            YOUR GO-TO PLATFORM FOR 3D PRINTING FILES
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            Discover what's possible with 3D printing
          </h1>
          <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed">
            Join our community of creators and explore a vast library of user-submitted models.
          </p>
          <Link href="/models" className="inline-block tracking-wide cursor-pointer">
          <button className="border-2 border-black px-4 sm:px-6 py-2 sm:py-3 hover:bg-black hover:text-white transition-all duration-300 uppercase tracking-wide font-medium text-sm sm:text-base cursor-pointer">
            BROWSE MODELS
          </button>
          </Link>
        </div>

        {/* Right Image with Curved Mask */}
        <div className="relative w-[280px] h-[350px] sm:w-[350px] sm:h-[400px] lg:w-[400px] lg:h-[500px] xl:w-[500px] xl:h-[600px] order-1 lg:order-2 mb-8 lg:mb-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 rounded-[60px] sm:rounded-[80px] lg:rounded-[100px] transform rotate-12"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 rounded-[60px] sm:rounded-[80px] lg:rounded-[100px] transform -rotate-6"></div>
          <div className="absolute inset-0 bg-white rounded-[60px] sm:rounded-[80px] lg:rounded-[100px] transform rotate-3"></div>
          
          <div className="absolute inset-3 sm:inset-4 bg-gradient-to-br from-gray-800 to-black rounded-[50px] sm:rounded-[60px] lg:rounded-[80px] overflow-hidden">
            <Image
              src={squareImage}
              width={724}
              height={724}
              alt="3D models"
              className="w-full h-full object-cover opacity-90"
            />
          </div>
        </div>
      </div>
    </div>
  );
}


