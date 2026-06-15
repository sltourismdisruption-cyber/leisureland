import client from "../../tina/__generated__/client";
import HomeClient from "./HomeClient";

// Server component: fetch the Home page content from Tina, then hand it to the
// client component that renders all sections and powers click-on-the-page
// visual editing via useTina. (The Galle journey rows moved to /accommodation,
// Doc 05.)
export default async function Home() {
  const res = await client.queries.home({ relativePath: "home.json" });
  return (
    <HomeClient data={res.data} query={res.query} variables={res.variables} />
  );
}
