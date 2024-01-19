exports.handler = function ( context,event,callback) {
    console.log(`Incomming message: ${event.Body} `);
     const twiml = new Twilio.twiml.MessagingResponse() ;
     twiml.message("Thank u ur submission !") ;
     console.log(`TwiML was ${twiml}`) ;
     return callback(null,twiml) ;

};
