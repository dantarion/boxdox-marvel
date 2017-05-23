defineState((0x000), 80, function () {
  init: {
    _01_A2();
    _01_B9(0.000000);
  }
  frame_0: {
    _01_2D(0x10);
    _00_01(0x0, 0x3, 0x50);
    _01_33(0x2);
    _00_01(0x0, 0x3, 0x19);
    _01_2F(0x1);
    _00_21(0x0, 0x0, 10.000000, 0x3);
    _01_81(0x3, 0.800000, 0x1E, 0x1E, 0x0, 0xFFFFFFFF, 1.000000, 0x0, 0x0);
    _00_24(0x3, 0x0, 0xEF, 1.000000, 10.000000, 0x3);
  }
  frame_80: {
    _00_1C(0x0);
  }
});
defineState((0x018), 5, function () {
  init: {
    _01_2F(0x420);
    _01_3C(0x1000000);
    _01_A2();
  }
  frame_0: {
    _00_21(0x1, 0xAE, 10.000000, 0x3);
  }
  frame_1: {
    _01_39(0x400000);
    _00_08(0x0, 0x3, 0x2);
    _01_B8(45.000000);
    _00_07(0x1);
    _01_B8(-45.000000);
  }
  frame_2: {
    _01_39(0x400000);
    _00_08(0x0, 0x3, 0x2);
    _01_B8(45.000000);
    _00_07(0x1);
    _01_B8(-45.000000);
  }
  frame_3: {
    _01_39(0x400000);
    _00_08(0x0, 0x3, 0x2);
    _01_B8(45.000000);
    _00_07(0x1);
    _01_B8(-45.000000);
  }
  frame_4: {
    _01_39(0x400000);
    _00_08(0x0, 0x3, 0x2);
    _01_B8(45.000000);
    _00_07(0x1);
    _01_B8(-45.000000);
  }
  frame_5: {
    _01_82();
    _01_00(0xF, 0x4);
  }
});
defineState((0x0BE), 45, function () {
  init: {
    _01_2F(0x4001820);
    _01_A3();
    _01_B9(0.000000);
  }
  frame_0: {
    _00_21(0x1, 0x51, 0.000000, 0x3);
    _00_24(0x2, 0x1, 0xEA, 1.000000, 0.000000, 0x3);
  }
  frame_13: {
    _00_3F(0x4, 0x0, 0x6, 0x0, 0x7, [
      0.000000,
      0.000000,
      0.000000
    ], 0x0, 0x0);
    _00_3F(0x5, 0x0, 0x46, 0x0, 0x7, [
      0.000000,
      0.000000,
      0.000000
    ], 0x0, 0x0);
  }
  frame_15: {
    _03_30('JumpFireM', 0x5, 0x1, 0x0, 0x1, -0x1, 0xA);
    _00_40(0x4, 0x0, 0x6, -0x1);
    _00_2B(0x1);
    _01_39(0x400000);
    _00_08(0x0, 0x3, 0x2);
    _03_03('uGameEffect', 0x64, 0xD, 0x5, 0x1, 0x1, -0x1, [
      -15.000000,
      100.000000,
      35.000000
    ], [
      45.000000,
      0.000000,
      0.000000
    ], [
      1.000000,
      1.000000,
      1.000000
    ], 0x20D0, 0x0, 0xFFFFFFFF, 0xFFFFFFFF, 0xD, 2.000000, 0x0, 0x0, 0x0, 0x3, 0x2);
    _00_07(0x1);
    _03_03('uGameEffect', 0x64, 0xD, 0x5, 0x1, 0x1, -0x1, [
      10.000000,
      100.000000,
      35.000000
    ], [
      45.000000,
      0.000000,
      0.000000
    ], [
      1.000000,
      1.000000,
      1.000000
    ], 0x20D0, 0x0, 0xFFFFFFFF, 0xFFFFFFFF, 0xD, 2.000000, 0x0, 0x0, 0x0, 0x3, 0x2);
  }
  frame_45: {
    _01_00(0xF, 0x4);
  }
});
defineState((0x0BF), 55, function () {
  init: {
    _01_2F(0x1820);
    _01_09(0xFFFFFFFC);
    _01_B9(0.000000);
  }
  frame_0: {
    _01_99(0x0, 0x28);
    _00_21(0x1, 0x5F, 0.000000, 0x3);
    _00_24(0x2, 0x1, 0xDF, 1.000000, 0.000000, 0x3);
  }
  frame_12: {
    _00_3F(0x4, 0x0, 0xB, 0x0, 0x5, [
      0.000000,
      0.000000,
      0.000000
    ], 0x0, 0x0);
    _00_3F(0x5, 0x0, 0x48, 0x0, 0x7, [
      0.000000,
      0.000000,
      0.000000
    ], 0x0, 0x0);
  }
  frame_14: {
    _03_03('uGameEffect', 0x64, 0xF, 0x5, 0x1, 0x1, -0x1, [
      0.000000,
      0.000000,
      0.000000
    ], [
      0.000000,
      0.000000,
      0.000000
    ], [
      1.000000,
      1.000000,
      1.000000
    ], 0x20D0, 0x0, 0x1, 0xFFFFFFFF, 0xD, 15.000000, 0x0, 0x0, 0x2, 0x3, 0x2);
    _03_03('uGameEffect', 0x64, 0x14, 0x5, 0x1, 0x1, -0x1, [
      0.000000,
      0.000000,
      -60.000000
    ], [
      0.000000,
      0.000000,
      0.000000
    ], [
      1.000000,
      1.000000,
      1.000000
    ], 0x20D0, 0x0, 0x10, 0xFFFFFFFF, 0xD, 15.000000, 0x0, 0x0, 0x2, 0x3, 0x2);
  }
  frame_15: {
    _01_A6(20.000000, 0.000000);
    _01_3C(0x800);
    _00_2B(0x5);
    _01_2F(0x1820);
  }
  frame_17: {
    _00_2B(0x8);
  }
  frame_21: {
  }
  frame_25: {
  }
  frame_29: {
  }
  frame_33: {
  }
  frame_35: {
    _01_A8(-1.000000);
  }
  frame_37: {
  }
  frame_41: {
    _00_2B(0x2);
  }
  frame_55: {
    _01_00(0xF, 0x4);
  }
});
defineState((0x0C0), 30, function () {
  init: {
    _01_2F(0x1820);
    _01_09(0xFFFFFFFC);
    _01_A3();
    _01_B9(0.000000);
  }
  frame_0: {
    _01_99(0x1, 0x29);
    _01_A6(20.000000, 0.000000);
    _00_21(0x1, 0x45, 0.000000, 0x3);
    _03_03('uGameEffect', 0x64, 0x14, 0x5, 0x1, 0x1, -0x1, [
      0.000000,
      0.000000,
      -60.000000
    ], [
      0.000000,
      0.000000,
      0.000000
    ], [
      1.000000,
      1.000000,
      1.000000
    ], 0x20D0, 0x0, 0x10, 0xFFFFFFFF, 0xD, 15.000000, 0x0, 0x0, 0x2, 0x3, 0x2);
    _00_3F(0x4, 0x0, 0xC, 0x0, 0x5, [
      0.000000,
      0.000000,
      0.000000
    ], 0x0, 0x0);
    _01_E0(0x24);
    _00_08(0x0, 0x3, 0x3);
    _03_03('uGameEffect', 0x96, 0xA, 0x5, 0x1, 0x1, -0x1, [
      0.000000,
      0.000000,
      0.000000
    ], [
      0.000000,
      0.000000,
      0.000000
    ], [
      1.000000,
      1.000000,
      1.000000
    ], 0x20C0, 0x0, 0x1, 0xFFFFFFFF, 0xD, 30.000000, 0x0, 0x0, 0x0, 0x3, 0x2);
    _01_AA(-14.000000, 1.000000);
    _00_07(0x3);
    _03_03('uGameEffect', 0x96, 0xA, 0x5, 0x1, 0x1, -0x1, [
      0.000000,
      0.000000,
      0.000000
    ], [
      0.000000,
      0.000000,
      0.000000
    ], [
      1.000000,
      1.000000,
      1.000000
    ], 0x20C0, 0x0, 0x2, 0xFFFFFFFF, 0xD, 30.000000, 0x0, 0x0, 0x0, 0x3, 0x2);
    _01_A5(0.000000, -8.000000, 0.000000);
    _01_AA(-14.000000, 1.000000);
    _00_24(0x2, 0x1, 0xE5, 1.000000, 10.000000, 0x3);
  }
  frame_1: {
    _00_3F(0x5, 0x0, 0x48, 0x0, 0x7, [
      0.000000,
      0.000000,
      0.000000
    ], 0x0, 0x0);
  }
  frame_9: {
    _03_01('uGameEffect', 0x12C, 0x2, 0x0, 0x1, 0x1, 0x0, [
      0.000000,
      0.000000,
      96.000000
    ], [
      1.200000,
      1.200000,
      1.200000
    ], 0x200, 0x0, 0xFFFFFFFF, 0xFFFFFFFF, 0xD, 0.000000, 0x1, 0x1, 0x0, 0x3, 0x2);
  }
  frame_29: {
    _01_A3();
  }
  frame_30: {
    _01_00(0xF, 0x4);
  }
});
defineState((0x0DE), 92, function () {
  init: {
    _01_2F(0x2020);
    _01_A2();
    _01_DB(-0x2710);
    _01_B9(0.000000);
    _01_42(0x101);
    _01_AD(-0.980000);
    _00_3F(0x1, 0x1A, 0x0, 0x1, -0x1, [
      0.000000,
      0.000000,
      0.000000
    ], 0x0, 0x0);
    _01_107(0x0, 0x1);
    _01_107(0x6, 0x1);
  }
  frame_0: {
    _00_21(0x1, 0x78, 0.000000, 0x3);
    _01_4E(0x40000);
    _03_03('uGameEffect', 0x0, 0x64, 0x0, 0x1, 0x1, 0x5, [
      0.000000,
      0.000000,
      0.000000
    ], [
      0.000000,
      0.000000,
      0.000000
    ], [
      1.000000,
      1.000000,
      1.000000
    ], 0x1020D0, 0x0, 0x1, 0xFFFFFFFF, 0xD, 0.000000, 0x0, 0x0, 0x0, 0x3, 0x2);
    _03_03('uGameEffect', 0x0, 0x64, 0x0, 0x1, 0x1, 0x5, [
      0.000000,
      0.000000,
      0.000000
    ], [
      0.000000,
      0.000000,
      0.000000
    ], [
      1.000000,
      1.000000,
      1.000000
    ], 0x1020D0, 0x0, 0x2, 0xFFFFFFFF, 0xD, 0.000000, 0x0, 0x0, 0x0, 0x3, 0x2);
    _03_05(0x1, 0xD, 0x0);
    _01_92();
    _00_08(0x0, 0x4, 0x1);
    _01_0D(0x2);
    _01_3C(0x4000);
  }
  frame_8: {
    _01_0D(0x1);
    _01_51(0x8000000);
    _00_08(0x0, 0x2, 0x1);
    _01_15(0x11);
  }
  frame_9: {
    _00_21(0x1, 0x79, 0.000000, 0x3);
    _01_86(0x0);
    _03_10();
    _03_01('uGameEffect', 0x0, 0x67, 0x0, 0x1, 0x1, -0x1, [
      0.000000,
      0.000000,
      0.000000
    ], [
      1.000000,
      1.000000,
      1.000000
    ], 0x104010, 0x0, 0xFFFFFFFF, 0xFFFFFFFF, 0xD, 0.000000, 0x0, 0x0, 0x2, 0x3, 0x2);
    _03_18(0x20);
    _03_05(0x1, 0xD, 0x0);
    _03_11();
  }
  frame_18: {
    _03_0E(0x17, 0x1, 0x1, [
      0.000000,
      0.000000,
      0.000000
    ], [
      3.000000,
      15.000000,
      0.000000
    ], 0x0, 0.000000);
    _06_00(0x1, 0x1);
    _06_00(0x6, 0x0);
  }
  frame_84: {
    _06_00(0x1, 0x0);
    _03_0E(0x16, 0x1, 0x1, [
      0.000000,
      0.000000,
      0.000000
    ], [
      0.000000,
      30.000000,
      0.000000
    ], 0x0, 0.000000);
    _03_0E(0x28, 0x1, 0x0, [
      0.000000,
      0.000000,
      0.000000
    ], [
      0.000000,
      30.000000,
      0.000000
    ], 0x0, 0.000000);
    _00_21(0x1, 0x7A, 0.000000, 0x3);
  }
  frame_85: {
    _01_0D(0x0);
    _01_43(0x1);
    _01_4E(0x800000);
  }
  frame_86: {
    _01_4E(0x10000000);
  }
  frame_87: {
    _01_4F(0x40000);
    _03_1C(0x1);
    _00_08(0x1, 0x3, 0x1);
    _03_0B(0x27, 0x1, 0x1, -0x1, [
      0.000000,
      100.000000,
      150.000000
    ], [
      0.000000,
      0.000000,
      0.000000
    ], 0x0, 0.000000);
  }
  frame_89: {
    _01_DE(0x24, 0x0, 0x0);
    _01_E1(0x24, 0x11);
    _01_E2(0x24, 0x258);
    _01_EF(0x24, 1.400000);
    _01_106(0x2, 0x1, 0.000000);
  }
  frame_90: {
    _01_2F(0x20);
    _01_00(0x0, 0x17C);
  }
  frame_91: {
    _01_A1(0x2);
  }
});
defineState((0x0DF), 92, function () {
  init: {
    _01_2F(0x2020);
    _01_A2();
    _01_DB(-0x2710);
    _01_B9(0.000000);
    _01_42(0x101);
    _01_AD(-0.980000);
    _00_3F(0x1, 0x1A, 0x0, 0x1, -0x1, [
      0.000000,
      0.000000,
      0.000000
    ], 0x0, 0x0);
    _01_107(0x0, 0x1);
    _01_107(0x6, 0x1);
  }
  frame_0: {
    _00_21(0x1, 0x7D, 0.000000, 0x3);
    _01_4E(0x40000);
    _03_03('uGameEffect', 0x0, 0x64, 0x0, 0x1, 0x1, 0x5, [
      0.000000,
      0.000000,
      0.000000
    ], [
      0.000000,
      0.000000,
      0.000000
    ], [
      1.000000,
      1.000000,
      1.000000
    ], 0x1020D0, 0x0, 0x1, 0xFFFFFFFF, 0xD, 0.000000, 0x0, 0x0, 0x0, 0x3, 0x2);
    _03_03('uGameEffect', 0x0, 0x64, 0x0, 0x1, 0x1, 0x5, [
      0.000000,
      0.000000,
      0.000000
    ], [
      0.000000,
      0.000000,
      0.000000
    ], [
      1.000000,
      1.000000,
      1.000000
    ], 0x1020D0, 0x0, 0x2, 0xFFFFFFFF, 0xD, 0.000000, 0x0, 0x0, 0x0, 0x3, 0x2);
    _03_05(0x1, 0xD, 0x0);
    _01_92();
    _00_08(0x0, 0x4, 0x1);
    _01_0D(0x2);
    _01_3C(0x4000);
    _01_A3();
  }
  frame_8: {
    _01_0D(0x1);
    _01_51(0x8000000);
    _00_08(0x0, 0x2, 0x1);
    _01_15(0x11);
  }
  frame_9: {
    _00_21(0x1, 0x7E, 0.000000, 0x3);
    _01_86(0x0);
    _03_10();
    _03_01('uGameEffect', 0x0, 0x67, 0x0, 0x1, 0x1, -0x1, [
      0.000000,
      0.000000,
      0.000000
    ], [
      1.000000,
      1.000000,
      1.000000
    ], 0x104010, 0x0, 0xFFFFFFFF, 0xFFFFFFFF, 0xD, 0.000000, 0x0, 0x0, 0x2, 0x3, 0x2);
    _03_18(0x20);
    _03_05(0x1, 0xD, 0x0);
    _03_11();
  }
  frame_18: {
    _03_0E(0x17, 0x1, 0x1, [
      0.000000,
      0.000000,
      0.000000
    ], [
      3.000000,
      15.000000,
      0.000000
    ], 0x0, 0.000000);
    _06_00(0x1, 0x1);
    _06_00(0x6, 0x0);
  }
  frame_84: {
    _06_00(0x1, 0x0);
    _03_0E(0x16, 0x1, 0x1, [
      0.000000,
      0.000000,
      0.000000
    ], [
      0.000000,
      30.000000,
      0.000000
    ], 0x0, 0.000000);
    _03_0E(0x28, 0x1, 0x0, [
      0.000000,
      0.000000,
      0.000000
    ], [
      0.000000,
      30.000000,
      0.000000
    ], 0x0, 0.000000);
    _00_21(0x1, 0x7F, 0.000000, 0x3);
  }
  frame_85: {
    _01_0D(0x0);
    _01_43(0x1);
    _01_4E(0x800000);
  }
  frame_86: {
    _01_4E(0x10000000);
  }
  frame_87: {
    _01_4F(0x40000);
    _03_1C(0x1);
    _00_08(0x1, 0x3, 0x1);
    _03_0B(0x27, 0x1, 0x1, -0x1, [
      0.000000,
      100.000000,
      150.000000
    ], [
      0.000000,
      0.000000,
      0.000000
    ], 0x0, 0.000000);
  }
  frame_90: {
    _01_DE(0x24, 0x0, 0x0);
    _01_E1(0x24, 0x11);
    _01_E2(0x24, 0x258);
    _01_EF(0x24, 1.400000);
    _01_106(0x2, 0x1, 0.000000);
  }
  frame_91: {
    _01_A1(0x2);
  }
  frame_92: {
    _01_2F(0x20);
    _01_00(0x0, 0x17D);
  }
});
defineState((0x0E0), 71, function () {
  init: {
    _01_2F(0x2801);
    _01_A2();
    _01_B9(0.000000);
    _01_C3(0.000000, 0.000000, 0.000000, 0.000000, 0x0);
  }
  frame_0: {
    _00_22(0x1, 0x85, 0.000000, 0.000000, 0x3);
  }
  frame_69: {
  }
  frame_70: {
  }
});
defineState((0x17C), 13, function () {
  init: {
    _01_2F(0x820);
    _01_3C(0x2000000);
    _01_4E(0x100000);
    _01_8C(0x1);
    _01_B9(0.000000);
    _01_5B(0x1);
  }
  frame_0: {
    _00_21(0x1, 0xAA, 10.000000, 0x3);
    _01_CD(0xA, 0.000000, 0.000000, 60.000000, 0x1, 0x1);
    _03_01('uGameEffect', 0x12C, 0x2, 0x0, 0x1, 0x1, 0x0, [
      0.000000,
      0.000000,
      0.000000
    ], [
      1.000000,
      1.000000,
      1.000000
    ], 0x200, 0x0, 0xFFFFFFFF, 0xFFFFFFFF, 0xD, 0.000000, 0x1, 0x1, 0x0, 0x3, 0x2);
    _01_A5(0.000000, 150.000000, 0.000000);
  }
  frame_1: {
    _00_3F(0x1, 0xD, 0x0, 0x0, 0x0, [
      0.000000,
      0.000000,
      0.000000
    ], 0x0, 0x0);
    _00_3F(0x6, 0xD, 0x0, 0x1, -0x1, [
      0.000000,
      0.000000,
      0.000000
    ], 0x0, 0x0);
  }
  frame_9: {
    _01_A3();
  }
  frame_13: {
    _01_00(0xF, 0x3);
  }
});
defineState((0x17D), 13, function () {
  init: {
    _01_2F(0x820);
    _01_3C(0x2000000);
    _01_4E(0x100000);
    _01_A3();
    _01_B9(0.000000);
  }
  frame_0: {
    _00_21(0x1, 0xAB, 10.000000, 0x3);
    _01_DE(0x6, 0x800, 0x10);
    _01_E1(0x6, 0x804);
    _01_E2(0x6, 0x78);
  }
  frame_1: {
    _00_3F(0x4, 0x0, 0xA, 0x0, 0x5, [
      0.000000,
      0.000000,
      0.000000
    ], 0x0, 0x0);
  }
  frame_10: {
    _01_A3();
  }
  frame_13: {
    _01_00(0xF, 0x3);
  }
});
defineState((0x17E), 1, function () {
  init: {
    _01_2F(0x20);
    _01_4F(0x100000);
    _01_A3();
    _01_09(0xFFFFFFFF);
  }
  frame_0: {
    _01_DF(0x6);
    _01_AA(0.000000, -0.980000);
    _00_21(0x1, 0xAD, 10.000000, 0x3);
    _01_18();
  }
});
defineState((0x17F), 10, function () {
  init: {
    _01_2F(0x20);
    _01_4E(0x100000);
    _01_A3();
    _01_B9(0.000000);
  }
  frame_0: {
    _00_21(0x1, 0xAC, 30.000000, 0x3);
    _01_5B(0x1);
  }
  frame_1: {
    _01_16();
  }
});
defineState((0x180), 20, function () {
  init: {
    _01_2F(0x60);
    _01_5B(0x1);
  }
  frame_0: {
    _00_21(0x1, 0xAC, 40.000000, 0x3);
    _01_A6(3.000000, 0.000000);
  }
  frame_15: {
  }
  frame_16: {
    _01_16();
  }
});
defineState((0x181), 20, function () {
  init: {
    _01_2F(0x60);
    _01_5B(0x1);
  }
  frame_0: {
    _00_21(0x1, 0xAC, 0.000000, 0x3);
    _01_A6(12.000000, 0.000000);
  }
  frame_15: {
  }
  frame_16: {
    _01_16();
  }
});