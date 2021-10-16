function licenceTest() {
    const { Licence } = require("../index")

    const token = new Licence().gen()

return token;
}

function licenceTestValue() {
    const { Licence } = require("../index")

    const licence = new Licence({
        keyOptions: {
            useNumbers: true,
            useSymbols: true,
            caps: "mix",
        },
        licenceOptions: {
            prefix: "KEYGEN",
            partSeparator: "_",
            useParts: true,
            numberOfParts: 5,
            minPartLength: 3,
            maxPartLength: 5,
            extras: ["KEYGEN"]
        }
    }).gen()

return licence;
}
module.exports = {
    licenceTest,
    licenceTestValue
};