import express from "express";

const app = express();
const PORT = 4000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send(
    "Hello from Express this is my most recent project and it must work as expected or else i will not get the actual chance to garduate with my software engineering diploma course"
  );
});

app.get("/finding", (req, res) => {
  res.send("Hello this is my finding page");
});

app.get("/listing", (req, res) => {
  res.send("Hello this is the listing page and");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
