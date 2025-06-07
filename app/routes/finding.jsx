import React from "react";
import Navbar from "./components/navbar";
import NavLarge from "./components/navbar-lg";
import { Form } from "react-router";
import { getName, getSchools } from "../models/schools";
import Dropdown from "./components/drop";

//not all that glitters is gold sometimes all you need is just a little confidence

export async function loader({ request }) {
  let schools = await getSchools();
  console.log({ schools });

  let searchParams = new URL(request.url).searchParams;
  const schoolName = searchParams.get("name");

  let school = await getName(schoolName);

  return { school, schools };
}

// export async function action({ request, params }) {
//   let formData = await request.formData();
//   let schoolName = formData.get("name");
//   console.log({ formData });

//   let school = await getName(schoolName);

//   return school;
// }

export default function Finding({ loaderData }) {
  console.log({ loaderData });

  return (
    <main className="h-full">
      <div>
        {/* for small phones */}
        <nav className="flex justify-between p-[5px]">
          <h2>Logo</h2>
          <Navbar />
          <NavLarge />
        </nav>
        <Form method="get" className="p-[10px]">
          <input
            className="bg-gray-700 p-[10px] w-full rounded-[10px] lg:w-[500px]"
            type="text"
            placeholder="Search by school name"
            name="name"
          />
        </Form>
        <h2>Filter results : </h2>
        <div>
          <Dropdown />
        </div>
        <div>
          <h1>Results : </h1>
          <div>
            {loaderData.school ? (
              <div>
                <h3 className="text-center mb-[10px] text-[30px]">
                  {loaderData.school.name}
                </h3>
                <ul className="p-[10px] w-full lg:grid lg:grid-cols-2 lg:gap-[30px] lg:p-[10px]">
                  <div>
                    <img
                      className="rounded-[10px]"
                      src={loaderData.school.image}
                      alt=""
                    />
                  </div>
                  <div>
                    <ul className="grid grid-cols-2 gap-[10px] p-[10px] lg:h-full">
                      <li className="bg-white text-black p-[10px] w-full font-extralight rounded-[10px] lg:flex lg:justify-center lg:items-center lg:text-[30px]">
                        {loaderData.school.system}
                      </li>
                      <li className="bg-white text-black p-[10px] w-full font-extralight rounded-[10px] lg:flex lg:justify-center lg:items-center lg:text-[30px]">
                        {loaderData.school.type}
                      </li>
                      <li className="bg-white text-black p-[10px] w-full font-extralight rounded-[10px] lg:flex lg:justify-center lg:items-center lg:text-[30px]">
                        {loaderData.school.classrooms} Classrooms in totals
                      </li>
                      <li className="text-20px bg-white text-black p-[10px] w-full font-extralight rounded-[10px] lg:flex lg:justify-center lg:items-center lg:text-[30px]">
                        {loaderData.school.location}
                      </li>
                    </ul>
                  </div>
                </ul>
              </div>
            ) : (
              <ul className="p-[10px] lg:grid lg:grid-cols-3 w-full gap-[30px]">
                {loaderData.schools.map((item) => (
                  <li key={item._id}>
                    <h2 className="text-[20px] text-center m-[30px]">
                      {item.name}
                    </h2>
                    <img className="rounded-[10px]" src={item.image} alt="" />

                    <ul className="grid grid-cols-2 gap-[10px] p-[10px]">
                      <li className="bg-white text-black p-[10px] w-full font-extralight rounded-[10px]">
                        {item.system}
                      </li>
                      <li className="bg-white text-black p-[10px] w-full font-extralight rounded-[10px]">
                        {item.type}
                      </li>
                      <li className="bg-white text-black p-[10px] w-full font-extralight rounded-[10px]">
                        {item.classrooms} Classrooms in totals
                      </li>
                      <li className="text-20px bg-white text-black p-[10px] w-full font-extralight rounded-[10px]">
                        {item.location}
                      </li>
                    </ul>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
