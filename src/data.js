const globalData = {};
const commandDB = {
  "00_1C": {
    "name": "sys.loop?",
  },
  "00_21": {
    "name": "sys.playAnimation",
    "paramNames":["test"]
  },
  "01_A1": {
    "name": "char.gotoEntry",
  },
  "01_A6": {
    "name": "char.applyForce",
  },
  "03_30": {
    "name": "effect.spawnProjectile",
  }
};
const characters = ['Amaterasu', 'Arthur', 'CapAmerica', 'Chris', 'Chunli', 'cmn', 'CViper', 'Dante', 'DeadPool', 'Dormammu', 'DrDoom', 'DrStrange', 'Felicia', 'FeliciaC', 'FeliciaF', 'Frank', 'Galactus', 'GhostRider', 'Gouki', 'Haggar', 'HawkEye', 'Hiryu', 'Hulk', 'IronFist', 'IronMan', 'Jill', 'Kobun', 'Leilei', 'Linlin', 'Magneto', 'Mayoi', 'Modok', 'Morrigan', 'Naruhodo', 'Nemesis', 'Nova', 'Phoenix', 'RedArremer', 'RedArremerSh', 'RRaccoon', 'Ryu', 'Sentinel', 'SheHulk', 'Shuma', 'Spencer', 'SpiderMan', 'Storm', 'SuperSkrull', 'TaskMaster', 'Thor', 'Trish', 'Tron', 'Vergil', 'VJoe', 'Wesker', 'Wolverine', 'X23', 'Zero', 'Zombie'];
export {
  characters,
  globalData,
  commandDB
};
