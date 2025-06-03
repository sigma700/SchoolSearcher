import React from "react";
import Navbar from "./components/navbar";
import NavLarge from "./components/navbar-lg";
import { Form } from "react-router";

export default function Finding() {
  return (
    <main className="h-full">
      <div>
        {/* for small phones */}
        <nav className="flex justify-between p-[5px]">
          <h2>Logo</h2>
          <Navbar />
          <NavLarge />
        </nav>
        <Form method="post" action="" className="p-[10px]">
          <input
            className="bg-gray-700 p-[10px] w-full rounded-[10px] lg:w-[500px]"
            type="text"
            placeholder="Search by school name"
          />
        </Form>
        <h2>Filter results : </h2>
        <div className="grid grid-cols-3 gap-[20px] p-[10px]">
          <button className="bg-white text-black font-light p-[10px] rounded-[20px] flex justify-between items-center">
            Fees{" "}
            <span>
              <img src="chevron-down.svg" alt="" />
            </span>
          </button>
          <button className="bg-white text-black font-light p-[10px] rounded-[20px] flex justify-between items-center w-full">
            Amenities
            <span>
              <img src="chevron-down.svg" alt="" />
            </span>
          </button>
          <button className="bg-white text-black font-light p-[10px] rounded-[20px] flex justify-between items-center w-full">
            Population
            <span>
              <img src="chevron-down.svg" alt="" />
            </span>
          </button>
          <button className="bg-white text-black font-light p-[10px] rounded-[20px] flex justify-between items-center w-full">
            System
            <span>
              <img src="chevron-down.svg" alt="" />
            </span>
          </button>
        </div>
        <div>
          <h1>Results : </h1>
          <div>
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </main>
  );
}
