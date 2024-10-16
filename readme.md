# E-Commerce Cart

## Project Overview
This is a simple e-commerce shopping cart web application that allows users to:

- Browse and add products to their shopping cart from the home page.
- View, increment, decrement, or remove products in their cart.
- The total price of items in the cart is dynamically updated as products are added, removed, or their quantities are changed.
- User authentication functionality with login and logout.
- All cart and user data is stored in the browser's localStorage.

## Features
- Product Display: A list of products with images, prices, and an "Add to Cart" button.
- Cart Management: Users can increase, decrease, or remove items in the cart, and the total price is updated in real-time.
- User Authentication: Users can log in and out, and their cart is cleared when logging out.
- Data Persistence: Cart data and user login status are saved in localStorage, so the cart is preserved even after the user refreshes or closes the page.

## Technologies Used
- HTML5: For creating the structure of the pages.
- CSS3 (Tailwind CSS): For styling the components.
- JavaScript (ES6): For handling logic such as adding items to the cart, updating totals, and managing user sessions.
- LocalStorage: For saving user and cart data across sessions