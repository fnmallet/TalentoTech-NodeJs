import { handleGet, handlePost, handleDelete } from "./methodHandlers.js";

const args = process.argv.slice(2);

const method = args[0];
const params = args.slice(1);

switch (method) {
    case "GET":
        handleGet(params);
        break;
    case "POST":
        handlePost(params);
        break;
    case "DELETE":
        handleDelete(params);
        break;
    default:
        throw new Error("método inválido");
}