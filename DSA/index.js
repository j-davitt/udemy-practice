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


const canConstruct = function(ransomNote, magazine) {
    // iterate over ransomeNote and make sure the letter exists in magazine. hashmap?
    // let letters = magazine.split('');
    // for(let i = 0; i < ransomNote.length; i++){
    //     let char = ransomNote[i];
    //     let tracker = letters.indexOf(char);
    //     if(tracker === -1){
    //         return false;
    //     }
    //     letters.splice(tracker, 1);
    // }
    // return true;

    let map1 = new Map();
    for(let i = 0; i < magazine.length; i++) {
        if(map1.has(magazine[i])) {
            map1.set(magazine[i], map1.get(magazine[i]) + 1)
        } else {
            map1.set(magazine[i], 1)
        }
    }
    for(let i = 0; i < ransomNote.length; i++) {
        console.log(ransomNote[i]);
        if(map1.get(ransomNote[i])) {
            map1.set(ransomNote[i], map1.get(ransomNote[i]) - 1)
            console.log(map1.get(ransomNote[i]));
        } else {
            return false;
        }
    }
    return true;
}

console.log(canConstruct('aa', 'aab')) // true