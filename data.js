const mongoDBClient = require('mongodb').MongoClient
let url = 'mongodb://localhost:27017/pb';

mongoDBClient.connect(url, {useUnifiedTopology: true }, (operationError, dbHandler)=> {
    if (operationError){
        console.log("An error has occurred during the connection process");
    } else{
        console.log("Connected to the database")


        // Insert Operation 
        // let data = [
        //     {id: 2, title: "Grocery-List", budget: 150},
        //     {id: 3, title: "Rent", budget: 525},
        //     {id: 4, title: "Accessories", budget: 34.98},
        //     {id: 5, title: "Table", budget: 70},
        //     {id: 6, title: "Walmart", budget: 200},
        //     {id: 7, title: "Electricity", budget: 40},
        //     {id: 8, title: "Water Bill", budget: 90},
        //     {id: 9, title: "Trips", budget: 200},
        //     {id: 10, title: "Outing", budget: 34.98},
        //     {id: 11, title: "Movies", budget: 25},
        // ];
        // dbHandler.db('pb').collection('myBudget').insertMany(data, (operr, opresult)=> {
        //     if (operr){
        //         console.log('Unable to insert data into your collection')
        //     }
        //     else{
        //         console.log("Inserted data Successfully")
        //         dbHandler.close();
        //     }
        // })


        // // List Operation
        // dbHandler.db('pb').collection('myBudget').find().toArray((operr, opresult)=> {
        //     if(operr){
        //         console.log(operr)
        //     }else{
        //         for (var i=0; i< opresult.length; i++) {
        //             console.log(opresult[i])
        //         }
        //         // dbHandler.close()
        //     }
        // });

        //Update operation
        // let newData = [
        //     { id: 1, color: "FFD1DC" },
        //     { id: 2, color: "AEC6CF" },
        //     { id: 3, color: "#B7E4C7" },
        //     { id: 4, color: "#836953" },
        //     { id: 5, color: "#FFF1A7" },
        //     { id: 6, color: "#FFB997" },
        //     { id: 7, color: "#98FF98" },
        //     { id: 8, color: "#D7A9E3" },
        //     { id: 9, color: "#FFF4E3" },
        //     { id: 10, color: "#A2D8D8" },
        //     { id: 11, color: "#FF6B6B" },
        // ];
        // // Construct update statements for each newData item
        // let updateStatements = newData.map(entry => {
        //     return {
        //         updateOne: {
        //             filter: { id: entry.id }, // Filter documents by id
        //             update: { $set: { color: entry.color } } // Update color field
        //         }
        //     };
        // });

        // // Execute update statements using bulkWrite
        // dbHandler.db('pb').collection('myBudget').bulkWrite(updateStatements, (operr, opresult) => {
        //     if (operr) {
        //         console.log('Unable to update data in your collection');
        //     } else {
        //         console.log("Updated Successfully");
        //     }
        //     dbHandler.close();
        // });


                //List Operation
        // dbHandler.db('pb').collection('myBudget').find().toArray((operr, opresult)=> {
        //     if(operr){
        //         console.log(operr)
        //     }else{
        //         for (var i=0; i< opresult.length; i++) {
        //             console.log(opresult[i])
        //         }
        //         dbHandler.close()
        //     }
        // });


    }
});
