# ALJANOUB Restaurant Menu Management System

A modern, responsive web application for managing and displaying a restaurant menu, built with Flask, Bootstrap, and JavaScript.

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

**ALJANOUB Restaurant Menu Management System** is a web app for restaurants to showcase their menu, share their story, and manage menu items through an admin dashboard. It is designed for both customers and restaurant staff, with a focus on Lebanese cuisine and community.

---

## Features

- **Home Page:** Welcome section and restaurant highlights.
- **Menu Page:** Dynamic, categorized menu with images, prices, and descriptions.
- **About Page:** Restaurant story, values, and team introduction.
- **Contact Page:** Contact information and reservation links.
- **Admin Dashboard:** Add, edit, and delete menu items (localStorage-based).
- **Responsive Design:** Mobile-friendly using Bootstrap.
- **Social Media Links:** Quick access to restaurant's social platforms.
- **Opening Hours:** Clearly displayed in the footer.


## Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/yourusername/aljanoub-restaurant-menu.git
   cd aljanoub-restaurant-menu
   ```

2. **(Optional) Create and activate a virtual environment:**
   ```sh
   python -m venv venv
   venv\Scripts\activate
   ```

3. **Install dependencies:**
   ```sh
   pip install flask
   ```

4. **Run the application:**
   ```sh
   python app.py
   ```

5. **Open your browser and visit:**
   ```
   http://127.0.0.1:5000/
   ```

---

## Usage

- **Customers:** Browse the menu, learn about the restaurant, and find contact info.
- **Admins:** Use the dashboard to add, edit, or remove menu items. Changes are saved in the browser's localStorage (for demo purposes).

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
└── README.md
```

- **app.py**: Main Flask application.
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
