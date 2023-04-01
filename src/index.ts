import http from "http";

import { PORT } from "./config";
import app from "./app";

const server = http.createServer(app);

const port = PORT || 3000;

server.listen(port, () => {
  console.log(`⚡️[server]: Server is listening on port ${port}`);
});