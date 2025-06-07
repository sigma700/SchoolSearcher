import { client, ObjectId } from "../server/mongo";

const uri = process.env.CONNECTION_STRING;
console.log(uri);

let db = client.db("school-searcher");
let collection = db.collection("school-searcher");

//helper function for finding the data

export async function getSchools() {
  let schools = await collection.find().toArray();
  //   console.log({ schools });

  return schools;
}

//helper function for searching for data by text ]

export async function getName(name) {
  let school = await collection.findOne({ name: name });
  return school;
}

//helper function for creating a new school suing CRUD operations

export async function createSchool(school) {
  let newSchool = await collection.insertOne(school).toString();
  return newSchool;
}
