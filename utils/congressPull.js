const cheerio = require('cheerio');

// divide the table content to capture each Congress member
function sliceArr(arr, arrLength) {
    const finalArr = [];
    for (let i = 0; i < arr.length; i += arrLength) {
        const group = arr.slice(i, i + arrLength);
        res.push(group);
    }
    return finalArr;
}


module.exports = membersPull = fetch('https://ballotpedia.org/List_of_current_members_of_the_U.S._Congress')
    .then(res => {
        return res.text()
    })
    .then(html => {
        const $ = cheerio.load(html);
        const listArr = [];
        const tableName = $('#officeholder-table td');

        tableName.each((index, el) => {
            listArr.push($(el).text());
        });


        const refreshDb = setInterval(() => {
          const DayTime = new Date();

          if(DayTime.getDate() === 28) {
            // call DB to take new list
            sliceArr(listArr, 3)
          } 
        }, 86400000);
    })
    .catch(err => console.log(err));

