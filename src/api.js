const url = "https://fakestoreapi.com";

export const getProducts = async () => {
    try {
        const response = await fetch(`${url}/products`);
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.error(error);
    }
}

export const getProduct = async (id) => {
    try {
        const response = await fetch(`${url}/products/${id}`);
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.error(error);
    }
}

export const createProduct = async (product) => {
    try {
        const response = await fetch(`${url}/products`, {
            method: "POST",
            body: JSON.stringify(product)
        });

        if (response.ok) {
            const data = await response.json();

            console.log("Producto creado con id", data.id);
        }
    }
    catch (error) {
        console.error(error);
    }
}

export const deleteProduct = async (id) => {
    try {
        const response = await fetch(`${url}/products/${id}`, {
            method: "DELETE",
        });

        if (response.ok) {
            const data = await response.json();

            console.log("Producto eliminado con id", data.id);
        }
    }
    catch (error) {
        console.error(error);
    }
}