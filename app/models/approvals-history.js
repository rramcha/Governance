
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ApprovalHistorySchema = new Schema({
	id : {type : int, default: ''},
    templateSeqId : {type : int, default: ''},
    desc : {type : double, default: ''},
    role : {type : String, default: ''},
    action : {type : String, default: ''},
    status : {type : String, default: ''},
    actionDate : {type : Date, default: ''},
    actionBy : {type : String, default: ''},
    actorEmail : {type : String, default: ''},
    actorName : {type : String, default: ''},
    actorDisplayName : {type : String, default: ''}
});

module.exports = mongoose.model('approvalHistory', ApprovalHistorySchema);
