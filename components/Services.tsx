import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAndroid } from "@fortawesome/free-brands-svg-icons"; // ✅ Correct import for Android icon
import { faGlobe, faCode } from "@fortawesome/free-solid-svg-icons";

export default function Solutions() {
  return (
    <div className="max-w-[1400px] mx-auto p-6">
     <p className="py-2 px-3 rounded-lg border-2 border-[#1c1c1c] inline-block mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-400">
  Services
</p>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
        <h1 className="text-6xl text-[#d0d0d0] font-extralight">Build a Solution <br />That's truly your own.</h1>
        <p className="text-[#9e9d9d] text-lg max-w-xl mt-4 md:mt-0">
          We provide top-notch services in app development, web development, and software development to help your business thrive in the digital era.
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-start gap-12">
        <div className="md:w-1/2">
          <Image
            src="/images/asw.png" // Replace with actual image path
            alt="Illustration of app and web development services"
            className="max-w-xl rounded-xl shadow-lg"
            width={600}
            height={400}
          />
        </div>
        <div className="md:w-1/2 flex flex-col gap-6">
  {/* App Development */}
  <div className="flex items-center gap-4 p-5  rounded-lg shadow-sm hover:shadow-md transition">
    <FontAwesomeIcon icon={faAndroid} className="text-green-600 text-4xl p-3" />
    <div>
      <h3 className="text-xl font-extralight pb-2 text-[#d0d0d0]">App Development</h3>
      <p className="text-[#747373]">We create high-performing mobile applications tailored to your business needs, ensuring seamless user experiences.</p>
    </div>
  </div>

  {/* Web Development */}
  <div className="flex items-center gap-4 p-5  shadow-sm hover:shadow-md transition">
    <FontAwesomeIcon icon={faGlobe} className="text-purple-600 text-3xl p-3" />
    <div>
      <h3 className="text-xl font-extralight pb-2 text-[#d0d0d0]">Web Development</h3>
      <p className="text-[#747373]">From simple websites to complex web applications, we build scalable and responsive web solutions for your business.</p>
    </div>
  </div>

  {/* Software Development */}
  <div className="flex items-center gap-4 p-5   rounded-lg shadow-sm hover:shadow-md transition">
    <FontAwesomeIcon icon={faCode} className="text-blue-600 text-3xl p-3" />
    <div>
      <h3 className="text-xl  font-extralight pb-2 text-[#d0d0d0]">Software Development</h3>
      <p className="text-[#747373]">We deliver robust and efficient software solutions tailored to streamline your business operations.</p>
    </div>
  </div>
</div>

      </div>
    </div>
  );
}
