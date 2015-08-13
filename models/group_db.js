var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GroupSchema = new Schema({

    teacher_id: String,
    active_members: Boolean,
    no_messages: {type:Number},
    student_list: [Schema.ObjectId],
    message_list: [Schema.ObjectId]

});

module.exports = mongoose.model('Group', GroupSchema);
