const { keyTest, keyTestValue } = require("./key")
const { tokenTest, tokenTestValue } = require("./token")
const { licenceTest, licenceTestValue } = require("./licence")

async function test() {
    console.log("Starting tests:")
    console.log("[KEY] - 🔄 Test Ongoing...")
    try {
        const keyTestResult = await keyTestValue()
        console.log(`[KEY] - ✅ Test Passed (output: ${keyTestResult})`)
    } catch (error) {
        console.log(`[KEY] - ❌ Test Failed (error: ${error})`)
        console.log(error)
    }
    console.log("[TOKEN] - 🔄 Test Ongoing...")
    try {
        const tokenTestResult = await tokenTestValue()
        console.log(`[TOKEN] - ✅ Test Passed (output: ${tokenTestResult})`)
    } catch (error) {
        console.log(`[TOKEN] - ❌ Test Failed (error: ${error})`)
        console.log(error)
    }
    console.log("[LICENCE] - 🔄 Test Ongoing...")
    try {
        const licenceTestResult = await licenceTestValue()
        console.log(`[LICENCE] - ✅ Test Passed (output: ${licenceTestResult})`)
    } catch (error) {
        console.log(`[LICENCE] - ❌ Test Failed (error: ${error})`)
        console.log(error)
    }
}

test();