 $(document).ready(function() {
     var key;
     var messagi;
     var decoded = "";
     var krot;
     var messagiv;
     var decodedv = "";
     var n;
     var o;
     var krotnum;
    


     // $("#getvalues").on("click", function() {

     //     key = parseFloat($("#caesarkey").val());
     //     $("#printnumber").append(key);

     // });

     // $("#getmessage").on("click", function() {

     //     messagi = $("#message").val();
     //     $("#printmessage").append(" " + messagi);
     //     console.log(messagi);




     //     for (var i = 0, n = messagi.length, i < n; i++) {
     //         console.log(messagi[i]);
     //         console.log(messagi.charCodeAt(i));
     //         if (messagi.charCodeAt(i) > 64 && messagi.charCodeAt(i) < 91) {
     //             decoded += (String.fromCharCode(((messagi.charCodeAt(i) - 65 + key) % 26 + 65)));
     //         }
     //         else if (messagi.charCodeAt(i) > 96 && messagi.charCodeAt(i) < 123) {
     //             decoded += (String.fromCharCode(((messagi.charCodeAt(i) - 97 + key) % 26 + 97)));
     //         }
     //         else
     //         {
     //            decoded += messagi[i];
     //         }
     //     }
     //     console.log(messagi);
     //     $("#printnumber3").append(decoded);



     // });

//----------------vigenere-----------------------
     $("#getvaluesv").on("click", function() {

         krot = parseFloat($("#vigenerekey").val());
         console.log("krot is" + krot);
         $("#printnumberv").append(krot);

     });
     $("#getmessagev").on("click", function() {

         messagiv = $("#messagev").val();
         $("#printmessagev").append(" " + messagiv);
         console.log(messagiv);

         for (var i = 0, n = messagi.length, o = krot.length; i < n; i++) {
             if (krot.charCodeAt(i) > 64 && krot.charCodeAt(i) < 91) {
                 krotnum += (String.fromCharCode(((messagi.charCodeAt(i) - 65 + key) % 26 + 65)));

                 if (messagi.charCodeAt(i) > 64 && messagi.charCodeAt(i) < 91) {
                 decoded += (String.fromCharCode(((messagi.charCodeAt(i) - 65 + key) % 26 + 65)));


             console.log("vigenere message: " + messagiv[i]);
             console.log("vigenere message: " + messagiv.charCodeAt(i));
                    if (islower(krot[i]))
                    {
                        krot[i] = (krot[i] - 97);
                    }
                        
                    if (isupper(krot[i]))
                    {
                        krot[i] = (krot[i] - 65);
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
