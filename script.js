$(document).ready(function(){
    $("#signup").validate({
        rules:{
            fname:{
                required:true,
                minlength:4
            },
            sname:{
                required:true,
                minlength:4
            },
            password:{
                
                minlength:8
                
            },
            day:{
                required:true
            }
        },
        message:{
            fname:{
                required:"Enter First name",
                minlength:"atleast 6 char"

            },
            password:{
                password:true
            }  
        }  
    })
})