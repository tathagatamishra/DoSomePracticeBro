const homeController = require("../controller/home.controller");

const router = require("express").Router();

router.post("/create-task", homeController.createTask);

router.get("/get-all", homeController.getTask);

router.put("/update/:id", homeController.updateTask);

router.delete("/delete/:id", homeController.deleteTask);


module.exports = router;
