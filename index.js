var Alexa = require('alexa-sdk');

//--------------------------------------------------
// Constants
//--------------------------------------------------
const APP_ID = undefined;
const languageStrings = {
    'en-US': { 
        'translation': {
            "SKILL_NAME": "British Space Facts",
            "HELP_MESSAGE": "You can say tell me a space fact, or, you can say exit... What can I help you with?",
            "HELP_REPROMPT": "What can I help you with?",
            "STOP_MESSAGE": "Goodbye!"
        }
    }
};

//--------------------------------------------------
// Logic
//--------------------------------------------------
exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
 
var handlers = {
    'Unhandled': function () {
        this.emit(':tell', 'Hello Workd');
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = HELP_MESSAGE;
        var reprompt = HELP_REPROMPT;
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    },
};