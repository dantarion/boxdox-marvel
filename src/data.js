const globalData = {}
const commandDB = {
  '00_07': {
    'name': 'jmp'
  },
  '00_08': {
    'name': 'jmpIf'
  },
  '00_1C': {
    'name': 'loop?'
  },
  '00_21': {
    'name': 'playAnimation',
    'paramNames': ['test']
  },
  '00_3f': {
    'name': 'playSound?'
  },
  '01_99': {
    'name': 'atkinfoRef'
  },
  '01_A1': {
    'name': 'gotoEntry'
  },
  '01_A6': {
    'name': 'applyForce'
  },
  '01_AA': {
    'name': 'applyYVelocityAccelerationAir?'
  },
  '01_AF': {
    'name': 'applyXVelocityAccelerationAir?'
  },
  '01_B1': {
    'name': 'applyXVelocityAcceleration'
  },
  '01_3d': {
    'name': 'AllowCancel?'
  },
  '03_30': {
    'name': 'spawnProjectile'
  }

}
const characters = ['Amaterasu', 'Arthur', 'CapAmerica', 'Chris', 'Chunli', 'cmn', 'CViper', 'Dante', 'DeadPool', 'Dormammu', 'DrDoom', 'DrStrange', 'Felicia', 'FeliciaC', 'FeliciaF', 'Frank', 'Galactus', 'GhostRider', 'Gouki', 'Haggar', 'HawkEye', 'Hiryu', 'Hulk', 'IronFist', 'IronMan', 'Jill', 'Kobun', 'Leilei', 'Linlin', 'Magneto', 'Mayoi', 'Modok', 'Morrigan', 'Naruhodo', 'Nemesis', 'Nova', 'Phoenix', 'RedArremer', 'RedArremerSh', 'RRaccoon', 'Ryu', 'Sentinel', 'SheHulk', 'Shuma', 'Spencer', 'SpiderMan', 'Storm', 'SuperSkrull', 'TaskMaster', 'Thor', 'Trish', 'Tron', 'Vergil', 'VJoe', 'Wesker', 'Wolverine', 'X23', 'Zero', 'Zombie']
const orderedCharacters = [
  'Jill', '', '', '', '', '', '', 'Shuma',
  'Nemesis', 'RedArremer', 'Hiryu', 'Naruhodo', 'Nova', 'GhostRider', 'HawkEye', 'DrStrange',
  'Chris', 'Arthur', 'Frank', 'Vergil', 'IronFist', 'RRaccoon', 'CapAmerica', 'Dormammu',
  'Wesker', 'Zero', 'Ryu', 'Dante', 'DeadPool', 'Wolverine', 'IronMan', 'DrDoom',
  'Morrigan', 'Tron', 'Chunli', 'Trish', 'X23', 'Storm', 'Thor', 'Modok',
  'Felicia', 'Spencer', 'Gouki', 'VJoe', 'SpiderMan', 'Sentinel', 'Hulk', 'SuperSkrull',
  'Leilei', 'Haggar', 'CViper', 'Amaterasu', 'Phoenix', 'Magneto', 'SheHulk', 'TaskMaster',
  'FeliciaC', 'FeliciaF', 'Galactus', 'Zombie', 'RedArremerSh', 'Kobun', 'Linlin', 'Mayoi']
var amnNames = []

amnNames[0x00] = 'Idle Standing'
amnNames[0x01] = 'Walking Forward'
amnNames[0x02] = 'Walking Backward'
amnNames[0x03] = 'Forward Dash'
amnNames[0x04] = 'Back Dash'
amnNames[0x05] = 'Air Dash Forward'
amnNames[0x06] = 'Air Dash Backward'
amnNames[0x09] = 'Fall'
amnNames[0x0A] = 'Crouch'
amnNames[0x0C] = 'Jump'
amnNames[0x0D] = 'Jump Forward'
amnNames[0x0E] = 'Jump Backward'
amnNames[0x0F] = 'Midair Jump'
amnNames[0x10] = 'Midair Jump Forward'
amnNames[0x11] = 'Midair Jump Backward'
amnNames[0x13] = 'Super Jump'
amnNames[0x14] = 'Super Jump Forward'
amnNames[0x15] = 'Super Jump Backward'
amnNames[0x16] = 'Fall(Possibly a Special Fall?)'
amnNames[0x17] = 'Light Landing'
amnNames[0x18] = 'Turn'
amnNames[0x19] = 'Crouch Exit'
amnNames[0x1A] = 'Crouch Turn'
amnNames[0x24] = 'Grab Teched(User\'s Grab Broken)'
amnNames[0x25] = 'Grab Tech'
amnNames[0x26] = 'Air Grab Teched(User\'s Grab Broken)'
amnNames[0x27] = 'Air Grab Tech'
amnNames[0x87] = 'Taunt'
amnNames[0x96] = 'Standing L*'
amnNames[0x97] = 'Standing M*'
amnNames[0x98] = 'Standing H*'
amnNames[0x99] = 'Crouching L*'
amnNames[0x9A] = 'Crouching M*'
amnNames[0x9B] = 'Crouching H*'
amnNames[0x9C] = 'Jumping L*'
amnNames[0x9D] = 'Jumping M*'
amnNames[0x9E] = 'Jumping H*'
amnNames[0x9F] = 'Jumping S*'
amnNames[0xA9] = 'X-Factor(Air)'
amnNames[0xAA] = 'X-Factor'
amnNames[0xAB] = 'Snap Back'
amnNames[0xAC] = 'Assist Alpha'
amnNames[0xAD] = 'Assist Beta'
amnNames[0xAE] = 'Assist Gamma'
amnNames[0x104] = 'Forward Throw'
amnNames[0x105] = 'Back Throw'
amnNames[0x106] = 'Air Forward Throw'
amnNames[0x107] = 'Air Backward Throw'
amnNames[0x154] = 'Tag In'
amnNames[0x155] = 'Tag Out'
amnNames[0x157] = 'AFK(Assist Leaving, also the ID for characters not in play, but alive)'
amnNames[0x159] = 'Crossover Combination'
amnNames[0x16A] = 'TAC Up'
amnNames[0x16B] = 'TAC Side'
amnNames[0x16C] = 'TAC Down'
amnNames[0x168] = 'Standing S*'
amnNames[0x170] = 'TAC tag-in 1'
amnNames[0x171] = 'TAC tag-in 2'
amnNames[0x172] = 'TAC tag-in 3'
amnNames[0x174] = 'TAC Startup(That Glow)'
amnNames[0x17C] = 'Flight Entry'
amnNames[0x17E] = 'Flight Exit'
amnNames[0x17F] = 'Flight(Still)'
amnNames[0x180] = 'Flight(Forward)'
amnNames[0x181] = 'Flight(Up&Forward)'
amnNames[0x182] = 'Flight(Down&Forward)'
amnNames[0x183] = 'Flight(Backard)'
amnNames[0x184] = 'Flight(Up&Backard)'
amnNames[0x185] = 'Flight(Down&Backard)'
amnNames[0x186] = 'Flight(Upward)'
amnNames[0x187] = 'Flight(Downard)'
export {
  characters,
  orderedCharacters,
  globalData,
  commandDB,
  amnNames
}
