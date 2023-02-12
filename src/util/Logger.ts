import consola, { ConsolaOptions } from "consola";
import { logType } from "../types/logType";
import { reporterType } from "../types/reporterType";

interface FunctionProps {
  reporterType?: reporterType;
  type?: logType;
  message: any;
  consolaOpts?: ConsolaOptions;
}

const MAP_REPORTER = new Map([
  ["JSONReporter", new consola.JSONReporter()],
  ["BasicReporter", new consola.BasicReporter()],
  ["FancyReporter", new consola.FancyReporter()],
]);

const getReporter = (reporter: reporterType = "FancyReporter") =>
  MAP_REPORTER.get(reporter);

export const logger = ({
  reporterType = "FancyReporter",
  type = "log",
  message,
  consolaOpts = {},
}: FunctionProps): void => {
  const reporter = getReporter(reporterType);

  consola
    .create({
      reporters: [reporter],
      ...consolaOpts,
    })
    [type](message);
};
