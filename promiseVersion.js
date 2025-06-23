//FUNCTIONS//

function mowYard(name) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve(`${name} mowed the yard.`);
        }, 2000);

    });

}

function weedEat(name) {
    
    const randomNumber = Math.floor(Math.random() * 10);

    return new Promise((resolve, reject) => {

        if (randomNumber > 1) {
            setTimeout(() => {
                resolve(`${name} finished using the weed eater.`);
            }, 1500);
        } else {
            reject(`${name} fell asleep after mowing the yard.`);
        }

    });

    
}

function trimHedges(name) {
    
    const randomNumber = Math.floor(Math.random() * 10);

    return new Promise((resolve, reject) => {

        if (randomNumber > 2) {
            setTimeout(() => {
                resolve(`${name} finished trimming the hedges.`);
            }, 1000);
        } else {
            reject(`${name} fell asleep after weed eating the yard.`);
        }

    });
    
}

function collectWood(name) {
    
    const randomNumber = Math.floor(Math.random() * 10);

    return new Promise((resolve, reject) => {

        if (randomNumber > 3) {
            setTimeout(() => {
                resolve(`${name} finished collecting wood.`);
            }, 2500);
        } else {
            reject(`${name} fell asleep after trimming the hedges.`);
        }

    });

}

function waterGarden(name) {
    
    const randomNumber = Math.floor(Math.random() * 10);

    return new Promise((resolve, reject) => {

        if (randomNumber > 4) {
            setTimeout(() => {
                resolve(`${name} finished watering the garden.`);
        }, 500);
        } else {
            reject(`${name} fell asleep after collecting wood.`);
        }
    });
    
}

function doSummerChores(name) {
    mowYard(name).then(value => {console.log(value); return weedEat(name)})
    .then(value => {console.log(value); return trimHedges(name)})
    .then(value => {console.log(value); return collectWood(name)})
    .then(value => {console.log(value); return waterGarden(name)})
    .then(value => {console.log(value); console.log(`${name} finished all their chores!`)})
    .catch(error => console.error(error));
}

//

doSummerChores("Jillian");