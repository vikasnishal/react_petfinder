import React from "react";
import express from "express";
import { renderToString } from "react-dom/server";
import { ServerLocation } from "@reach/router";
import fs from "fs";
import App from "./src/App";
import dotenv from "dotenv";

dotenv.config().parsed;

const PORT = process.env.PORT || 3000;

const html = fs.readFileSync("dist/index.html").toString();

const app = express();

const parts = html.split("not rendered");

// app.use("/dist", express.static("dist"));
app.use("/dist", express.static("dist"));

app.use((req, res) => {
  const reactMarkup = (
    <ServerLocation url={req.url}>
      <App />
    </ServerLocation>
  );
  res.send(`${parts[0]}${renderToString(reactMarkup)}${parts[1]}`);
  res.end();
});
console.log(`listening on port ${PORT}`);
app.listen(PORT);
