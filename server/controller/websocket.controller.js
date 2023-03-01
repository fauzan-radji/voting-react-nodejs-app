import io from "../index.js";

export function homePage(req, res) {
  res.render("index");
}

export function webSocket(req, res) {
  const value = req.query.value;
  if (!value) {
    res
      .json({
        message: "value not exist",
      })
      .status(401);
  }
  io.emit("mod_api", value);
  res.json({
    message: "Data deliver",
  });
}
