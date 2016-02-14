"use strict";

function* lexemize(tick, fetch, produce) {
    let chunk;
    while (true) {
        yield tick;
        chunk = yield fetch;
        for (let char of chunk){
            switch (char){

            }
        }

    }
}