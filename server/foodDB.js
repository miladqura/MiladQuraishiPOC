// In-memory mock database for food items.
// This class stores five food items and their prices.

class FoodDB {
    constructor() {
        this.foods = [
            { id: 1, name: "Pizza", price: 15.99 },
            { id: 2, name: "Burger", price: 10.99 },
            { id: 3, name: "Pasta", price: 13.99 },
            { id: 4, name: "Chicken Wrap", price: 9.99 },
            { id: 5, name: "Fries", price: 5.99 }
        ];
    }

    // Returns all food items stored in the database.
    getAll() {
        return this.foods;
    }
}

// Creates and exports one shared instance of FoodDB.
module.exports = new FoodDB();