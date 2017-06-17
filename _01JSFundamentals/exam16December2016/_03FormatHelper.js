// https://judge.softuni.bg/Contests/Practice/Index/372#2
'use strict';

function solve(str) {
    let result = str;
    result = singleSpaceAfter(result);
    result = noSpaceBefore(result);
    result = specialSequences(result);
    result = detectNumberOrDate(result);
    result = noSpaceInsideQuotes(result);

    console.log(result);

    function singleSpaceAfter(str) {
        const regex = /([.,!?:;])\s*/g;
        const subst = `$1 `;
        return str.toString().replace(regex, subst);
    }

    function noSpaceBefore(str) {
        const regex = /\s+([.,!?:;])/g;
        const subst = `$1`;
        return str.toString().replace(regex, subst);
    }

    function specialSequences(str) {
        const regex = /(\.)\s*(\.)\s*(\.)\s*(!)/g;
        const subst = `$1$2$3$4`;
        return str.toString().replace(regex, subst);
    }

    function detectNumberOrDate(str) {
        const regex = /(\.)\s+(\d+)/g;
        const subst = `$1$2`;
        return str.toString().replace(regex, subst);
    }

    function noSpaceInsideQuotes(str) {
        const regex = /(["])\s*(.*?)\s*(["])/g;
        const subst = `$1$2$3`;
        return str.toString().replace(regex, subst);
    }
}

//solve('Terribly formatted text . With chaotic spacings." Terrible quoting "! Also this date is pretty confusing : 20 . 12. 16 .');
//solve('Make,sure to give:proper spacing where is needed... !');
solve('Test everything, including:dates    : 4.     3         .10, digits:1,2,3,4,numbers :  14.4,15.6,3. Quotation should be should be trimmed after additional spaces are given:"Quote should remain the same, even with explanation mark in the end!"; this quote should be trimmed in the beginning: "   Trim start"!');