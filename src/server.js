import express from "express";
import cors from "cors";
import pino from "pino-http";
import { env } from "./utils/env.js";
import contactsRouter from "./routers/contacts.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import { notFoundHandler } from "./middlewares/notFoundHandler.js";
const PORT = Number(env("PORT"));

export const setupServer =  () => {
    const app = express();
    app.use(express.json());
    app.use(cors());
    app.use(pino({
    transport: {
        target: "pino-pretty",
    },
    }));

    app.use("/contacts",contactsRouter);

    app.use("*", notFoundHandler);

    app.use(errorHandler);

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
};
