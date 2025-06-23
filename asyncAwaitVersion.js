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

async function doSummerChores(name) {
    try {
        console.log(await mowYard(name));
        console.log(await weedEat(name));
        console.log(await trimHedges(name));
        console.log(await collectWood(name));
        console.log(await waterGarden(name));
    }
    catch(error) {
        console.error(error);
    }
    
}

//

doSummerChores("Jillian");