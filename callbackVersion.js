//FUNCTIONS//

function mowYard(name, callback) {

    setTimeout(() => {
        console.log(`${name} mowed the yard.`);
        callback();
    }, 2000);

}

function weedEat(name, callback) {
    
    const randomNumber = Math.floor(Math.random() * 10);

    if (randomNumber > 1) {
        setTimeout(() => {
            console.log(`${name} finished using the weed eater.`);
            callback();
        }, 1500);
    } else {
        console.log(`${name} fell asleep after mowing the yard.`);
    }
    
}

function trimHedges(name, callback) {
    
    const randomNumber = Math.floor(Math.random() * 10);

    if (randomNumber > 2) {
        setTimeout(() => {
            console.log(`${name} finished trimming the hedges.`);
            callback();
        }, 1000);
    } else {
        console.log(`${name} fell asleep after weed eating the yard.`);
    }
    
}

function collectWood(name, callback) {
    
    const randomNumber = Math.floor(Math.random() * 10);

    if (randomNumber > 3) {
        setTimeout(() => {
            console.log(`${name} finished collecting wood.`);
            callback();
        }, 2500);
    } else {
        console.log(`${name} fell asleep after trimming the hedges.`);
    }
    
}

function waterGarden(name, callback) {
    
    const randomNumber = Math.floor(Math.random() * 10);

    if (randomNumber > 4) {
        setTimeout(() => {
            console.log(`${name} finished watering the garden.`);
            callback();
        }, 500);
    } else {
        console.log(`${name} fell asleep after collecting wood.`);
    }
    
}

function doSummerChores(name) {
    mowYard(name, () => {
        weedEat(name, () => {
            trimHedges(name, () => {
                collectWood(name, () => {
                    waterGarden(name, () => {
                        console.log(`${name} finished all their chores!`);
                    })
                })
            })
        })
    })
}

//

doSummerChores("Jillian");