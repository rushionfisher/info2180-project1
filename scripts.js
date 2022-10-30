/* Add your JavaScript to this file */
var starter = function()
{
    var enter = document.getElementById("email");
    var btn = document.getElementsByClassName("btn")[1].onclick=function(x)
    {
        
        var input = enter.value;
        if (input = "")
        {
            document.getElementsByClassName("message")[0].innerHTML = " Please enter a valid email address";
        }

        else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value)
        {
            document.getElementsByClassName("message")[0].innerHTML = "Thank you! Your email address " +input+ " has been added to our mailing list";
        }
        x.preventDefault();
    }
    btn.addEventListener("click")

}

window.onload = starter

