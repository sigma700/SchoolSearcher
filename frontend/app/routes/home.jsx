import { Welcome } from "../welcome/welcome";
import AOS from "aos";
import { useEffect } from "react";
import { Link } from "react-router";

export function meta() {
  return [
    { title: "School Search" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

//project plan
//Welcome we hope you find a school that fits your preferences
//After that the person needs to begin searching for the prefered school

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 3000,
      easing: "ease-in-out",
      once: false,
    });
  });
  return (
    <main
      className="flex flex-col justify-center items-center h-screen p-[10px]"
      style={{
        backgroundImage: "url('/female-teacher-talking-with-students.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: "0.9",
      }}
    >
      {/* for mobile */}
      <h1 className="text-black text-[30px] mb-[30px] font-extrabold text-center">
        We understand that education is key we simply help you find it
      </h1>
      <p className="text-black text-center m-[10px] font-bold">
        Discover the best schools near your area that fit your{" "}
        <span className="text-white">needs</span>
      </p>
      <div
        data-aos="slide-left"
        className="p-[30px] text-center gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100
"
      >
        <h1 className="text-[30px] text-black">Welcome</h1>
        <small className="text-black text-[20px]">Do you want to : </small>
        <div className="flex gap-[20px] mt-[30px]">
          <Link
            to={"/finding"}
            className="bg-black p-[10px] font-extralight border-yellow-500 border active:bg-[#00df82] active:border-none active:text-black hover:bg-[#00df82] hover:border-none hover:cursor-pointer hover:transition-colors hover:duration-[0.2s] duration-[0.3s]"
          >
            Find a School
          </Link>
          <Link
            to={"/listing"}
            className="bg-black p-[10px] font-extralight border-yellow-500 border active:bg-[#00df82] active:border-none active:text-black hover:bg-[#00df82] hover:border-none hover:cursor-pointer hover:transition-colors hover:duration-[0.2s] duration-[0.3s]"
          >
            List your School
          </Link>
        </div>
      </div>
    </main>
  );
}
