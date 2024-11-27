{
	"name": "swipeListener",
	"displayName": "Swipe Listener",
	"version": 1,
 	"definition": "svyswipelistener/swipelistener/swipelistener.js",
 	"doc": "svyswipelistener/swipelistener/swipelistener_doc.js",
 	"serverscript": "svyswipelistener/swipelistener/swipelistener_server.js",
 	"ng2Config": {
       "packageName": "@servoy/swipelistener",
       "serviceName": "SwipeListener",
       "entryPoint": "dist/servoy/swipelistener"
    },
	"libraries": [],
	"model":
	{		
    	"callbacks" : {"type":"callback[]", "initialValue": [], "tags": { "scope" :"private" }}
 	},
 	"api":
 	{
	   	"addSwipeListener": 
	   	{
	    	"parameters":
	    	[
		    	{
					"name":"callbackKey",
					"type":"string"
				},
				{
					"name":"callback",
					"type":"function"
		        },
		        {
					"name":"swipeDirection",
					"type":"string",
					"optional": true
		        },
		        {
					"name":"component",
					"type":"runtimecomponent",
					"optional": true
				}
			]
		},
		"removeSwipeListener":
		{
			"returns":"boolean",
			"parameters":
		    	[
			    	{
						"name":"callbackKey",
						"type":"string"
					}
				]
		}
 	},
 	"types": {
	  "callback": {
	  		"callbackKey": "string",
	  		"callback": "function",
	  		"swipeDirection": "string",
	  		"component": "runtimecomponent"
	  }
	}
}