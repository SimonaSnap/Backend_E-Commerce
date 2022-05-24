// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: "category_id",
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: "category_id",
  onDelete: "SET NULL"
});


// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, { through: ProductTag });

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, { through: ProductTag });

//lines 20 and 23 sets up the connection between tag and product through a junction table

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};


//this is where all connections are made. if this is altered in anyway, the schema needs to be resourced and the seeds relaunched.