const express = require("express");

const router = express.Router();

const userControllers = require("./controllers/userControllers");
const { newUser, recognizeUser } = require("./middlewares/userMiddlewares");
const {
  hashPassword,
  verifyPassword,
} = require("./controllers/authControllers");
const workshopControllers = require("./controllers/workshopControllers");
const recipeControllers = require("./controllers/recipeControllers");
const userWorkshopControllers = require("./controllers/userWorkshopControllers");
const wineControllers = require("./controllers/wineControllers");
const glossaryControllers = require("./controllers/glossaryControllers");
const tastingControllers = require("./controllers/tastingControllers");
const wineWorkshopControllers = require("./controllers/wineWorkshopControllers");

router.post("/login", recognizeUser, verifyPassword);
router.get("/logout", userControllers.logout);

router.post("/inscription", newUser, hashPassword, userControllers.postUser);
router.get("/users", userControllers.getAllUser);
router.get("/users/:id", userControllers.getOneUser);
router.put("/users/:id", userControllers.putOneUser);
router.delete("/users/:id", userControllers.deleteOneUser);

router.post("/workshops/creation", workshopControllers.postWorkshop);
router.get("/workshops", workshopControllers.getAllWorkshop);
router.get("/workshops/:id", workshopControllers.getOneWorkshop);
router.put("/workshops/:id", workshopControllers.putOneWorkshop);
router.delete("/workshops/:id", workshopControllers.deleteOneWorkshop);

router.post("/recipes/creation", recipeControllers.postRecipe);
router.get("/recipes", recipeControllers.getAllRecipe);
router.get("/recipes/:id", recipeControllers.getOneRecipe);
router.put("/recipes/:id", recipeControllers.putOneRecipe);
router.delete("/recipes/:id", recipeControllers.deleteOneRecipe);

router.post("/avis/creation", userWorkshopControllers.postUserWorkshop);
router.get("/avis", userWorkshopControllers.getAllUserWorkshop);
router.get(
  "/avis/:iduser/:idworkshop",
  userWorkshopControllers.getOneUserWorkshop
);
router.put(
  "/avis/:iduser/:idworkshop",
  userWorkshopControllers.putOneUserWorkshop
);
router.delete(
  "/avis/:iduser/:idworkshop",
  userWorkshopControllers.deleteOneUserWorkshop
);

router.get("/wines", wineControllers.getWine);
router.get("/wines/:id", wineControllers.getOneWine);
router.post("/wines", wineControllers.postWine);
router.delete("/wines/:id", wineControllers.deleteWine);
router.put("/wines/:id", wineControllers.putWine);

router.get("/glossary", glossaryControllers.getGlossary);
router.get("/glossary/:id", glossaryControllers.getOneGlossary);
router.post("/glossary", glossaryControllers.postGlossary);
router.put("/glossary/:id", glossaryControllers.putGlossary);
router.delete("/glossary/:id", glossaryControllers.deleteGlossary);

router.get("/tasting", tastingControllers.getTasting);
router.get("/tasting/:id", tastingControllers.getOneTasting);
router.post("/tasting", tastingControllers.postTasting);
router.put("/tasting/:id", tastingControllers.putTasting);
router.delete("/tasting/:id", tastingControllers.deleteTasting);

router.post("/wineWorkshop", wineWorkshopControllers.postWineWorkshop);

module.exports = router;
