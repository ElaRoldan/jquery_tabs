$(document).ready(function () {
  // Comando para inciar un documento de jquery $(document).ready(function () 
  $('#tab1').show();                                     //Aplicamos al elemento tab1 el metodo show 
  $('.tabs a').on('click', function(e) {                //Manipula los elementos a de la clase tabs usando el metodo click
    // e.preventDefault();  este metodo se ocupa para detener el proceso  
    console.log($(this).attr('href'));                 // attr es un metodo que ter permite conocer el nombre del atributo. This es un selector para el elemento que se esta manipulando anteriormente 
    //Cambia el tab a activo o inactivo
    $(this).parent('li').addClass('active').siblings().removeClass('active');
    // el metodo parent relaciona las listas add class agrega la clase active y el metodo siblings enlaza el elemtno actual con el anterior para quitarle la clase active con el metodo removeClass
    $('.tab').hide();
    // ocultar la clase tab
    var currentAttrValue = $(this).attr('href');
    // declaramos una variable que sea igual al elemento seleccionado en ese momento 
    $('.tab' + currentAttrValue).fadeIn(); 
    // aplicamos el metodo fadeIn a la clase tab y al elemento que sea igual a currentAttrValue
                                                                                  
   });         

});  


  