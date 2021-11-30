const path = require("path");

// Use the existing order data
const orders = require(path.resolve("src/data/orders-data"));

// Use this function to assigh ID's when necessary
const nextId = require("../utils/nextId");

//validates whether order request body has certain properties
function orderHasProperties(req, res, next) {
  const { data } = req.body;
  const requiredFields = ["deliverTo", "mobileNumber", "dishes"];
  for (const field of requiredFields) {
    if (!data[field]) {
      next({
        status: 400,
        message: `Order must include a ${field}`,
      });
    }
  }
  next();
}

//validates whether dishes in order are valid and in the correct format
function dishesAreValid(req, res, next) {
  const { data } = req.body;
  if (data.dishes.length === 0 || !Array.isArray(data.dishes)) {
    return next({
      status: 400,
      message: "Order must include at least one dish",
    });
  }
  const orderDishes = data.dishes;
  for (const index in orderDishes) {
    if (
      !orderDishes[index].quantity ||
      orderDishes[index].quantity === 0 ||
      !Number.isInteger(orderDishes[index].quantity)
    ) {
      return next({
        status: 400,
        message: `Dish ${index} must have a quantity that is an integer greater than 0`,
      });
    }
  }
  next();
}
//validates whether the order exists already
function orderExists(req, res, next) {
  const { orderId } = req.params;
  const foundOrder = orders.find((order) => order.id === orderId);
  if (foundOrder) {
    res.locals.foundOrder = foundOrder;
    next();
  } else {
    next({
      status: 404,
      message: `Order not found: ${orderId}`,
    });
  }
}

//validates if the order is in a state that can be updated
function validateUpdate(req, res, next) {
  const { orderId } = req.params;
  const { data: { id, status, dishes: [] } = {} } = req.body;
  if (id && id !== orderId) {
    next({
      status: 400,
      message: `Order id does not match route id. Order: ${id}, Route: ${orderId}`,
    });
  }
  if (!status || status === "" || status === "invalid") {
    next({
      status: 400,
      message:
        "Order must have a status of pending, preparing, out-for-delivery, delivered",
    });
  }
  if (status === "delivered") {
    next({
      status: 400,
      message: "A delivered order cannot be changed",
    });
  }
  next();
}

//creates a new order
function create(req, res, next) {
  const {
    data: {
      deliverTo,
      mobileNumber,
      dishes: [{ id, name, description, image_url, price, quantity }],
    },
  } = req.body;
  const newOrder = {
    id: nextId(),
    deliverTo,
    mobileNumber,
    status: "pending",
    dishes: [{ id, name, description, image_url, price, quantity }],
  };
  orders.push(newOrder);
  res.status(201).json({ data: newOrder });
}

//finds and returns an existing order
function read(req, res, next) {
  const { orderId } = req.params;
  const foundOrder = orders.find((order) => order.id === orderId);
  if (foundOrder) {
    res.json({ data: foundOrder });
  } else {
    return next({
      status: 404,
      message: `${orderId} does not exist.`,
    });
  }
}

//updates an existing order
function update(req, res, next) {
  const foundOrder = res.locals.foundOrder;
  const { data } = req.body;
  foundOrder.deliverTo = data.deliverTo;
  foundOrder.mobileNumber = data.mobileNumber;
  foundOrder.status = data.status;
  foundOrder.dishes = data.dishes;
  res.json({ data: foundOrder });
}

//returns a list of all existing orders
function list(req, res, next) {
  res.json({ data: orders });
}

//validates whether an order can be deleted
function destroyValidator(req, res, next) {
  const foundOrder = res.locals.foundOrder;
  if (foundOrder.status !== "pending") {
    next({
      status: 400,
      message: "An order cannot be deleted unless it is pending",
    });
  }
  next();
}

//deletes an order upon completion of the validation check
function destroy(req, res, next) {
  const { orderId } = req.params;
  const index = orders.findIndex((order) => order.id === orderId);
  if (index > -1) {
    orders.splice(index, 1);
  }
  res.sendStatus(204);
}

module.exports = {
  list,
  create: [orderHasProperties, dishesAreValid, create],
  read,
  update: [
    orderExists,
    orderHasProperties,
    dishesAreValid,
    validateUpdate,
    update,
  ],
  destroy: [orderExists, destroyValidator, destroy],
};
