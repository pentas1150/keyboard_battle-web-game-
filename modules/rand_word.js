exports.randWord = length => {
    let str = "";

    for (let i = 0; i < length; ++i) {
        str += String.fromCharCode(44031 + Math.ceil(11172 * Math.random()));
    }

    return str;
};
