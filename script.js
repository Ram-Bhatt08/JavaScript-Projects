let result=document.getElementById("result");
let btn=document.getElementById("btn");

btn.addEventListener("click",function()
{
    if(result.value>=40)
    {
        document.write("You are Pass");
    }
    else {
        document.write("Sorry you are fail");
    }
    }
);

// function display()