const exercise1 = {
    method1: () => {
        return 1;
    },

    method2: () => {
        return 2;
    },

    method3: (x) => {
        if (x) {
            return exercise1.method1();
        } else {
            return exercise1.method2();
        } 
    },
}

module.exports = exercise1;
