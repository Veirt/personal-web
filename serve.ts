import Server from "lume/core/server.ts";
import cacheBusting from "lume/middlewares/cache_busting.ts";

const server = new Server();

server.use(cacheBusting());

server.start();
