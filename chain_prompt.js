function toKebabCase(str) {
    // Step 1: Lowercase and replace spaces with hyphens
    let kebab = str.toLowerCase().replace(/\s+/g, '-');

    // Step 2: Handle camelCase and PascalCase
    kebab = str
        .replace(/([a-z0-9])([A-Z])/g, '$1-$2') // insert hyphen between lower/number and upper
        .replace(/\s+/g, '-') // replace spaces with hyphens
        .toLowerCase();

    // Step 3: Remove non-alphanumeric/hyphen, collapse multiple hyphens, trim hyphens
    kebab = kebab
        .replace(/[^a-z0-9-]/g, '')      // remove invalid chars
        .replace(/-+/g, '-')             // collapse multiple hyphens
        .replace(/^-+|-+$/g, '');        // trim leading/trailing hyphens

    return kebab;
}

// Example usage:
console.log(toKebabCase('Hello World')); // 'hello-world'
console.log(toKebabCase('camelCaseExample')); // 'camel-case-example'
console.log(toKebabCase('PascalCaseExample')); // 'pascal-case-example'
console.log(toKebabCase('This is a Test!@#')); // 'this-is-a-test'