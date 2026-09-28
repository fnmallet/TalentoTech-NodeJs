import { getProducts, getProduct, createProduct, deleteProduct } from "./api.js";

export const handleGet = async (params) => {
    if (!params[0])
        throw new Error("sin argumentos");

    if (params[0] === "products") {
        const data = await getProducts();
        console.log(data);
        return;
    }

    const split = params[0].split("/");
    const path = split[0];
    const productId = split[1];

    if (path !== "products")
        throw new Error("parámetro inválido");

    if (Number.isNaN(Number(productId)))
        throw new Error("id de producto inválido");

    const data = await getProduct(productId);
    console.log(data);
}

export const handlePost = async (params) => {
    if (!params[0])
        throw new Error("sin argumentos");

    const path = params[0];
    const title = params[1];
    const price = Number(params[2]);
    const category = params[3];

    if (path !== "products" || !title || !category || Number.isNaN(price))
        throw new Error("parámetro inválido");

    await createProduct({ title, price, category });
}

export const handleDelete = async (params) => {
    if (!params[0])
        throw new Error("sin argumentos");

    const split = params[0].split("/");
    const path = split[0];
    const productId = split[1];

    if (path !== "products")
        throw new Error("parámetro inválido");

    if (Number.isNaN(Number(productId)))
        throw new Error("id de producto inválido");

    await deleteProduct(productId);
}