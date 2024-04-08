let Router = (app) => {
  app.use("/", require("./index"));
  app.use("/", require("./account"));
  app.use("/", require("./user"));
  app.use("/", require("./chat"));
  app.use("/", require("./statusChat"));
  app.use("/", require("./makeFriends"));
};

module.exports = {
  Router,
};
