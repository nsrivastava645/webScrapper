import * as cheerio from "cheerio";
import request from "node-fetch";
import jsonHandler from "../../utils/jsonHandler.js";
class ReviewsCrawlerController {
  async getReviews(req, res) {
    try {
      const { url } = req.body;
      let response = await request(url);
      let body = await response.text();
      const $ = cheerio.load(body);
      let reviewsArray = [];
      $("div.review").each((i, elt) => {
        reviewsArray.push({
          ratings: $(elt).find(".itemRating > strong").text(),
          reviewer: $(elt).find(".reviewer > dd").first().text(),
          date: $(elt).find(".reviewer > dd").last().text(),
          title: $(elt).find(".rightCol > blockquote > h6").text(),
          comment: $(elt).find(".rightCol > blockquote > p").text(),
        });
      });
      jsonHandler(req, res, { status: 200, response: reviewsArray });
    } catch (error) {
      jsonHandler(req, res, { status: 400, response: error });
    }
  }
}
export default new ReviewsCrawlerController();
