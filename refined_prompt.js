/**
 * Converts a given string to camelCase format.
 *
 * The function normalizes the input by:
 * - Trimming whitespace from both ends.
 * - Replacing all whitespace, hyphens, and underscores with a single space.
 * - Removing all non-alphanumeric characters except spaces.
 * - Splitting the string into words.
 * - Lowercasing the first word and capitalizing the first letter of subsequent words.
 * - Concatenating the words without spaces.
 *
 * @param {string} input - The string to convert to camelCase.
 * @returns {string} The camelCase version of the input string.
 * @throws {Error} If the input is null or undefined.
 * @throws {Error} If the input is not a string.
 *
 * @example
 * toCamelCase("hello world"); // returns "helloWorld"
 * toCamelCase("my-variable_name"); // returns "myVariableName"
 * toCamelCase(" "); // returns ""
 */

/**
 * Converts a given string to dot.case format.
 *
 * The function normalizes the input by:
 * - Trimming whitespace from both ends.
 * - Replacing all whitespace, hyphens, and underscores with a single space.
 * - Removing all non-alphanumeric characters except spaces.
 * - Splitting the string into words.
 * - Lowercasing all words.
 * - Joining the words with dots ('.').
 *
 * @param {string} input - The string to convert to dot.case.
 * @returns {string} The dot.case version of the input string.
 * @throws {Error} If the input is null or undefined.
 * @throws {Error} If the input is not a string.
 *
 * @example
 * toDotCase("hello world"); // returns "hello.world"
 * toDotCase("my-variable_name"); // returns "my.variable.name"
 * toDotCase(" "); // returns ""
 */
function toCamelCase(input) {
    if (input === null || input === undefined) {
        throw new Error("Input cannot be null or undefined");
    }
    if (typeof input !== "string") {
        throw new Error("Input must be a string");
    }

    const trimmed = input.trim();
    if (trimmed === "") {
        return "";
    }

    // Replace all separators with spaces, remove other non-alphanumerics
    const normalized = trimmed
        .replace(/[\s\-_]+/g, " ") // normalize separators to spaces
        .replace(/[^a-zA-Z0-9 ]/g, ""); // remove non-alphanumerics except spaces

    const words = normalized.split(" ").filter(Boolean);

    if (words.length === 0) {
        return "";
    }

    return words
        .map((word, idx) => {
            if (idx === 0) {
                return word.toLowerCase();
            }
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join("");
}

// Example usage:
console.log(toCamelCase("hello world")); // "helloWorld"
console.log(toCamelCase("my-variable_name")); // "myVariableName"
console.log(toCamelCase(" ")); // ""
toCamelCase(123); // throws "Input must be a string"
toCamelCase(null); // throws "Input cannot be null or undefined"
function toDotCase(input) {
    if (input === null || input === undefined) {
        throw new Error("Input cannot be null or undefined");
    }
    if (typeof input !== "string") {
        throw new Error("Input must be a string");
    }

    const trimmed = input.trim();
    if (trimmed === "") {
        return "";
    }

    // Replace all separators with spaces, remove other non-alphanumerics
    const normalized = trimmed
        .replace(/[\s\-_]+/g, " ") // normalize separators to spaces
        .replace(/[^a-zA-Z0-9 ]/g, ""); // remove non-alphanumerics except spaces

    const words = normalized.split(" ").filter(Boolean);

    if (words.length === 0) {
        return "";
    }

    return words.map(word => word.toLowerCase()).join(".");
}

// Example usage:
console.log(toDotCase("hello world")); // "hello.world"
console.log(toDotCase("my-variable_name")); // "my.variable.name"
console.log(toDotCase(" ")); // ""
toDotCase(123); // throws "Input must be a string"
toDotCase(null); // throws "Input cannot be null or undefined"
