const db = require("./index");

const createWineWorkshop = (selection) => {
  const {
    idworkshop1,
    idwine1,
    idworkshop2,
    idwine2,
    idworkshop3,
    idwine3,
    idworkshop4,
    idwine4,
    idworkshop5,
    idwine5,
  } = selection;
  const SQL =
    "INSERT INTO wine_workshop (id_workshop, id_wine) VALUES ((SELECT id FROM workshop WHERE id = ?),(SELECT id FROM wine WHERE id = ?)), ((SELECT id FROM workshop WHERE id = ?),(SELECT id FROM wine WHERE id = ?)), ((SELECT id FROM workshop WHERE id = ?),(SELECT id FROM wine WHERE id = ?)), ((SELECT id FROM workshop WHERE id = ?),(SELECT id FROM wine WHERE id = ?)), ((SELECT id FROM workshop WHERE id = ?),(SELECT id FROM wine WHERE id = ?));";
  return db.query(SQL, [
    idworkshop1,
    idwine1,
    idworkshop2,
    idwine2,
    idworkshop3,
    idwine3,
    idworkshop4,
    idwine4,
    idworkshop5,
    idwine5,
  ]);
};

const selection = () => {
  return db.query(
    `SELECT * FROM wine as w INNER JOIN wine_workshop AS ww ON w.id = ww.id_wine INNER JOIN workshop AS ws ON ww.id_workshop = ws.id WHERE ws.active = 1;`
  );
};

const resume = (id) => {
  return db.query(
    `SELECT wine.wineName, wine.wineDescription, tasting.score, wine.id FROM wine INNER JOIN tasting ON wine.id = tasting.id_wine INNER JOIN user ON user.id = tasting.id_user WHERE user.id = ?;`,
    [id]
  );
};

module.exports = {
  createWineWorkshop,
  selection,
  resume,
};
