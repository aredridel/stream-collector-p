const collect = require('stream-collector');

module.exports = function collectAsPromise(stream) {
    return new Promise((y, n) => collect(stream, (err, list) => err ? n(err) : y(list)));
}
