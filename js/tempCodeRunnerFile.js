function learnJs(lang, callback) {
    console.log("Я учу " + lang);
    callback()
}

function done() {
    console.log("Я все сделал");
}

learnJs("JavaScript", done);