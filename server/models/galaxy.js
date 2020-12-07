const mongoose = require("mongoose");

//---------------------------------------------------------
//Galaxy connection
const dbURL = 'mongodb+srv://jorge:vk388nii@cluster0.tirpz.mongodb.net/galaxyData?retryWrites=true&w=majority';
let logDB = mongoose.createConnection(dbURL, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
//------------------------------------------------------------------

const readLine = require("readline");
// const { model } = require("./User");

// const connect = () => {
//     //connect to mongo
//     setTimeout(
//         () =>
//             mongoose.connect(dbURL, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }),
//         1000
//     );
// };

//Monitors for a successful connection through Mongoose
/**Here we have a set of events that we can listen to:
 *https://mongoosejs.com/docs/connections.html#connection-events
 */
//-------------------------------------------------------------
logDB.on("connected", () => {
    console.log(`Mongoose connected to ${dbURL}`);
});

//error
logDB.on("error", (err) => {
    console.log("error: " + err);
    return connect();
});

//Disconnected
logDB.on("disconnected", () => {
    console.log("disconnected");
});
//-------------------------------------------------------------

if (process.platform === "win32") {
    const rl = readLine.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    rl.on("SIGINT", () => {
        process.emit("SIGINT");
    });
}

const gracefulShutdown = (msg, callback) => {
    logDB.close(() => {
        console.log(`Mongoose disconnected through ${msg}`);
        callback();
    });
};
//for nodemon in case so
process.once("SIGUSR2", () => {
    gracefulShutdown("nodemon restart", () => {
        process.kill(process.pid, "SIGUSR2");
    });
});
process.on("SIGINT", () => {
    gracefulShutdown("app termination", () => {
        process.exit(0);
    });
});

//Heroku uses SIGTERM to listen for
process.on("SIGTERM", () => {
    gracefulShutdown("Heroku app shutdown", () => {
        process.exit(0);
    });
});

// connect();

// //----------------------------
// //This is required to create the model schemas
// require("./User");
// require("./Doctor");
// require("./Patient");
// require("./FormPatient");
// require("./FinalReport");
// //---------------------------



// // const connect2 = () => {
// //     //connect to mongo
// //     setTimeout(
// //         () =>
// //             logDB = mongoose.createConnection(dbURIlog, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }),
// //         1000
// //     );
// // };

// // connect2();

// // const dbURIlog = 'mongodb+srv://jorge:vk388nii@cluster0.tirpz.mongodb.net/galaxyData?retryWrites=true&w=majority';
// // const logDB = mongoose.createConnection(dbURIlog);

// logDB.on("connected", () => {
//     console.log(`Mongoose connected to ${dbURIlog}`);
// });
// //---------------------------------------------------------


// // logDB.galaxyData.pptcs.find();
// var Schema = new mongoose.Schema({ patientId: String })
// var model1 = logDB.model('pttcs', Schema);
// // // model1.create({ name: "Jorge" });

// model1.find({}).then((all) => console.log(all[0].patientId));
module.exports = { logDB }