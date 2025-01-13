const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

const { products } = require('./data');

app.get('/', (req, res) => {
  res.send(html);
});
const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Products</title>
    </head>
    <body>
        <h1>All Product's Searching Optins</h1>
        <p><a href="/api/products"> All Products </p>
        <p><a href="/api/products/:productID"> Search Product By ID</p>
        <p><a href="/products/:productPrice"> Search Procuts That Are More Expensive Than ':productPrice' (write down a price) </p>
    </body>
    </html>
  `;

app.get('/api/products', (req, res) => {
  const newProducts = products.map(product => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.json(newProducts);
});

app.get('/api/products/:productID', (req, res) => {
  const { productID } = req.params;
  const singleProduct = products.find(product => product.id === Number(productID));

  if (!singleProduct) {
    return res.status(404).send('Product Does Not Exist');
  }

  return res.json(singleProduct);
});

// Task #8 From Homework
//Get/products/:productPricep
app.get('/products/:productPrice', (req, res) => {
  const { productPrice } = req.params;
  const filteredProducts = products.filter(product => product.price > Number(productPrice));

  if (filteredProducts.length === 0) {
    return res.status(404).json({ error: 'No products match the criteria' });
  }

  res.json(filteredProducts);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on localhost:${PORT}`);
});
