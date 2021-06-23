$(document).ready(function(){

    // jQuery methods go here...
    $("button").click(function(){
        $(".container").hide();
      });

     $("p").click(function(){
        $(this).hide();
      });

      $(".li").dblclick(function(){
        $(this).hide();
      });
      $("#eerste_paragraph").mouseenter(function(){
        alert("You entered p1!");
      });
      $("#tweede_paragraph").mouseleave(function(){
        alert("Bye! You now leave p1!");
      });
  
  }); 


