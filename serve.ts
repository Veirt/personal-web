import notFound from "lume/middlewares/not_found.ts";
import Server from "lume/core/server.ts";
import cacheBusting from "lume/middlewares/cache_busting.ts";
import expires from "lume/middlewares/expires.ts";

const server = new Server();

server.use(cacheBusting());
server.use(expires());
server.use(
  notFound({
    page404: "/404.html",
  }),
);

server.start();
