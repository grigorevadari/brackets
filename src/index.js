module.exports = function check(str, bracketsConfig) {
    const stack = [];
    const existBracket = {};
    for(let j = 0; j < bracketsConfig.length; j += 1) {
        existBracket[bracketsConfig[j][0]] = bracketsConfig[j][1];
    }

    stack.push(str.charAt(0));

    for(let i = 1; i < str.length; i += 1) {
        if(str.charAt(i) === existBracket[stack[stack.length - 1]]) {
            stack.pop();
        } else {
            stack.push(str.charAt(i));
        }
    }
    return stack.length <= 0;

};
