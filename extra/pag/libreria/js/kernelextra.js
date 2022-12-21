instalado = [];
function importar_modulos() {
    for (var i = 1; i < 9; i++) {
  document.write("<script type='text/javascript' src='extra/modulos/"+i+"/libreria/js/kernelmodulo.js'></script>");    
}

}
importar_modulos();

function extension() {
    ifrm = "<div class=\"panel panel-info\">";
    ifrm += "<div class=\"panel-heading\"><strong>Seccion de Extensiones</strong><\/div>";
    ifrm += "<div class=\"panel-body\">";
    
    
    
  if (instalado == 0) {
    ifrm += "<div class='alert alert-success' role='alert'> <strong>Ya posee instalada la Seccion de Extensiones Correctamente!</strong> <br>Si aun no ha descargado ningun modulo puede:<br> <a href='http://bit.ly/extensionespdl' target='_blank' class='btn btn-default text-center'><b>CONSULTAR MODULOS DISPONIBLES AQUI</b> </a></div>";
    ifrm += "<h1>Como Instalar un Modulo<\/h1>";
    ifrm += "<p>El proceso de instalacion es simple, y se explica y os archivos usted lo recibira en formato <b>.7z</b> normalmente enumerado ejemplo: 1.7z, 2.7z, 3.7z,... tome en cuenta que <b>.7z</b> es el formato de compresion standar con el que trabajamos en J.E Suministros y Mas, C.A.</p>";
    ifrm += "<p>La carpeta <b>extra</b> de su aplicativo contendra el siguiente formato y debe ubicar la carpeta <b>modulos</b> dicha carpeta esta vacia y es alli donde debera copiar el o los archivos descargados: <br>Puede seguir la siguiente ruta a la carpeta <b>modulos</b> de su aplicativo: <a href='extra/modulos/' target='_blank'>extra/modulos/</a> </p>";
    ifrm += "<p class=\"text-center\">";
    ifrm += "<img class=\"img-thumbnail\" src=\"media\/imagen\/portadas\/modulos\/carpetaextra.png\" alt=\"Carpeta Extra\">";
    ifrm += "<\/p>";
    ifrm += "<p>El archivo correspondiente a los modulos descargados usted los vera de la siguiente manera:</p>";
    ifrm += "<p class=\"text-center\">";
    ifrm += "<img class=\"img-thumbnail\" src=\"media\/imagen\/portadas\/modulos\/archivomodulo.png\" alt=\"Carpeta Extra\">";
    ifrm += "<\/p>";
    ifrm += "<p>Solo debera extraer el contenido del archivo descargado y descomprimirlo en su carpeta <b>modulos</b></p>";
    ifrm += "<p class=\"text-center\">";
    ifrm += "<img class=\"img-thumbnail\" src=\"media\/imagen\/portadas\/modulos\/extraermodulo.png\" alt=\"Carpeta Extra\">";
    ifrm += "<\/p>";
    ifrm += "<p>Al descomprimir el archivo usted obtendra una carpeta con el mismo nombre del archivo es decir un archivo de nombre <b>4.7z</b> debera dar como resultado una carpeta de nombre <b>4</b> tal cual el siguiente ejemplo:</p>";
    ifrm += "<p class=\"text-center\">";
    ifrm += "<img class=\"img-thumbnail\" src=\"media\/imagen\/portadas\/modulos\/archivoycarpetamodulo.png\" alt=\"Carpeta Extra\">";
    ifrm += "<\/p>";
    ifrm += "<p>De esta manera ya su modulo estaria instalado, solo debe dar click al siguiente boton y acceder nuevamente a la seccion de <b>Extensiones</b> de su aplicativo.</p>";
    ifrm += "<p class='text-center'>" +
      "<button autocomplete='off' id='myButton' class='btn btn-danger btn-md' " +
      "title = 'Recargar para reconocer Modulos Instalados' onclick = 'recarga();' href='#Extensiones'>" +
      "Recargar Sistema " + act + "</button>";
  } else {
    ifrm += "<div class='alert alert-info' role='alert'><span class='glyphicon glyphicon-ok-sign' aria-hidden='true'> </span><strong> Todo ha Salido Correctamente!</strong> Ha instalado de manera correcta la Seccion de Extensiones y se han detectado Modulos Operativos.</div>";
    ifrm += "<h2>Modulos Instalados:</h2>";
    for (n in instalado){
    ifrm += instalado[n];
  }
  ifrm += "<div class='clearfix'></div>"
    ifrm += "<p class='col-xs-12 text-center'>" +
      "<button autocomplete='off' id='myButton' class='btn btn-danger btn-md' " +
      "title = 'Recargar para reconocer Mas Modulos Instalados' onclick = 'recarga();' href='#Extensiones'>" +
      "Recargar Sistema para reconocer Mas Modulos Instalados" + act + "</button>";
}
    ifrm += "</div></div>";
    document.getElementById("contenido").innerHTML = ifrm;
}

function mensextra(){

  cantmodulo = secciones.length-1;
      
if (cantmodulo == 1){
  mensmodulos = " modulo Instalado!";
}
else{
  mensmodulos = " modulos Instalados!";
}
    document.getElementById('mensextra').innerHTML = "<div class='alert alert-danger alert-dismissible' role='alert'><button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button><span class='glyphicon glyphicon-alert' aria-hidden='true'> </span> <strong> En las Extensiones de este aplicativo se ha detectado: "+
    cantmodulo + mensmodulos+"</strong> <a data-dismiss='alert' aria-label='Close' class='clase6' onclick='extra();' title='Extencion Detectada' href='#extra'>VEA LOS MODULOS DISPONIBLES AQUI</a></div>";
}