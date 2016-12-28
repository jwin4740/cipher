 $(document).ready(function() {
var key;
var messagi;

      
 	$("#getvalues").on("click", function(){

 		key = parseFloat($("#caesarkey").val());
 		$("#printnumber").append(key);

 	});

 	$("#getmessage").on("click", function(){

 		messagi = $("#message").val();
 		$("#printmessage").append(" " + messagi);
 		console.log(messagi);
 		messagi = messagi.toUpperCase();
 		
 		 

    for (var i = 0, n = messagi.length; i < n; i++)
        {
        	console.log(messagi.charCodeAt(i));
        }
        console.log(messagi);
        
      
      
 	});

        //-------------------------
    });
