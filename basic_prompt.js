function toCamelCase(str) {
    return str
        .split(/[\s-_]+/)
        .map((word, index) => {
            if (index === 0) {
                return word.toLowerCase();
            }
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join('');
}

// Example usage:
console.log(toCamelCase("hello world")); // "helloWorld"
console.log(toCamelCase("my-variable_name")); // "myVariableName"