/**
 * Creates an object with methods to generate Powerball lottery numbers.
 * 
 * @returns {Object} An object containing the following methods:
 * 
 * - `whiteBallDrawing(min: number, max: number): number[]`  
 *   Generates an array of 5 random white ball numbers within the specified range (default: 1 to 69).
 * 
 * - `powerBallDrawing(min: number, max: number): number`  
 *   Generates a single random Power Ball number within the specified range (default: 1 to 26).
 * 
 * - `pickMessage(): string`  
 *   Generates a message string containing the drawn white ball numbers and the Power Ball number.
 */
function createPowerBallNumbers() {
    return {
        // Generate 5 white balls with random numbers from 1 to 69
        whiteBallDrawing(min = 1, max = 69) {
            const whiteBallArray = [];
            for (let i = 0; i < 5; i++) {
                let randomNumber;
                do {
                    randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
                } while (whiteBallArray.includes(randomNumber));
                whiteBallArray.push(randomNumber);
            }
            return whiteBallArray;
        },

        // Generate a single Power Ball number from 1 to 26
        powerBallDrawing(min = 1, max = 26) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },

        pickMessage(whiteBalls, powerBall) {
            return `Your White Ball picks for the day are: ${whiteBalls.join(", ")}. Your Power Ball number is: ${powerBall}.`;
        }
    };
}

const powerBallGenerator = createPowerBallNumbers();
const powerBallResults = []; // Array to store results of each generated object

for (let i = 0; i < 1; i++) { // Adjust the iteration count as needed
    const whiteBalls = powerBallGenerator.whiteBallDrawing();
    const powerBall = powerBallGenerator.powerBallDrawing();
    const message = powerBallGenerator.pickMessage(whiteBalls, powerBall);

    // Store the results in the array
    powerBallResults.push({
        whiteBalls,
        powerBall,
        message
    });

    // Consolidated log statement
    console.log(`Result ${i + 1}: White Balls: ${whiteBalls.join(", ")}, Power Ball: ${powerBall}, Message: ${message}`);
}

// Optionally, return the array of results
console.log("All Results:", powerBallResults);