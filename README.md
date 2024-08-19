# Menu Management System

Welcome to the Menu Management System repository! This application is built with Node.js and Express.js, providing a robust backend solution for managing menus, categories, and subcategories. It is ideal for use in restaurants, cafes, or other food service businesses that require dynamic menu management.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Questions](#questions)
- [Configuration](#configuration)
- [Contributing](#contributing)


## Features

- **Menu Management:** Create, update, search and delete menu items.
- **Category Management:** Organize items under categories and subcategories.
- **API Endpoints:** RESTful APIs for interacting with the system.
- **Modular Design:** Clean and maintainable codebase.
- **Persistent Storage:** Utilizes a reliable database for data management.

## Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Version Control:** Git
- **Deployment:** Vercel

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js** (v14.x or higher)
- **npm** (v6.x or higher)
- **MongoDB Shell or MongoDB Atlas** installed and running
- **Git** installed on your machine

## Installation

Follow these steps to set up the project locally:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/teja-86/Menu-Management.git
   cd Menu-Management
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Set up the environment variables:**
   ```bash
   PORT=5000
   MONGO_URI=your-mongodb-connection-string or localhost mongodb url
   
## Running the Application

1. **Start the development server:**
   ```bash
   npm start
2. **Access the application:**
   Open your browser and navigate to
   ```bash
   http://localhost:5000

## API Endpoints

Here are the primary API endpoints for interacting with the Menu Management System:

- **CREATE**
- **Category - POST** `/api/categories/create`: Post the Categories.
- **Sub Category - POST** `/api/categories/:categoryId/subcategories`: Post the Sub Categories.
- **Item - POST** `/api/subcategories/:subCategoryId/items`: Post the Items.
  
- **GET**
- **Category - GET** `/api/categories`: Get All Categories.
- **Sub Category - GET** `/api/categories/:categoryId/subcategories`: Get All Sub Categories.
- **Sub Category - GET** `/api/categories/:categoryId/subcategories/:idOrName`: Get All Sub Categories by name or id.
- **Item - GET** `/api/subcategories/:subCategoryId/items`: Get All Items.
- **Item - GET** `/api/subcategories/:subCategoryId/items/:idOrName`: Get All Items by name or id.

- **EDIT**
- **Category - PATCH** `/api/categories/:id`: Update the Categories.
- **Sub Category - PATCH** `/api/categories/:categoryId/subcategories/:id`: Update the Sub Categories.
- **Item - PATCH** `/api/subcategories/:subCategoryId/items/:id`: Update the Items.
  
- **SEARCH**
- **Item - GET** `/api/items/search?name=YourItemName`: Search a Item by name.
- **Item - GET** `/api/items/search?id=YourItemId`: Search a Item by id.

> **Note:** Update the above endpoint paths to match your implementation.

## Questions 

**1. Which database you have chosen and why?**

I chose MongoDB because of its flexibility in handling unstructured data, its scalability for large datasets, and its ease of integration with Node.js, which was used in this project. MongoDB's document-based model aligns well with the JSON structure commonly used in modern web applications.

**2. 3 things that you learned from this assignment?**

Effective use of ES modules in a Node.js backend project for clean and modular code organization.

Handling complex data relationships and queries in MongoDB, such as embedding and referencing data.

The importance of detailed documentation and code comments to ensure clarity and maintainability for future developers.

**3. What was the most difficult part of the assignment?**

The most difficult part of the assignment was efficiently structuring the database to handle relationships between categories, subcategories, and items. Ensuring that the schema was both flexible for future changes and optimized for performance required careful consideration of how to store and retrieve nested data efficiently. Balancing these requirements while maintaining a clean and understandable codebase was particularly difficult.


**4. What you would have done differently given more time?**

Given more time, I would have implemented more comprehensive error handling and input validation to enhance the robustness of the application. Additionally, I would have optimized the database schema design to further improve query performance and reduce redundancy.

## Configuration

You can customize the application's settings via the `.env` file:

- `PORT`: The port number on which the server will run.
- `MONGO_URI`: The database connection string or MongoDB localhost URL.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/YourFeature`.
3. Make your changes and commit them: `git commit -m 'Add Your Feature'`.
4. Push to the branch: `git push origin feature/YourFeature`.
5. Open a Pull Request.



