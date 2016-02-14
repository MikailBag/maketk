'use strict';

const fs = require("fs");
const maketk = require("../index");

describe("maketk",function (){
    describe("parser", function(){
        it("parses a simple makefile", function(cb){
            const mf = fs.readFileSync("./test/makefiles/simple.make");
            let ast = maketk.parser.parseSync(mf.toString())
        })
    })
});