


const mg = require('mongoose');

const URI='mongodb+srv://gofood:wd41698gmail.com@cluster0.dvyrlzh.mongodb.net/gofood?retryWrites=true&w=majority'
const mongo = async () => {
  try {
    await mg.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected');

    const database = mg.connection.db;
    const foodItemsCollection = database.collection('food_items');
    const foodCategoryCollection = database.collection('foodCategory');

    const foodItems = await foodItemsCollection.find({}).toArray();
    global.food_items = foodItems;

    const foodCategory = await foodCategoryCollection.find({}).toArray();
    global.foodCategory = foodCategory;


  } catch (err) {
    console.error('Error:', err);
  }
};

module.exports = mongo;
