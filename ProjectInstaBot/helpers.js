module.exports = debug;

function  debug (obj = {}) {
    return JSON.stringify(obj, null, 4)
}

