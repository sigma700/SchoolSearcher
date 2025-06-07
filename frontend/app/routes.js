import { index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.jsx"),
  route("finding", "routes/finding.jsx"),
  route("listing", "routes/listing.jsx"),
];
