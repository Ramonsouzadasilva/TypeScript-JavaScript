import express from "express";
import routes from "./routes";
import { dataBaseConfig } from "./database-config";

dataBaseConfig.initialize().then(() => {
	const app = express();

	app.use(express.json());

	app.use(routes);

	return app.listen(process.env.PORT);
});
