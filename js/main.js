document.addEventListener('DOMContentLoaded', () => {
    const productList = document.getElementById('product-list');
    const searchInput = document.getElementById('searchInput');
    let allProducts = [];

// แสดง loader ก่อนเริ่มโหลดข้อมูล
    loader.style.display = 'block';

    // Fetch products
    fetch('js/products.json')
        .then(response => response.json())
        .then(data => {
            allProducts = data;
            displayProducts(allProducts);
        })
        .finally(() => {
            loader.style.display = 'none';
        });

    function displayProducts(products) {
        productList.innerHTML = ''; // Clear previous list
        products.forEach(product => {
            const card = document.createElement('div');
            card.className = 'product-card';
            card.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>ราคา: ${product.price} บาท</p>
            `;
            productList.appendChild(card);
        });
    }

    // Inefficient Search
    searchInput.addEventListener('keyup', () => {
        const searchTerm = searchInput.value.toLowerCase().trim(); // remove all space between searchInput after turning it into lower case
        const filteredProducts = allProducts.filter(product => {
            if (searchInput.value == ""){ //Check if searchInput.value (search bar's value) has no value
                return allProducts; //Return all product to display when searchInput.Value has no value
            }
            /* 
            Entire code above this that checking if searchInput.value has no value and return all product is literally useless because it's already doing the same thing without it
            But I'm adding it anyway because it's on the instruction and this comment just to let teacher know that I want to cut this one out 
            */
            // Simple search, not very efficient
            return product.name.toLowerCase().includes(searchTerm);
        });
        displayProducts(filteredProducts);
    });
});