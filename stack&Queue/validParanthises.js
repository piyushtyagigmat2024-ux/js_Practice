const str = '(){}()';

function validparanthises(str){
    const chars = str.split('');
    let stack = [];
    for (let i = 0; i < chars.length; i++) {
        if (chars[i] === '[' || chars[i] === '(' || chars[i] === '{') {
            stack.push(chars[i]);
        } else {
            const top = stack.pop();
            if (
                !top ||
                (top === '[' && chars[i] !== ']') ||
                (top === '(' && chars[i] !== ')') ||
                (top === '{' && chars[i] !== '}')
            ) {
                return false;
            }
        }
    }
    return stack.length === 0;
}

console.log(validparanthises(str));