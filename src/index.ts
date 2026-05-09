import server from "./api/server";

const HOST = "localhost";
const PORT = 3000;

console.log("project-n initialized api service");

server.listen(PORT, () => {
  console.log(`API running at http://${HOST}:${PORT}`);
})
