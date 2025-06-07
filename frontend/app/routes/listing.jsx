import React from "react";
import { Form } from "react-router";

export async function action({ request }) {
  let formData = await request.formData();
  let name = formData.get("name");
  let type = formData.get("type");
  let classNumber = formData.get("classNumber");
  let location = formData.get("location");
  let level = formData.egt("level");
  let population = formData.egt("population");
  console.log(formData);
}

export default function Listing({ actionData }) {
  console.log({ actionData });

  return (
    <main className="h-screen flex items-center justify-center">
      <div>
        <Form className="lg:w-full" method="post">
          <FormSpacer>
            <Label text="Name" />
            <Input type="text" placeholder="School name" name="name" />
          </FormSpacer>

          <FormSpacer>
            <Label text="Type" />
            <Input type="text" placeholder="Public or Private" name="type" />
          </FormSpacer>

          <FormSpacer>
            <Label text="Classroom Number" />
            <Input
              type="number"
              placeholder="Total Number of classrooms"
              name="classNumber"
            />
          </FormSpacer>

          <FormSpacer>
            <Label text="Location" />
            <Input
              type="text"
              placeholder="Enter the school Location"
              name="location"
            />
          </FormSpacer>

          <FormSpacer>
            <Label text="Level" />
            <Input
              type="text"
              placeholder="Primary or Secondary"
              name="level"
            />
          </FormSpacer>

          <FormSpacer>
            <Label text="Population" />
            <Input
              type="number"
              placeholder="Total number of Students"
              name="population"
            />
          </FormSpacer>
        </Form>
      </div>
    </main>
  );
}

export function Input({ name, type, placeholder }) {
  return (
    <input
      className="p-[10px] bg-gray-700 lg:w-[700px]"
      type={type}
      name={name}
      placeholder={placeholder}
    />
  );
}

export function Label({ htmlFor, text }) {
  return <label htmlFor={htmlFor}>{text}</label>;
}

export function FormSpacer({ children }) {
  return <div className="flex flex-col gap-[5px]">{children}</div>;
}
