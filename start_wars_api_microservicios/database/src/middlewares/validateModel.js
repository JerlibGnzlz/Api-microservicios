module.exports = (req, res, next) => {
  const { model } = req.params;
  if (["Character", "Films", "Planet"].includes(model)) {
    return next();
  } else {
    throw Error("modelo invalido");
  }
};