function chatBot(){
    var btn = document.getElementById("btn");
      btn.addEventListener("click",chatBot);
    var user = document.getElementById("textbox");
    var userRes = user.value;
    var chat = document.getElementById("chatTxt");
    if (userRes == "Hello"){
      chat.innerHTML = "Wassup!";
    }
    else if (userRes == "How long are school days?"){
      chat.innerHTML = "from 8:30 to 3:05, but you can talk to your counselor to have it changed";
    }
    else if (userRes == "How is the Web Dev class?"){
      chat.innerHTML = "Great!";
    }
    else if (userRes == "Does this school offer a running start program?"){
      chat.innerHTML = "Yes";
    }
    else if (userRes == "Tell me a joke"){
      chat.innerHTML = "you, ha gottem";
    }
    else{
      chat.innerHTML = "Ask me something from the list...";
    }
      var btn = document.getElementById("btn");
      btn.addEventListener("click", chatBot);
    }
    chatBot();