# ALJANOUB Restaurant Menu Management System

A modern, responsive web application for managing and displaying a restaurant menu, built with Flask, Bootstrap, JavaScript, PHP, and MySQL.

---

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Screenshots](#screenshots)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## Overview

**ALJANOUB Restaurant Menu Management System** is a web app for restaurants to showcase their menu, share their story, and manage menu items through an admin dashboard. It is designed for both customers and restaurant staff, with a focus on Lebanese cuisine and community. The system supports both a Python Flask backend and a PHP backend with MySQL database integration for persistent menu management.

---

## Features

- **Home Page:** Welcome section and restaurant highlights.
- **Menu Page:** Dynamic, categorized menu with images, prices, and descriptions.
- **About Page:** Restaurant story, values, and team introduction.
- **Contact Page:** Contact information and reservation links.
- **Admin Dashboard:** Add, edit, and delete menu items (supports both localStorage and MySQL via PHP backend).
- **Persistent Storage:** Menu items can be stored in MySQL database using PHP backend scripts.
- **Responsive Design:** Mobile-friendly using Bootstrap.
- **Social Media Links:** Quick access to restaurant's social platforms.
- **Opening Hours:** Clearly displayed in the footer.

---

## Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/yourusername/aljanoub-restaurant-menu.git
   cd aljanoub-restaurant-menu
   ```

2. **(Optional) Create and activate a virtual environment for Flask:**
   ```sh
   python -m venv venv
   venv\Scripts\activate
   ```

3. **Install Flask dependencies:**
   ```sh
   pip install flask
   ```

4. **Set up PHP and MySQL:**
   - Install [XAMPP](https://www.apachefriends.org/) or any PHP/MySQL stack.
   - Place the PHP backend files in your web server's root directory (e.g., `htdocs`).
   - Import the provided SQL file into your MySQL database to create the required tables.
   - Update database credentials in the PHP scripts as needed.

5. **Run the Flask application:**
   ```sh
   python app.py
   ```

6. **Open your browser and visit:**
   ```
   http://127.0.0.1:5000/
   ```

---

## Usage

- **Customers:** Browse the menu, learn about the restaurant, and find contact info.
- **Admins:** Use the dashboard to add, edit, or remove menu items. Menu data can be managed via localStorage (for demo) or through the PHP/MySQL backend for persistent storage.

---

## Project Structure

```
Resturant menu/
│
├── app.py
├── requirements.txt
├── static/
│   ├── css/
│   ├── images/
│   └── js/
├── templates/
│   ├── pages/
│   └── partials/
├── php-backend/           # PHP scripts for backend API
│   ├── db.php
│   ├── get_menu.php
│   ├── add_menu_item.php
│   └── delete_menu_item.php
├── sql/
│   └── aljanoub_menu.sql  # SQL file for database schema
└── README.md
```

- **app.py**: Main Flask application.
- **php-backend/**: PHP scripts for backend API and database operations.
- **sql/**: SQL file for creating the MySQL database and tables.
- **static/**: CSS, JS, and image assets.
- **templates/**: HTML templates (with Jinja2).
- **pages/**: Main site pages (home, menu, about, contact).
- **partials/**: Navbar, footer, and reusable components.

---

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

---

## License

This project is licensed under the MIT License.

---

## Contact

- **Phone:** +961 70653458
- **Location:** 1701 Tebnine, Bintjbeil, Lebanon

---

_Enjoy authentic Lebanese cuisine with ALJANOUB!_
