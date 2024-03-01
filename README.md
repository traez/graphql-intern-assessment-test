# Techamaka's React Native Intern Assessment Test

This is my submission to the programming take home test (aka project, challenge or assignment). 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
  - [Author](#author)
  - [Acknowledgments](#acknowledgments)
  - [API Endpoints](#api-endpoints)
  - [API documentation](#api-documentation)

## Overview

### The Challenge/User Stories

This is confidential and included in Instructional email. 
I was given a concession though to do that assignment in NextJs and GraphQL and mock the mobile functionality (screens).

### Screenshot

![](/public/images/screenshot-desktop.png)

### Links

- Solution URL: [https://github.com/traez/graphql-intern-assessment-test](https://github.com/traez/graphql-intern-assessment-test)
- Live Site URL: [https://graphql-intern-assessment-test-traez.vercel.app](https://graphql-intern-assessment-test-traez.vercel.app)

## My process

### Built with

- Semantic HTML5 markup 
- CSS custom properties 
- Flexbox 
- CSS Grid 
- Mobile-first workflow 
- [React](https://reactjs.org/) - JS library 
- [Next.js](https://nextjs.org/) - React framework  
- Tailwind CSS  
- Typescript 
- Nodejs
- Expressjs
- MongoDB
- GraphQL

### What I learned

- Introduction to practical GraphQL. 

### Continued development

- Keep coding everyday and increasing competency!

### Useful resources

Stackoverflow  
YouTube  
Google  
ChatGPT

## Author

- Website - [Trae Zeeofor](https://github.com/traez)
- Twitter - [@trae_z](https://twitter.com/trae_z)

## Acknowledgments
 
-Jehovah that keeps breath in my lungs 

## API Endpoints
Products Endpoints  

1. Get All Products  
Endpoint: /api/products/  
Method: GET  
Purpose: Retrieves a list of all products.  
Expected Output: An array of product objects.  

2. Get a Specific Product  
Endpoint: /api/products/:id  
Method: GET  
Purpose: Retrieves information about a specific product by its SKU ID.  
Required Input Parameters:  
id (String, the SKU ID of the product)  
Expected Output: The product object or an error message if the product is not found.  

3. Create a New Product  
Endpoint: /api/products/  
Method: POST  
Purpose: Creates a new product.  
Required Input Parameters:  
merchant (Object with id and name properties)  
productname (String, required)  
productdescription (String)  
productprice (Number, required)  
Expected Output: The newly created product object.  

4. Update a Product  
Endpoint: /api/products/:id  
Method: PUT  
Purpose: Updates information about a specific product by its SKU ID.  
Required Input Parameters:  
id (String, the SKU ID of the product)  
productname (String)  
productdescription (String)  
productprice (Number)  
Expected Output: The updated product object or an error message if the product is not found.  

5. Delete a Product  
Endpoint: /api/products/:id  
Method: DELETE  
Purpose: Deletes a specific product by its SKU ID.  
Required Input Parameters:  
id (String, the SKU ID of the product)  
Expected Output: A message indicating successful deletion or an error message if the product is not found.  

## API documentation
- App purpose is confidential as stated in Instructional email. Project is created with the MERN stack, plus in-memory data structure consisting of an array of objects.   
- To set up and run the project locally: Clone the Repository, Install Dependencies, Configure Environment Variables, then Run the Express.js Servers. Access the Application on http://localhost:1117