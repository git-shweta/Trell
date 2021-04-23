let Btn=$('#Btn')

Btn.click(()=> {
    if(Btn.html()=="FOLLOW")
       { Btn.html('UNFOLLOW')
        Btn.toggleClass("unfollow")}
    else 
    Btn.html("FOLLOW")
    Btn.toggleClass("unfollow")
})



    