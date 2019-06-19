  const {MongoClient, ObjectID} = require('mongodb');
  // const dbname = //pass in the dbname
  const url = "mongodb://localhost:27017";// works on the servers
  const mongoOptions = {useNewUrlParser: true};

  const state = {
    db: null
  }

  const connect = (dbn, cb) = {
    if(state.db){
      cb();
    }else{
      MongoClient.connect(url, mongoOptions, (err, client) => {
        if (err) {
          cb(err);
        }else{
          state.db = client.db(dbn);
          cb();
        }//else
      })// MongoClient
    }// else
  }// connect

  const getPrimaryKey = (_id) => {
    return ObjectID(_id);
  }// getPrimaryKey

  const getDB = () => {
    return state.db;
  }// getDB

  module.exports = { getDB, connect, getPrimaryKey };
