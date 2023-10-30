const model = {
    app: {
        pages: ['frontPage', 'addRecipePage', 'sortPage', 'recipePage']
    },

    input: {

        frontPage: {
            listView: false,
            searchField: '', 
        },
        
        addRecipePage: {
            id: null, 
            title: '',
            image: null,
            difficulty: [0, 1, 2],
            timeSpent: [0, 1, 2, 3],
            instruction: [''],
            instructionImg: [''],
            ingredient: [''],
            ingredientCount: [null],
            portionIndex: null,
        },

        recipePage: {
            portionCount: null,
            recipeID: 202,
        },

        sortPage: {
            ingredientCheckList: {
                ingredient: ['egg','mel','gjær','laks','ris','grønnsaker','biff','melk','sukker'],
                checkBox: true
            },
            timeCheckList: {
                timeSpent: [0, 1, 2, 3],
                checkBox: true,
            },
            difficultyCheckList: {
                difficulty: [0, 1, 2],
                selected: true,
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
                difficulty: [1],
                timeSpent: [0],
                instruction: ['Kutt grønnsaker i båter', 'Stek kjøttdeig'],
                instructionImg: ['bilde av kuttet grønnsak.png'],
                ingredient: ['løk', 'mel', 'vann'],
                ingredientCount: [2, 400, 0.8],
                ingredientUnit: ['stk', 'g', 'l'],
                portionCount: 2,
            },
            {
                id: 202,
                title: 'Pasta Carbonara',
                image: 'img/PastaCarbonara.jpg',
                difficulty: [0],
                timeSpent: [1],
                instruction: ['Kok pasta', 'Stek bacon og hvitløk', 'Bland egg og ost'],
                instructionImg: ['bilde av pasta', 'bilde av stekt bacon'],
                ingredient: ['pasta', 'bacon', 'egg', 'parmesanost'],
                ingredientCount: [200, 100, 2, 50],
                ingredientUnit: ['g', 'g', 'stk', 'g'],
                portionCount: 4,
            },
            {
                id: 203,
                title: 'Pad Thai',
                image: 'img/PadThai.jpg',
                difficulty: [2],
                timeSpent: [2],
                instruction: ['Legg risnudler i lunkent vann i 5-15 minutter', 'Bland sammen fiskesaus, tamarindsaus, sukker, østerssaus og chilipulver i en liten skål, sett sausen til side.', 'Finhakk rødløk og hvitløk, skjær tofu i terninger og finsnitt vårløk. '],
                instructionImg: ['bilde av pasta', 'bilde av stekt bacon'],
                ingredient: ['risnudler', 'fiskesaus (asiatisk)', 'tamarindsaus', 'sukker'],
                ingredientCount: [200, 2, 2, 1],
                ingredientUnit: ['g', 'ss', 'ss', 'ss'],
                portionCount: 2,
            },
        ]
    },
};


