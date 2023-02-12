import { logger } from "./util/Logger";

/**
 * Examples: logger configuration
 */
logger({ type: "error", message: new Error("bad request") });
logger({ message: [1, 2, 3].reduce((acc, curr) => acc + curr, 0) });
