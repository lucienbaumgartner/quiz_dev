document.write('<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"><\/script>');


$().ready(function(){
    $.getJSON( "QA.JSON", function( data ) {
    console.log(data);
    $("#text").html(data["text"]);
  });
});
