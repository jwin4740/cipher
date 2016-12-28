 $(document).ready(function() {
     var key;
     var messagi;
     var decoded = "";
    


     $("#getvalues").on("click", function() {

         key = parseFloat($("#caesarkey").val());
         $("#printnumber").append(key);

     });

     $("#getmessage").on("click", function() {

         messagi = $("#message").val();
         $("#printmessage").append(" " + messagi);
         console.log(messagi);




         for (var i = 0, n = messagi.length; i < n; i++) {
             console.log(messagi[i]);
             console.log(messagi.charCodeAt(i));
             if (messagi.charCodeAt(i) > 64 && messagi.charCodeAt(i) < 91) {
                 decoded += (String.fromCharCode(((messagi.charCodeAt(i) - 65 + key) % 26 + 65)));
             }
             else if (messagi.charCodeAt(i) > 96 && messagi.charCodeAt(i) < 123) {
                 decoded += (String.fromCharCode(((messagi.charCodeAt(i) - 97 + key) % 26 + 97)));
             }
             else
             {
                decoded += messagi[i];
             }
         }
         console.log(messagi);
         $("#printnumber3").append(decoded);



     });


     $("#getmessage").on("click", function() {

         messagi = $("#message").val();
         $("#printmessage").append(" " + messagi);
         console.log(messagi);




         for (var i = 0, n = messagi.length; i < n; i++) {
             console.log(messagi[i]);
             console.log(messagi.charCodeAt(i));
             if (messagi.charCodeAt(i) > 64 && messagi.charCodeAt(i) < 91) {
                 decoded += (String.fromCharCode(((messagi.charCodeAt(i) - 65 + key) % 26 + 65)));
             }
             else if (messagi.charCodeAt(i) > 96 && messagi.charCodeAt(i) < 123) {
                 decoded += (String.fromCharCode(((messagi.charCodeAt(i) - 97 + key) % 26 + 97)));
             }
             else
             {
                decoded += messagi[i];
             }
         }
         console.log(messagi);
         $("#printnumber3").append(decoded);



     });
     //-------------------------
 });
