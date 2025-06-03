import React from "react";
import Navbar from "./components/navbar";
import NavLarge from "./components/navbar-lg";
import { Form } from "react-router";

export default function Finding() {
  return (
    <main className="h-screen">
      <div>
        {/* for small phones */}
        <nav className="flex justify-between p-[5px]">
          <h2>Logo</h2>
          <Navbar />
          <NavLarge />
        </nav>
        <Form method="post" action="" className="p-[10px]">
          <input
            className="bg-gray-700 p-[10px] w-full rounded-[10px]"
            type="text"
            placeholder="Search by school name"
          />
        </Form>
      </div>
    </main>
  );
}
