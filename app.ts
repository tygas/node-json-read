import { transformData } from "./utils/transformData";
import { TransactionType } from "types";
import fs from "fs";
import JSONStream from "JSONStream";

interface IError {
  message: string;
}

const PATH = process.argv.slice(2)[0];

try {
  if (fs.existsSync(PATH)) {
    const stream = fs.createReadStream(PATH, {
      encoding: "utf8"
    });


    try {
      const parser = JSONStream.parse(undefined);

      stream.pipe(parser);

      parser
        .on("data", (obj: TransactionType[]) => {
          const users = transformData(obj);
          console.table(users);
        })
        .on("error", (err: IError) => console.error(err.message))
        .on("parseError", (err: IError) => {
          console.error(err.message);
        });
    } catch (e) {
      throw new Error("Error parsing JSON file");
    }

  }
} catch (err) {
  console.log(err);
}
