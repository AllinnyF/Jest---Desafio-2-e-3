const exercise2 = {
    isNumber2: (x) => {
        return 2 === x;
    },

    mainMethod: (x) => {
        return exercise2.isNumber2(3)
    },
}

module.exports = exercise2;
