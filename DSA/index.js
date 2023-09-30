function charCount(str) {
    let result = {};
    for (let char of str) {
        char = char.toLowerCase();
        if (/[a-z0-9]/.test(char)) {
            // if letter exists in object, increment(pre-increment operator), otherwise set to 1
            result[char] = ++result[char] || 1;
        }
    }
    return result;
}