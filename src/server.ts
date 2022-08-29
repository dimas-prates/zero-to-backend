import "dotenv/config";
import app from "./app";
const processId = process.pid;
const appPort = process.env.PORT || 4000;

const server = app.listen(appPort, () => { console.log(`Server's running on PORT:${appPort}`); });

process.on("SIGINT", (signal) => {
	console.log(`APP (PID:${processId}) received ${signal}`);
	process.exit(0);
});
process.on("SIGTERM", (signal) => {
	console.log(`APP (PID:${processId}) received ${signal}`);
	process.exit(0);
});

process.on("uncaughtException", (error, origin) => {
	console.log(`APP (PID:${processId}) received ${origin}\n${error}`);
	process.exit(1);
});
process.on("uncaughtException", (reason) => {
	console.log(`APP (PID:${processId}) received ${reason}`);
	process.exit(1);
});