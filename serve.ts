import Server from "lume/core/server.ts";
import cacheBusting from "lume/middlewares/cache_busting.ts";
import expires from "lume/middlewares/expires.ts";

const server = new Server();

server.use(cacheBusting());
server.use(expires());

server.start();
