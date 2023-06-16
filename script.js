let string = "";
let buttons = document.querySelectorAll("button")
Array.from(buttons).forEach((button)=>{
    button.addEventListener("click",(e)=>{
        // show result when user clicked =
        if(e.target.innerHTML =="="){
            string = eval(string);
            document.querySelector("textarea").innerText = string;
        
        }
        // to clear calculations
        else if(e.target.innerHTML == "AC"){
        string = "";
        document.querySelector("textarea").innerText = string;
    }
    // to undo last digit
        else if(e.target.innerHTML == "←"){
        string = string.slice(0,-1)
        document.querySelector("textarea").innerText = string;
        }
        else if (e.target.innerHTML == "%") {
            // divide the value by 100 to get the percentage
            string = eval(string) / 100;
            document.querySelector("textarea").innerText = string;
          } else {
            string = string + e.target.innerText;
            document.querySelector("textarea").innerText = string;
          }
        });
      });