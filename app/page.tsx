import Image from "next/image";
import squareImage from "@/public/heroImage.png"

export default function Home() {
  return (
<div className="flex flex-col md:flex-row items-center justify-between p-8">
  {/* Left Text Section */}
  <div className="max-w-lg text-center md:text-left">
    <p className="uppercase text-sm tracking-wide mb-2">
      Your go-to platform for 3D printing files
    </p>
    <h1 className="text-4xl font-bold mb-4">
      Discover what’s possible with 3D printing
    </h1>
    <p className="text-lg mb-6">
      Join our community of creators and explore a vast library of user-submitted models.
    </p>
    <button className="border-2 border-black px-4 py-2 hover:bg-black hover:text-white transition">
      Browse Models
    </button>
  </div>

  {/* Right Image with Custom Mask */}
  <div className="mt-10 md:mt-0 relative w-[300px] h-[300px]">
    <Image
      src={squareImage}
      width={724}
      height={724}
      alt="3D models"
      className="w-full h-full object-cover mask-custom"
    />
  </div>
</div>

    
  );
}
