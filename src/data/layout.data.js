const LAYOUT_DATA = [
    {
        id: 101,
        title: "Rectangle",
        imageUrl: "images/layouts/layout-001.jpg",
        categories: ["multi-inferno"],
        defence: {
            queen: 70,
            king: 66,
            champion: 10,
            varden: 50,
            castleTroops: {
                Ice_Golem: 1,
                Witch: 2,
                Archer: 6,
            }
        },
        attacks: [
            {
                id: 1011,
                name: "Yeti and Witch",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=WylJMEQ0M5k",
                    start: "0:08",
                    end: "1:50"
                },
                troops: {
                    Yeti: 10,
                    Witch: 8,
                    Wizard: 1,
                },
                spells: {
                    Earthquake_Spell: 8,
                    Rage_Spell: 2,
                    Poison_Spell: 1,
                },
                clanCastle: {
                    Siege_Barracks: 1,
                    Hog_Rider: 9,
                },
                categories: ["solid", "crash center"]
            }
        ]

    },
    {
        id: 102,
        title: "Rectangle",
        imageUrl: "images/layouts/layout-002.jpg",
        categories: ["mix-inferno"],
        defence: {
            queen: 70,
            king: 70,
            champion: 20,
            varden: 50,
            castleTroops: {
                Ice_Golem: 2,
                Witch: 1,
                Archer: 3,
            }
        },
        attacks: [
            {
                id: 1021,
                name: "Yeti and Witch",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=WylJMEQ0M5k",
                    start: "1:54",
                    end: "4:00",
                },
                troops: {
                    Yeti: 10,
                    Witch: 8,
                    Archer: 4,
                },
                spells: {
                    Earthquake_Spell: 4,
                    Rage_Spell: 3,
                    Poison_Spell: 1,
                    Jump_Spell: 1,
                },
                clanCastle: {
                    Siege_Barracks: 1,
                    Hog_Rider: 9
                },
                categories: ["solid"]
            }
        ]
    },
    {
        id: 103,
        title: "anti-3",
        imageUrl: "images/layouts/layout-003.jpg",
        categories: ["mix-inferno"],
        defence: {
            queen: 70,
            king: 68,
            champion: 11,
            varden: 50,
            castleTroops: {
                Goblin: 20,
                Archer: 25,
            }
        },
        attacks: [
            {
                id: 1031,
                name: "Yeti and Witch",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=WylJMEQ0M5k",
                    start: "4:05",
                    end: "5:47"
                },
                troops: {
                    Yeti: 10,
                    Witch: 8,
                    Archer: 4
                },
                spells: {
                    Earthquake_Spell: 8,
                    Rage_Spell: 2,
                    Poison_Spell: 1,
                },
                clanCastle: {
                    Siege_Barracks: 1,
                    Hog_Rider: 9
                },
                categories: ["solid", "crash center"]
            }
        ]
    },
    {
        id: 104,
        title: "anti-3",
        imageUrl: "images/layouts/layout-004.jpg",
        categories: ["single-inferno"],
        defence: {
            queen: 70,
            king: 66,
            champion: 20,
            varden: 50,
            castleTroops: {
                Lava_Hound: 1,
                Ice_Golem: 1,
            }
        },
        attacks: [
            {
                id: 1041,
                name: "Yeti and Witch",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=WylJMEQ0M5k",
                    start: "5:51",
                    end: "7:37"
                },
                troops: {
                    Yeti: 10,
                    Witch: 6,
                    Wizard: 2,
                    Ice_Golem: 1,
                    Balloon: 1,
                },
                spells: {
                    Earthquake_Spell: 8,
                    Rage_Spell: 2,
                    Poison_Spell: 1,
                },
                clanCastle: {
                    Siege_Barracks: 1,
                    Hog_Rider: 9
                },
                categories: ["solid", "crash center"]
            }
        ]
    },
    {
        id: 105,
        title: "anti-3",
        imageUrl: "images/layouts/layout-005.jpg",
        categories: ["mix-inferno", "rectangle"],
        defence: {
            queen: 70,
            king: 66,
            champion: 20,
            varden: 50,
            castleTroops: {
                Ice_Golem: 3,
            }
        },
        attacks: [
            {
                id: 1051,
                name: "Yeti and Hog_Rider",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=WylJMEQ0M5k",
                    start: "7:41",
                    end: "9:39"
                },
                troops: {
                    Yeti: 11,
                    Hog_Rider: 5,
                    Wizard: 3,
                    Ice_Golem: 3,
                },
                spells: {
                    Earthquake_Spell: 8,
                    Rage_Spell: 2,
                    Poison_Spell: 1,
                },
                clanCastle: {
                    Siege_Barracks: 1,
                    Hog_Rider: 9
                },
                categories: "crash center",
            }
        ]
    },
    {
        id: 106,
        title: "Base 106",
        imageUrl: "images/layouts/layout-006.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1061,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=1QP343i4jWk",
                    start: "1:12",
                    end: "4:10"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 107,
        title: "Base 107",
        imageUrl: "images/layouts/layout-007.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1071,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=1QP343i4jWk",
                    start: "4:12",
                    end: "6:28"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 108,
        title: "Base 108",
        imageUrl: "images/layouts/layout-008.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1081,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=1QP343i4jWk",
                    start: "6:37",
                    end: "8:37"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 109,
        title: "Base 109",
        imageUrl: "images/layouts/layout-009.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1091,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=1QP343i4jWk",
                    start: "8:42",
                    end: "11:12"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 110,
        title: "Base 110",
        imageUrl: "images/layouts/layout-010.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1101,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=1QP343i4jWk",
                    start: "11:17",
                    end: "13:21"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 111,
        title: "Base 111",
        imageUrl: "images/layouts/layout-011.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1111,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=1QP343i4jWk",
                    start: "13:29",
                    end: "15:55"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 112,
        title: "Base 112",
        imageUrl: "images/layouts/layout-012.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1121,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=R9A8SYmIrEM",
                    start: "1:05",
                    end: "2:48"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 113,
        title: "Base 113",
        imageUrl: "images/layouts/layout-013.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1131,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=R9A8SYmIrEM",
                    start: "2:55",
                    end: "4:58"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 114,
        title: "Base 114",
        imageUrl: "images/layouts/layout-014.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1141,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=R9A8SYmIrEM",
                    start: "5:07",
                    end: "7:00"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 115,
        title: "Base 115",
        imageUrl: "images/layouts/layout-015.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1151,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=R9A8SYmIrEM",
                    start: "7:07",
                    end: "9:00"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 116,
        title: "Base 116",
        imageUrl: "images/layouts/layout-016.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1151,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=R9A8SYmIrEM",
                    start: "9:12",
                    end: "11:02"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 117,
        title: "Base 117",
        imageUrl: "images/layouts/layout-017.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1171,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=IEn6qlS4vm8",
                    start: "8:15",
                    end: "10:02"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 118,
        title: "Base 118",
        imageUrl: "images/layouts/layout-018.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1181,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=QAXmKukroPk",
                    start: "4:26",
                    end: "7:43"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 119,
        title: "Base 119",
        imageUrl: "images/layouts/layout-019.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1191,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=QAXmKukroPk",
                    start: "7:51",
                    end: "10:43"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 120,
        title: "Base 120",
        imageUrl: "images/layouts/layout-020.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1201,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=TSUeFa5Chhk",
                    start: "2:34",
                    end: "4:25"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 121,
        title: "Base 121",
        imageUrl: "images/layouts/layout-021.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1211,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=TSUeFa5Chhk",
                    start: "4:30",
                    end: "6:12"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 122,
        title: "Base 122",
        imageUrl: "images/layouts/layout-022.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1221,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=TSUeFa5Chhk",
                    start: "6:25",
                    end: "8:25"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 123,
        title: "Base 123",
        imageUrl: "images/layouts/layout-023.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1231,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=TSUeFa5Chhk",
                    start: "8:29",
                    end: "10:20"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 124,
        title: "Base 124",
        imageUrl: "images/layouts/layout-024.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1241,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=Gs8l9J7xul0",
                    start: "1:30",
                    end: "4:20"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 125,
        title: "Base 125",
        imageUrl: "images/layouts/layout-025.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1251,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=Gs8l9J7xul0",
                    start: "4:27",
                    end: "7:23"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 126,
        title: "Base 126",
        imageUrl: "images/layouts/layout-026.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1261,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=Gs8l9J7xul0",
                    start: "7:47",
                    end: "11:06"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 127,
        title: "Base 127",
        imageUrl: "images/layouts/layout-027.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1271,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=Gs8l9J7xul0",
                    start: "12:01",
                    end: "14:05"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 128,
        title: "Base 128",
        imageUrl: "images/layouts/layout-028.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1281,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=2go5hrz6mgA",
                    start: "8:07",
                    end: "11:41"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 129,
        title: "Base 129",
        imageUrl: "images/layouts/layout-029.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1291,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=G0uM-grTYlk",
                    start: "4:03",
                    end: "6:02"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 130,
        title: "Base 130",
        imageUrl: "images/layouts/layout-030.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1301,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=G0uM-grTYlk",
                    start: "6:08",
                    end: "7:51"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 131,
        title: "Base 131",
        imageUrl: "images/layouts/layout-031.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1311,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=G0uM-grTYlk",
                    start: "10:12",
                    end: "12:12"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 132,
        title: "Base 132",
        imageUrl: "images/layouts/layout-032.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1321,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=G0uM-grTYlk",
                    start: "12:22",
                    end: "14:33"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 133,
        title: "Base 133",
        imageUrl: "images/layouts/layout-033.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1331,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=3hfk_H8_bZ4",
                    start: "2:32",
                    end: "4:56"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 134,
        title: "Base 134",
        imageUrl: "images/layouts/layout-034.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1341,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=3hfk_H8_bZ4",
                    start: "5:07",
                    end: "6:49"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 135,
        title: "Base 135",
        imageUrl: "images/layouts/layout-035.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1351,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=3hfk_H8_bZ4",
                    start: "6:53",
                    end: "8:46"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 136,
        title: "Base 136",
        imageUrl: "images/layouts/layout-036.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1361,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=3hfk_H8_bZ4",
                    start: "8:48",
                    end: "10:38"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 137,
        title: "Base 137",
        imageUrl: "images/layouts/layout-037.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1371,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=3hfk_H8_bZ4",
                    start: "10:42",
                    end: "12:25"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 138,
        title: "Base 138",
        imageUrl: "images/layouts/layout-038.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1381,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=F857YuO0cBw",
                    start: "4:51",
                    end: "6:45"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 139,
        title: "Base 139",
        imageUrl: "images/layouts/layout-039.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1391,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=F857YuO0cBw",
                    start: "6:48",
                    end: "8:14"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 140,
        title: "Base 140",
        imageUrl: "images/layouts/layout-040.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1401,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=F857YuO0cBw",
                    start: "8:16",
                    end: "10:27"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 141,
        title: "Base 141",
        imageUrl: "images/layouts/layout-041.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1411,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=F857YuO0cBw",
                    start: "10:31",
                    end: "11:50"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 142,
        title: "Base 142",
        imageUrl: "images/layouts/layout-042.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1421,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=v23-dlynWSw",
                    start: "8:00",
                    end: "10:21"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 143,
        title: "Base 143",
        imageUrl: "images/layouts/layout-043.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1431,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=v23-dlynWSw",
                    start: "10:25",
                    end: "12:15"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 144,
        title: "Base 144",
        imageUrl: "images/layouts/layout-044.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1441,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=v23-dlynWSw",
                    start: "12:25",
                    end: "13:36"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 145,
        title: "Base 145",
        imageUrl: "images/layouts/layout-045.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1451,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=v23-dlynWSw",
                    start: "13:44",
                    end: "15:35"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 146,
        title: "Base 146",
        imageUrl: "images/layouts/layout-046.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1461,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=6zXNsCz7MrM",
                    start: "5:41",
                    end: "7:48"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 147,
        title: "Base 147",
        imageUrl: "images/layouts/layout-047.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1471,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=6zXNsCz7MrM",
                    start: "7:52",
                    end: "10:11"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 148,
        title: "Base 148",
        imageUrl: "images/layouts/layout-048.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1481,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=ZmUQMxLhMK0",
                    start: "3:22",
                    end: "4:58"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 149,
        title: "Base 149",
        imageUrl: "images/layouts/layout-049.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1491,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=ZmUQMxLhMK0",
                    start: "5:07",
                    end: "7:54"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 150,
        title: "Base 150",
        imageUrl: "images/layouts/layout-050.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1501,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=ZmUQMxLhMK0",
                    start: "8:01",
                    end: "10:43"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 151,
        title: "Base 151",
        imageUrl: "images/layouts/layout-051.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1511,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=5zS6Cmn9pt4",
                    start: "1:41",
                    end: "3:24"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 152,
        title: "Base 152",
        imageUrl: "images/layouts/layout-052.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1521,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=5zS6Cmn9pt4",
                    start: "18:39",
                    end: "21:02"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 153,
        title: "Base 153",
        imageUrl: "images/layouts/layout-053.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1531,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=VLIh6KPpvmc",
                    start: "4:04",
                    end: "6:16"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 154,
        title: "Base 154",
        imageUrl: "images/layouts/layout-054.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1541,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=VLIh6KPpvmc",
                    start: "6:20",
                    end: "8:11"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 155,
        title: "Base 155",
        imageUrl: "images/layouts/layout-055.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1551,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=VLIh6KPpvmc",
                    start: "8:17",
                    end: "10:16"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 156,
        title: "Base 156",
        imageUrl: "images/layouts/layout-056.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1561,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=DiIXGjf3t8M",
                    start: "1:28",
                    end: "3:33"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 157,
        title: "Base 157",
        imageUrl: "images/layouts/layout-057.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1571,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=DiIXGjf3t8M",
                    start: "3:47",
                    end: "6:03"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 158,
        title: "Base 158",
        imageUrl: "images/layouts/layout-058.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1581,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=DiIXGjf3t8M",
                    start: "6:05",
                    end: "8:30"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 159,
        title: "Base 159",
        imageUrl: "images/layouts/layout-059.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1591,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=DiIXGjf3t8M",
                    start: "8:32",
                    end: "11:05"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 160,
        title: "Base 160",
        imageUrl: "images/layouts/layout-060.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1601,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=Cuc-MxkxZnw",
                    start: "0:48",
                    end: "3:40"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 161,
        title: "Base 161",
        imageUrl: "images/layouts/layout-061.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1611,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=Cuc-MxkxZnw",
                    start: "3:41",
                    end: "6:43"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 162,
        title: "Base 162",
        imageUrl: "images/layouts/layout-062.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1621,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=Cuc-MxkxZnw",
                    start: "6:44",
                    end: "9:16"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 163,
        title: "Base 163",
        imageUrl: "images/layouts/layout-063.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1631,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=Cuc-MxkxZnw",
                    start: "9:17",
                    end: "11:38"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 164,
        title: "Base 164",
        imageUrl: "images/layouts/layout-064.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1641,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=Fu5LjY8M9xU",
                    start: "4:19",
                    end: "7:15"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 165,
        title: "Base 165",
        imageUrl: "images/layouts/layout-065.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1651,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=10yz-9NJ6zA",
                    start: "2:35",
                    end: "5:38"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 166,
        title: "Base 166",
        imageUrl: "images/layouts/layout-066.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1661,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=10yz-9NJ6zA",
                    start: "5:39",
                    end: "8:07"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 167,
        title: "Base 167",
        imageUrl: "images/layouts/layout-067.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1671,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=10yz-9NJ6zA",
                    start: "8:08",
                    end: "11:40"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 168,
        title: "Base 168",
        imageUrl: "images/layouts/layout-068.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1681,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=Zptbg5N_Y2s",
                    start: "1:39",
                    end: "4:07"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 169,
        title: "Base 169",
        imageUrl: "images/layouts/layout-069.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1691,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=Zptbg5N_Y2s",
                    start: "4:08",
                    end: "6:31"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 170,
        title: "Base 170",
        imageUrl: "images/layouts/layout-070.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1701,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=Zptbg5N_Y2s",
                    start: "6:32",
                    end: "9:03"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 171,
        title: "Base 171",
        imageUrl: "images/layouts/layout-071.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1711,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=UM4FCpA_nQE",
                    start: "1:59",
                    end: "4:37"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 172,
        title: "Base 172",
        imageUrl: "images/layouts/layout-072.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1721,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=UM4FCpA_nQE",
                    start: "4:50",
                    end: "7:09"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 173,
        title: "Base 173",
        imageUrl: "images/layouts/layout-073.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1731,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=UM4FCpA_nQE",
                    start: "7:24",
                    end: "9:31"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 174,
        title: "Base 174",
        imageUrl: "images/layouts/layout-074.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1741,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=UM4FCpA_nQE",
                    start: "9:45",
                    end: "12:05"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 175,
        title: "Base 175",
        imageUrl: "images/layouts/layout-075.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1751,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=k3nCEFVmW6E",
                    start: "1:37",
                    end: "3:12"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 176,
        title: "Base 176",
        imageUrl: "images/layouts/layout-076.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1761,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=k3nCEFVmW6E",
                    start: "3:13",
                    end: "4:39"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 177,
        title: "Base 177",
        imageUrl: "images/layouts/layout-077.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1771,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=k3nCEFVmW6E",
                    start: "4:40",
                    end: "6:02"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 178,
        title: "Base 178",
        imageUrl: "images/layouts/layout-078.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1781,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=k3nCEFVmW6E",
                    start: "6:03",
                    end: "7:24"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 179,
        title: "Base 179",
        imageUrl: "images/layouts/layout-079.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1791,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=k3nCEFVmW6E",
                    start: "8:37",
                    end: "9:51"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 180,
        title: "Base 180",
        imageUrl: "images/layouts/layout-080.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1801,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=k3nCEFVmW6E",
                    start: "9:54",
                    end: "12:12"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 181,
        title: "Base 181",
        imageUrl: "images/layouts/layout-081.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1811,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=OT3bdHxxWbw",
                    start: "1:30",
                    end: "2:52"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 182,
        title: "Base 182",
        imageUrl: "images/layouts/layout-082.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1821,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=OT3bdHxxWbw",
                    start: "2:53",
                    end: "4:51"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 183,
        title: "Base 183",
        imageUrl: "images/layouts/layout-083.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1831,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=OT3bdHxxWbw",
                    start: "4:52",
                    end: "6:13"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 184,
        title: "Base 184",
        imageUrl: "images/layouts/layout-084.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1841,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=OT3bdHxxWbw",
                    start: "6:14",
                    end: "7:24"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 185,
        title: "Base 185",
        imageUrl: "images/layouts/layout-085.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1851,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=OT3bdHxxWbw",
                    start: "7:25",
                    end: "9:07"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 186,
        title: "Base 186",
        imageUrl: "images/layouts/layout-086.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1861,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=OT3bdHxxWbw",
                    start: "9:15",
                    end: "10:17"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 187,
        title: "Base 187",
        imageUrl: "images/layouts/layout-087.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1871,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=rW_4fkY6q0U",
                    start: "1:31",
                    end: "2:55"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 188,
        title: "Base 188",
        imageUrl: "images/layouts/layout-088.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1881,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=rW_4fkY6q0U",
                    start: "3:23",
                    end: "4:49"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 189,
        title: "Base 189",
        imageUrl: "images/layouts/layout-089.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1891,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=rW_4fkY6q0U",
                    start: "4:50",
                    end: "6:17"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 190,
        title: "Base 190",
        imageUrl: "images/layouts/layout-090.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1901,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=rW_4fkY6q0U",
                    start: "6:18",
                    end: "7:43"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 191,
        title: "Base 191",
        imageUrl: "images/layouts/layout-091.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1911,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=rW_4fkY6q0U",
                    start: "8:14",
                    end: "9:23"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 192,
        title: "Base 192",
        imageUrl: "images/layouts/layout-092.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1921,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=rW_4fkY6q0U",
                    start: "9:24",
                    end: "10:29"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 193,
        title: "Base 193",
        imageUrl: "images/layouts/layout-093.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1931,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=I2o0H16hnzg",
                    start: "9:37",
                    end: "11:07"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 194,
        title: "Base 194",
        imageUrl: "images/layouts/layout-094.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1941,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=I2o0H16hnzg",
                    start: "11:08",
                    end: "12:17"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 195,
        title: "Base 195",
        imageUrl: "images/layouts/layout-095.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1951,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=G2j3wRqgf5I",
                    start: "4:08",
                    end: "6:22"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 196,
        title: "Base 196",
        imageUrl: "images/layouts/layout-096.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1961,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=G2j3wRqgf5I",
                    start: "6:23",
                    end: "7:29"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 197,
        title: "Base 197",
        imageUrl: "images/layouts/layout-097.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1971,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=G2j3wRqgf5I",
                    start: "7:30",
                    end: "8:43"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 198,
        title: "Base 198",
        imageUrl: "images/layouts/layout-098.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1981,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=G2j3wRqgf5I",
                    start: "8:45",
                    end: "9:51"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 199,
        title: "Base 199",
        imageUrl: "images/layouts/layout-099.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 1991,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=G2j3wRqgf5I",
                    start: "10:19",
                    end: "11:23"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 200,
        title: "Base 200",
        imageUrl: "images/layouts/layout-100.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2001,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=G2j3wRqgf5I",
                    start: "11:25",
                    end: "14:00"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 201,
        title: "Base 201",
        imageUrl: "images/layouts/layout-101.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2011,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=ER-2ZbhzKtM",
                    start: "4:17",
                    end: "6:29"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 202,
        title: "Base 202",
        imageUrl: "images/layouts/layout-102.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2021,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=ER-2ZbhzKtM",
                    start: "6:31",
                    end: "10:08"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 203,
        title: "Base 203",
        imageUrl: "images/layouts/layout-103.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2031,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=F4V2W_ROMCE",
                    start: "2:49",
                    end: "5:33"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 204,
        title: "Base 204",
        imageUrl: "images/layouts/layout-104.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2041,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=F4V2W_ROMCE",
                    start: "5:35",
                    end: "8:22"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 205,
        title: "Base 205",
        imageUrl: "images/layouts/layout-105.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2051,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=F4V2W_ROMCE",
                    start: "8:24",
                    end: "10:55"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 206,
        title: "Base 206",
        imageUrl: "images/layouts/layout-106.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2061,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=Ok8WKUyZBvk",
                    start: "4:00",
                    end: "5:14"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 207,
        title: "Base 207",
        imageUrl: "images/layouts/layout-107.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2071,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=Ok8WKUyZBvk",
                    start: "5:16",
                    end: "7:54"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 208,
        title: "Base 208",
        imageUrl: "images/layouts/layout-108.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2081,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=Ok8WKUyZBvk",
                    start: "7:56",
                    end: "10:41"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 209,
        title: "Base 209",
        imageUrl: "images/layouts/layout-109.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2091,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=Ok8WKUyZBvk",
                    start: "10:43",
                    end: "12:34"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 210,
        title: "Base 210",
        imageUrl: "images/layouts/layout-110.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2101,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=Ok8WKUyZBvk",
                    start: "12:36",
                    end: "14:15"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 211,
        title: "Base 211",
        imageUrl: "images/layouts/layout-111.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2111,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=9_8Da1qUthA",
                    start: "1:41",
                    end: "4:14"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 212,
        title: "Base 212",
        imageUrl: "images/layouts/layout-112.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2121,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=9_8Da1qUthA",
                    start: "4:16",
                    end: "6:33"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 213,
        title: "Base 213",
        imageUrl: "images/layouts/layout-113.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2131,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=9_8Da1qUthA",
                    start: "6:35",
                    end: "9:24"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 214,
        title: "Base 214",
        imageUrl: "images/layouts/layout-114.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2141,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=9_8Da1qUthA",
                    start: "9:26",
                    end: "12:04"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 215,
        title: "Base 215",
        imageUrl: "images/layouts/layout-115.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2151,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=VdZMIIWw3jc",
                    start: "1:26",
                    end: "3:20"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 216,
        title: "Base 216",
        imageUrl: "images/layouts/layout-116.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2161,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=VdZMIIWw3jc",
                    start: "3:23",
                    end: "5:33"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 217,
        title: "Base 217",
        imageUrl: "images/layouts/layout-117.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2171,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=VdZMIIWw3jc",
                    start: "5:35",
                    end: "7:37"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 218,
        title: "Base 218",
        imageUrl: "images/layouts/layout-118.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2181,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=VdZMIIWw3jc",
                    start: "7:39",
                    end: "9:52"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 219,
        title: "Base 219",
        imageUrl: "images/layouts/layout-119.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2191,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=VdZMIIWw3jc",
                    start: "9:54",
                    end: "12:03"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 220,
        title: "Base 220",
        imageUrl: "images/layouts/layout-120.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2201,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=VdZMIIWw3jc",
                    start: "12:05",
                    end: "13:55"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 221,
        title: "Base 221",
        imageUrl: "images/layouts/layout-121.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2211,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=VdZMIIWw3jc",
                    start: "13:57",
                    end: "16:00"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 222,
        title: "Base 222",
        imageUrl: "images/layouts/layout-122.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2221,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=VdZMIIWw3jc",
                    start: "16:02",
                    end: "18:05"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 223,
        title: "Base 223",
        imageUrl: "images/layouts/layout-123.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2231,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=VaPBXmLtRWs",
                    start: "0:59",
                    end: "3:21"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 224,
        title: "Base 224",
        imageUrl: "images/layouts/layout-124.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2241,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=VaPBXmLtRWs",
                    start: "3:23",
                    end: "5:39"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 225,
        title: "Base 225",
        imageUrl: "images/layouts/layout-125.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2251,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=VaPBXmLtRWs",
                    start: "5:41",
                    end: "8:37"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 226,
        title: "Base 226",
        imageUrl: "images/layouts/layout-126.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2261,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=VaPBXmLtRWs",
                    start: "8:39",
                    end: "11:32"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 227,
        title: "Base 227",
        imageUrl: "images/layouts/layout-127.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2271,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=VaPBXmLtRWs",
                    start: "11:34",
                    end: "13:39"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 228,
        title: "Base 228",
        imageUrl: "images/layouts/layout-128.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2281,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=Jd6OmuceuqU",
                    start: "1:30",
                    end: "4:00"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 229,
        title: "Base 229",
        imageUrl: "images/layouts/layout-129.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2291,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=Jd6OmuceuqU",
                    start: "4:02",
                    end: "6:26"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 230,
        title: "Base 230",
        imageUrl: "images/layouts/layout-130.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2301,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=Jd6OmuceuqU",
                    start: "6:28",
                    end: "10:28"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 231,
        title: "Base 231",
        imageUrl: "images/layouts/layout-131.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2311,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=D2_8p3gx9nc",
                    start: "2:50",
                    end: "4:34"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 232,
        title: "Base 232",
        imageUrl: "images/layouts/layout-132.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2321,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=D2_8p3gx9nc",
                    start: "4:36",
                    end: "6:40"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 233,
        title: "Base 233",
        imageUrl: "images/layouts/layout-133.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2331,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=D2_8p3gx9nc",
                    start: "6:42",
                    end: "8:54"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 234,
        title: "Base 234",
        imageUrl: "images/layouts/layout-134.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2341,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=D2_8p3gx9nc",
                    start: "8:56",
                    end: "10:39"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 235,
        title: "Base 235",
        imageUrl: "images/layouts/layout-135.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2351,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=rAUpklB8Y1A",
                    start: "2:04",
                    end: "3:48"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 236,
        title: "Base 236",
        imageUrl: "images/layouts/layout-136.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2361,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=rAUpklB8Y1A",
                    start: "3:50",
                    end: "6:03"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 237,
        title: "Base 237",
        imageUrl: "images/layouts/layout-137.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2371,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=rAUpklB8Y1A",
                    start: "6:05",
                    end: "7:56"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 238,
        title: "Base 238",
        imageUrl: "images/layouts/layout-138.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2381,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=rAUpklB8Y1A",
                    start: "7:58",
                    end: "9:37"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 239,
        title: "Base 239",
        imageUrl: "images/layouts/layout-139.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2391,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=rAUpklB8Y1A",
                    start: "9:39",
                    end: "11:31"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 240,
        title: "Base 240",
        imageUrl: "images/layouts/layout-140.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2401,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=Kb-E8T5Uw7s",
                    start: "0:47",
                    end: "3:01"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 241,
        title: "Base 241",
        imageUrl: "images/layouts/layout-141.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2411,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=Kb-E8T5Uw7s",
                    start: "5:21",
                    end: "7:51"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 242,
        title: "Base 242",
        imageUrl: "images/layouts/layout-142.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2421,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=Kb-E8T5Uw7s",
                    start: "7:53",
                    end: "10:39"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 243,
        title: "Base 243",
        imageUrl: "images/layouts/layout-143.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2431,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=tq8bvHMEDOE",
                    start: "1:22",
                    end: "3:16"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 244,
        title: "Base 244",
        imageUrl: "images/layouts/layout-144.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2441,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=tq8bvHMEDOE",
                    start: "3:19",
                    end: "4:41"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 245,
        title: "Base 245",
        imageUrl: "images/layouts/layout-145.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2451,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=tq8bvHMEDOE",
                    start: "4:43",
                    end: "6:08"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 246,
        title: "Base 246",
        imageUrl: "images/layouts/layout-146.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2461,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=tq8bvHMEDOE",
                    start: "6:10",
                    end: "8:43"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 247,
        title: "Base 247",
        imageUrl: "images/layouts/layout-147.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2471,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=tq8bvHMEDOE",
                    start: "8:45",
                    end: "10:29"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 248,
        title: "Base 248",
        imageUrl: "images/layouts/layout-148.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2481,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=tq8bvHMEDOE",
                    start: "10:31",
                    end: "12:08"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 249,
        title: "Base 249",
        imageUrl: "images/layouts/layout-149.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2491,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=nHPIOWro3o8",
                    start: "8:35",
                    end: "11:11"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 250,
        title: "Base 250",
        imageUrl: "images/layouts/layout-150.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2501,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=GUT_y84mUKU",
                    start: "1:04",
                    end: "3:22"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 251,
        title: "Base 251",
        imageUrl: "images/layouts/layout-151.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2511,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=GUT_y84mUKU",
                    start: "3:24",
                    end: "6:19"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 252,
        title: "Base 252",
        imageUrl: "images/layouts/layout-152.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2521,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=GUT_y84mUKU",
                    start: "6:21",
                    end: "10:47"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 253,
        title: "Base 253",
        imageUrl: "images/layouts/layout-153.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2531,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=oBQaWxIf2a8",
                    start: "1:51",
                    end: "4:31"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 254,
        title: "Base 254",
        imageUrl: "images/layouts/layout-154.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2541,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=oBQaWxIf2a8",
                    start: "4:33",
                    end: "7:18"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 255,
        title: "Base 255",
        imageUrl: "images/layouts/layout-155.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2551,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=oBQaWxIf2a8",
                    start: "7:20",
                    end: "10:21"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 256,
        title: "Base 256",
        imageUrl: "images/layouts/layout-156.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2561,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=oBQaWxIf2a8",
                    start: "10:24",
                    end: "12:55"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 257,
        title: "Base 257",
        imageUrl: "images/layouts/layout-157.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2571,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=I3uOsMvkPUY",
                    start: "1:14",
                    end: "3:30"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 258,
        title: "Base 258",
        imageUrl: "images/layouts/layout-158.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2581,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=I3uOsMvkPUY",
                    start: "3:32",
                    end: "5:45"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 259,
        title: "Base 259",
        imageUrl: "images/layouts/layout-159.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2591,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=I3uOsMvkPUY",
                    start: "5:48",
                    end: "7:32"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 260,
        title: "Base 260",
        imageUrl: "images/layouts/layout-160.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2601,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=I3uOsMvkPUY",
                    start: "7:34",
                    end: "9:20"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 261,
        title: "Base 261",
        imageUrl: "images/layouts/layout-161.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2611,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=oCB2aDLhpsM",
                    start: "1:23",
                    end: "3:42"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 262,
        title: "Base 262",
        imageUrl: "images/layouts/layout-162.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2621,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=oCB2aDLhpsM",
                    start: "6:27",
                    end: "8:42"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 263,
        title: "Base 263",
        imageUrl: "images/layouts/layout-163.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2631,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=oCB2aDLhpsM",
                    start: "12:09",
                    end: "15:41"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 264,
        title: "Base 264",
        imageUrl: "images/layouts/layout-164.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2641,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=5Rtd80pSxHU",
                    start: "1:50",
                    end: "3:50"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 265,
        title: "Base 265",
        imageUrl: "images/layouts/layout-165.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2651,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=tk7Ug_79Hts",
                    start: "1:45",
                    end: "4:39"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 266,
        title: "Base 266",
        imageUrl: "images/layouts/layout-166.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2661,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=tk7Ug_79Hts",
                    start: "7:20",
                    end: "10:05"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 267,
        title: "Base 267",
        imageUrl: "images/layouts/layout-167.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2671,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=tk7Ug_79Hts",
                    start: "13:29",
                    end: "15:43"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 268,
        title: "Base 268",
        imageUrl: "images/layouts/layout-168.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2681,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=eu5wPvbQIjU",
                    start: "2:07",
                    end: "4:33"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 269,
        title: "Base 269",
        imageUrl: "images/layouts/layout-169.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2691,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=eu5wPvbQIjU",
                    start: "4:35",
                    end: "7:55"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 270,
        title: "Base 270",
        imageUrl: "images/layouts/layout-170.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2701,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=eu5wPvbQIjU",
                    start: "7:57",
                    end: "11:06"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 271,
        title: "Base 271",
        imageUrl: "images/layouts/layout-171.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2711,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=h1uVP4Z7ESo",
                    start: "1:35",
                    end: "3:21"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 272,
        title: "Base 272",
        imageUrl: "images/layouts/layout-172.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2721,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=h1uVP4Z7ESo",
                    start: "4:15",
                    end: "5:57"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 273,
        title: "Base 273",
        imageUrl: "images/layouts/layout-173.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2731,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=h1uVP4Z7ESo",
                    start: "5:59",
                    end: "8:05"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 274,
        title: "Base 274",
        imageUrl: "images/layouts/layout-174.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2741,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=h1uVP4Z7ESo",
                    start: "8:08",
                    end: "10:07"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 275,
        title: "Base 275",
        imageUrl: "images/layouts/layout-175.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2751,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=h1uVP4Z7ESo",
                    start: "10:10",
                    end: "11:33"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 276,
        title: "Base 276",
        imageUrl: "images/layouts/layout-176.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2761,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=8s6F9uP1D50",
                    start: "4:31",
                    end: "7:21"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            },
            {
                id: 2762,
                name: "Attack 2",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=8s6F9uP1D50",
                    start: "7:52",
                    end: "10:14"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 277,
        title: "Base 277",
        imageUrl: "images/layouts/layout-177.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2771,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=8s6F9uP1D50",
                    start: "10:30",
                    end: "12:14"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 278,
        title: "Base 278",
        imageUrl: "images/layouts/layout-178.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2781,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=8s6F9uP1D50",
                    start: "12:17",
                    end: "14:40"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 279,
        title: "Base 279",
        imageUrl: "images/layouts/layout-179.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2791,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=8s6F9uP1D50",
                    start: "15:00",
                    end: "16:43"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 280,
        title: "Base 280",
        imageUrl: "images/layouts/layout-180.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2801,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=xwcceWV3e_s",
                    start: "1:54",
                    end: "3:50"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 281,
        title: "Base 281",
        imageUrl: "images/layouts/layout-181.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2811,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=xwcceWV3e_s",
                    start: "4:05",
                    end: "6:53"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 282,
        title: "Base 282",
        imageUrl: "images/layouts/layout-182.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2821,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=xwcceWV3e_s",
                    start: "7:00",
                    end: "9:45"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 283,
        title: "Base 283",
        imageUrl: "images/layouts/layout-183.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2831,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=9Yt7BaLnNds",
                    start: "2:42",
                    end: "4:55"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 284,
        title: "Base 284",
        imageUrl: "images/layouts/layout-184.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2841,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=9Yt7BaLnNds",
                    start: "5:00",
                    end: "6:53"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 285,
        title: "Base 285",
        imageUrl: "images/layouts/layout-185.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2851,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=9Yt7BaLnNds",
                    start: "6:57",
                    end: "9:07"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 286,
        title: "Base 286",
        imageUrl: "images/layouts/layout-186.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2861,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=9Yt7BaLnNds",
                    start: "9:10",
                    end: "11:05"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 287,
        title: "Base 287",
        imageUrl: "images/layouts/layout-187.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2871,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=9Yt7BaLnNds",
                    start: "11:09",
                    end: "13:49"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 288,
        title: "Base 288",
        imageUrl: "images/layouts/layout-188.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2881,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=r5mrRrU7UQg",
                    start: "0:53",
                    end: "3:37"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 289,
        title: "Base 289",
        imageUrl: "images/layouts/layout-189.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2891,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=r5mrRrU7UQg",
                    start: "3:47",
                    end: "5:57"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 290,
        title: "Base 290",
        imageUrl: "images/layouts/layout-190.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2901,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=r5mrRrU7UQg",
                    start: "6:01",
                    end: "8:30"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 291,
        title: "Base 291",
        imageUrl: "images/layouts/layout-191.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2911,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=r5mrRrU7UQg",
                    start: "8:37",
                    end: "10:37"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 292,
        title: "Base 292",
        imageUrl: "images/layouts/layout-192.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2921,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=48yVlwxMoHU",
                    start: "2:55",
                    end: "5:26"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 293,
        title: "Base 293",
        imageUrl: "images/layouts/layout-193.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2931,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=48yVlwxMoHU",
                    start: "5:28",
                    end: "7:35"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 294,
        title: "Base 294",
        imageUrl: "images/layouts/layout-194.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2941,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=48yVlwxMoHU",
                    start: "7:38",
                    end: "10:12"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 295,
        title: "Base 295",
        imageUrl: "images/layouts/layout-195.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2951,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=48yVlwxMoHU",
                    start: "10:15",
                    end: "12:02"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 296,
        title: "Base 296",
        imageUrl: "images/layouts/layout-196.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2961,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=48yVlwxMoHU",
                    start: "12:05",
                    end: "13:30"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 297,
        title: "Base 297",
        imageUrl: "images/layouts/layout-197.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2971,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=48yVlwxMoHU",
                    start: "13:33",
                    end: "15:58"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 298,
        title: "Base 298",
        imageUrl: "images/layouts/layout-198.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2981,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=48yVlwxMoHU",
                    start: "16:00",
                    end: "17:52"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 299,
        title: "Base 299",
        imageUrl: "images/layouts/layout-199.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 2991,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=mSvj3Jmk6Vg",
                    start: "2:00",
                    end: "4:25"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 300,
        title: "Base 300",
        imageUrl: "images/layouts/layout-200.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3001,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=mSvj3Jmk6Vg",
                    start: "4:29",
                    end: "8:20"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 301,
        title: "Base 301",
        imageUrl: "images/layouts/layout-201.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3011,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=mSvj3Jmk6Vg",
                    start: "8:24",
                    end: "11:17"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 302,
        title: "Base 302",
        imageUrl: "images/layouts/layout-202.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3021,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=mSvj3Jmk6Vg",
                    start: "11:22",
                    end: "15:15"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 303,
        title: "Base 303",
        imageUrl: "images/layouts/layout-203.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3031,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=q3c5ZKlG45w",
                    start: "2:54",
                    end: "4:52"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 304,
        title: "Base 304",
        imageUrl: "images/layouts/layout-204.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3041,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=q3c5ZKlG45w",
                    start: "4:57",
                    end: "7:08"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 305,
        title: "Base 305",
        imageUrl: "images/layouts/layout-205.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3051,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=q3c5ZKlG45w",
                    start: "7:18",
                    end: "9:44"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 306,
        title: "Base 306",
        imageUrl: "images/layouts/layout-206.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3061,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=q3c5ZKlG45w",
                    start: "9:50",
                    end: "12:00"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 307,
        title: "Base 307",
        imageUrl: "images/layouts/layout-207.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3071,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=b5UFFLlAMjY",
                    start: "1:31",
                    end: "4:48"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 308,
        title: "Base 308",
        imageUrl: "images/layouts/layout-208.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3081,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=b5UFFLlAMjY",
                    start: "4:52",
                    end: "6:55"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 309,
        title: "Base 309",
        imageUrl: "images/layouts/layout-209.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3091,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=b5UFFLlAMjY",
                    start: "6:59",
                    end: "9:30"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 310,
        title: "Base 310",
        imageUrl: "images/layouts/layout-210.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3101,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=b5UFFLlAMjY",
                    start: "9:33",
                    end: "12:05"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 311,
        title: "Base 311",
        imageUrl: "images/layouts/layout-211.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3111,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=b5UFFLlAMjY",
                    start: "12:09",
                    end: "14:41"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 312,
        title: "Base 312",
        imageUrl: "images/layouts/layout-212.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3121,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=b5UFFLlAMjY",
                    start: "14:44",
                    end: "17:35"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 313,
        title: "Base 313",
        imageUrl: "images/layouts/layout-213.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3131,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=b5UFFLlAMjY",
                    start: "17:42",
                    end: "21:50"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 314,
        title: "Base 314",
        imageUrl: "images/layouts/layout-214.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3141,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=XGE_PxGdSGs",
                    start: "3:00",
                    end: "6:00"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 315,
        title: "Base 315",
        imageUrl: "images/layouts/layout-215.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3151,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=XGE_PxGdSGs",
                    start: "6:17",
                    end: "8:33"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 316,
        title: "Base 316",
        imageUrl: "images/layouts/layout-216.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3161,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=5M2uqqsSXtA",
                    start: "3:45",
                    end: "5:45"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 317,
        title: "Base 317",
        imageUrl: "images/layouts/layout-217.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3171,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=5M2uqqsSXtA",
                    start: "5:50",
                    end: "8:17"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 318,
        title: "Base 318",
        imageUrl: "images/layouts/layout-218.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3181,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=hOFFONQa51o",
                    start: "2:25",
                    end: "4:32"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 319,
        title: "Base 319",
        imageUrl: "images/layouts/layout-219.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3191,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=hOFFONQa51o",
                    start: "4:50",
                    end: "6:48"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 320,
        title: "Base 320",
        imageUrl: "images/layouts/layout-220.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3201,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=ydp7G-Y1WQQ",
                    start: "3:08",
                    end: "6:10"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 321,
        title: "Base 321",
        imageUrl: "images/layouts/layout-221.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3211,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=qvsVA5xXgU4",
                    start: "7:53",
                    end: "10:50"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 322,
        title: "Base 322",
        imageUrl: "images/layouts/layout-222.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3221,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=HOkzkXp_PB4",
                    start: "10:05",
                    end: "12:35"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 323,
        title: "Base 323",
        imageUrl: "images/layouts/layout-223.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3231,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=LF3XXzQKCjY",
                    start: "1:51",
                    end: "4:10"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 324,
        title: "Base 324",
        imageUrl: "images/layouts/layout-224.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3241,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=9jSteQlg-XM",
                    start: "2:30",
                    end: "4:52"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 325,
        title: "Base 325",
        imageUrl: "images/layouts/layout-225.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3251,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=9jSteQlg-XM",
                    start: "5:38",
                    end: "8:03"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 326,
        title: "Base 326",
        imageUrl: "images/layouts/layout-226.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3261,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=9jSteQlg-XM",
                    start: "8:18",
                    end: "10:30"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 327,
        title: "Base 327",
        imageUrl: "images/layouts/layout-227.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3271,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=fH-lXpJ3KZY",
                    start: "3:15",
                    end: "5:41"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 328,
        title: "Base 328",
        imageUrl: "images/layouts/layout-228.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3281,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=fH-lXpJ3KZY",
                    start: "5:48",
                    end: "8:45"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 329,
        title: "Base 329",
        imageUrl: "images/layouts/layout-229.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3291,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=h-Ry5Aew-6c",
                    start: "3:18",
                    end: "5:35"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 330,
        title: "Base 330",
        imageUrl: "images/layouts/layout-230.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3301,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=h-Ry5Aew-6c",
                    start: "6:16",
                    end: "9:08"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 331,
        title: "Base 331",
        imageUrl: "images/layouts/layout-231.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3311,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=h-Ry5Aew-6c",
                    start: "9:12",
                    end: "12:28"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 332,
        title: "Base 332",
        imageUrl: "images/layouts/layout-232.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3321,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=FYzU9lFpwho",
                    start: "8:21",
                    end: "9:25"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 333,
        title: "Base 333",
        imageUrl: "images/layouts/layout-233.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3331,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=FYzU9lFpwho",
                    start: "9:27",
                    end: "10:35"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 334,
        title: "Base 334",
        imageUrl: "images/layouts/layout-234.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3341,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=FYzU9lFpwho",
                    start: "10:37",
                    end: "11:47"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 335,
        title: "Base 335",
        imageUrl: "images/layouts/layout-235.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3351,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=FYzU9lFpwho",
                    start: "11:50",
                    end: "13:35"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 336,
        title: "Base 336",
        imageUrl: "images/layouts/layout-236.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3361,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=NE3ocwBQG-Q",
                    start: "2:05",
                    end: "3:18"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 337,
        title: "Base 337",
        imageUrl: "images/layouts/layout-237.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3371,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=NE3ocwBQG-Q",
                    start: "3:29",
                    end: "4:52"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 338,
        title: "Base 338",
        imageUrl: "images/layouts/layout-238.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3381,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=NE3ocwBQG-Q",
                    start: "4:56",
                    end: "6:38"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 339,
        title: "Base 339",
        imageUrl: "images/layouts/layout-239.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3391,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=NE3ocwBQG-Q",
                    start: "6:40",
                    end: "7:55"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 340,
        title: "Base 340",
        imageUrl: "images/layouts/layout-240.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3401,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=NE3ocwBQG-Q",
                    start: "7:57",
                    end: "9:23"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 341,
        title: "Base 341",
        imageUrl: "images/layouts/layout-241.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3411,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=dJB3gWabxNg",
                    start: "9:09",
                    end: "12:07"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 342,
        title: "Base 342",
        imageUrl: "images/layouts/layout-242.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3421,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=mH_IZABXx_s",
                    start: "2:28",
                    end: "5:39"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 343,
        title: "Base 343",
        imageUrl: "images/layouts/layout-243.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3431,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=mH_IZABXx_s",
                    start: "5:58",
                    end: "8:30"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 344,
        title: "Base 344",
        imageUrl: "images/layouts/layout-244.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3441,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=mH_IZABXx_s",
                    start: "8:45",
                    end: "11:08"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 345,
        title: "Base 345",
        imageUrl: "images/layouts/layout-245.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3451,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=vpCTK6FgP9I",
                    start: "1:57",
                    end: "4:05"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 346,
        title: "Base 346",
        imageUrl: "images/layouts/layout-246.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3461,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=vpCTK6FgP9I",
                    start: "4:09",
                    end: "6:02"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 347,
        title: "Base 347",
        imageUrl: "images/layouts/layout-247.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3471,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=vpCTK6FgP9I",
                    start: "6:05",
                    end: "8:45"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 348,
        title: "Base 348",
        imageUrl: "images/layouts/layout-248.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3481,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=vpCTK6FgP9I",
                    start: "8:49",
                    end: "10:45"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 349,
        title: "Base 349",
        imageUrl: "images/layouts/layout-249.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3491,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=vpCTK6FgP9I",
                    start: "10:49",
                    end: "13:02"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 350,
        title: "Base 350",
        imageUrl: "images/layouts/layout-250.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3501,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=vpCTK6FgP9I",
                    start: "13:15",
                    end: "15:25"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 351,
        title: "Base 351",
        imageUrl: "images/layouts/layout-251.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3511,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=UTyw7SyMGGk",
                    start: "2:12",
                    end: "5:25"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 352,
        title: "Base 352",
        imageUrl: "images/layouts/layout-252.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3521,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=UTyw7SyMGGk",
                    start: "5:43",
                    end: "9:38"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 353,
        title: "Base 353",
        imageUrl: "images/layouts/layout-253.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3531,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=CYRC0xIcAjU",
                    start: "1:55",
                    end: "4:08"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 354,
        title: "Base 354",
        imageUrl: "images/layouts/layout-254.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3541,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=CYRC0xIcAjU",
                    start: "4:14",
                    end: "6:20"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 355,
        title: "Base 355",
        imageUrl: "images/layouts/layout-255.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3551,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=CYRC0xIcAjU",
                    start: "6:25",
                    end: "9:15"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 356,
        title: "Base 356",
        imageUrl: "images/layouts/layout-256.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3561,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=CYRC0xIcAjU",
                    start: "9:20",
                    end: "12:05"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 357,
        title: "Base 357",
        imageUrl: "images/layouts/layout-257.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3571,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=ZeljDGxldJY",
                    start: "1:55",
                    end: "4:45"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 358,
        title: "Base 358",
        imageUrl: "images/layouts/layout-258.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3581,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=ZeljDGxldJY",
                    start: "4:48",
                    end: "7:10"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 359,
        title: "Base 359",
        imageUrl: "images/layouts/layout-259.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3591,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=ZeljDGxldJY",
                    start: "7:14",
                    end: "9:37"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 360,
        title: "Base 360",
        imageUrl: "images/layouts/layout-260.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3601,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=ZeljDGxldJY",
                    start: "9:41",
                    end: "12:25"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 361,
        title: "Base 361",
        imageUrl: "images/layouts/layout-261.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3611,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=ZeljDGxldJY",
                    start: "12:40",
                    end: "15:05"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 362,
        title: "Base 362",
        imageUrl: "images/layouts/layout-262.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3621,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=X6oYboE3MmE",
                    start: "1:50",
                    end: "4:22"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 363,
        title: "Base 363",
        imageUrl: "images/layouts/layout-263.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3631,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=X6oYboE3MmE",
                    start: "4:31",
                    end: "7:00"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 364,
        title: "Base 364",
        imageUrl: "images/layouts/layout-264.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3641,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=X6oYboE3MmE",
                    start: "7:03",
                    end: "9:50"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 365,
        title: "Base 365",
        imageUrl: "images/layouts/layout-265.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3651,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=5qHoAQMKXAI",
                    start: "1:15",
                    end: "4:00"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 366,
        title: "Base 366",
        imageUrl: "images/layouts/layout-266.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3661,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=5qHoAQMKXAI",
                    start: "4:03",
                    end: "6:40"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 367,
        title: "Base 367",
        imageUrl: "images/layouts/layout-267.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3671,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=5qHoAQMKXAI",
                    start: "6:48",
                    end: "9:27"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 368,
        title: "Base 368",
        imageUrl: "images/layouts/layout-268.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3681,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=5qHoAQMKXAI",
                    start: "9:58",
                    end: "12:50"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 369,
        title: "Base 369",
        imageUrl: "images/layouts/layout-269.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3691,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=5qHoAQMKXAI",
                    start: "13:10",
                    end: "15:25"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 370,
        title: "Base 370",
        imageUrl: "images/layouts/layout-270.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3701,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=Wd7-rHTxx8Q",
                    start: "1:24",
                    end: "3:30"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 371,
        title: "Base 371",
        imageUrl: "images/layouts/layout-271.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3711,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=Wd7-rHTxx8Q",
                    start: "3:32",
                    end: "5:48"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 372,
        title: "Base 372",
        imageUrl: "images/layouts/layout-272.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3721,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=Wd7-rHTxx8Q",
                    start: "5:50",
                    end: "8:12"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 373,
        title: "Base 373",
        imageUrl: "images/layouts/layout-273.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3731,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=Wd7-rHTxx8Q",
                    start: "8:15",
                    end: "10:44"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 374,
        title: "Base 374",
        imageUrl: "images/layouts/layout-274.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3741,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=Wd7-rHTxx8Q",
                    start: "10:46",
                    end: "12:38"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 375,
        title: "Base 375",
        imageUrl: "images/layouts/layout-275.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3751,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=Wd7-rHTxx8Q",
                    start: "12:41",
                    end: "14:52"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 376,
        title: "Base 376",
        imageUrl: "images/layouts/layout-276.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3761,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=lkHMqDV8XI4",
                    start: "0:58",
                    end: "3:55"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 377,
        title: "Base 377",
        imageUrl: "images/layouts/layout-277.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3771,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=lkHMqDV8XI4",
                    start: "4:00",
                    end: "6:37"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 378,
        title: "Base 378",
        imageUrl: "images/layouts/layout-278.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3781,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=lkHMqDV8XI4",
                    start: "6:43",
                    end: "9:17"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 379,
        title: "Base 379",
        imageUrl: "images/layouts/layout-279.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3791,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=lkHMqDV8XI4",
                    start: "9:32",
                    end: "12:28"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 380,
        title: "Base 380",
        imageUrl: "images/layouts/layout-280.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3801,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=zylTUqFQ34o",
                    start: "1:15",
                    end: "3:38"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 381,
        title: "Base 381",
        imageUrl: "images/layouts/layout-281.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3811,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=zylTUqFQ34o",
                    start: "3:50",
                    end: "5:55"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 382,
        title: "Base 382",
        imageUrl: "images/layouts/layout-282.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3821,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=zylTUqFQ34o",
                    start: "6:00",
                    end: "8:17"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 383,
        title: "Base 383",
        imageUrl: "images/layouts/layout-283.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3831,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=zylTUqFQ34o",
                    start: "8:24",
                    end: "11:25"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 384,
        title: "Base 384",
        imageUrl: "images/layouts/layout-284.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3841,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=cUij62gdQHU",
                    start: "1:45",
                    end: "4:14"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 385,
        title: "Base 385",
        imageUrl: "images/layouts/layout-285.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3851,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=cUij62gdQHU",
                    start: "4:26",
                    end: "6:19"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 386,
        title: "Base 386",
        imageUrl: "images/layouts/layout-286.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3861,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=cUij62gdQHU",
                    start: "9:02",
                    end: "11:43"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 387,
        title: "Base 387",
        imageUrl: "images/layouts/layout-287.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3871,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=WOtcmutMvRM",
                    start: "3:34",
                    end: "5:55"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 388,
        title: "Base 388",
        imageUrl: "images/layouts/layout-288.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3881,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=WOtcmutMvRM",
                    start: "6:12",
                    end: "9:07"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 389,
        title: "Base 389",
        imageUrl: "images/layouts/layout-289.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3891,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=LQWu_9Xew1Q",
                    start: "3:35",
                    end: "5:17"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 390,
        title: "Base 390",
        imageUrl: "images/layouts/layout-290.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3901,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=LQWu_9Xew1Q",
                    start: "5:20",
                    end: "6:23"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 391,
        title: "Base 391",
        imageUrl: "images/layouts/layout-291.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3911,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=LQWu_9Xew1Q",
                    start: "6:33",
                    end: "8:43"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 392,
        title: "Base 392",
        imageUrl: "images/layouts/layout-292.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3921,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=LQWu_9Xew1Q",
                    start: "8:53",
                    end: "11:23"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 393,
        title: "Base 393",
        imageUrl: "images/layouts/layout-293.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3931,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=CX1WU8LfTVc",
                    start: "2:25",
                    end: "4:42"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 394,
        title: "Base 394",
        imageUrl: "images/layouts/layout-294.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3941,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=CX1WU8LfTVc",
                    start: "4:52",
                    end: "7:25"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 395,
        title: "Base 395",
        imageUrl: "images/layouts/layout-295.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3951,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=CX1WU8LfTVc",
                    start: "7:30",
                    end: "10:25"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 396,
        title: "Base 396",
        imageUrl: "images/layouts/layout-296.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3961,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=CX1WU8LfTVc",
                    start: "11:22",
                    end: "13:27"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 397,
        title: "Base 397",
        imageUrl: "images/layouts/layout-297.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3971,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=6AtIlvjz9uI",
                    start: "11:50",
                    end: "14:25"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 398,
        title: "Base 398",
        imageUrl: "images/layouts/layout-298.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3981,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=MfU_fpJN1Kw",
                    start: "1:47",
                    end: "4:27"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 399,
        title: "Base 399",
        imageUrl: "images/layouts/layout-299.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 3991,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=MfU_fpJN1Kw",
                    start: "10:00",
                    end: "13:53"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 400,
        title: "Base 400",
        imageUrl: "images/layouts/layout-300.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 4001,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=MZHjDSbr5Lk",
                    start: "5:12",
                    end: "7:12"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 401,
        title: "Base 401",
        imageUrl: "images/layouts/layout-301.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 4011,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=MZHjDSbr5Lk",
                    start: "7:14",
                    end: "9:11"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 402,
        title: "Base 402",
        imageUrl: "images/layouts/layout-302.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 4021,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=MZHjDSbr5Lk",
                    start: "9:17",
                    end: "11:45"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 403,
        title: "Base 403",
        imageUrl: "images/layouts/layout-303.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 4031,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=Pz5xdJ8g9CU",
                    start: "1:33",
                    end: "3:41"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 404,
        title: "Base 404",
        imageUrl: "images/layouts/layout-304.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 4041,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=Pz5xdJ8g9CU",
                    start: "5:41",
                    end: "7:38"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 405,
        title: "Base 405",
        imageUrl: "images/layouts/layout-305.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 4051,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=Pz5xdJ8g9CU",
                    start: "7:41",
                    end: "9:28"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 406,
        title: "Base 406",
        imageUrl: "images/layouts/layout-306.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 4061,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=Pz5xdJ8g9CU",
                    start: "9:36",
                    end: "11:41"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 407,
        title: "Base 407",
        imageUrl: "images/layouts/layout-307.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 4071,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=8TQH9pE1suE",
                    start: "7:10",
                    end: "9:45"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 408,
        title: "Base 408",
        imageUrl: "images/layouts/layout-308.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 4081,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=KY-6EndFxiA",
                    start: "0:55",
                    end: "3:17"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 409,
        title: "Base 409",
        imageUrl: "images/layouts/layout-309.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 4091,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=KY-6EndFxiA",
                    start: "3:20",
                    end: "5:55"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 410,
        title: "Base 410",
        imageUrl: "images/layouts/layout-310.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 4101,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=KY-6EndFxiA",
                    start: "6:00",
                    end: "8:33"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 411,
        title: "Base 411",
        imageUrl: "images/layouts/layout-311.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 4111,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=KY-6EndFxiA",
                    start: "8:37",
                    end: "11:05"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 412,
        title: "Base 412",
        imageUrl: "images/layouts/layout-312.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 4121,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=KY-6EndFxiA",
                    start: "11:21",
                    end: "13:18"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 413,
        title: "Base 413",
        imageUrl: "images/layouts/layout-313.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 4131,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=VaRyBm9KJlE",
                    start: "2:08",
                    end: "3:55"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 414,
        title: "Base 414",
        imageUrl: "images/layouts/layout-314.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 4141,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=VaRyBm9KJlE",
                    start: "4:08",
                    end: "6:15"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 415,
        title: "Base 415",
        imageUrl: "images/layouts/layout-315.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 4151,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=VaRyBm9KJlE",
                    start: "6:18",
                    end: "7:57"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 416,
        title: "Base 416",
        imageUrl: "images/layouts/layout-316.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 4161,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=VaRyBm9KJlE",
                    start: "8:01",
                    end: "9:58"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 417,
        title: "Base 417",
        imageUrl: "images/layouts/layout-317.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 4171,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=VaRyBm9KJlE",
                    start: "10:02",
                    end: "11:35"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 418,
        title: "Base 418",
        imageUrl: "images/layouts/layout-318.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 4181,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=VaRyBm9KJlE",
                    start: "11:57",
                    end: "13:38"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 419,
        title: "Base 419",
        imageUrl: "images/layouts/layout-319.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 4191,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=yomMDsASQPA",
                    start: "4:33",
                    end: "6:20"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 420,
        title: "Base 420",
        imageUrl: "images/layouts/layout-320.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 4201,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=JD0XUkgU32I",
                    start: "2:05",
                    end: "4:44"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 421,
        title: "Base 421",
        imageUrl: "images/layouts/layout-321.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 4211,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=JD0XUkgU32I",
                    start: "4:47",
                    end: "7:03"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 422,
        title: "Base 422",
        imageUrl: "images/layouts/layout-322.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 4221,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=JD0XUkgU32I",
                    start: "7:08",
                    end: "9:58"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 423,
        title: "Base 423",
        imageUrl: "images/layouts/layout-323.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 4231,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=ei2y5gW1zXU",
                    start: "1:15",
                    end: "3:37"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 424,
        title: "Base 424",
        imageUrl: "images/layouts/layout-324.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 4241,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=ei2y5gW1zXU",
                    start: "4:01",
                    end: "6:41"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 425,
        title: "Base 425",
        imageUrl: "images/layouts/layout-325.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 4251,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=ei2y5gW1zXU",
                    start: "6:45",
                    end: "9:23"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 426,
        title: "Base 426",
        imageUrl: "images/layouts/layout-326.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 4261,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=ei2y5gW1zXU",
                    start: "9:35",
                    end: "12:12"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 427,
        title: "Base 427",
        imageUrl: "images/layouts/layout-327.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 4271,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=ei2y5gW1zXU",
                    start: "12:20",
                    end: "14:45"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 428,
        title: "Base 428",
        imageUrl: "images/layouts/layout-328.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 4281,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=eaWcWb7KoJU",
                    start: "3:09",
                    end: "5:45"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 429,
        title: "Base 429",
        imageUrl: "images/layouts/layout-329.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 4291,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=eaWcWb7KoJU",
                    start: "5:52",
                    end: "8:19"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 430,
        title: "Base 430",
        imageUrl: "images/layouts/layout-330.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 4301,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=eaWcWb7KoJU",
                    start: "8:22",
                    end: "11:12"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 431,
        title: "Base 431",
        imageUrl: "images/layouts/layout-331.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 4311,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=eaWcWb7KoJU",
                    start: "11:15",
                    end: "13:32"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 432,
        title: "Base 432",
        imageUrl: "images/layouts/layout-332.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 4321,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=eaWcWb7KoJU",
                    start: "13:35",
                    end: "15:30"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 433,
        title: "Base 433",
        imageUrl: "images/layouts/layout-333.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 4331,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=eaWcWb7KoJU",
                    start: "15:50",
                    end: "19:08"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 434,
        title: "Base 434",
        imageUrl: "images/layouts/layout-334.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 4341,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=eaWcWb7KoJU",
                    start: "19:20",
                    end: "20:35"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 435,
        title: "Base 435",
        imageUrl: "images/layouts/layout-335.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 4351,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=UnVZSXRS8Wo",
                    start: "2:14",
                    end: "4:38"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 436,
        title: "Base 436",
        imageUrl: "images/layouts/layout-336.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 4361,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=UnVZSXRS8Wo",
                    start: "4:42",
                    end: "6:05"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
},
    {
        id: 437,
        title: "Base 437",
        imageUrl: "images/layouts/layout-337.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 4371,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=UnVZSXRS8Wo",
                    start: "6:10",
                    end: "8:17"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 438,
        title: "Base 438",
        imageUrl: "images/layouts/layout-338.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 4381,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=UnVZSXRS8Wo",
                    start: "8:20",
                    end: "10:57"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 439,
        title: "Base 439",
        imageUrl: "images/layouts/layout-339.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 4391,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=UnVZSXRS8Wo",
                    start: "11:00",
                    end: "12:35"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 440,
        title: "Base 440",
        imageUrl: "images/layouts/layout-340.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 4401,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=UnVZSXRS8Wo",
                    start: "12:38",
                    end: "15:18"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 441,
        title: "Base 441",
        imageUrl: "images/layouts/layout-341.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 4411,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=UnVZSXRS8Wo",
                    start: "15:22",
                    end: "18:18"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 442,
        title: "Base 442",
        imageUrl: "images/layouts/layout-342.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 4421,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=UnVZSXRS8Wo",
                    start: "18:30",
                    end: "20:45"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 443,
        title: "Base 443",
        imageUrl: "images/layouts/layout-343.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 4431,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=IJzDwr4_R2U",
                    start: "0:55",
                    end: "2:45"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 444,
        title: "Base 444",
        imageUrl: "images/layouts/layout-344.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 4441,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=IJzDwr4_R2U",
                    start: "2:50",
                    end: "4:22"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 445,
        title: "Base 445",
        imageUrl: "images/layouts/layout-345.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 4451,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=IJzDwr4_R2U",
                    start: "4:25",
                    end: "6:17"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 446,
        title: "Base 446",
        imageUrl: "images/layouts/layout-346.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 4461,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=IJzDwr4_R2U",
                    start: "6:21",
                    end: "8:15"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 447,
        title: "Base 447",
        imageUrl: "images/layouts/layout-347.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 4471,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=IJzDwr4_R2U",
                    start: "8:25",
                    end: "9:37"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 448,
        title: "Base 448",
        imageUrl: "images/layouts/layout-348.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 4481,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=IJzDwr4_R2U",
                    start: "9:50",
                    end: "11:19"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 449,
        title: "Base 449",
        imageUrl: "images/layouts/layout-349.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 4491,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=-7_0dGemp28",
                    start: "2:45",
                    end: "4:21"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 450,
        title: "Base 450",
        imageUrl: "images/layouts/layout-350.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 4501,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=-7_0dGemp28",
                    start: "4:23",
                    end: "6:37"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 451,
        title: "Base 451",
        imageUrl: "images/layouts/layout-351.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 4511,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=-7_0dGemp28",
                    start: "6:41",
                    end: "8:17"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 452,
        title: "Base 452",
        imageUrl: "images/layouts/layout-352.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 4521,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=-7_0dGemp28",
                    start: "8:20",
                    end: "10:17"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 453,
        title: "Base 453",
        imageUrl: "images/layouts/layout-353.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 4531,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=-7_0dGemp28",
                    start: "10:30",
                    end: "12:38"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 454,
        title: "Base 454",
        imageUrl: "images/layouts/layout-354.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 4541,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=-7_0dGemp28",
                    start: "12:42",
                    end: "14:38"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 455,
        title: "Base 455",
        imageUrl: "images/layouts/layout-355.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 4551,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=-7_0dGemp28",
                    start: "15:18",
                    end: "17:30"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 456,
        title: "Base 456",
        imageUrl: "images/layouts/layout-356.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 4561,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=0iYES04KUUc",
                    start: "9:20",
                    end: "11:05"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 457,
        title: "Base 457",
        imageUrl: "images/layouts/layout-357.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 4571,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=0iYES04KUUc",
                    start: "17:53",
                    end: "19:38"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 458,
        title: "Base 458",
        imageUrl: "images/layouts/layout-358.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 4581,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=FWlGlzKGRgY",
                    start: "12:12",
                    end: "14:15"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 459,
        title: "Base 459",
        imageUrl: "images/layouts/layout-359.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 4591,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=5x_4Qj1CyzQ",
                    start: "2:49",
                    end: "4:33"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 460,
        title: "Base 460",
        imageUrl: "images/layouts/layout-360.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 4601,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=5x_4Qj1CyzQ",
                    start: "4:41",
                    end: "7:30"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 461,
        title: "Base 461",
        imageUrl: "images/layouts/layout-361.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 4611,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=5x_4Qj1CyzQ",
                    start: "7:38",
                    end: "9:20"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 462,
        title: "Base 462",
        imageUrl: "images/layouts/layout-362.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 4621,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=MNpkTi6-zTE",
                    start: "2:37",
                    end: "5:03"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 463,
        title: "Base 463",
        imageUrl: "images/layouts/layout-363.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 4631,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=MNpkTi6-zTE",
                    start: "5:09",
                    end: "7:23"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 464,
        title: "Base 464",
        imageUrl: "images/layouts/layout-364.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 4641,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=MNpkTi6-zTE",
                    start: "7:46",
                    end: "10:17"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 465,
        title: "Base 465",
        imageUrl: "images/layouts/layout-365.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 4651,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=MNpkTi6-zTE",
                    start: "10:20",
                    end: "12:23"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 466,
        title: "Base 466",
        imageUrl: "images/layouts/layout-366.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 4661,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=MNpkTi6-zTE",
                    start: "12:52",
                    end: "14:37"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 467,
        title: "Base 467",
        imageUrl: "images/layouts/layout-367.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 4671,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=vOtu4nNbToI",
                    start: "3:15",
                    end: "4:45"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 468,
        title: "Base 468",
        imageUrl: "images/layouts/layout-368.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 4681,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=vOtu4nNbToI",
                    start: "4:55",
                    end: "5:28"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 469,
        title: "Base 469",
        imageUrl: "images/layouts/layout-369.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 4691,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=vOtu4nNbToI",
                    start: "5:41",
                    end: "6:53"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 470,
        title: "Base 470",
        imageUrl: "images/layouts/layout-370.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 4701,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=vOtu4nNbToI",
                    start: "7:05",
                    end: "8:03"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 471,
        title: "Base 471",
        imageUrl: "images/layouts/layout-371.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 4711,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=vOtu4nNbToI",
                    start: "8:07",
                    end: "9:33"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 472,
        title: "Base 472",
        imageUrl: "images/layouts/layout-372.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 4721,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=iE6FtN5qrZU",
                    start: "3:42",
                    end: "4:59"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 473,
        title: "Base 473",
        imageUrl: "images/layouts/layout-373.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 4731,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=iE6FtN5qrZU",
                    start: "5:07",
                    end: "6:53"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 474,
        title: "Base 474",
        imageUrl: "images/layouts/layout-374.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 4741,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=iE6FtN5qrZU",
                    start: "7:10",
                    end: "9:47"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 475,
        title: "Base 475",
        imageUrl: "images/layouts/layout-375.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 4751,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=iE6FtN5qrZU",
                    start: "10:09",
                    end: "12:14"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 476,
        title: "Base 476",
        imageUrl: "images/layouts/layout-376.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 4761,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=VWPjAy5eO1Q",
                    start: "3:16",
                    end: "5:02"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 477,
        title: "Base 477",
        imageUrl: "images/layouts/layout-377.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 4771,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=VWPjAy5eO1Q",
                    start: "5:10",
                    end: "6:37"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 478,
        title: "Base 478",
        imageUrl: "images/layouts/layout-378.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 4781,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=VWPjAy5eO1Q",
                    start: "7:52",
                    end: "9:07"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 479,
        title: "Base 479",
        imageUrl: "images/layouts/layout-379.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 4791,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=VWPjAy5eO1Q",
                    start: "9:17",
                    end: "10:02"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 480,
        title: "Base 480",
        imageUrl: "images/layouts/layout-380.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 4801,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=VWPjAy5eO1Q",
                    start: "11:14",
                    end: "12:39"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 481,
        title: "Base 481",
        imageUrl: "images/layouts/layout-381.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 4811,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=PN7vvfJWdJk",
                    start: "3:24",
                    end: "5:20"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 482,
        title: "Base 482",
        imageUrl: "images/layouts/layout-382.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 4821,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=qMZEvin4JOI",
                    start: "1:50",
                    end: "3:10"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 483,
        title: "Base 483",
        imageUrl: "images/layouts/layout-383.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 4831,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=qMZEvin4JOI",
                    start: "3:15",
                    end: "4:50"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 484,
        title: "Base 484",
        imageUrl: "images/layouts/layout-384.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 4841,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=qMZEvin4JOI",
                    start: "5:05",
                    end: "6:20"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 485,
        title: "Base 485",
        imageUrl: "images/layouts/layout-385.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 4851,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=qMZEvin4JOI",
                    start: "8:59",
                    end: "10:40"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 486,
        title: "Base 486",
        imageUrl: "images/layouts/layout-386.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 4861,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=qMZEvin4JOI",
                    start: "10:50",
                    end: "12:03"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 487,
        title: "Base 487",
        imageUrl: "images/layouts/layout-387.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 4871,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=qMZEvin4JOI",
                    start: "12:07",
                    end: "14:23"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 488,
        title: "Base 488",
        imageUrl: "images/layouts/layout-388.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 4881,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=b6qeH6G4j4E",
                    start: "3:38",
                    end: "5:55"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 489,
        title: "Base 489",
        imageUrl: "images/layouts/layout-389.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 4891,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=b6qeH6G4j4E",
                    start: "6:00",
                    end: "7:38"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 490,
        title: "Base 490",
        imageUrl: "images/layouts/layout-390.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 4901,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=b6qeH6G4j4E",
                    start: "7:45",
                    end: "9:45"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 491,
        title: "Base 491",
        imageUrl: "images/layouts/layout-391.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 4911,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=b6qeH6G4j4E",
                    start: "9:55",
                    end: "11:18"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 492,
        title: "Base 492",
        imageUrl: "images/layouts/layout-392.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 4921,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=e4HMghXLz-U",
                    start: "3:45",
                    end: "4:54"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 493,
        title: "Base 493",
        imageUrl: "images/layouts/layout-393.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 4931,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=e4HMghXLz-U",
                    start: "5:02",
                    end: "6:29"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 494,
        title: "Base 494",
        imageUrl: "images/layouts/layout-394.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 4941,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=e4HMghXLz-U",
                    start: "6:32",
                    end: "8:21"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 495,
        title: "Base 495",
        imageUrl: "images/layouts/layout-395.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 4951,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=e4HMghXLz-U",
                    start: "8:32",
                    end: "10:11"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 496,
        title: "Base 496",
        imageUrl: "images/layouts/layout-396.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 4961,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=e4HMghXLz-U",
                    start: "10:23",
                    end: "11:35"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 497,
        title: "Base 497",
        imageUrl: "images/layouts/layout-397.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 4971,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=T3mTrVGFxpw",
                    start: "1:29",
                    end: "2:47"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 498,
        title: "Base 498",
        imageUrl: "images/layouts/layout-398.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 4981,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=T3mTrVGFxpw",
                    start: "2:54",
                    end: "4:22"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 499,
        title: "Base 499",
        imageUrl: "images/layouts/layout-399.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 4991,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=uFjC-_5Sqv8",
                    start: "6:38",
                    end: "9:08"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 500,
        title: "Base 500",
        imageUrl: "images/layouts/layout-400.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 5001,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=pJ5mi3zyPwY",
                    start: "12:10",
                    end: "14:43"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 501,
        title: "Base 501",
        imageUrl: "images/layouts/layout-401.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 5011,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=VomYq0_km8Y",
                    start: "2:35",
                    end: "5:39"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 502,
        title: "Base 502",
        imageUrl: "images/layouts/layout-402.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 5021,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=VomYq0_km8Y",
                    start: "6:34",
                    end: "9:17"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 503,
        title: "Base 503",
        imageUrl: "images/layouts/layout-403.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 5031,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=k8bybv9NwSw",
                    start: "7:52",
                    end: "9:15"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 504,
        title: "Base 504",
        imageUrl: "images/layouts/layout-404.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 5041,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=eMl9qukkBuE",
                    start: "2:10",
                    end: "3:52"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 505,
        title: "Base 505",
        imageUrl: "images/layouts/layout-405.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 5051,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=eMl9qukkBuE",
                    start: "4:17",
                    end: "6:00"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 506,
        title: "Base 506",
        imageUrl: "images/layouts/layout-406.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 5061,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=eMl9qukkBuE",
                    start: "8:50",
                    end: "10:10"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 507,
        title: "Base 507",
        imageUrl: "images/layouts/layout-407.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 5071,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=eMl9qukkBuE",
                    start: "10:15",
                    end: "11:50"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 508,
        title: "Base 508",
        imageUrl: "images/layouts/layout-408.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 5081,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=YpUB6nuhs5Y",
                    start: "4:45",
                    end: "6:50"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 509,
        title: "Base 509",
        imageUrl: "images/layouts/layout-409.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 5091,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=YpUB6nuhs5Y",
                    start: "7:10",
                    end: "7:55"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 510,
        title: "Base 510",
        imageUrl: "images/layouts/layout-410.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 5101,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=YpUB6nuhs5Y",
                    start: "8:00",
                    end: "9:35"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 511,
        title: "Base 511",
        imageUrl: "images/layouts/layout-411.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 5111,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=0TpK71SkfrE",
                    start: "9:00",
                    end: "11:02"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    },
    {
        id: 512,
        title: "Base 512",
        imageUrl: "images/layouts/layout-412.jpg",
        categories: [],
        defence: {},
        attacks: [
            {
                id: 5121,
                name: "Attack 1",
                details: {
                    videoUrl:
                        "https://www.youtube.com/watch?v=0TpK71SkfrE",
                    start: "11:23",
                    end: "14:00"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    }
    // append new bases here
];
export default LAYOUT_DATA;
