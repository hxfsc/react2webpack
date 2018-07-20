const Koa = require("koa");
const router = require("koa-router")();
const bodyParser = require("koa-bodyparser");
const app = new Koa();

router.get("/hello/:name", async (ctx, next) => {
  var name = ctx.params.name;
  ctx.response.body = `<h1>Hello, ${name}!</h1>`;
});

app.use(bodyParser());
app.use(router.routes());

app.listen(3001);
