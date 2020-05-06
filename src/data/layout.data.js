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
                        "https://www.youtube.com/watch?v=WylJMEQ0M5k&list=PLWCehvgfrJN7h4wPWJVr9b1H7fOS9nv4W",
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
                        "https://www.youtube.com/watch?v=WylJMEQ0M5k&list=PLWCehvgfrJN7h4wPWJVr9b1H7fOS9nv4W",
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
                        "https://www.youtube.com/watch?v=WylJMEQ0M5k&list=PLWCehvgfrJN7h4wPWJVr9b1H7fOS9nv4W",
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
                        "https://www.youtube.com/watch?v=WylJMEQ0M5k&list=PLWCehvgfrJN7h4wPWJVr9b1H7fOS9nv4W",
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
                        "https://www.youtube.com/watch?v=WylJMEQ0M5k&list=PLWCehvgfrJN7h4wPWJVr9b1H7fOS9nv4W",
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
                        "https://www.youtube.com/watch?v=1QP343i4jWk&list=PL1zrz_Vs08LTK4iLdulktEge9bVDmGfqX&index=5&t=814s",
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
                        "https://www.youtube.com/watch?v=1QP343i4jWk&list=PL1zrz_Vs08LTK4iLdulktEge9bVDmGfqX&index=5&t=814s",
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
                        "https://www.youtube.com/watch?v=1QP343i4jWk&list=PL1zrz_Vs08LTK4iLdulktEge9bVDmGfqX&index=5&t=814s",
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
                        "https://www.youtube.com/watch?v=1QP343i4jWk&list=PL1zrz_Vs08LTK4iLdulktEge9bVDmGfqX&index=5&t=814s",
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
                        "https://www.youtube.com/watch?v=1QP343i4jWk&list=PL1zrz_Vs08LTK4iLdulktEge9bVDmGfqX&index=5&t=814s",
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
                        "https://www.youtube.com/watch?v=1QP343i4jWk&list=PL1zrz_Vs08LTK4iLdulktEge9bVDmGfqX&index=5&t=814s",
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
                        "https://www.youtube.com/watch?v=R9A8SYmIrEM&list=PL1zrz_Vs08LTK4iLdulktEge9bVDmGfqX&index=6&t=0s",
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
                        "https://www.youtube.com/watch?v=R9A8SYmIrEM&list=PL1zrz_Vs08LTK4iLdulktEge9bVDmGfqX&index=6&t=0s",
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
                        "https://www.youtube.com/watch?v=R9A8SYmIrEM&list=PL1zrz_Vs08LTK4iLdulktEge9bVDmGfqX&index=6&t=0s",
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
                        "https://www.youtube.com/watch?v=R9A8SYmIrEM&list=PL1zrz_Vs08LTK4iLdulktEge9bVDmGfqX&index=6&t=0s",
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
                        "https://www.youtube.com/watch?v=R9A8SYmIrEM&list=PL1zrz_Vs08LTK4iLdulktEge9bVDmGfqX&index=6&t=0s",
                    start: "9:12",
                    end: "11:02"
                },
                troops: {},
                spells: {},
                clanCastle: {},
                categories: [],
            }
        ]
    }
];
export default LAYOUT_DATA;
