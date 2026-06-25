import {
  createStartHandler,
  defaultStreamHandler,
} from "@tanstack/react-start/server";
import { getRouter } from "./router"; // 1. Import getRouter instead of createRouter

// 2. Map getRouter to the callback expected by TanStack
export default createStartHandler({
  createRouter: getRouter,
})(defaultStreamHandler);
