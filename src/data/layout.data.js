const LAYOUT_DATA = [
    {
        id: 123,
        title: "Magic rectangle",
        imageUrl: "images/layouts/layout-123.jpg",
        categories: ["symmetric", "rectangle", "anti-air", "single-inferno"],
        defence: {
            queen: 70,
            king: 60,
            archer: 20,
            castleTroops: {
                electroDragon: 1,
                balls: 3
            }
        },
        attacks: [
            {
                id: 101,
                name: "Killing riders",
                details:
                    {
                        videoUrl: "https://www.youtube.com/watch?v=WylJMEQ0M5k&list=PLWCehvgfrJN7h4wPWJVr9b1H7fOS9nv4W",
                        start: "1:55",
                        end: "4:00"
                    },
                troops: {
                    hogRiders: 15,
                    wizards: 4,

                },
                categories: ["land", "queen power"]
            },
            {
                id: 202,
                name: "Air death",
                details:
                    {
                        videoUrl: "https://www.youtube.com/watch?v=WylJMEQ0M5k&list=PLWCehvgfrJN7h4wPWJVr9b1H7fOS9nv4W",
                        start: "1:55",
                        end: "4:00"
                    },
                troops: {
                    electroDragons: 7,
                    balls: 10,

                },
                categories: ["air", "break the circle"]
            }
        ]
    }
];

export default LAYOUT_DATA;
