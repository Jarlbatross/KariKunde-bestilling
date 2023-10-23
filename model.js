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
            recipeID: 201,
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

    recipes: 
            {
            id: 201, 
            title: 'Taco',
            image: 'img=src',
            difficulty: [1],
            timeSpent: [0],
            instruction: ['Kutt grønnsaker i båter', 'stek kjøttdeig'],
            instructionImg: ['bilde av kuttet grønnsak.png'],
            ingredient: ['løk','mel','melk',],
            ingredientCount: [2, 400],
            portionCount: 2,
            
        },
        
    }
}


