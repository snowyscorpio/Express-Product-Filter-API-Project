# Express Product Filter API Project

This repository contains a solution to an API exercise using Node.js and Express.

## Exercise: Create an API to Filter Products by Price

### Requirements:
1. Create a project folder named `Express_Task_8`.
2. Inside the folder:
   - Create a `data.js` file containing product data.
   - Create an `app.js` file to implement the server and API logic.
3. Implement the following API route:
   - `GET /products/:productPrice`: Returns all products with a price greater than the value specified in `:productPrice` as JSON.

### Project Structure:
```plaintext
Express_Task_8/
├── app.js
├── data.js
├── package.json
```
- **API logic**: Implemented in `app.js` to handle requests and responses.
- **Data storage**: Stored in `data.js`.

### Solution Overview:

1. **API Implementation**:
   - `GET /products/:productPrice`: Filters and returns all products from `data.js` where the `price` is greater than the value specified in `:productPrice`.

2. **Data Storage**:
   - Product data is stored in `data.js`

3. **HTML Interface**:
   - The root route (`/`) serves an HTML page that provides links to API routes and usage instructions.

### Example Routes:
- `/products/20`: Returns all products with a price greater than 20.

### How to Run:
1. Clone the repository.
2. Navigate to the project directory:
   ```bash
   cd Express_Task_8
   ```
3. Install Node.js if not already installed.
4. Start the server:
   ```bash
   npm start
   ```
5. Access the server at `http://localhost:3000`.

### Dependencies:
- **Express.js**: For routing and server creation.

### Notes:
- The server runs on port 3000 by default. You can change the port by setting the `PORT` environment variable.
- Ensure the `data.js` file is in the root directory for the app to function correctly.



Have a great day ♡

![CuteCat](https://github.com/user-attachments/assets/f703b009-6953-4755-a14f-8fdb80cf6169)

