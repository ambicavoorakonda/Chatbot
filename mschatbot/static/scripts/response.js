function getBotResponse(input){
     if(input == "hello" || input == "hi"){
         return "Hello there!";
     } else if (input == "bye"){
         return "Have a nice day!";
     } else if (input == "How can I get my Account Statement?"){
         return "You can visit online portal";
     } else if (input == "how are you" || input == "How are you"){
        return "Have a nice day!";
     } else if (input == "How do I pay my Credit card bill?"){
         return "Through your bank online application";
     } else if (input == "Can I redeem my FB before the original term?"){
         return "No";
     } else if (input == "What is the tenure of Fixed Deposit?"){
         return "5 years";
     }
      else {
         return "Try asking something else!"
     }
}