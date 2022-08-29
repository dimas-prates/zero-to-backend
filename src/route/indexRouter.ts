import { Router } from "express";
import { HealthCheck } from "./healthCheckRouter";

const indexRouter = Router();

indexRouter.use("/healthCheck", new HealthCheck().check);
export default indexRouter;