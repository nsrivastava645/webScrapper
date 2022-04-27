import Express from "express";
import reviewsCrawlerRoute from "./src/routes/reviewsCrawlerRoute.js";

const app = Express();
app.use(Express.json());
app.use(Express.urlencoded({extended: false}));
app.use('/reviews', reviewsCrawlerRoute);
app.listen(2020, () => {
  console.log("App running on port 2020");
});
