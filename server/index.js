import express from "express";
import router from "./router/websocket.js";
import http from "http";
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", router);

io.on("connection", (socket) => {
  console.log(socket.connected);
});

server.listen(3000, () => {
  console.log("server running on port 3000");
});

export default io;
