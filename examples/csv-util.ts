import fs from "fs";
import csv from "csv-parser";

export const recordsFromCSV = <RecordT>(filePath: string) =>
  new Promise<RecordT[]>((resolve, reject) => {
    const records: RecordT[] = [];

    fs.createReadStream(filePath)
      .pipe(csv())
      .on("data", (row) => records.push(row))
      .on("end", () => resolve(records))
      .on("error", (err) => reject(err));
  });
