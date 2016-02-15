"use strict";

function* lexemize(tick, fetch, produce) {
    let chunk;
    while (true) {
        yield tick;
        chunk = yield fetch;
        for (let char of chunk) {
            switch (char) {
                case "\t":
                    yield produce({type: "cmd_indent"});
                    break;
                case "$":
                    yield produce({type: "get_val"});
                    break;
                default:
                    yield produce({type: "char", val: char});

            }
        }

    }
}