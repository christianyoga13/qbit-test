// Soal Case 1
const fruits = [
    {
        fruitId: 1,
        fruitName: 'Apel',
        fruitType: 'IMPORT',
        stock: 10
    },
    {
        fruitId: 2,
        fruitName: 'Kurma',
        fruitType: 'IMPORT',
        stock: 20
    },
    {
        fruitId: 3,
        fruitName: 'apel',
        fruitType: 'IMPORT',
        stock: 50
    },
    {
        fruitId: 4,
        fruitName: 'Manggis',
        fruitType: 'LOCAL',
        stock: 100
    },
    {
        fruitId: 5,
        fruitName: 'Jeruk Bali',
        fruitType: 'LOCAL',
        stock: 10
    },
    {
        fruitId: 5,
        fruitName: 'KURMA',
        fruitType: 'IMPORT',
        stock: 20
    },
    {
        fruitId: 5,
        fruitName: 'Salak',
        fruitType: 'LOCAL',
        stock: 150
    }
];

// No 1
function getFruits(fruits) {
    return [...new Set(fruits.map(fruit => fruit.fruitName.toLowerCase()))].sort();
}

// No 2
function getfruitTypes(fruits) {
    return fruits.reduce((result, fruit) => {
        const type = fruit.fruitType;
        if (!result[type]) {
            result[type] = [];
        }
        const fruitName = fruit.fruitName.toLowerCase();
        if (!result[type].includes(fruitName)) {
            result[type].push(fruitName);
        }
        return result;
    }, {});
}

// No 3
function getStockFruits(fruits) {
    return fruits.reduce((result, fruit) => {
        const type = fruit.fruitType;
        if (!result[type]) {
            result[type] = 0;
        }
        result[type] += fruit.stock;
        return result;
    }, {});
}

console.log(getFruits(fruits));
console.log(getfruitTypes(fruits));
console.log(getStockFruits(fruits));