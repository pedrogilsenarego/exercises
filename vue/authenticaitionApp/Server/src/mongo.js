const mongoose = require("mongoose");
const config = require("./config/config");
const seed = require("./util/seed");
mongoose.Promise = global.Promise;

// eslint-disable-next-line max-len
// const mongoUri = `mongodb://${config.accountName}:${config.key}@${config.accountName}.documents.azure.com:${config.port}/${config.databaseName}?ssl=true`;

const mongoUri =
  "mongodb://localhost:C2y6yDjf5%2FR%2Bob0N8A7Cgv30VRDJIWEHLM%2B4QDU5DE2nQ9nDuVTqobD4b8mGGyPMbIZnqyMsEcaGQy67XIw%2FJw%3D%3D@localhost:10255/letmewatchthat?ssl=true";

function seedDB() {
  console.log("⚠️ Warning: Database seeding is turned on ⚠️");
  seed.start();
}

function connect() {
  mongoose.set("debug", true);
  mongoose.connect(mongoUri,
    {      
      useNewUrlParser: true,
      useUnifiedTopology: true,
      retryWrites: false,
      tlsInsecure: true
    }
  ).catch(err => console.log(`Failed to connect to db: ${err}`));

  console.log(`Connected to DB`);
  seedDB();
}

module.exports = {
  connect,
  mongoose,
};
