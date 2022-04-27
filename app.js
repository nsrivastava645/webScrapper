import Express from "express";
import reviewsCrawlerRoute from "./src/routes/reviewsCrawlerRoute.js";
import chalk from "chalk";
import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT || 2020;
const app = Express();
app.use(Express.json());
app.use(Express.urlencoded({ extended: false }));
app.use("/reviews", reviewsCrawlerRoute);
app.listen(PORT, () => {
  console.log(chalk.bgBlueBright.whiteBright(`server running on port ${PORT}`));
});
