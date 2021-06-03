
$.validator.addMethod("terminaPor", function(value, element, parametro){
    
    if(value.endsWith(parametro)) {
        return true;
    }

    return false;
}, "Debe terminar por {0}")





$("#inicio_sesion").validate({
    rules: {
        nombre: {
            required: true,
            minlenght: 7,
            maxlenght: 9
        },
        email:{
            required: true,
            email: true,
            terminaPor: "duoc.cl"
        },
    }
})    
        


    
$("#guardar").click(function(){

    if($("#inicio_sesion").valid() == false){
        return;
    }
    let nombre = $("#usuario").val()
    let email = $("#email").val()







})