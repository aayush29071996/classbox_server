var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema({

    email: String,
    nested: {
    first_name:{ type: String},
    last_name:{ type: String},
     },
    password_hash: String,
    password_salt: String,
    ra_no: String,
    teacher_account: Boolean,
    public_key: String,
    private_key: String,
    college: String,
    branch: String,
    semester:{type: Number},
    registered: Boolean,
    blocked: Boolean,
    group: [ObjectId]

});

module.exports = mongoose.model('User', UserSchema);
