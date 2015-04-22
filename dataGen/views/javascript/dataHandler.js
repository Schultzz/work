$(document).ready(function(){

$("#search").click(function(){
    performSearch()
});

});

function performSearch(){

    var amount = $("#amount").val();
    console.log(amount);
    var data = $("#data").val();
    console.log(data);
    $("#tbody").html("<tr></tr>");
    $.ajax({
        type: "GET",
        url: "api/addresses/"+amount+"/"+data,
        dataType: "json",
        success: function (data) {
            data.forEach(function(elem){
                for(var prop in elem){
                    console.log((prop + " = " + elem[prop]))
                }
               $("#tbody").append("<tr><td>"+JSON.stringify(elem)+"</td></tr>");
            });
          },
        failure: function (errMsg) {

        }
    });

}