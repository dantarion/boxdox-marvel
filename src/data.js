const globalData = {};
const commandDB = {
  "00_07": {
    "name": "jmp",
  },
  "00_08": {
    "name": "jmpIf",
  },
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
  "01_3d": {
    "name": "AllowCancel?",
  },
  "03_30": {
    "name": "spawnProjectile",
  },

};
const characters = ['Amaterasu', 'Arthur', 'CapAmerica', 'Chris', 'Chunli', 'cmn', 'CViper', 'Dante', 'DeadPool', 'Dormammu', 'DrDoom', 'DrStrange', 'Felicia', 'FeliciaC', 'FeliciaF', 'Frank', 'Galactus', 'GhostRider', 'Gouki', 'Haggar', 'HawkEye', 'Hiryu', 'Hulk', 'IronFist', 'IronMan', 'Jill', 'Kobun', 'Leilei', 'Linlin', 'Magneto', 'Mayoi', 'Modok', 'Morrigan', 'Naruhodo', 'Nemesis', 'Nova', 'Phoenix', 'RedArremer', 'RedArremerSh', 'RRaccoon', 'Ryu', 'Sentinel', 'SheHulk', 'Shuma', 'Spencer', 'SpiderMan', 'Storm', 'SuperSkrull', 'TaskMaster', 'Thor', 'Trish', 'Tron', 'Vergil', 'VJoe', 'Wesker', 'Wolverine', 'X23', 'Zero', 'Zombie'];
const orderedCharacters = [
  "Jill","","","","","","","Shuma",
  "Nemesis","RedArremer","Hiryu","Naruhodo","Nova","GhostRider","HawkEye","DrStrange",
  "Chris","Arthur","Frank","Vergil","IronFist","RRaccoon","CapAmerica","Dormammu",
  "Wesker","Zero","Ryu","Dante","DeadPool","Wolverine","IronMan","DrDoom",
  "Morrigan","Tron","Chunli","Trish","X23","Storm","Thor","Modok",
  "Felicia","Spencer","Gouki","VJoe","SpiderMan","Sentinel","Hulk","SuperSkrull",
  "Leilei","Haggar","CViper","Amaterasu","Phoenix","Magneto","SheHulk","TaskMaster",
  "FeliciaC","FeliciaF","Galactus","Zombie","RedArremerSh","Kobun","Linlin","Mayoi"];
export {
  characters,
  orderedCharacters,
  globalData,
  commandDB
};
