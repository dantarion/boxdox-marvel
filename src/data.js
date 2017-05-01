const globalData = {};
const commandDB = {
  "00_1C": {
    "name": "loop?",
  },
  "00_21": {
    "name": "playAnimation",
    "paramNames":["test"]
  },
  "00_3f": {
    "name": "playSound?",
  },
  "01_99": {
    "name": "atkinfoRef",
  },
  "01_A1": {
    "name": "gotoEntry",
  },
  "01_A6": {
    "name": "applyForce",
  },
  "01_AA": {
    "name": "applyYVelocityAccelerationAir?",
  },
  "01_AF": {
    "name": "applyXVelocityAccelerationAir?",
  },
  "01_B1": {
    "name": "applyXVelocityAcceleration",
  },
  "03_30": {
    "name": "spawnProjectile",
  }
};
const characters = ['Amaterasu', 'Arthur', 'CapAmerica', 'Chris', 'Chunli', 'cmn', 'CViper', 'Dante', 'DeadPool', 'Dormammu', 'DrDoom', 'DrStrange', 'Felicia', 'FeliciaC', 'FeliciaF', 'Frank', 'Galactus', 'GhostRider', 'Gouki', 'Haggar', 'HawkEye', 'Hiryu', 'Hulk', 'IronFist', 'IronMan', 'Jill', 'Kobun', 'Leilei', 'Linlin', 'Magneto', 'Mayoi', 'Modok', 'Morrigan', 'Naruhodo', 'Nemesis', 'Nova', 'Phoenix', 'RedArremer', 'RedArremerSh', 'RRaccoon', 'Ryu', 'Sentinel', 'SheHulk', 'Shuma', 'Spencer', 'SpiderMan', 'Storm', 'SuperSkrull', 'TaskMaster', 'Thor', 'Trish', 'Tron', 'Vergil', 'VJoe', 'Wesker', 'Wolverine', 'X23', 'Zero', 'Zombie'];
export {
  characters,
  globalData,
  commandDB
};
