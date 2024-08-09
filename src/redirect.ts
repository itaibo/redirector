import fs from "fs";
import path from "path";

const redirectsFilePath = path.resolve(__dirname, "redirects.json");

type Redirects = {
  [key: string]: string;
};

export function getRedirects(): Redirects {
  // Read redirects.json file with the shortUrl
  // and final url mapping
  const data = fs.readFileSync(redirectsFilePath, "utf8");

  // Parse the JSON and return it
  const redirects = JSON.parse(data);
  return redirects;
}
