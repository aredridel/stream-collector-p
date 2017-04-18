const tape = require('tape');
const through2 = require('through2');

const asP = require('./');

tape.test('works?', t => {
    const stream = through2.obj();

    asP(stream).then(list => {
        t.deepEqual(list, [1, 2, 3]);
        t.end();
    });

    stream.write(1);
    stream.write(2);
    stream.write(3);
    stream.end();
})

tape.test('handles errors?', t => {
    const stream = through2.obj();

    asP(stream).catch(err => {
        t.equals(err, 'womp womp');
        t.end();
    });

    stream.write(1);
    stream.write(2);
    stream.write(3);
    stream.emit('error', 'womp womp');
})

