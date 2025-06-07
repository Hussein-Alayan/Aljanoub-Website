// Menu data management
class MenuManager {
    constructor() {
        this.STORAGE_KEY = 'menuItems';
        this.initializeMenu();
    }

    // Initial menu items
    get defaultItems() {
        return [
            // Appetizers
            {
                id: 1,
                name: "French Fries",
                category: "appetizers",
                price: 5.99,
                description: "Crispy golden fries served with ketchup and garlic sauce",
                image: "assets/images/menu/french-fries.jpg"
            },
            {
                id: 2,
                name: "Batata Harra",
                category: "appetizers",
                price: 7.99,
                description: "Spiced potato cubes with garlic, cilantro, and red pepper",
                image: "assets/images/menu/batata-harra.jpg"
            },
            {
                id: 3,
                name: "Hummus",
                category: "appetizers",
                price: 8.99,
                description: "Creamy chickpea dip with tahini, lemon, and olive oil",
                image: "assets/images/menu/hummus.jpg"
            },
            {
                id: 4,
                name: "Makanek",
                category: "appetizers",
                price: 12.99,
                description: "Lebanese spiced sausages sautéed with lemon and pine nuts",
                image: "assets/images/menu/makanek.jpg"
            },
            {
                id: 5,
                name: "Warak Enab",
                category: "appetizers",
                price: 9.99,
                description: "Stuffed grape leaves with rice, herbs, and Mediterranean spices",
                image: "assets/images/menu/vine-leaves.jpg"
            },
            {
                id: 6,
                name: "Cheese Rkakat",
                category: "appetizers",
                price: 8.99,
                description: "Crispy phyllo rolls filled with cheese and herbs",
                image: "assets/images/menu/rkakat.jpg"
            },

            // Main Courses
            {
                id: 7,
                name: "Mixed Grill",
                category: "main-courses",
                price: 29.99,
                description: "Assortment of grilled meats including shish tawook, kafta, and lamb chops",
                image: "assets/images/menu/mixed-grilled.jpg"
            },
            {
                id: 8,
                name: "Grilled Kafta",
                category: "main-courses",
                price: 19.99,
                description: "Seasoned ground beef skewers with parsley and onions",
                image: "assets/images/menu/grilled-kafta.jpg"
            },
            {
                id: 9,
                name: "Frakeh ",
                category: "main-courses",
                price: 24.99,
                description: "Smoked green wheat cooked with tender lamb chunks and nuts",
                image: "assets/images/menu/frakeh.jpg"
            },

            // Beverages
            {
                id: 10,
                name: "Pepsi",
                category: "beverages",
                price: 2.99,
                description: "Chilled Pepsi served with ice",
                image: "assets/images/menu/pepsi.jpg"
            },
            {
                id: 11,
                name: "Water",
                category: "beverages",
                price: 1.99,
                description: "Natural mineral water",
                image: "assets/images/menu/water.jpg"
            },

            // Desserts
            {
                id: 12,
                name: "Cheesecake",
                category: "desserts",
                price: 7.99,
                description: "Creamy New York style cheesecake",
                image: "assets/images/menu/cheesecake.jpg"
            },
            {
                id: 13,
                name: "Cassata",
                category: "desserts",
                price: 8.99,
                description: "Italian ice cream dessert with mixed nuts and fruits",
                image: "assets/images/menu/casatta.jpg"
            },
            {
                id: 14,
                name: "Em Ali",
                category: "desserts",
                price: 7.99,
                description: "Lebanese bread pudding with nuts and raisins",
                image: "assets/images/menu/em-ali.jpg"
            }
        ];
    }

    // Initialize menu
    initializeMenu() {
        if (!localStorage.getItem(this.STORAGE_KEY)) {
            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.defaultItems));
        }
    }

    // Get all menu items
    getMenuItems() {
        return JSON.parse(localStorage.getItem(this.STORAGE_KEY)) || [];
    }

    // Add new item
    addItem(item) {
        const items = this.getMenuItems();
        items.push({ ...item, id: Date.now() });
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(items));
    }

    // Delete item
    deleteItem(id) {
        const items = this.getMenuItems().filter(item => item.id !== id);
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(items));
    }

    // Get items by category
    getItemsByCategory(category) {
        return this.getMenuItems().filter(item => item.category === category);
    }
} 