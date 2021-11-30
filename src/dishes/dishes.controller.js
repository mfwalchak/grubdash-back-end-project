const path = require("path");

// Use the existing dishes data
const dishes = require(path.resolve("src/data/dishes-data"));

// Use this function to assign ID's when necessary
const nextId = require("../utils/nextId");

//validate if an existing dish matches the requested id
function dishIdExists(req, res, next) {
  const { dishId } = req.params;
  const foundDish = dishes.find((dish) => dish.id === dishId);
  if (foundDish) {
    res.locals.foundDish = foundDish;
    next();
  }
  next({
    status: 404,
    message: `Dish does not exist: ${dishId}.`,
  });
}

//validates if the existing id matches the id in the request data body
function dishIdInBodyMatches(req, res, next) {
  const { dishId } = req.params;
  const { data: { id, name, description, price, image_url } = {} } = req.body;
  if (id && id !== dishId) {
    next({
      status: 400,
      message: `Dish id does not match route id. Dish: ${id}, Route: ${dishId}`,
    });
  }
  next();
}

//validates if a dish request body has certain properties
function dishHasProperties(req, res, next) {
  const { data } = req.body;
  const requiredFields = ["name", "description", "image_url", "price"];
  for (const field of requiredFields) {
    if (!data[field]) {
      next({
        status: 400,
        message: `Dish must include a ${field}`,
      });
    }
  }
  next();
}

//validates if a dish has a price that is both an integer and greater than 0
function dishPriceIsRight(req, res, next) {
  const {
    data: { price },
  } = req.body;
  if (price < 1 || !Number.isInteger(price)) {
    next({
      status: 400,
      message: "Dish must have a price that is an integer greater than 0",
    });
  }
  next();
}
//handler accepts a new dish data body and adds to dishes-data
function create(req, res, next) {
  const {
    data: { name, description, price, image_url },
  } = req.body;
  const newDish = {
    id: nextId(),
    name,
    description,
    price: Number(),
    image_url,
  };
  dishes.push(newDish);
  res.status(201).json({ data: newDish });
}

//accepts a dish data body, matches it to an existing dish and updates the result
function update(req, res) {
  const foundDish = res.locals.foundDish;
  const { data: { name, description, price, image_url } = {} } = req.body;

  foundDish.name = name;
  foundDish.description = description;
  foundDish.price = price;
  foundDish.image_url = image_url;

  res.json({ data: foundDish });
}

//returns a list of all dishes
function list(req, res, next) {
  res.json({ data: dishes });
}

//returns a specific dish based on id
function read(req, res, next) {
  const { dishId } = req.params;
  const foundDish = dishes.find((dish) => dish.id === dishId);
  if (foundDish) {
    res.json({ data: foundDish });
  } else {
    return next({
      status: 404,
      message: `${dishId} does not exist.`,
    });
  }
}

module.exports = {
  list,
  read,
  create: [dishHasProperties, dishPriceIsRight, create],
  update: [
    dishIdExists,
    dishIdInBodyMatches,
    dishHasProperties,
    dishPriceIsRight,
    update,
  ],
};
