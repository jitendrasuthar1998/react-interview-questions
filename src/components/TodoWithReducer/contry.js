// Bug Fixes:
// 1. Fixed syntax errors and incorrect brackets.
// 2. Corrected array parsing issues.
// 3. Fixed the logic in `no_century_country_count` function.
// 4. Improved input handling and output formatting.

const fs = require("fs");

function read_scores(infile) {
    // Read `country: score` pairs from infile and return a list of pairs
    const filedata = fs.readFileSync(infile, "utf8");
    const lines = filedata.replace(/\r\n/g, "\n").split("\n");
    let scores = [];

    for (let i in lines) {
        let line = lines[i].trim();
        if (!line) continue;
        
        let [country, score] = line.split(":");
        scores.push([country.trim(), parseInt(score)]);
    }

    return scores;
}

function no_century_country_count(scores) {
    let no_century_count = 0;
    let processed_countries = new Set();

    for (let i in scores) {
        let [country, score] = scores[i];

        if (processed_countries.has(country)) continue;
        processed_countries.add(country);

        let centuries = 0;

        for (let j = parseInt(i) + 1; j < scores.length; j++) {
            let [country1, score1] = scores[j];
            if (country === country1 && score1 >= 100) {
                centuries++;
            }
        }

        if (centuries === 0) {
            no_century_count++;
        }
    }

    return no_century_count;
}

function run() {
    // Read from stdin. 0 represents stdin for fs.readFileSync
    let scores = read_scores(process.stdin.fd);
    let no_century_count = no_century_country_count(scores);
    console.log(no_century_count);
}

run();
