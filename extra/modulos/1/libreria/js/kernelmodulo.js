idmodulo ="1";
instalado.push(["<div class='col-sm-6 col-md-4'> <div class='thumbnail'> <img onmouseout='this.style.opacity=1' onmouseover='this.style.opacity=0.7' src=\"extra/modulos/"+idmodulo+"/media/imagen/instalado.svg\"> <div class='caption'> <h3>Modulo Productos Automotrices</h3> <p>Este modulo agrupa una seleccion de formulas de los productos mas utilizados en el mercado automotriz, que le permitira ampliar la gama de productos que usted puede fabricar.</p> <p><a onclick='formulas(), primerselect();' href='#formulas' title='Ir a la Seccion de Calculos' class='btn btn-primary' role='button'>Ir a la Seccion de Calculos</a></p> </div> </div></div>"]);

secciones.push(
    ['Modulo Automotriz']
);

producto.push(
    {
        n: 'Afloja Tuerca',
        az: 1,
        ro: 3,
        am: 0,
        bla: 0,
        c: ' ',
        v: 0,
        t: 'liq',
        grupo: 'Modulo Automotriz'
    },
    {
        n: 'Limpia Tapiceria',
        az: 1,
        ro: 3,
        am: 0,
        bla: 0,
        c: ' ',
        v: 0,
        t: 'liq',
        grupo: 'Modulo Automotriz'
    },
    {
        n: 'Anticorrosivo de Vehiculo',
        az: 1,
        ro: 3,
        am: 0,
        bla: 0,
        c: ' ',
        v: 0,
        t: 'liq',
        grupo: 'Modulo Automotriz'
    },
    {
        n: 'Antioxidante Refrigerante',
        az: 1,
        ro: 3,
        am: 0,
        bla: 0,
        c: ' ',
        v: 0,
        t: 'liq',
        grupo: 'Modulo Automotriz'
    },
    {
        n: 'Crema Limpiadora para Manos Industrial',
        az: 1,
        ro: 3,
        am: 0,
        bla: 0,
        c: ' ',
        v: 0,
        t: 'liq',
        grupo: 'Modulo Automotriz'
    },
    {
        n: 'Limpiador de Vidrio',
        az: 1,
        ro: 3,
        am: 0,
        bla: 0,
        c: ' ',
        v: 0,
        t: 'liq',
        grupo: 'Modulo Automotriz'
    },
    {
        n: 'Detergente Biodegradable en Polvo',
        az: 1,
        ro: 3,
        am: 0,
        bla: 0,
        c: ' ',
        v: 0,
        t: 'liq',
        grupo: 'Modulo Automotriz'
    },
    {
        n: 'Limpiador de Metales en Polvo',
        az: 1,
        ro: 3,
        am: 0,
        bla: 0,
        c: ' ',
        v: 0,
        t: 'liq',
        grupo: 'Modulo Automotriz'
    },
    {
        n: 'Aceite para la Limpieza Interna de Motores a Gasolina',
        az: 1,
        ro: 3,
        am: 0,
        bla: 0,
        c: ' ',
        v: 0,
        t: 'liq',
        grupo: 'Modulo Automotriz'
    },
    {
        n: 'Pegamento Rapido',
        az: 1,
        ro: 3,
        am: 0,
        bla: 0,
        c: ' ',
        v: 0,
        t: 'liq',
        grupo: 'Modulo Automotriz'
    },
    {
        n: 'Pasta para Evitar Pinchazos',
        az: 1,
        ro: 3,
        am: 0,
        bla: 0,
        c: ' ',
        v: 0,
        t: 'liq',
        grupo: 'Modulo Automotriz'
    },

);

producto.sort(function (a, b) {
    if (a.n > b.n) {
        return 1;
    }
    if (a.n < b.n) {
        return -1;
    }
    // a must be equal to b
    return 0;
});

//componente.push()
//DE SER NECESARIO SOLO USAR DESDE 700 HASTA 999;
componente[700] = {
    n: 'COMP700 AAA',
    v: 0,
    t: "liq",
    c: "COMPONENTE 700.",
};
componente[701] = {
    n: 'COMP701 BBB',
    v: 0,
    t: "liq",
    c: "COMPONENTE 701.",
};
componente[702] = {
    n: 'COMP702 CCC',
    v: 0,
    t: "sol",
    c: "COMPONENTE 702.",
};

function tratamiento_extra_ma() {
    for (ab in componente) {
        if (ab >= 700) {
            ncompo = componente[ab].n;
            titulocompo = ncompo.replace("=", "");
            //componente[ab].n = "<b>" + componente[ab].n+"</b>";
            componente[ab].n = "<b data-toggle='popover' title='<b>" + titulocompo + "</b>' data-content='" + componente[ab].c + "'>" + componente[ab].n + "</b>";
        }
    }
    return componente[ab].n;
}
tratamiento_extra_ma();

function anticorrosivo_de_vehiculo() {
    var UI = document.getElementById('entrada').value;
    if (isNaN(UI)) { return false; }
    componente[500].v = UI * 50 / 100;
    componente[501].v = UI * 5 / 100;
    componente[502].v = UI * 2.5 / 100;
    componente[503].v = UI * 2.5 / 100;
    componente[504].v = UI * 40 / 100;

    tratamiento(UI);
    tratamiento_producto(UI);
    resul =
        tca + UI + tipoproducto + fo + tcc + olli +
        componente[500].n + componente[500].v + lili +
        componente[501].n + componente[501].v + lili +
        componente[502].n + componente[502].v + lili +
        componente[503].n + componente[503].v + lili +
        componente[504].n + componente[504].v + liol;


    var procedimiento = "<p>Se obtiene un producto muy moderno, de alto poder anticorrosivo, muy usado en talleres, que permite prolongar la vida de su vehículo. No necesita rociador especial, pudiendo ser aplicado con una brocha y no es afectado por las altas temperaturas, ni se agrieta con el tiempo, como ocurre con otros productos existentes en el mercado. </p><h3>PROCEDIMIENTO:</h3><p></p> <h4>Nota:</h4><p>Este producto debe ser envasado en cuñetes plásticos o metálicos, pero De boca ancha.</p><br> <div class='alert alert-warning' role='alert'><span class='glyphicon glyphicon-exclamation-sign' aria-hidden='true'></span><span class='sr-only'>Error:</span> Procurar siempre utilizar Tapa boca.</div>";

    document.getElementById('salida').innerHTML = resul,
        document.getElementById('procedimiento').innerHTML = procedimiento;
    //Linea agregada
    popove();
}


function afloja_tuerca() {
    var UI = document.getElementById('entrada').value;
    if (isNaN(UI)) { return false; }
    componente[44].v = UI * 70 / 100;
    componente[505].v = UI * 20 / 100;
    componente[506].v = UI * 10 / 100;


    tratamiento(UI);
    tratamiento_producto(UI);
    resul =
        tca + UI + tipoproducto + fo + tcc + olli +
        componente[44].n + componente[47].v + lili +
        componente[505].n + componente[48].v + lili +
        componente[506].n + componente[49].v + liol;



    var procedimiento = "<p>La siguiente formula permite fabricar un liquido muy usado en talleres mecánicos e industriales para aflojar tuercas y herramientas trancadas por el oxido. Es normal el uso de estos productos envasados en spray; pudiendo ser utilizados perfectamente mediante aplicación con brocha, lo cual permite disminuir drásticamente los costos. </p><h3>PROCEDIMIENTO:</h3> <p>En una aceitera de metal se colocan los ingredientes juntos, se mezcla suvemente y listo para usar.</p><p> </p><h4>Nota:</h4>El producto puede ser envasado en spray<p>.</p><br><div class='alert alert-warning' role='alert'><span class='glyphicon glyphicon-exclamation-sign' aria-hidden='true'></span><span class='sr-only'>Error:</span> Debe usar tapa boca y guantes</div>";

    document.getElementById('salida').innerHTML = resul,
        document.getElementById('procedimiento').innerHTML = procedimiento;
    //Linea agregada
    popove();
}


function limpia_tapiceria() {
    var UI = document.getElementById('entrada').value;
    if (isNaN(UI)) { return false; }
    componente[507].v = UI * 76.5 / 100;
    componente[508].v = UI * 20 / 100;
    componente[24].v = UI * 2 / 100;
    componente[518].v = UI * 0.1 / 100;componente[5].v = UI * 0.1 / 100;componente[7].v = UI * 0.5 / 100;
    componente[8].v = UI * 0.8 / 100;

    tratamiento(UI);
    tratamiento_producto(UI);
    resul =
        tca + UI + tipoproducto + fo + tcc + olli +
        componente[507].n + componente[507].v + lili +
        componente[24].n + componente[24].v + lili +
        componente[518].n + componente[518].v + lili +
        componente[5].n + componente[5].v + lili +
        componente[7].n + componente[7].v + lili +
        componente[8].n + componente[8].v + liol;



    var procedimiento = "<p>Es un eficiente producto limpiador para el lavado de alfombras, tapicerías de muebles y vehículos, remueve el sucio que se impreca por mas difícil que parezca, basta con rociar y remover con un cepillo.</p><h3>PROCEDIMIENTO:</h3> <p>Se vierte el 50% del agua que va a preparar y poco a poco se va vertiendo el Diethilen glicol y mezclar poco a poco con una cuchara de madera grande sin salpicar, se viertie el alcohol isopropílico el s.t.p.p y el acido acético y se va mezclando lentamente sin salpicar con la cuchara de madera grande y luego vamos vertiendo con la otra mezcla de forma lenta y mezclando poco a poco y luego se vierte el colorante y la esencia.</p><h3>ENVASADO Y CONSERVACION:</h3><p>on la ayuda del embudo se vacía la mezcla anterior a un envase limpio de plástico con capacidad de 1 L y se tapa. No olvide colocarle una etiqueta con el nombre del producto, la fecha de elaboración y la caducidad. Se guarda en un lugar fresco y seco.</p><h4>Nota:</h4>Es importante seleccionar el color y el olor mas apropiado, para facilitar su venta. <p>.</p><br><div class='alert alert-warning' role='alert'><span class='glyphicon glyphicon-exclamation-sign' aria-hidden='true'></span><span class='sr-only'>Error:</span> Es muy recomendable el uso de los guantes, los tapa bocas y lentes protectores, para poder prepararlo tenemos que hacerlos en envases limpios y una cuchara de madera larga.</div>";

    document.getElementById('salida').innerHTML = resul,
        document.getElementById('procedimiento').innerHTML = procedimiento;
    //Linea agregada
    popove();
}


function antioxidante_refrigerante() {
    var UI = document.getElementById('entrada').value;
    if (isNaN(UI)) { return false; }
    componente[507].v = UI * 76.5 / 100;
    componente[515].v = UI * 20 / 100;
    componente[5].v = UI * 0.8 / 100;

    tratamiento(UI);
    tratamiento_producto(UI);
    resul =
        tca + UI + tipoproducto + fo + tcc + olli +
        componente[507].n + componente[507].v + lili +
        componente[24].n + componente[24].v + lili +
        componente[518].n + componente[518].v + lili +
        componente[5].n + componente[5].v + lili +
        componente[7].n + componente[7].v + lili +
        componente[8].n + componente[8].v + liol;



    var procedimiento = "<p>Es un eficiente producto limpiador para el lavado de alfombras, tapicerías de muebles y vehículos, remueve el sucio que se impreca por mas difícil que parezca, basta con rociar y remover con un cepillo.</p><h3>PROCEDIMIENTO:</h3> <p>Se vierte el 50% del agua que va a preparar y poco a poco se va vertiendo el Diethilen glicol y mezclar poco a poco con una cuchara de madera grande sin salpicar en 2 a 5 litros de agua aparte, se viertie el alcohol isopropílico el s.t.p.p y el acido acético y se va mezclando lentamente sin salpicar con la cuchara de madera grande y luego vamos vertiendo con la otra mezcla de forma lenta y mezclando poco a poco y luego se vierte el colorante y la esencia.</p><h3>ENVASADO Y CONSERVACION:</h3><p>on la ayuda del embudo se vacía la mezcla anterior a un envase limpio de plástico con capacidad de 1 L y se tapa. No olvide colocarle una etiqueta con el nombre del producto, la fecha de elaboración y la caducidad. Se guarda en un lugar fresco y seco.</p><h4>Nota:</h4>Es importante seleccionar el color y el olor mas apropiado, para facilitar su venta. <p>.</p><br><div class='alert alert-warning' role='alert'><span class='glyphicon glyphicon-exclamation-sign' aria-hidden='true'></span><span class='sr-only'>Error:</span> Es muy recomendable el uso de los guantes, los tapa bocas y lentes protectores, para poder prepararlo tenemos que hacerlos en envases limpios y una cuchara de madera larga.</div>";

    document.getElementById('salida').innerHTML = resul,
        document.getElementById('procedimiento').innerHTML = procedimiento;
    //Linea agregada
    popove();
}

function crema_limpiadora_para_manos_industrial() {
    var UI = document.getElementById('entrada').value;
    if (isNaN(UI)) { return false; }
    componente[505].v = UI * 5.21 / 100;
    componente[4].v = UI * 4.23 / 100;
    componente[173].v = UI * 0.16 / 100;
    componente[174].v = UI *  1.41 / 100;componente[175].v = UI * 1.41 / 100;componente[176].v = UI * 0.7 / 100;
    componente[177].v = UI * 3.1 / 100;
    componente[178].v = UI * 3.2 / 100; componente[179].v = UI * 12.4 / 100; componente[0].v = UI * 59.18 / 100;

    tratamiento(UI);
    tratamiento_producto(UI);
    resul =
        tca + UI + tipoproducto + fo + tcc + olli +
        componente[505].n + componente[505].v + lili +
        componente[4].n + componente[4].v + lili +
        componente[173].n + componente[173].v + lili +
        componente[174].n + componente[174].v + lili +
        componente[175].n + componente[175].v + lili +
        componente[176].n + componente[176].v + lili +
        componente[177].n + componente[177].v + lili +
        componente[178].n + componente[178].v + lili +
        componente[179].n + componente[179].v + lili +
        componente[0].n + componente[0].v + liol;


quitarigual();
    var procedimiento = "<p>Se obtiene una crema para quitar grasa y todo tipo de sucio de las manos con solo untar y frotarse las mismas pudiendo luego limpiarse con un trapo,   quedando las manos limpias. Este producto es muy usado en talleres mecánicos por su importante uso industrial y su facilidad de aplicación, puede agregádsele perfume y color si lo desea.</p><h3>PROCEDIMIENTO:</h3> <p>Se Realiza la mezcla de los componentes: "+componente[505].n+", "+componente[4].n+componente[173].n+", "+componente[174].n+" y "+componente[175].n+" y aparte los componentes "+componente[176].n+", "+componente[177].n+componente[178].n+", "+componente[179].n+" y "+componente[0].n+", para luego ser viertida una sobre la otra, agitando constantemente hasta que se forme una crema homogénea y suave. Agregue perfume si lo desea. </p><h4>Nota:</h4> Puede agregádsele perfume y color si lo desea.  <p>.</p><br><div class='alert alert-warning' role='alert'><span class='glyphicon glyphicon-exclamation-sign' aria-hidden='true'></span><span class='sr-only'>Error:</span> Es muy recomendable el uso de los guantes, los tapa bocas y lentes protectores, para poder prepararlo tenemos que hacerlos en envases limpios y una cuchara de madera larga.</div>";

    document.getElementById('salida').innerHTML = resul,
        document.getElementById('procedimiento').innerHTML = procedimiento;
    //Linea agregada
    popove();
}


function limpiador_de_vidrio() {
    var UI = document.getElementById('entrada').value;
    if (isNaN(UI)) { return false; }
    componente[507].v = UI * 76.5 / 100;
    componente[24].v = UI * 20 / 100;
    componente[179].v = UI * 0.5 / 100;
    componente[25].v = UI *  1 / 100;componente[7].v = UI * 1 / 100;
    componente[8].v = UI * 1 / 100;


    tratamiento(UI);
    tratamiento_producto(UI);
    resul =
        tca + UI + tipoproducto + fo + tcc + olli +
        componente[507].n + componente[507].v + lili +
        componente[24].n + componente[24].v + lili +
        componente[179].n + componente[179].v + lili +
        componente[25].n + componente[25].v + lili +
        componente[7].n + componente[7].v + lili +
        componente[8].n + componente[8].v + lili +


quitarigual();
    var procedimiento = "<p>Se obtiene un moderno líquido que no mancha ni opaca y posee un excelente efecto limpiador, quedando el vidrio completamente transparente y brillante, este producto debe ser aplicado usando un rociador y secando luego con un paño seco y limpio. </p><h3>PROCEDIMIENTO:</h3> <p>Se Realiza la mezcla de los componentes agregando uno por uno en un envase limpio. </p><h4>Nota:</h4> Puede agregádsele perfume y color si lo desea.  <p>.</p><br><div class='alert alert-warning' role='alert'><span class='glyphicon glyphicon-exclamation-sign' aria-hidden='true'></span><span class='sr-only'>Error:</span> Es muy recomendable el uso de los guantes, los tapa bocas, para poder prepararlo tenemos que hacerlos en envases limpios y una cuchara de madera larga.</div>";

    document.getElementById('salida').innerHTML = resul,
        document.getElementById('procedimiento').innerHTML = procedimiento;
    //Linea agregada
    popove();
}

function detergente_biodegradable_en_polvo() {
    var UI = document.getElementById('entrada').value;
    if (isNaN(UI)) { return false; }
    componente[180].v = UI * 5 / 100;
    componente[501].v = UI * 60 / 100;
    componente[181].v = UI * 15 / 100;
    componente[518].v = UI *  18.8 / 100;componente[182].v = UI * 1 / 100;
    componente[8].v = UI * 0.2 / 100;


    tratamiento(UI);
    tratamiento_producto(UI);
    resul =
        tca + UI + tipoproducto + fo + tcc + olli +
        componente[180].n + componente[180].v + lili +
        componente[501].n + componente[501].v + lili +
        componente[181].n + componente[181].v + lili +
        componente[518].n + componente[518].v + lili +
        componente[182].n + componente[182].v + lili +
        componente[8].n + componente[8].v + lili +


quitarigual();
    var procedimiento = "<p>Mediante este procedimiento se obtiene un moderno detergente bio degradable en polvo de gran poder limpiador, suaviza y desinfecta, se trata de un detergente de características similares a las de las primeras marcas del mercado. Una de las ventajas es que se prepara por simple mezcla de todos sus componentes en estado de polvo muy fino.  </p><h3>PROCEDIMIENTO:</h3> <p>Se Realiza la mezcla de los componentes agregando uno por uno en un envase limpio. </p><h4>Nota:</h4> Puede agregádsele perfume y color si lo desea.  <p>.</p><br><div class='alert alert-warning' role='alert'><span class='glyphicon glyphicon-exclamation-sign' aria-hidden='true'></span><span class='sr-only'>Error:</span> Es muy recomendable el uso de los guantes, los tapa bocas, para poder prepararlo tenemos que hacerlos en envases limpios y una cuchara de madera larga.</div>";

    document.getElementById('salida').innerHTML = resul,
        document.getElementById('procedimiento').innerHTML = procedimiento;
    //Linea agregada
    popove();
}
