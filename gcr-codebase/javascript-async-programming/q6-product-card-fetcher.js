// Q6. E-Commerce Dashboard: Product Card Fetcher

// Fetch product data from the Fake Store API
async function fetchProducts() {
    try {
        const response = await fetch("https://fakestoreapi.com/products");

        // Check if the API request was successful
        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }

        const products = await response.json();

        // Display details of each product
        products.forEach((product) => {
            console.log("Product:", product.title);
            console.log("Price: $" + product.price);
            console.log("Image:", product.image);
            console.log("------------------------------");
        });

    } catch (error) {
        console.log("Failed to load products. Please try again.");
    }
}

// Call the function
fetchProducts();

