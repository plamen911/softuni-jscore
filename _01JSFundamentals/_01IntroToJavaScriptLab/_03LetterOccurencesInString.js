function letterOccurences(text, letter) {
    let count = 0;
    for (let ch of text) {
        if (ch == letter) {
            count++;
        }
    }
    console.log(count);
}

// letterOccurences('hello', 'l');