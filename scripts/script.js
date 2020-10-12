let Airtable = require('airtable');
let base = new Airtable({apiKey: 'key892LAYQL8OqDjw'}).base('appaAx9p9yJViKRxG');
let recordTable;
base('Table 1').select({
    maxRecords: 100,
    view: "Grid view"
}).eachPage(function page(records, fetchNextPage) {
    recordTable = records;
    records.forEach(function(record) {
        let viz = document.querySelector('.viz');
        viz.innerHTML += `
            <div class="circle ${record.get('Medium')}"> 
                <h6>${record.get('Name')}</h6>   
            </div>
        `
        console.log(new Date(record.fields.Date));
    });
    fetchNextPage();

}, function done(err) {
    if (err) { console.error(err); return; }
});