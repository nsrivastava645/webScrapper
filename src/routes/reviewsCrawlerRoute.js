import { Router } from "express";
import ReviewsCrawlerController from "../controllers/reviewsCrawlerController.js";
export default Router().post(
  "/getReviews",
  ReviewsCrawlerController.getReviews
);
