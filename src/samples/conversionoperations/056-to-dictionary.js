(function() {
    "use strict";

    let scoreRecords = [
        { name: "Alice", score: 50 }, 
        { name: "Bob"  , score: 40 }, 
        { name: "Cathy", score: 45 } 
    ]; 

    let scoreRecordsDict = scoreRecords.reduce((resultObj, sr) => {
        let key = sr.name;
        resultObj[key] = sr;
        return resultObj;
    }, {});

    console.log(`Bob's score: { name: ${scoreRecordsDict["Bob"].name}, score: ${scoreRecordsDict["Bob"].score} }`); 
})();