 $(document).ready(function() {
     var key;
     var messagi;
     var decoded = "";
     var krot;
     var messagiv;
     var decodedv = "";
     var n;
     var o;
     var krotnum = [];
     var variable;



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

         krot = ($("#vigenerekey").val());
         console.log("krot is " + krot);
         $("#printnumberv").append(krot);
     });
     $("#getmessagev").on("click", function() {

         messagi = $("#messagev").val();
         $("#printmessagev").append(" " + messagi);
         console.log(messagi);
// fill krotnum array
         for (var i = 0, m = krot.length; i < m; i++) {
             krotnum.push(krot.charCodeAt(i));
             console.log(krotnum);
         }
console.log(krotnum);
         for (var i = 0, n = messagi.length, m = krot.length; i < n; i++) {



             if (messagi.charCodeAt(i) > 64 && messagi.charCodeAt(i) < 91) {

                 decodedv += (String.fromCharCode(((messagi.charCodeAt(i) - 65 + krotnum[i]) % 26 + 65)));
                 console.log(krotnum[i]);
             } 

             else if (messagi.charCodeAt(i) > 96 && messagi.charCodeAt(i) < 123) {

                 decodedv += (String.fromCharCode(((messagi.charCodeAt(i) - 97 + krotnum[i]) % 26 + 97)));
                 console.log(krotnum[i]);
             } 
             else {
                 decodedv += messagi[i];
                 console.log(krotnum[i]);
             }
         }
         console.log(krotnum);
         console.log(decodedv);




     });
     //-------------------------
 });
