var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var MessageSchema = new Schema({
    from: Schema.ObjectId ,
    to:  Schema.ObjectId,
    message: String,
    no_of_reciever: { type: Number},
    recieved_by: [Schema.ObjectId],
    seen_by: [Schema.ObjectId],
    time_stamp:{ type: Date, required: true, default: Date.now },
    message_type: String


});

module.exports = mongoose.model('Message', MessageSchema);
