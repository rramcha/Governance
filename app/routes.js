//TO DO - Define all the api for our app
var express = require('express');
var router = express.Router();
//var approvals = require('../app/models/approvals-history');
// middleware to use for all requests
router.use(function(req, res, next) {
    console.log('Baby steps to start building routes');
    next();
});

router.get('/test', function(req, res) {
    res.json([
   {
      "id":1101,
      "templateSeqId":2081,
      "desc":"New Template Request created",
      "role":"SYSTEM",
      "action":"Create Request",
      "status":"New",
      "actionDate":1484039615000,
      "actionBy":"SYSTEM",
      "actorEmail":null,
      "actorName":"SYSTEM",
      "actorDisplayName":null
   },
   {
      "id":1702,
      "templateSeqId":2081,
      "desc":"Template created successfully.",
      "role":"4216",
      "action":"Add Template",
      "status":"Creation In-progress",
      "actionDate":1484898498000,
      "actionBy":"5434895910",
      "actorEmail":"abc@intuit.com",
      "actorName":"abc",
      "actorDisplayName":null
   },
   {
      "id":1722,
      "templateSeqId":2081,
      "desc":"Assigned to the approver: Ravindra",
      "role":"4216",
      "action":"ASSIGNED",
      "status":"Pending Creation",
      "actionDate":1484898315000,
      "actionBy":"5434895910",
      "actorEmail":"ravindra@gmail.com",
      "actorName":"Ravindra",
      "actorDisplayName":null
   } 
]);   
});

// router.route('/history')
// .get(function(req, res) {
//         approvals.find(function(err, bears) {
//             if (err)
//                 res.send(err);

//             res.json(bears);
//         });
//     });


module.exports = router;
