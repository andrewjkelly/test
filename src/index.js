// Module must be started with environment variables
//
// incomingwebhookurl="incoming webhook url for Burner"
//

'use strict';

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var request = require("request");
var incomingWebhookURL = process.env.incomingwebhookurl;

// Express setup

app.set('port', (process.env.PORT || 5000));
app.use(bodyParser.json());

app.get('/test', function (req, res) {
	console.log("received");
	res.sendStatus(200);
});

app.post('/listen', function (req, res) {

	console.log("received payload from burner: ", req.body);

	// get type from body

	var type = req.body['type'];

	// ignore calls if not the 'inboundText' type

	if (type != "inboundText") {
		res.sendStatus(200);
		return;
	}

	// get message and sender from body
	var message= null;

	// list of responses

	var m1 = "You have successfully reached Metrix Marketing, please state who you are \( affiliate, client, customer, civilian\)";
	// variable responses
	//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||


	// Variable affililiate or civilian

	var m2 = "Welcome, if you are a current affiliate member please enter your personal Id #. If you are looking to become an affiliate member, text: AFFILIATE JOIN";
	//-------------------------------------------------------


	// AFFililiate JOIN or SIGN IN

	var m3= "In order to join you will need to fill out the application on the following link: https://goo.gl/forms/SLs9oYHQSgI7wrMV2";

	//or

	var m4= "Welcome affiliate, text the command you desire to procede: \(PERSONAL INFO or PRODUCT LIST\) ";
	//-------------------------------------------------------

	// Personal Info
	var m5 = "Text your desired command \(LEGAL, EARNINGS\)";
	var m6= "You are considered an independent contractor. So therefor you are in charge of your tax returns, information regarding taxes and Legal information: click the following link: https://drive.google.com/open?id=0B0POZWEZ9wCaRXQ2djJRSm9Bc1E";
	var m7= "Text: PERSONAL if you would like to view your personal commission. Text: TEAM if you would like to view your teams commision";
	// Edit later
	var m8 = "To view your personal commission go to the shared folder within google drive";
	var m9= "To view your teams commission go to the shared folder within google drive";


	// PERSONAL INFO done
//---------------------------------------------------------------------------
	//PRODUCT LIST
	var m10= "Which product are you selling? \(TVC, MCA\)";

	var m11= "TVC: https://prodriver.com/MetrixMarketing";

	var m12 = "MCA: https://motorclubofamerica.com/MetrixMarketing";

	var m13= " ";
	var m14= " ";
	var m15 = " ";
	var m16= " ";

	//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||





	// variable customer
	var m17= "Welcome customer, IF you would like to reach customer service text: CS. If you would like to join as an affiliate text: AFFILIATE JOIN";
	var m18= "Hello, My name is Tom. How may I help you?";
	// Edit later

	// Owner
	var m19 = "Welcome Mr. Kelly. Enter your passcode";
	var m20= "Access Granted";
	var m21= " ";
	var m22 = "";
	var m23= " ";
	var m24= " ";
	var m25= " ";
	var m26 = " ";
	var m27= " ";
	var m28= " ";
	var m29 = " ";
	var m30= " ";
	var m31= " ";
	// variable client
	var m32= " ";
	var m33 = " ";
	var m34= " ";
	var m35= " ";
	var m36 = " ";
	var m37= " ";
	var m38= " ";
	var m39= " ";
	var m40 = " ";
	var m41= " ";
	var m42= " ";
	var m43 = " ";
	var m44= " ";
	var m45= " ";
	var m46=" ";

	//---------------------------------------
	var m47= " ";
	var m48= " ";
	var m49 = " ";
	var m50= " ";

//------------------------------------------
	var m51= " ";
	var m52= " ";
	var m53 = " ";
	var m54= " ";
	var m55= " ";
	var m56= " ";
	var m57 = " ";
	var m58= " ";
	var m59= " ";
	var m60= " ";

	var m70=" ";
	var m71= " ";
	var m72= " ";
	var m73 = " ";
	var m74= " ";
	var m75= " ";
	var m76= " ";
	var m77 = " ";
	var m78= " ";
	var m79= " ";
	var m80=" ";
	var m81= " ";
	var m82= " ";
	var m83 = " ";
	var m84= " ";
	var m85= " ";
	var m86= " ";
	var m87 = " ";
	var m88= " ";
	var m89= " ";
	var m90=" ";
	var m91= " ";
	var m92= " ";
	var m93 = " ";
	var m94= " ";
	var m95= " ";
	var m96= " ";
	var m97 = " ";
	var m98= " ";
	var m99= " ";
	var m100=" ";
	var m101= " ";
	var m102= " ";
	var m103 = " ";
	var m104= " ";
	var m105= " ";
	var m106= " ";
	var m107 = " ";
	var m108= " ";
	var m109= " ";
	var m110=" ";
	var m111= " ";
	var m112= " ";
	var m113 = " ";
	var m114= " ";
	var m115= " ";
	var m116= " ";
	var m117 = " ";
	var m118= " ";
	var m119= " ";
	var m120=" ";
	var m121= " ";
	var m122= " ";
	var m123 = " ";
	var m124= " ";
	var m125= " ";
	var m126= " ";
	var m127 = " ";
	var m128= " ";
	var m129= " ";
	var m130=" ";
	var m131= " ";
	var m132= " ";
	var m133 = " ";
	var m134= " ";
	var m135= " ";
	var m136= " ";
	var m137 = " ";
	var m138= " ";
	var m139= " ";
	var m140=" ";
	var m141= " ";
	var m142= " ";
	var m143 = " ";
	var m144= " ";
	var m145= " ";
	var m146= " ";
	var m147 = " ";
	var m148= " ";
	var m149= " ";





	// response

	var payload= req.body['payload']; if(payload == "affiliate"){
		message=(m2);
	} else if(payload ==> "3122"){
		message=(m4);
	} else if(payload == "AFFILIATE JOIN"){
		message=(m3);
	}  else if(payload == "PERSONAL INFO"){
		message=(m5);
	} else if(payload == "LEGAL"){
		message=(m6);
	} else if(payload == "EARNINGS"){
		message=(m7);
	} else if(payload == "PERSONAL"){
		message=(m8);
	} else if(payload == "TEAM"){
		message=(m9);
	} else if(payload == "PRODUCT LIST"){
		message=(m10);
	} else if(payload == "TVC"){
		message=(m11);
	} else if(payload == "MCA"){
		message=(m12);
	} else if(payload == "customer"){
		message=(m17);
	} else if(payload == "CS"){
		message=(m18);
	} else if(payload == "owner"){
		message=(m19);
	} else if(payload == "1234"){
		message=(m20);
	} else {
		message=(m1);
	}

	//done

	var sender = req.body['fromNumber'];

	console.log("echoing text back to sender: " + sender + " with message: " + message);
	console.log("POSTing message to : " + incomingWebhookURL);

	request({
    	url: incomingWebhookURL,
    	method: 'POST',
    	json: {
    		"intent": "message",
    		"data": {"toNumber": sender, "text": message}
    	}
    }, function(error, response, body) {
    	if (error) {
    		console.log('Error sending message: ', error);
    	} else if (response.body.error) {
    		console.log('Error: ', response.body.error);
    	}
    });

	res.sendStatus(200);
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
