import express from "express";
import { getRedirects } from "./redirect";

const app = express();
const port = process.env.PORT || 3000;
const redirects = getRedirects();

app.get("*", (req, res) => {
  // Remove the leading slash
  const shortUrl = req.path.substring(1);

  if (redirects[shortUrl]) {
    res.redirect(redirects[shortUrl]);
  } else {
    res.status(404).end();
  }
});

app.listen(port, () => {
  console.log(`Redirector service is running on port ${port}`);
});
