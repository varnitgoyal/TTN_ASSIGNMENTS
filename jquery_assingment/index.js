//question 1

$(document).ready(
    
    $("#DocumentReadyButton").click(
    function(){
        console.log("hello world")
    })
    
);

//question 2
$(document).ready(
    function(){
$("#setClass").click(
    function(){
      $("#test").addClass("load")

    });
    });

//question 3   
$("#specialSelector").click(
    function(){

        $("[class$='new']").addClass("load")
    }
)    

//question 4
$("#disableControl").click(
    function(){
       
        $("input[type=submit]").attr("disabled","disabled")

    }
)

//question 5
$("#changeFontSize").click(function(){
    
    $("#main > .target").css("font-size","50px")


})

//question 6 

$("#changeHTML").click(
    function(){
        $("#change").html("<p> changed content </p>")
    }
)


//question 7 
$(".click").click(
    function(){
        $(this).append('click');



    }
)


//question 8 

$("#question8").append().html("<button id=dynamicButton>dynamic button </button>");

/*$("#dynamicButton").click(
    function(){
        alert("it should not work");
    }

)
*/
$("#makeClickWork").click(
    function(){
        $("#dynamicButton").on('click',function(){
            alert("it worked");
        })
    }
)



//question 9

$("#getSelected").change(
    
    function(){
        console.log("on change called");
        let value=$(this).val();
        $("#selected").text(value);
    }
)

//question 10

$(".dropbtn").hover(
    function(){
        $(".dropdown-content").css("display","block");

    },
    function(){
        $(".dropdown-content").css("display","none");


    }
)

//question 11

let flag=false;
$("#preventDefault").click(function(){

    flag=true;
})
 $("#stopMe").click(
            function(){
                if(flag){
                    event.preventDefault();

                }
                
                
            }
)

  
//question 12
$("#parent").click(
    function(){
         $("#parent > li").click(function(){
            console.log("child clicked");
              event.stopPropagation();
           
        })


       
    }

)

//question 13
$("#showMaxHeights").click(
    function(){
        let maxHeight=0;
       
     $("#max-height > li").each(function(){

        let height=$(this).height();
        if(height>maxHeight){
            maxHeight=height;
        }
        
     })

     $("#print-max-height").text(maxHeight+" px");


            
            
    
    }
)

//Question 14

$("#setColor").click(function(){

    var large = null;
    $("td").each(function(){
      var h = $(this).text();
      if(parseInt(h) > 10){
         large = $(this);  
      }
      large.css("background-color", "#7c4dff"); 
      large.css("color", "white");    
    });
    
    
    });

 //Question 15   
$("#getAjax").click(function(){
   
   $.ajax(
    {
        url:"https://jsonplaceholder.typicode.com/todos/1",

        success: function(result){
            
            $("#print-ajax").text(JSON.stringify(result));
        },
        error: function(error){
            alert(error);
        }


    }

   )
    
});

//Question 16
$(".delete").click(
    function(){
        let deleteThis= $(this).parent().parent();
        $.ajax({
            url:"https://jsonplaceholder.typicode.com/todos/"+$(this).parent().prev().prev().text()
            ,
            method: "DELETE",
            success:function(){
                console.log(this);

               $(deleteThis).remove();

            },
            error:function(error){
                alert(error.message);


            }
        })


    }
)


//Question 17
$(document).ready(
    function(){
        let imageArr=[];
        let i=0;
        imageArr.push("image_1.png");
        imageArr.push("image_2.png");
        imageArr.push("image_3.png");

        setInterval(function () {
            i++;
                if (i == imageArr.length) {
                    i = 0;
                }
                $("#crousel").fadeOut("slow", function () {
                    $(this).css("background-image", "url(" + imageArr[i] + ")");
                    $(this).fadeIn("slow");
                });
        }, 1000);


    }
    
)



    