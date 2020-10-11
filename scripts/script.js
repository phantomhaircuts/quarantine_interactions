let Airtable = require('airtable');
let base = new Airtable({apiKey: 'key892LAYQL8OqDjw'}).base('appaAx9p9yJViKRxG');

base('Table 1').select({
    // Selecting the first 3 records in Grid view:
    maxRecords: 100,
    view: "Grid view"
}).eachPage(function page(records, fetchNextPage) {
    records.forEach(function(record) {
        let viz = document.querySelector('.viz');
        viz.innerHTML += `
            <div class="circle ${record.get('Medium')}"> 
                <h6>${record.get('Name')}</h6>   
            </div>
        `
    });

    console.log(records);

    // To fetch the next page of records, call `fetchNextPage`.
    // If there are more records, `page` will get called again.
    // If there are no more records, `done` will get called.
    fetchNextPage();

}, function done(err) {
    if (err) { console.error(err); return; }
});