//memanggil package mongoose
const mongoose = require('mongoose');

//memanggil package config
const config = require('config');

//memanggil koneksi database (MonggoURI)
const db = config.get('mongoURI');

//koneksi db database (mongoURI)
const connectDB = async() => {
    try {
        await mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true});
        console.log('Koneksi Berhasil');

    } catch(err) {
        console.error(err.message);

        process.exit(1);
    }
}

module.exports = connectDB;


