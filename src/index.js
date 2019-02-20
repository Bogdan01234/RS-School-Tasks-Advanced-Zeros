module.exports = function getZerosCount(number, base) {
    let calculationNumber = number,
        staticNumber,
        baseSystem = base,
        countBase = 0,
        countNumber;

    for (let i = 2; i <= base; i++) {
        if (baseSystem % i == 0) {
            countBase = 0;
            while (baseSystem % i == 0) {
                countBase++;
                baseSystem = Math.floor(baseSystem / i);
            }
            countNumber = 0;
            staticNumber = number;
            while (staticNumber / i > 0) {
                countNumber += Math.floor(staticNumber / i);
                staticNumber = Math.floor(staticNumber / i);
            }
            if (calculationNumber > countNumber / countBase) {
                calculationNumber = countNumber / countBase;
            }
        }
    }
    return Math.floor(calculationNumber);
};
