const model = {
    app: {
        pages: ['frontPage', 'addRecipePage', 'editRecipePage', 'sortPage', 'recipePage']
    },

    input: {
        frontPage: {
            listView: false,
            searchField: '', 
        },

        editRecipePage: {
            id: null, 
            title: '',
            image: null,
            difficulty: '',
            timeSpent: [0, 1, 2, 3],
            instruction: [''],
            instructionImg: [''],
            ingredient: [''],
            ingredientCount: [null],
            portionCount: [null],
        },
        
        addRecipePage: {
            id: null, 
            title: '',
            image: null,
            difficulty: '',
            timeSpent: [0, 1, 2, 3],
            instruction: [''],
            instructionImg: [''],
            ingredient: [''],
            ingredientCount: [null],
            portionCount: [null],
        },

        recipePage: {
            portionCount: [null],
            recipeID: 202,
        },

        sortPage: {
            ingredientCheckList: {
                ingredient: {
                    egg: false,
                    mel: false,
                    gjær: false,
                    laks: false,
                    ris: false,
                    grønnsaker: false,
                    biff: false,
                    melk: false,
                    sukker: false,
                },
            },
            timeCheckList: {
                underThirtyMinutes : false,
                thirtyMinutesToOneHour : false,
                oneHourtoTwoHours : false,
                twoHoursPlus : false,
            },
            difficultyCheckList: {
                easy : false,
                average : false,
                difficult : false,
            }  
        }
    },
    // data
    data: {
        recipes: [
            {
                id: 201,
                title: 'Taco',
                image: 'img/taco.jpg',
                difficulty: "easy",
                timeSpent: 0,
                instruction: ['Kutt grønnsaker i båter', 'Stek kjøttdeig'],
                instructionImg: ['bilde av kuttet grønnsak.png'],
                ingredient: ['løk', 'mel', 'vann'],
                ingredientCount: [2, 400, 0.8],
                ingredientUnit: ['stk', 'g', 'l'],
                portionCount: 1,
            },
            {
                id: 202,
                title: 'Pasta Carbonara',
                image: 'img/PastaCarbonara.jpg',
                difficulty: "average",
                timeSpent: 1,
                instruction: ['Kok pasta', 'Stek bacon og hvitløk', 'Bland egg og ost'],
                instructionImg: ['bilde av pasta', 'bilde av stekt bacon'],
                ingredient: ['pasta', 'bacon', 'egg', 'parmesanost'],
                ingredientCount: [200, 100, 2, 50],
                ingredientUnit: ['g', 'g', 'stk', 'g'],
                portionCount: 1,
            },
            {
                id: 203,
                title: 'Pad Thai',
                image: 'img/PadThai.jpg',
                difficulty: "difficult",
                timeSpent: 2,
                instruction: ['Legg risnudler i lunkent vann i 5-15 minutter', 'Bland sammen fiskesaus, tamarindsaus, sukker, østerssaus og chilipulver i en liten skål, sett sausen til side.', 'Finhakk rødløk og hvitløk, skjær tofu i terninger og finsnitt vårløk. '],
                instructionImg: ['bilde av pasta', 'bilde av stekt bacon'],
                ingredient: ['risnudler', 'fiskesaus (asiatisk)', 'tamarindsaus', 'sukker'],
                ingredientCount: [200, 2, 2, 1],
                ingredientUnit: ['g', 'ss', 'ss', 'ss'],
                portionCount: 1,
            },
        ]
    },
};


