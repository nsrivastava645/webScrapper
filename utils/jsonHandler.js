import chalk from "chalk";
export default function jsonHandler(req, res, apiResponse) {
  let log = `\nEndpoint:  ${req ? req.url : undefined}
                \nResponse/error:  ${
                  apiResponse && apiResponse.message
                    ? apiResponse.message
                    : JSON.stringify(apiResponse)
                }`;
  console.log(chalk.bgGreenBright.blackBright(log));
  return res.send(apiResponse);
}
