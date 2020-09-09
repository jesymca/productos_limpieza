idmodulo ="2";
instalado.push(["<div class='col-sm-6 col-md-4'> <div class='thumbnail'> <img onmouseout='this.style.opacity=1' onmouseover='this.style.opacity=0.7' src=\"extra/modulos/"+idmodulo+"/media/imagen/instalado.svg\"> <div class='caption'> <h3>Modulo Cuidado Personal</h3> <p>Este modulo agrupa una seleccion de formulas de los productos mas utilizados del area cosmetica, que le permitira ampliar la gama de productos que usted puede ofrecer a sus clientes.</p> <p><a onclick='formulas(), primerselect();' href='#formulas' title='Ir a la Seccion de Calculos' class='btn btn-primary' role='button'>Ir a la Seccion de Calculos</a></p> </div> </div></div>"]);

secciones.push(
    ['Modulo Cuidado Personal']
);
 /*
 RESUMEN DE ROMBO NFPA
     a: Abreviacion Formula
     n: Nombre
     v: valor inicial
     t: tipo de producto true para liq y false para sol
     az: azul
         0 = SIN RIESGO
         1 = POCO PELIGROSO
         2 = PELIGROSO
         3 = MUY PELIGROSO
         4 = MORTAL
     ro: rojo
         0 = NO SE INFLAMA
         1 = SOBRE 93°
         2 = DEBAJO DE 93°
         3 = DEBAJO DE 37°
         4 = DEBAJO DE 25°
     am: amarillo
         0 = ESTABLE
         1 = INESTABLE EN CASO DE CALENTAMIENTO
         2 = INESTABLE EN CASO DE CAMBIO QUIMICO VIOLENTO
         3 = PUEDE EXPLOTAR EN CASO DE CHOQUE O CALENTAMIENTO
         4 = PUEDE EXPLOTAR SUBITAMENTE
     bla: blanco
         0 = OXIDANTE
         1 = CORROSIVO
         2 = RADIOACTIVO
         3 = NO USAR AGUA
         4 = RIESGO BIOLOGICO
         5 = NADA

     */

producto.push(
    {
        n: 'Aceite para Aromaterapia',
        az: 1,
        ro: 2,
        am: 0,
        bla: 5,
        c: ' ',
        v: 0,
        t: 'liq',
        grupo: 'Modulo Cuidado Personal'
    },
    {
        n: 'Aceite Limpiador',
        az: 1,
        ro: 2,
        am: 0,
        bla: 5,
        c: ' ',
        v: 0,
        t: 'liq',
        grupo: 'Modulo Cuidado Personal'
    },
    {
        n: 'Aceite Para Baño',
        az: 0,
        ro: 1,
        am: 0,
        bla: 5,
        c: ' ',
        v: 0,
        t: 'liq',
        grupo: 'Modulo Cuidado Personal'
    },
    {
        n: 'Aceite para Despues del Baño',
        az: 0,
        ro: 1,
        am: 0,
        bla: 5,
        c: ' ',
        v: 0,
        t: 'liq',
        grupo: 'Modulo Cuidado Personal'
    },
    {
        n: 'Aceite para Masajes',
        az: 0,
        ro: 1,
        am: 0,
        bla: 5,
        c: ' ',
        v: 0,
        t: 'liq',
        grupo: 'Modulo Cuidado Personal'
    },
  {
      n: 'Aceite para Masajes Perfumado',
      az: 0,
      ro: 1,
      am: 0,
      bla: 5,
      c: ' ',
      v: 0,
      t: 'liq',
      grupo: 'Modulo Cuidado Personal'
  },
  {
      n: 'Protector Labial',
      az: 0,
      ro: 1,
      am: 0,
      bla: 5,
      c: ' ',
      v: 0,
      t: 'sol',
      grupo: 'Modulo Cuidado Personal'
  },
  {
      n: 'Aceite Solar Bronceador',
      az: 0,
      ro: 1,
      am: 0,
      bla: 5,
      c: ' ',
      v: 0,
      t: 'liq',
      grupo: 'Modulo Cuidado Personal'
  }, {
      n: 'Crema despues del Bronceado Calmante',
      az: 0,
      ro: 1,
      am: 0,
      bla: 5,
      c: ' ',
      v: 0,
      t: 'liq',
      grupo: 'Modulo Cuidado Personal'
    }, {
        n: 'Agua de Rosas Formula 1',
        az: 0,
        ro: 0,
        am: 0,
        bla: 5,
        c: ' ',
        v: 0,
        t: 'liq',
        grupo: 'Modulo Cuidado Personal'
    }, {
        n: 'Agua de Rosas Formula 2',
        az: 0,
        ro: 0,
        am: 0,
        bla: 5,
        c: ' ',
        v: 0,
        t: 'liq',
        grupo: 'Modulo Cuidado Personal'
    }, {
        n: 'Antitranspirante Liquido con Alcohol',
        az: 0,
        ro: 0,
        am: 0,
        bla: 5,
        c: ' ',
        v: 0,
        t: 'liq',
        grupo: 'Modulo Cuidado Personal'
    }, {
        n: 'Desodorante sin Alcohol',
        az: 0,
        ro: 0,
        am: 0,
        bla: 5,
        c: ' ',
        v: 0,
        t: 'liq',
        grupo: 'Modulo Cuidado Personal'
    }, {
        n: 'Barra Labial',
        az: 0,
        ro: 0,
        am: 0,
        bla: 5,
        c: ' ',
        v: 0,
        t: 'liq',
        grupo: 'Modulo Cuidado Personal'
    }, {
        n: 'Crema Desodorante para Roll On',
        az: 0,
        ro: 0,
        am: 0,
        bla: 5,
        c: ' ',
        v: 0,
        t: 'liq',
        grupo: 'Modulo Cuidado Personal'
    }, {
        n: 'Crema Antienvejecimiento',
        az: 0,
        ro: 0,
        am: 0,
        bla: 5,
        c: ' ',
        v: 0,
        t: 'sol',
        grupo: 'Modulo Cuidado Personal'
    }, {
        n: 'Crema Anticelulitis',
        az: 0,
        ro: 0,
        am: 0,
        bla: 5,
        c: ' ',
        v: 0,
        t: 'sol',
        grupo: 'Modulo Cuidado Personal'
    }, {
        n: 'Crema Antipruriginosa Analgesica',
        az: 0,
        ro: 0,
        am: 0,
        bla: 5,
        c: ' ',
        v: 0,
        t: 'sol',
        grupo: 'Modulo Cuidado Personal'
    }, {
        n: 'Crema Cicatrizante Hipoalergenica',
        az: 0,
        ro: 0,
        am: 0,
        bla: 5,
        c: ' ',
        v: 0,
        t: 'sol',
        grupo: 'Modulo Cuidado Personal'
    }, {
        n: 'Cera Depiladora Caliente',
        az: 0,
        ro: 1,
        am: 0,
        bla: 5,
        c: ' ',
        v: 0,
        t: 'sol',
        grupo: 'Modulo Cuidado Personal'
    }, {
        n: 'Crema Antiestrias',
        az: 0,
        ro: 1,
        am: 0,
        bla: 5,
        c: ' ',
        v: 0,
        t: 'sol',
        grupo: 'Modulo Cuidado Personal'
    }, {
        n: 'Crema Gelificada Standar',
        az: 0,
        ro: 1,
        am: 0,
        bla: 5,
        c: ' ',
        v: 0,
        t: 'sol',
        grupo: 'Modulo Cuidado Personal'
    }, {
        n: 'Crema Depiladora',
        az: 0,
        ro: 1,
        am: 0,
        bla: 5,
        c: ' ',
        v: 0,
        t: 'sol',
        grupo: 'Modulo Cuidado Personal'
    }, {
        n: 'Crema Pieles Envejecidas',
        az: 0,
        ro: 1,
        am: 0,
        bla: 5,
        c: ' ',
        v: 0,
        t: 'sol',
        grupo: 'Modulo Cuidado Personal'
    }, {
        n: 'Crema Descamante',
        az: 0,
        ro: 1,
        am: 0,
        bla: 5,
        c: ' ',
        v: 0,
        t: 'sol',
        grupo: 'Modulo Cuidado Personal'
    }, {
        n: 'Crema Antiarrugas',
        az: 0,
        ro: 1,
        am: 0,
        bla: 5,
        c: ' ',
        v: 0,
        t: 'sol',
        grupo: 'Modulo Cuidado Personal'
    }, {
        n: 'Crema Hidratante',
        az: 0,
        ro: 1,
        am: 0,
        bla: 5,
        c: ' ',
        v: 0,
        t: 'sol',
        grupo: 'Modulo Cuidado Personal'
    }, {
        n: 'Crema Hidronutritiva Antiestres Termica',
        az: 0,
        ro: 1,
        am: 0,
        bla: 5,
        c: ' ',
        v: 0,
        t: 'sol',
        grupo: 'Modulo Cuidado Personal'
    }, {
        n: 'Crema Hidronutritiva con Karite Filtro UV',
        az: 0,
        ro: 1,
        am: 0,
        bla: 5,
        c: ' ',
        v: 0,
        t: 'sol',
        grupo: 'Modulo Cuidado Personal'
    }, {
        n: 'Crema Despues del Sol',
        az: 0,
        ro: 1,
        am: 0,
        bla: 5,
        c: ' ',
        v: 0,
        t: 'sol',
        grupo: 'Modulo Cuidado Personal'
    }, {
        n: 'Crema Para Masajes',
        az: 0,
        ro: 1,
        am: 0,
        bla: 5,
        c: ' ',
        v: 0,
        t: 'sol',
        grupo: 'Modulo Cuidado Personal'
    }, {
        n: 'Crema Nutritiva',
        az: 0,
        ro: 1,
        am: 0,
        bla: 5,
        c: ' ',
        v: 0,
        t: 'sol',
        grupo: 'Modulo Cuidado Personal'
    }, {
        n: 'Crema Hidronutritiva tipo DERMOX',
        az: 0,
        ro: 1,
        am: 0,
        bla: 5,
        c: ' ',
        v: 0,
        t: 'sol',
        grupo: 'Modulo Cuidado Personal'
    }, {
        n: 'Crema Hidronutritiva tipo BEDUCEN',
        az: 0,
        ro: 1,
        am: 0,
        bla: 5,
        c: ' ',
        v: 0,
        t: 'sol',
        grupo: 'Modulo Cuidado Personal'
    }, {
        n: 'Crema de Manos no Ionica',
        az: 0,
        ro: 1,
        am: 0,
        bla: 5,
        c: ' ',
        v: 0,
        t: 'sol',
        grupo: 'Modulo Cuidado Personal'
    }, {
        n: 'Crema de Manos de Mantequilla',
        az: 0,
        ro: 1,
        am: 0,
        bla: 5,
        c: ' ',
        v: 0,
        t: 'sol',
        grupo: 'Modulo Cuidado Personal'
    }, {
        n: 'Crema de Manos de Limon',
        az: 0,
        ro: 1,
        am: 0,
        bla: 5,
        c: ' ',
        v: 0,
        t: 'sol',
        grupo: 'Modulo Cuidado Personal'
    }, {
        n: 'Crema de Manos con Cera Cationica',
        az: 0,
        ro: 1,
        am: 0,
        bla: 5,
        c: ' ',
        v: 0,
        t: 'sol',
        grupo: 'Modulo Cuidado Personal'
    }, {
        n: 'Crema Facial Formula 1',
        az: 0,
        ro: 1,
        am: 0,
        bla: 5,
        c: ' ',
        v: 0,
        t: 'sol',
        grupo: 'Modulo Cuidado Personal'
    }, {
        n: 'Crema Facial Formula 2',
        az: 0,
        ro: 1,
        am: 0,
        bla: 5,
        c: ' ',
        v: 0,
        t: 'sol',
        grupo: 'Modulo Cuidado Personal'
    }, {
        n: 'Crema Desodorante',
        az: 0,
        ro: 1,
        am: 0,
        bla: 5,
        c: ' ',
        v: 0,
        t: 'sol',
        grupo: 'Modulo Cuidado Personal'
    }, {
        n: 'Colorete en Polvo Compacto',
        az: 0,
        ro: 1,
        am: 0,
        bla: 5,
        c: ' ',
        v: 0,
        t: 'sol',
        grupo: 'Modulo Cuidado Personal'
    }, {
        n: 'Crema Anticelulitica',
        az: 0,
        ro: 1,
        am: 0,
        bla: 5,
        c: ' ',
        v: 0,
        t: 'sol',
        grupo: 'Modulo Cuidado Personal'
    }, {
        n: 'Crema de Colageno para la Piel',
        az: 0,
        ro: 1,
        am: 0,
        bla: 5,
        c: ' ',
        v: 0,
        t: 'sol',
        grupo: 'Modulo Cuidado Personal'
    }

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

//componente.push();
//DESDE 1000 A 1499
componente[1000] = {
    n: 'Hidroxibutiltolueno (BTH) - C<sub>15</sub>H<sub>24</sub>O = ',
    v: 0,
    t: "liq",
    c: "El BHT o Butil hidroxitolueno (E-321) es un antioxidante sintético procedente de la industria petrolera. Se utiliza prácticamente siempre mezclado con el BHA (E-320). Es capaz de modificar la acción de algunos carcinógenos.",
};
componente[1001] = {
    n: 'Lactil = ',
    v: 0,
    t: "liq",
    c: "LACTIL® es una mezcla de humectantes en solución acuosa como un sustituto para el factor hidratante natural (NMF) de la piel humana. Es especialmente adecuado para su uso en cosméticos hidro-regulativos y los productos anti-envejecimiento. LACTIL® es adecuado como aditivo en cosméticos hidro-regulativos de todo tipo, incluyendo cremas y lociones hidratantes, cremas y lociones corporales, cremas anti-envejecimiento, geles de ducha, productos de ducha/baño.",
};
componente[1002] = {
    n: 'Alcohol Estearílico - C<sub>18</sub>H<sub>38</sub>O = ',
    v: 0,
    t: "liq",
    c: "El 1-octadecanol o alcohol estearílico (también conocido como alcohol de octadecilo u octadecil alcohol) es un compuesto orgánico con la fórmula C<sub>18</sub>H<sub>38</sub>O. Se clasifica como un alcohol graso. Toma la forma de gránulos o copos blancos, que son insolubles en agua. Tiene una amplia gama de usos como un ingrediente en lubricantes, resinas, perfumes y cosméticos.",
};
componente[1003] = {
    n: 'COMP1002',
    v: 0,
    t: "sol",
    c: "COMPONENTE 1002.",
};
componente[1003] = {
    n: 'COMP1002',
    v: 0,
    t: "sol",
    c: "COMPONENTE 1002.",
};
componente[1003] = {
    n: 'COMP1002',
    v: 0,
    t: "sol",
    c: "COMPONENTE 1002.",
};
componente[1003] = {
    n: 'COMP1002',
    v: 0,
    t: "sol",
    c: "COMPONENTE 1002.",
};


function tratamiento_extra_mcp() {
    for (ab in componente) {
        if (ab >= 1000) {
            ncompo = componente[ab].n;
            titulocompo = ncompo.replace("=", "");
            //componente[ab].n = "<b>" + componente[ab].n+"</b>";
            componente[ab].n = "<b data-toggle='popover' title='<b>" + titulocompo + "</b>' data-content='" + componente[ab].c + "'>" + componente[ab].n + "</b>";
        }
    }
    return componente[ab].n;
}
tratamiento_extra_mcp();

//INICIO DE FUNTION

function aceite_para_aromaterapia() {
    var UI = document.getElementById('entrada').value;
    if (isNaN(UI)) { return false; }
    componente[76].v = p(5);
    componente[77].v = p(95);

    tratamiento(UI);
    tratamiento_producto(UI);

    resul =
        tca + UI + tipoproducto + fo + tcc + olli +
        componente[76].n + componente[76].v + lili +
        componente[77].n + componente[77].v + liol;



        quitarigual();
        var procedimiento = "<h3>PROCEDIMIENTO:</h3> <ol><li>Escoger el aceite esencial natural según el efecto deseado.</li><li>Depositar el aceite esencial en un recipiente y añadir el aceite de almendras dulces homogeneizando.</li></ol><h4>Usos y Aplicacion:</h4><p>Para un baño, se depositarán unas gotas en la bañera. </p><p>Para una sauna, se añadirán 2-3 gotas en el recipiente interior con agua, por cada 500 cc.</p><br>        <div class='alert alert-warning' role='alert'><span class='glyphicon glyphicon-exclamation-sign' aria-hidden='true'></span> <span class = 'sr-only' > Error: </span> Mantener alejado de fuentes de calor..</div>";

    document.getElementById('salida').innerHTML = resul,
        document.getElementById('procedimiento').innerHTML = procedimiento;

    popove();
    ponerigual();
}


function aceite_limpiador() {
    var UI = document.getElementById('entrada').value;
    if (isNaN(UI)) { return false; }
    componente[78].v = p(5);
    componente[80].v = p(95);
    componente[51].v = p(95);
    componente[77].v = p(95);
    componente[77].v = p(95);
    componente[77].v = p(95);
    componente[77].v = p(95);

    tratamiento(UI);
    tratamiento_producto(UI);

    resul =
        tca + UI + tipoproducto + fo + tcc + olli +
        componente[76].n + componente[76].v + lili +
        componente[76].n + componente[76].v + lili +
        componente[76].n + componente[76].v + lili +
        componente[76].n + componente[76].v + lili +
        componente[76].n + componente[76].v + lili +
        componente[76].n + componente[76].v + lili +
        componente[77].n + componente[77].v + liol;



        quitarigual();
        var procedimiento = "<h3>PROCEDIMIENTO:</h3>"+componente[77].n+" <p></p><h4>Envasado y conservación: </h4><p></p><h4>Caducidad:</h4></p><br><div class='alert alert-warning' role='alert'><span class='glyphicon glyphicon-exclamation-sign' aria-hidden='true'></span><span class='sr-only'>Error:</span> hhhhhhh.</div>";

    document.getElementById('salida').innerHTML = resul,
        document.getElementById('procedimiento').innerHTML = procedimiento;

    popove();
    ponerigual();
}


function aceite_limpiador2() {
    var UI = document.getElementById('entrada').value;
    if (isNaN(UI)) { return false; }
    componente[76].v = p(5);
    componente[77].v = p(95);

    tratamiento(UI);
    tratamiento_producto(UI);

    resul =
        tca + UI + tipoproducto + fo + tcc + olli +
        componente[76].n + componente[76].v + lili +
        componente[77].n + componente[77].v + liol;



        quitarigual();
        var procedimiento = "<h3>PROCEDIMIENTO:</h3> <p></p><h4>Envasado y conservación: </h4><p></p><h4>Caducidad:</h4></p><br><div class='alert alert-warning' role='alert'><span class='glyphicon glyphicon-exclamation-sign' aria-hidden='true'></span><span class='sr-only'>Error:</span> hhhhhhh.</div>";

    document.getElementById('salida').innerHTML = resul,
        document.getElementById('procedimiento').innerHTML = procedimiento;

    popove();
    ponerigual();
}

function aceite_limpiador3() {
    var UI = document.getElementById('entrada').value;
    if (isNaN(UI)) {
        return false;
    }
    componente[76].v = p(5);
    componente[77].v = p(95);

    tratamiento(UI);
    tratamiento_producto(UI);

    resul =
        tca + UI + tipoproducto + fo + tcc + olli +
        componente[76].n + componente[76].v + lili +
        componente[77].n + componente[77].v + liol;



        quitarigual();
        var procedimiento = "<h3>PROCEDIMIENTO:</h3> <p></p><h4>Envasado y conservación: </h4><p></p><h4>Caducidad:</h4></p><br><div class='alert alert-warning' role='alert'><span class='glyphicon glyphicon-exclamation-sign' aria-hidden='true'></span><span class='sr-only'>Error:</span> hhhhhhh.</div>";

    document.getElementById('salida').innerHTML = resul,
        document.getElementById('procedimiento').innerHTML = procedimiento;

    popove();
    ponerigual();
}

function aceite_para_baño() {
    var UI = document.getElementById('entrada').value;
    if (isNaN(UI)) {
        return false;
    }
    componente[04].v = p(83.9);
    componente[78].v = p(10);
    componente[08].v = p(2);
    componente[07].v = p(0.1);
    componente[83].v = p(1);

    tratamiento(UI);
    tratamiento_producto(UI);

    resul =
        tca + UI + tipoproducto + fo + tcc + olli +
        componente[04].n + componente[04].v + lili +
        componente[78].n + " o " + componente[79].n + componente[78].v + lili +
        componente[08].n + componente[08].v + lili +
        componente[07].n + componente[07].v + lili +
        componente[83].n + componente[83].v + liol;



        quitarigual();
        var procedimiento = "<h3>PROCEDIMIENTO:</h3> <p>Es bastante sencillo, solo basta con mezclar todos los componentes en frío. La recomendacion es comenzar por el ingrediente de menor proporción y dejar el perfume para el final.</p><h4>Envasado y conservación: </h4><p>Puede hacerlo en envases de plasticos PET o de polipropileno, tambien se puede utilizar envases de vidrio.</p><h4>Caducidad:</h4><p>Este producto posee un tiempo de vigencia de 3 años.</p><br><div class='alert alert-warning' role='alert'><span class='glyphicon glyphicon-exclamation-sign' aria-hidden='true'></span><span class='sr-only'>Error:</span> Evite el contacto prolongado con las mucosas.</div>";

    document.getElementById('salida').innerHTML = resul,
        document.getElementById('procedimiento').innerHTML = procedimiento;

    popove();
    ponerigual();
}

function aceite_para_despues_del_baño() {
    var UI = document.getElementById('entrada').value;
    if (isNaN(UI)) {
        return false;
    }
    componente[85].v = p(40);
    componente[78].v = p(30);
    componente[86].v = p(27);
    componente[87].v = p(3);

    tratamiento(UI);
    tratamiento_producto(UI);

    resul =
        tca + UI + tipoproducto + fo + tcc + olli +
        componente[85].n + componente[85].v + lili +
        componente[78].n + " o " + componente[79].n + componente[78].v + lili +
        componente[86].n + componente[86].v + lili +
        componente[87].n + componente[87].v + liol;



        quitarigual();
        var procedimiento = "<h3>PROCEDIMIENTO:</h3> <p>Es bastante sencillo, solo basta con mezclar en un envase los componentes y homogeneizar con la varilla agitadora a temperatura ambiente.</p><h4>Envasado y conservación: </h4><p>Puede hacerlo en envases de plasticos PET o de polipropileno, tambien se puede utilizar envases de vidrio.</p><h4>Caducidad:</h4><p>Este producto posee un tiempo de vigencia de 3 años.</p><br><div class='alert alert-warning' role='alert'><span class='glyphicon glyphicon-exclamation-sign' aria-hidden='true'></span><span class='sr-only'>Error:</span> Evite el contacto prolongado con las mucosas.</div>";

    document.getElementById('salida').innerHTML = resul,
        document.getElementById('procedimiento').innerHTML = procedimiento;

    popove();
    ponerigual();
}

function aceite_para_masajes() {
    var UI = document.getElementById('entrada').value;
    if (isNaN(UI)) {
        return false;
    }
    componente[85].v = p(40);
    componente[86].v = p(10);
    componente[88].v = p(25);
    componente[77].v = p(4);
    componente[67].v = p(21);

    tratamiento(UI);
    tratamiento_producto(UI);

    resul =
        tca + UI + tipoproducto + fo + tcc + olli +
        componente[85].n + componente[85].v + lili +
        componente[86].n + componente[86].v + lili +
        componente[88].n + componente[88].v + lili +
        componente[77].n + componente[77].romero + componente[77].v + lili +
        componente[67].n + componente[67].v + liol;



        quitarigual();
        var procedimiento = "<h3>PROCEDIMIENTO:</h3> <p>Es bastante sencillo, solo basta con mezclar y homogeneizar todos los componentes.</p><h4>Envasado y conservación: </h4><p>Puede hacerlo en envases de plasticos PET o de polipropileno, tambien se puede utilizar envases de vidrio.</p><h4>Caducidad:</h4><p>Este producto posee un tiempo de vigencia de 3 años.</p><br><div class='alert alert-warning' role='alert'><span class='glyphicon glyphicon-exclamation-sign' aria-hidden='true'></span><span class='sr-only'>Error:</span> Evite el contacto prolongado con las mucosas.</div>";

    document.getElementById('salida').innerHTML = resul,
        document.getElementById('procedimiento').innerHTML = procedimiento;

    popove();
    ponerigual();
}

function aceite_para_masajes_perfumado() {
    var UI = document.getElementById('entrada').value;
    if (isNaN(UI)) {
        return false;
    }
    componente[76].v = p(94);
    componente[77].v = p(5);
    componente[700].v = p(1);

    tratamiento(UI);
    tratamiento_producto(UI);

    resul =
        tca + UI + tipoproducto + fo + tcc + olli +
        componente[76].n + componente[76].v + lili +
        componente[77].n + componente[77].v + lili +
        componente[700].n + componente[700].v + liol;


        quitarigual();
        var procedimiento = "<h3>PROCEDIMIENTO:</h3> <p>Es bastante sencillo, solo basta con mezclar y homogeneizar todos los componentes.</p><h4>Envasado y conservación: </h4><p>Puede hacerlo en envases de plasticos PET o de polipropileno, tambien se puede utilizar envases de vidrio.</p><h4>Caducidad:</h4><p>Este producto posee un tiempo de vigencia de 3 años.</p><br><div class='alert alert-warning' role='alert'><span class='glyphicon glyphicon-exclamation-sign' aria-hidden='true'></span><span class='sr-only'>Error:</span> Evite el contacto prolongado con las mucosas. Sin el Aceite Esencial también será un aceite para masaje. Podemos elegir entre una gran variedad de aceites esenciales, según el efecto complementario que deseemos: relajante, regenerador, tonificante...! La cantidad de aceite esencial puede variar entre unas gotas y un 5% según las características, potencia de acción, aroma deseados.</div>";

    document.getElementById('salida').innerHTML = resul,
        document.getElementById('procedimiento').innerHTML = procedimiento;

    popove();
    ponerigual();
}

function protector_labial() {
    var UI = document.getElementById('entrada').value;
    if (isNaN(UI)) {
        return false;
    }
    componente[50].v = p(5);
    componente[54].v = p(8);
    componente[49].v = p(10);
    componente[89].v = p(5);
    componente[03].v = p(63.85);
    componente[78].v = p(15);
    componente[90].v = p(0.05);
    componente[111].v = p(0.01);
    componente[08].v = p(1);
    componente[91].v = p(6);
    componente[92].v = p(4);

    tratamiento(UI);
    tratamiento_producto(UI);

    resul =
        tca + UI + tipoproducto + fo + tcc + olli +
        componente[50].n + componente[50].v + lili +
        componente[54].n + componente[54].v + lili +
        componente[49].n + componente[49].v + lili +
        componente[89].n + componente[89].v + lili +
        componente[03].n + componente[03].v + lili +
        componente[78].n + " o " + componente[79].n + componente[78].v + lili +
        componente[90].n + componente[90].v + lili +
        componente[111].n + componente[111].v + lili +
        componente[08].n + componente[08].v + lili +
        componente[91].n + componente[91].color.replace("=", "") + componente[91].v + lili +
        componente[91].n + componente[91].blanco.replace("=", "") + componente[92].v + liol;


        quitarigual();
        var procedimiento = "<h3>PROCEDIMIENTO:</h3> <p>Este producto debe mezclar los componentes en Baño María a 85°C, debe de estar bien homogenea la mezcla y siempre manipular en temperatura arriba de 80° sin que llegue a 100°.</p><h4>Envasado y conservación: </h4><p>Mientras aun este tibia la mezcla debe verterla en un envase para aplicar con pincel (o en un molde para barra labial). </p><h4>Caducidad:</h4><p>Este producto posee un tiempo de vigencia de 3 años.</p><br><div class='alert alert-warning' role='alert'><span class='glyphicon glyphicon-exclamation-sign' aria-hidden='true'></span><span class='sr-only'>Error:</span> El aumento de la cantidad de cera carnauba (cera dura y quebradiza), aumenta la dureza del producto, mientras que el aumento de la cera candelilla combinada con una disminución de cera carnauba, la hace más blanda. La manteca de cacao es ideal por su Punto de Fusión, próximo a la temperatura corporal, pero su exceso provoca exudado  que son gotículas externas en el cosmético y esto no es muy apropiado en este producto.</div>";

    document.getElementById('salida').innerHTML = resul,
        document.getElementById('procedimiento').innerHTML = procedimiento;

    popove();
    ponerigual();
}

function aceite_solar_bronceador() {
    var UI = document.getElementById('entrada').value;
    if (isNaN(UI)) {
        return false;
    }
    componente[92].v = p(5);
    componente[78].v = p(43);
    componente[80].v = p(50);
    componente[136].v = p(2);

    tratamiento(UI);
    tratamiento_producto(UI);

    resul =
        tca + UI + tipoproducto + fo + tcc + olli +
        componente[92].n + componente[92].v + lili +
        componente[78].n + " o " + componente[79].n + componente[78].v + lili +
        componente[80].n + componente[80].v + lili +
        componente[136].n + componente[136].v + liol;


        quitarigual();
        var procedimiento = "<h3>PROCEDIMIENTO:</h3> <p>Este producto debe prepararse mezclando los componentes en Baño María a 75°C, debe de estar bien homogenea la mezcla debe evitar que se superen los 80° C. El orden de mezcla es indiferente, solo debe tomar en cuenta que el ultimo producto a incorporar a la mezcla es el Neo-Heliopan (Protector Solar).</p><h4>Envasado y conservación: </h4><p>Una vez reposada la mezcla se puede envasar y almacenar en frascos de plastico de polipropileno o PET, no se recomiendan envases de vidrio para hacerlo portable y a la vez seguro ante golpes y caidas.</p><h4>Caducidad:</h4><p>Este producto posee un tiempo de vigencia de 3 años.</p><br><div class='alert alert-warning' role='alert'><span class='glyphicon glyphicon-exclamation-sign' aria-hidden='true'></span><span class='sr-only'>Error:</span> Sea cual sea el grado de bronceado deseado, se debe incluir en la formula un porcentaje de protector UV Neo-Heliopan, mientras mayor sea la cantidad de Neo-Heliopan logicamente mayor sea la proteccion contra los rayos UV.</div>";

    document.getElementById('salida').innerHTML = resul,
        document.getElementById('procedimiento').innerHTML = procedimiento;

    popove();
    ponerigual();
}

function crema_despues_del_bronceado_calmante() {
    var UI = document.getElementById('entrada').value;
    if (isNaN(UI)) {
        return false;
    }
    componente[94].v = p(5);
    componente[17].v = p(8);
    componente[47].v = p(10);
    componente[00].v = p(5);

    tratamiento(UI);
    tratamiento_producto(UI);

    resul =
        tca + UI + tipoproducto + fo + tcc + olli +
        componente[94].n + componente[94].v + lili +
        componente[17].n + componente[17].v + lili +
        componente[47].n + componente[47].v + lili +
        componente[00].n + componente[00].v + liol;


        quitarigual();
        var procedimiento = "<h3>PROCEDIMIENTO:</h3> <p>Este producto debe prepararse mezclando los componentes en un mortero empezando por los de menor concentración.</p><h4>Envasado y conservación: </h4><p>Se puede envasar y almacenar en frascos de plastico de polipropileno o PET, no se recomiendan envases de vidrio para hacerlo portable y a la vez seguro ante golpes y caidas.</p><h4>Caducidad:</h4><p>Este producto posee un tiempo de vigencia de 3 años.</p><br><div class='alert alert-warning' role='alert'><span class='glyphicon glyphicon-exclamation-sign' aria-hidden='true'></span><span class='sr-only'>Error:</span> La CALAMINA es carbonato de Zinc funciona como astringente suave que alivia el dolor. Podemos sustituir el agua por Agua de Rosas o Agua de Hamamelis.</div>";

    document.getElementById('salida').innerHTML = resul,
        document.getElementById('procedimiento').innerHTML = procedimiento;

    popove();
    ponerigual();
}

function agua_de_rosas_formula_1() {
    var UI = document.getElementById('entrada').value;
    if (isNaN(UI)) {
        return false;
    }
    componente[08].v = p(1);
    componente[95].v = p(6);
    componente[00].v = p(93);

    tratamiento(UI);
    tratamiento_producto(UI);

    resul =
        tca + UI + tipoproducto + fo + tcc + olli +
        componente[08].n + componente[08].v + lili +
        componente[95].n + componente[95].v + lili +
        componente[00].n + componente[00].v + liol;


        quitarigual();
        var procedimiento = "<h3>PROCEDIMIENTO:</h3> <p>En un envase mezclar la escencia de rosas y el Tween 20 luego ir agregando el agua de forma gradual sin dejar de remover.</p><h4>Envasado y conservación: </h4><p>Se puede envasar y almacenar en frascos de plastico de polipropileno o PET, no se recomiendan envases de vidrio para hacerlo portable y a la vez seguro ante golpes y caidas.</p><h4>Caducidad:</h4><p>Este producto posee un tiempo de vigencia de 3 años.</p><br><div class='alert alert-warning' role='alert'><span class='glyphicon glyphicon-exclamation-sign' aria-hidden='true'></span><span class='sr-only'>Error:</span> Por su acción astringente suave (tonificante), se utilizará en pieles cansadas y congestionadas que requieren un efecto descongestivo y tonificante. Se usa como tratamiento final o previo a otro. Podemos utilizar esencia de rosas sin emulsionante pero disminuyendo la cantidad de P.A. (0,25% por ejemplo ).</div>";

    document.getElementById('salida').innerHTML = resul,
        document.getElementById('procedimiento').innerHTML = procedimiento;

    popove();
    ponerigual();
}

function agua_de_rosas_formula_2() {
    var UI = document.getElementById('entrada').value;
    if (isNaN(UI)) {
        return false;
    }
    componente[96].v = p(10);
    componente[27].v = p(5);
    componente[00].v = p(85);

    tratamiento(UI);
    tratamiento_producto(UI);

    resul =
        tca + UI + tipoproducto + fo + tcc + olli +
        componente[96].n + componente[96].v + lili +
        componente[27].n + componente[27].v + lili +
        componente[00].n + componente[00].v + liol;


        quitarigual();
        var procedimiento = "<h3>PROCEDIMIENTO:</h3> <p>En un envase mezclar el extracto de rosas y el alcohol luego ir agregando el agua de forma gradual sin dejar de remover.</p><h4>Envasado y conservación: </h4><p>Se puede envasar y almacenar en frascos de plastico de polipropileno o PET, no se recomiendan envases de vidrio para hacerlo portable y a la vez seguro ante golpes y caidas.</p><h4>Caducidad:</h4><p>Este producto posee un tiempo de vigencia de 3 años.</p><br><div class='alert alert-warning' role='alert'><span class='glyphicon glyphicon-exclamation-sign' aria-hidden='true'></span><span class='sr-only'>Error:</span> Por su acción astringente suave (tonificante), se utilizará en pieles cansadas y congestionadas que requieren un efecto descongestivo y tonificante.</div>";

    document.getElementById('salida').innerHTML = resul,
        document.getElementById('procedimiento').innerHTML = procedimiento;

    popove();
    ponerigual();
}

function antitranspirante_liquido_con_alcohol() {
    var UI = document.getElementById('entrada').value;
    if (isNaN(UI)) {
        return false;
    }
    componente[97].v = p(20);
    componente[66].v = p(5);
    componente[67].v = p(10);
    componente[98].v = p(0.2);
    componente[08].v = p(2);
    componente[00].v = p(62.8);

    tratamiento(UI);
    tratamiento_producto(UI);

    resul =
        tca + UI + tipoproducto + fo + tcc + olli +
        componente[97].n + componente[97].v + lili +
        componente[66].n + componente[66].v + lili +
        componente[67].n + componente[67].v + lili +
        componente[98].n + componente[98].v + lili +
        componente[08].n + componente[08].v + lili +
        componente[00].n + componente[00].v + liol;


        quitarigual();
        var procedimiento = "<h3>PROCEDIMIENTO:</h3> <ul><li>Diluir el Alumbre en el agua.</li> <li>Incorporar el Clorhidrato de Aluminio.</li> <li>En otro envase unir el propanodiol y el etanol.</li> <li>Unir ambas mezclas e incorporar la fragancia.</li> <li>Una vez homogeneo se debe envasar en un envase para aplicarlo directamente con la ayuda de los dedos, para envasarlo en envases tipo Roll On habrá que espesarlo de 2 formas. Dispersando metil-celulosa en parte del agua, dejar 12 horas y añadir al conjunto o la segunda forma es con el uso de citrato sódico o tartrato sódico que reaccionan con el clorhidrato.</li></ul><h4>Conservación: </h4><p>Se debe mantener lejos de las fuentes de calor.</p><h4>Caducidad:</h4><p>Este producto posee un tiempo de vigencia de 3 años.</p><h4>Nota Importante</h4><p>El clorhidrato de aluminio es una mezcla de cloruro e hidróxido, también llamado clorhidróxido.<br>El clorhidróxido de aluminio se puede utilizar en concentraciones desde el 6% hasta un máximo de 25%. A nivel axilar, se recomiendan concentraciones del 6%-12%, según el nivel de sudoración personal y la sensibilidad de cada piel.<br>El alcohol (etanol o alcohol etílico) es muy irritante a nivel axilar, pero refrescante y antiséptico a nivel pédico. <br> Para incorporar la esencia es imprescindible la presencia de alcohol. A nivel axilar, sin alcohol, haría falta la presencia de un emulsionante tipo TWEEN-80. <br> Las sales de aluminio son más efectivas a pH ácido (4,5) por lo que ajustaremos el pH una vez terminado el cosmético.</p><br><div class='alert alert-warning' role='alert'><span class='glyphicon glyphicon-exclamation-sign' aria-hidden='true'></span><span class='sr-only'>Error:</span> Verifique siempre los niveles de PH, procure colocar la fecha de elaboracion en la etiqueta del producto.</div>";

    document.getElementById('salida').innerHTML = resul,
        document.getElementById('procedimiento').innerHTML = procedimiento;

    popove();
    ponerigual();
}


function desodorante_sin_alcohol() {
    var UI = document.getElementById('entrada').value;
    if (isNaN(UI)) {
        return false;
    }
    componente[100].v = p(6);
    componente[66].v = p(38);
    componente[99].v = p(0.5);
    componente[121].v = p(4);
    componente[08].v = p(1);
    componente[07].v = p(1);
    componente[17].v = p(49.5);
    componente[18].v = p(100);

    tratamiento(UI);
    tratamiento_producto(UI);

    resul =
        tca + UI + tipoproducto + fo + tcc + olli +
        componente[100].n + componente[100].v + lili +
        componente[66].n + componente[66].v + lili +
        componente[99].n + componente[99].v + lili +
        componente[121].n + componente[121].v + lili +
        componente[08].n + componente[08].v + lili +
        componente[07].n + componente[07].v + lili +
        componente[17].n + componente[17].v + liol;


        quitarigual();
        var procedimiento = "<h3>PROCEDIMIENTO:</h3> <ul><li>En un envase al baño de Maria debe colocar el " + componente[100].n + ", " + componente[66].n + " y " + componente[99].n + ".</li> <li>En otro envase a baño de Maria colocar el: " + componente[121].n + " y " + componente[17].n + "</li> <li>Incorporar la primera mezcla en la segunda al mismo tiempo que se retira del baño de Maria, debe estar agitando de manera continua, monitorear con un termometro hasta llegar a 50° C en ese momento debe agregar el colorante y el perfume.</li> <li>Una vez homogeneo se debe envasar en un envase para desodorante en barra.</li><li>Es posible que sienta la mezcla muy espesa, en ese caso recomendamos adicionar un poco de " + componente[17].n + ", puede agregar hasta un maximo total de: " + componente[18].v +" a su preparacion</li></ul><h4>Conservación: </h4><p>Se debe mantener lejos de las fuentes de calor.</p><h4>Caducidad:</h4><p>Este producto posee un tiempo de vigencia de 3 años.</p><h4>Nota Importante</h4><p>El ácido esteárico de mejor calidad, transparente, es el denominado de triple presión. Forma el pre-emulsionante.</p><br><div class='alert alert-warning' role='alert'><span class='glyphicon glyphicon-exclamation-sign' aria-hidden='true'></span><span class='sr-only'>Error:</span> Verifique siempre los niveles de PH, procure colocar la fecha de elaboracion en la etiqueta del producto.</div>";

    document.getElementById('salida').innerHTML = resul,
        document.getElementById('procedimiento').innerHTML = procedimiento;

    popove();
    ponerigual();
}


function barra_labial() {
    var UI = document.getElementById('entrada').value;
    if (isNaN(UI)) {
        return false;
    }
    componente[50].v = p(14);
    componente[49].v = p(10);
    componente[03].v = p(100);
    componente[78].v = p(20);
    componente[90].v = p(0.05);
    componente[08].v = p(1);
    componente[07].v = p(6);

    tratamiento(UI);
    tratamiento_producto(UI);

    resul =
        tca + UI + tipoproducto + fo + tcc + olli +
        componente[50].n + componente[50].v + lili +
        componente[49].n + componente[49].v + lili +
        componente[03].n + componente[03].v + lili +
        componente[78].n + " o " + componente[79].n + componente[78].v + lili +
        componente[90].n + componente[90].v + lili +
        componente[08].n + componente[08].v + lili +
        componente[07].n + componente[07].v + liol;


        quitarigual();
        var procedimiento = "<h3>PROCEDIMIENTO:</h3> <ul><li>En un envase al baño de Maria debe colocar el " + componente[50].n + ", " +
    componente[49].n + ", " +
    componente[03].n + ", " +
    componente[78].n + ", " +
    componente[90].n + " y el " +
        componente[07].n + ".</li> <li>Retirar del calor y adicionar la " + componente[08].n + "</li> <li>Vertemos en los moldes, previamente pulverizados con silicona.</li> <li>Debe dejar solidificar y extraer las barras.</li><li>Insertamos en el       stick y cortar el borde externo en forma de bisel.</li><li>Por ultimo solo queda pasar la barra por una llama, muy rápido, para que la superficie quede uniforme y brillante.</li></ul><h4>Conservación: </h4><p>Se debe mantener lejos de las fuentes de calor.</p><h4>Caducidad:</h4><p>Este producto posee un tiempo de vigencia de 3 años.</p><h4>Nota Importante</h4><p>Agitaremos despacio y haremos el vertido en los moldes con sumo cuidado, lentamente, para no incorporar aire (burbujas).</p><br><div class='alert alert-warning' role='alert'><span class='glyphicon glyphicon-exclamation-sign' aria-hidden='true'></span><span class='sr-only'>Error:</span> Verifique siempre los niveles de PH, procure colocar la fecha de elaboracion en la etiqueta del producto.</div>";

    document.getElementById('salida').innerHTML = resul,
        document.getElementById('procedimiento').innerHTML = procedimiento;

    popove();
    ponerigual();
}


function crema_desodorante_para_roll_on() {
    var UI = document.getElementById('entrada').value;
    if (isNaN(UI)) {
        return false;
    }
    componente[101].v = p(5);
    componente[102].v = p(0.1);
    componente[72].v = p(5);
    componente[103].v = p(5);
    componente[87].v = p(1);
    componente[67].v = p(30);
    componente[29].v = p(0.3);
    componente[28].v = p(3);
    componente[00].v = p(100);

    tratamiento(UI);
    tratamiento_producto(UI);

    resul =
        tca + UI + tipoproducto + fo + tcc + olli +
        componente[101].n + componente[101].v + lili +
        componente[102].n + componente[102].v + lili +
        componente[72].n + componente[72].v + lili +
        componente[103].n + componente[103].v + lili +
        componente[87].n + componente[87].v + lili +
        componente[67].n + componente[67].v + lili +
        componente[29].n + componente[29].v + lili +
        componente[28].n + componente[28].v + lili +
        componente[00].n + componente[00].v + liol;


        quitarigual();
        var procedimiento = "<h3>PROCEDIMIENTO:</h3> <ul><li>En un envase dispersar el " + componente[29].n + ", en el agua.</li> <li>Incorporar el " + componente[101].n + ", " +    componente[102].n + ", " +    componente[72].n + ", " +    componente[103].n + ", " +    componente[87].n + " y " +        componente[67].n + ".</li> <li>comprobar el pH (posiblemente se observe un resultado ácido), en ese caso solo debe añadir mas cantidad de " +        componente[28].n + " hasta lograr obtener un pH fisiológico (5,5-7).</li><li>Ya por ultimo solo se debe dejar reposar y envasar.</li></ul><h4>Conservación: </h4><p>Se debe mantener lejos de las fuentes de luz directa y calor.</p><h4>Caducidad:</h4><p>Este producto posee un tiempo de vigencia de 3 años.</p><h4>Nota Importante</h4><p>Agitaremos despacio y haremos el vertido en los moldes con sumo cuidado, lentamente, para no incorporar aire (burbujas).</p><br><div class='alert alert-warning' role='alert'><span class='glyphicon glyphicon-exclamation-sign' aria-hidden='true'></span><span class='sr-only'>Error:</span> Verifique siempre los niveles de PH, procure colocar la fecha de elaboracion en la etiqueta del producto.</div>";

    document.getElementById('salida').innerHTML = resul,
        document.getElementById('procedimiento').innerHTML = procedimiento;

    popove();
    ponerigual();
}


function crema_antienvejecimiento() {
    var UI = document.getElementById('entrada').value;
    if (isNaN(UI)) {
        return false;
    }
    componente[70].v = p(25);
    componente[17].v = p(2);
    componente[08].v = p(0.3);
    componente[66].v = p(0.1);
    componente[104].v = p(6);
    componente[00].v = p(100);

    tratamiento(UI);
    tratamiento_producto(UI);

    resul =
        tca + UI + tipoproducto + fo + tcc + olli +
        componente[70].n + componente[70].v + lili +
        componente[17].n + componente[17].v + lili +
        componente[08].n + componente[08].v + lili +
        componente[66].n + componente[66].v + lili +
        componente[104].n + componente[104].v + lili +
        componente[00].n + componente[00].v + liol;


        quitarigual();
        var procedimiento = "<h3>PROCEDIMIENTO:</h3> <ul><li>En un envase al baño de maria colocar: " + componente[70].n + ", " +
    componente[17].n + ", " +
    componente[66].n + " y " +
    componente[00].n + ".</li> <li>Agitar hasta homogenizar y retirar del calor.</li> <li>Debe tapar el envase y dejar enfriar a temperatura ambiente y proceder a agregar " +
        componente[104].n + " y " + componente[08].n + ". Debe batir hasta incorporar todos los ingredientes.</li></ul><h4>Envasado:</h4><p>Este producto debe ser envasado con lentitud y como truco debe ir dando ligeros golpes al envase para eliminar bolsas de aire o burbujas tipicas durante este proceso.</p><h4>Conservación: </h4><p>Se debe mantener lejos de las fuentes de luz directa y calor.</p><h4>Caducidad:</h4><p>Este producto posee un tiempo de vigencia de 3 años.</p><h4>Truco de comercio Importante</h4><p>Impregnar la tapa con una gota de esencia permite que las personas puedan percibir el olor sin necesidad de gastar la crema con la excusa de probar la fragancia.</p><h4>Nota Informativa</h4><p>Según los liposomas utilizados, tendremos una crema de liposomas nutritivos, hidratantes, antiarrugas, antienvejecimiento,...Un principio activo traviesa mejor la piel vehiculizado en liposomas, que sin ellos.</p><br><div class='alert alert-warning' role='alert'><span class='glyphicon glyphicon-exclamation-sign' aria-hidden='true'></span><span class='sr-only'>Error:</span> Los liposomas deben guardarse en frigorífico, para su conservación, hasta su incorporación a la crema. La crema se mantendrá en lugares frescos para prolongar su conservación.</div>";

    document.getElementById('salida').innerHTML = resul,
        document.getElementById('procedimiento').innerHTML = procedimiento;

    popove();
    ponerigual();
}

function crema_anticelulitis() {
    var UI = document.getElementById('entrada').value;
    if (isNaN(UI)) {
        return false;
    }
    componente[105].v = p(5);
    componente[106].v = p(10);
    componente[107].v = p(5);
    componente[108].v = p(2);
    componente[109].v = p(1);
    componente[110].v = p(4);
    componente[70].v = p(25);
    componente[66].v = p(5);
    componente[39].v = p(0.15);
    componente[111].v = p(0.05);
    componente[08].v = p(3);
    componente[00].v = p(100);

    tratamiento(UI);
    tratamiento_producto(UI);

    resul =
        tca + UI + tipoproducto + fo + tcc + olli +
        componente[105].n + componente[105].v + lili +
        componente[106].n + componente[106].v + lili +
        componente[107].n + componente[107].v + lili +
        componente[108].n + componente[108].v + lili +
        componente[109].n + componente[109].v + lili +
        componente[110].n + componente[110].v + lili +
        componente[70].n + componente[70].v + lili +
        componente[66].n + componente[66].v + lili +
        componente[39].n + componente[39].v + lili +
        componente[111].n + componente[111].v + lili +
        componente[08].n + componente[08].v + lili +
        componente[00].n + componente[00].v + liol;


        quitarigual();
        var procedimiento = "<h3>PROCEDIMIENTO:</h3> <ul><li>Colocar 2 envases al baño de maria en el primer envase colocar el " + componente[70].n + " y en el otro envase debe colocar el " + componente[00].n + " no olvidar que debe hacerlo en envases separados.</li> <li>Agregar: " + componente[109].n + " y " + componente[66].n + " en el " + componente[00].n + ".</li> <li>En el otro envase que tambien esta al baño de maria debe colocar: " + componente[105].n + ", " + componente[106].n + ", " + componente[107].n + ", " + componente[108].n + " y " + componente[110].n + " en el envase donde esta el " + componente[70].n + ".</li><li>En el siguiente paso debe agregar " + componente[39].n + " y " + componente[111].n + " en el envase donde esta el agua.</li><li>Ahora procederemos a unificar todo en un solo envase, debe agregar el contenido del envase donde esta el " + componente[00].n + " y en el otro envase donde originalmente solo habia " + componente[70].n + ".</li><li>Al enfriar puede agregar " + componente[08].n + " y agitar para mezclar.</li><li>Batir la emulsión para que quede más esponjosa (si utiliza batidora automatica debe hacerlo a baja velocidad).</li></ul> <br> <div class = 'alert alert-info' role = 'alert'> <span class='glyphicon glyphicon-exclamation-sign' aria-hidden='true'> </span><span class='sr-only'>Error:</span> El cosmético se contamina fácilmente, por lo que se extremará la asepsia en la fabricación (debe usarse guantes y mascarilla). Sin los conservantes caducará en breves semanas, como mucho, si está en el frigorífico. La crema se debe manupular con espátula, no con los dedos que facilitaría la contaminación. </div> <h4> Envasado: </h4><p>Este producto debe ser envasado con lentitud y como truco debe ir dando ligeros golpes al envase para eliminar bolsas de aire o burbujas tipicas durante este proceso.</p > <h4> Conservación: </h4><p>Se debe mantener lejos de las fuentes de luz directa y calor.</p> <h4> Caducidad: </h4><p>Este producto posee un tiempo de vigencia de 3 años.</p> <h4> Truco de comercio Importante </h4><p>Impregnar la tapa con una gota de esencia permite que las personas puedan percibir el olor sin necesidad de gastar la crema con la excusa de probar la fragancia.</p> <br> <div class = 'alert alert-warning' role = 'alert'> <span class='glyphicon glyphicon-exclamation-sign' aria-hidden='true'> </span><span class='sr-only'>Error:</span> El color y el olor son fundamentales ya que este producto sin el perfume resultan poco atractivos. </div>";

    document.getElementById('salida').innerHTML = resul,
        document.getElementById('procedimiento').innerHTML = procedimiento;

    popove();
    ponerigual();
}


function crema_antipruriginosa_analgesica() {
    var UI = document.getElementById('entrada').value;
    if (isNaN(UI)) {
        return false;
    }
    componente[112].v = p(0.5);
    componente[113].v = p(0.5);
    componente[61].v = p(0.5);
    componente[70].v = p(25);
    componente[66].v = p(5);
    componente[75].v = p(0.2);
    componente[00].v = p(95);

    tratamiento(UI);
    tratamiento_producto(UI);

    resul =
        tca + UI + tipoproducto + fo + tcc + olli +
        componente[112].n + componente[112].v + lili +
        componente[113].n + componente[113].v + lili +
        componente[61].n + componente[61].v + lili +
        componente[70].n + componente[70].v + lili +
        componente[66].n + componente[66].v + lili +
        componente[75].n + componente[75].v + lili +
        componente[00].n + componente[00].v + liol;


        quitarigual();
        var procedimiento = "<h3>PROCEDIMIENTO:</h3> <ul><li>En un primer envase fundir en baño de maria  el " + componente[70].n + ".</li> <li>Calentar en otro envase: " + componente[66].n + ", " + componente[75].n + " y " + componente[00].n + " y agregar en el primer envase.</li> <li>Pulverizar con la ayuda de un mortero: " + componente[112].n + ", " + componente[113].n + " y " + componente[61].n + " Puede agregar un poco de etanol.</li><li>Por ultimo agregar en el mortero el contenido de ambos envases y mezclar hasta homogenizar.</li></ul> <br> <div class = 'alert alert-info' role = 'alert'> <span class='glyphicon glyphicon-exclamation-sign' aria-hidden='true'> </span><span class='sr-only'>Error:</span> El cosmético se contamina fácilmente, por lo que se extremará la asepsia en la fabricación (debe usarse guantes y mascarilla). Sin los conservantes caducará en breves semanas, como mucho, si está en el frigorífico. La crema se debe manupular con espátula, no con los dedos que facilitaría la contaminación. </div> <h4> Envasado: </h4><p>Este producto debe ser envasado con lentitud y como truco debe ir dando ligeros golpes al envase para eliminar bolsas de aire o burbujas tipicas durante este proceso.</p > <h4> Conservación: </h4><p>Se debe mantener lejos de las fuentes de luz directa y calor.</p> <h4> Caducidad: </h4><p>Este producto posee un tiempo de vigencia de 3 años.</p> <h4> Truco de comercio Importante </h4><p>Impregnar la tapa con una gota de esencia permite que las personas puedan percibir el olor sin necesidad de gastar la crema con la excusa de probar la fragancia.</p> <br> <div class = 'alert alert-warning' role = 'alert'> <span class='glyphicon glyphicon-exclamation-sign' aria-hidden='true'> </span><span class='sr-only'>Error:</span> El color y el olor son fundamentales ya que este producto sin el perfume resultan poco atractivos. </div>";

    document.getElementById('salida').innerHTML = resul,
        document.getElementById('procedimiento').innerHTML = procedimiento;

    popove();
    ponerigual();
}

function crema_cicatrizante_hipoalergenica() {
    var UI = document.getElementById('entrada').value;
    if (isNaN(UI)) {
        return false;
    }
    componente[70].v = p(25);
    componente[87].v = p(3);
    componente[114].v = p(3);
    componente[66].v = p(3);
    componente[111].v = p(0.2);
    componente[08].v = p(0.2);
    componente[00].v = p(95);

    tratamiento(UI);
    tratamiento_producto(UI);

    resul =
        tca + UI + tipoproducto + fo + tcc + olli +
        componente[70].n + componente[70].v + lili +
        componente[87].n + componente[87].v + lili +
        componente[114].n + componente[114].v + lili +
        componente[66].n + componente[66].v + lili +
        componente[111].n + componente[111].v + lili +
        componente[08].n + componente[08].v + lili +
        componente[00].n + componente[00].v + liol;


        quitarigual();
        var procedimiento = "<h3>PROCEDIMIENTO:</h3> <ul><li>En un primer envase fundir en baño de maria  el " + componente[70].n + ".</li> <li>Calentar en un segundo envase: " + componente[66].n + ", " + componente[111].n + " y " + componente[00].n + ".</li> <li>Agregar en el primer envase: " + componente[87].n + " y en el segundo envase incorporar " + componente[114].n + ".</li><li>Por ultimo se agrega el contenido del segundo envase al primer envase.</li><li>Enfriar en baño frio sin dejar de agitar suavemente.</li><li>Añadir la fragancia en frío y envasar.</li></ul> <br> <div class = 'alert alert-info' role = 'alert'> <span class='glyphicon glyphicon-exclamation-sign' aria-hidden='true'> </span><span class='sr-only'>Error:</span> Los preparados hipoalérgicos se formulan de 2 maneras: eliminando colorantes, perfumes y conservantes (sustancias muy alergénicas, normalmente; o con productos testados de baja sensibilización). </div> <h4> Envasado: </h4><p>Este producto debe ser envasado con lentitud y como truco debe ir dando ligeros golpes al envase para eliminar bolsas de aire o burbujas tipicas durante este proceso.</p > <h4> Conservación: </h4><p>Se debe mantener lejos de las fuentes de luz directa y calor.</p> <h4> Caducidad: </h4><p>Este producto posee un tiempo de vigencia de 3 años.</p> <h4> Truco de comercio Importante </h4><p>Impregnar la tapa con una gota de esencia permite que las personas puedan percibir el olor sin necesidad de gastar la crema con la excusa de probar la fragancia, este tipo de producto hipoalergenico debe ser cuidadosamente perfumado con fragancias muy sutiles al olfato.</p> <br> <div class = 'alert alert-warning' role = 'alert'> <span class='glyphicon glyphicon-exclamation-sign' aria-hidden='true'> </span><span class='sr-only'>Error:</span> El color y el olor no son fundamentales en este producto. </div>";

    document.getElementById('salida').innerHTML = resul,
        document.getElementById('procedimiento').innerHTML = procedimiento;

    popove();
    ponerigual();
}


function cera_depiladora_caliente() {
    var UI = document.getElementById('entrada').value;
    if (isNaN(UI)) {
        return false;
    }
    componente[115].v = p(55);
    componente[49].v = p(20);
    componente[116].v = p(15);
    componente[117].v = p(5);
    componente[76].v = p(4);
    componente[08].v = p(1);

    tratamiento(UI);
    tratamiento_producto(UI);

    resul =
        tca + UI + tipoproducto + fo + tcc + olli +
        componente[115].n + componente[115].v + lili +
        componente[49].n + componente[49].v + lili +
        componente[116].n + componente[116].v + lili +
        componente[117].n + componente[117].v + lili +
        componente[76].n + componente[76].v + lili +
        componente[08].n + componente[08].v + liol;


        quitarigual();
        var procedimiento = "<h3>PROCEDIMIENTO:</h3> <ul><li> Mezclar todos los componentes en el Baño María.</li> <li>Homogeneizar y retirar del calor.</li> <li>Añadir el perfume y envasar.</li></ul> <br> <div class = 'alert alert-info' role = 'alert'> <span class='glyphicon glyphicon-exclamation-sign' aria-hidden='true'> </span><span class='sr-only'>Error:</span> Es muy inestable perfumar ceras calientes. Se eligen aromas de la Familia amaderada. </div> <h4> Envasado: </h4><p>Este producto debe ser envasado preferiblemente en envases de vidrio.</p > <h4> Conservación: </h4><p>Se debe mantener lejos de las fuentes de luz directa y calor.</p> <h4> Caducidad: </h4><p>Este producto posee un tiempo de vigencia de 3 años.</p> <h4> Truco de comercio Importante </h4><p>Impregnar la tapa con una gota de esencia permite que las personas puedan percibir el olor directamente de la tapa.</p> <br> <div class = 'alert alert-warning' role = 'alert'> <span class='glyphicon glyphicon-exclamation-sign' aria-hidden='true'> </span><span class='sr-only'>Error:</span> El color y el olor no son fundamentales en este producto, pero forman parte de una variable que les puede permitir fabricar lineas de diferentes fragancias y aromas segun los gustos. </div>";

    document.getElementById('salida').innerHTML = resul,
        document.getElementById('procedimiento').innerHTML = procedimiento;

    popove();
    ponerigual();
}


function crema_antiestrias() {
    var UI = document.getElementById('entrada').value;
    if (isNaN(UI)) {
        return false;
    }
    componente[119].v = p(23);
    componente[118].v = p(0.5);
    componente[120].v = p(2);
    componente[114].v = p(4.5);
    componente[122].v = p(3.5);
    componente[66].v = p(4.5);
    componente[163].v = p(0.2);
    componente[00].v = p(67);

    tratamiento(UI);
    tratamiento_producto(UI);

    resul =
        tca + UI + tipoproducto + fo + tcc + olli +
        componente[119].n + componente[119].v + lili +
        componente[118].n + componente[118].v + lili +
        componente[120].n + componente[120].v + lili +
        componente[114].n + componente[114].v + lili +
        componente[122].n + componente[122].v + lili +
        componente[66].n + componente[66].v + lili +
        componente[163].n + componente[163].v + lili +
        componente[00].n + componente[00].v + liol;



        quitarigual();
        var procedimiento = "<h3>PROCEDIMIENTO:</h3> <p>En el procedimiento de elaboracion de este producto se requeriran 3 envases. </p><ul><li>En el primer envase mezclar muy bien: " + componente[119].n + ", " + componente[118].n + " y " + componente[120].n + ".</li> <li>En el Segundo envase calentar a baño de Maria: " + componente[163].n + " y " + componente[00].n + ".</li> <li>En el tercer envase mezclar: " + componente[114].n + ", " + componente[122].n + " y " + componente[66].n + ".</li><li>Por ultimo se agrega el contenido del segundo envase al tercer envase manteniendo el Baño de Maria, debe mezclar hasta que este bien homogenizada esta mezcla.</li><li>Luego en el primer envase se debe incorporar la mezcla que se acaba de homogenizar, efectuando suaves movimientos, esta agitacion debe hacerse de manera suave.</li><li>Por ultimo se debe etiquetar y envasar.</li></ul> <br> <div class = 'alert alert-info' role = 'alert'> <span class='glyphicon glyphicon-exclamation-sign' aria-hidden='true'> </span><span class='sr-only'>Error:</span> El Fenonip es una mezcla comercial de conservantes antibacterianos y antifúngicos. </div> <h4> Envasado: </h4><p>Este producto debe ser envasado con lentitud y como truco debe ir dando ligeros golpes al envase para eliminar bolsas de aire o burbujas tipicas durante este proceso, puede usarse envases plasticos de polipropileno o PET.</p > <h4> Conservación: </h4><p>Se debe mantener lejos de las fuentes de luz directa y calor.</p> <h4> Caducidad: </h4><p>Este producto posee un tiempo de vigencia de 3 años.</p>";

    document.getElementById('salida').innerHTML = resul,
        document.getElementById('procedimiento').innerHTML = procedimiento;

    popove();
    ponerigual();
}


function crema_gelificada_standar() {
    var UI = document.getElementById('entrada').value;
    if (isNaN(UI)) {
        return false;
    }
    componente[29].v = p(0.5);
    componente[24].v = p(0.5);
    componente[00].v = p(99);

    tratamiento(UI);
    tratamiento_producto(UI);


    resul =
        tca + UI + tipoproducto + fo + tcc + olli +
        componente[29].n + componente[29].v + lili +
        componente[24].n + componente[24].v + lili +
        componente[00].n + componente[00].v + liol;



        quitarigual();
        var procedimiento = "<h3>PROCEDIMIENTO:</h3> <p>En el procedimiento de elaboracion de este producto se requerira 1 envase con el doble de capacidad. </p><ul><li>En primer lugar mezclar muy bien: " + componente[00].n + " con el " + componente[24].n + ".</li> <li>A esa mezcla debe incorporar la cantidad exacta de: " + componente[29].n + ".</li> <li>Este proceso es bastante sencillo, no necesita calor, ni estabilizar PH ni agitar de manera constante ya que el espesante se hidratara y agarrara cuerpo al solo contacto con la mezcla.</li></ul> <br> <div class = 'alert alert-info' role = 'alert'> <span class='glyphicon glyphicon-exclamation-sign' aria-hidden='true'> </span><span class='sr-only'>Error:</span> La gelificación de algunos Carbopoles SÓLO aparece al alcalinizar con la incorporación de trietanolamina (u otro álcali) </div> <h4> NOTA INFORMATIVA: </h4><p>Existen varios tipos de CARBOPOL. Unos gelifican en 24 horas (como el carbopol-960) y otros son instantáneos (como el carbopol-2001 y carbopol-CFT) en el sitio donde compre este producto usted podra consultar cual de los 2 es el disponible, los resultados son exactamente iguales, la unica diferencia es el tiempo que demora en la fabricacion, pero el resultado es exactamente el mismo. La crema gelificada fabricada es muy tensora y astringente. Contraindicada, por tanto, en pieles sensibles y delicadas. Para ellas adicionaremos correctivos emolientes y nutritivos (aceite de germen de trigo, de caléndula, de almendras dulces, de aguacate,...) e hidratantes (hidrovitón). Sumando todos los correctivos no hay que superar el 10% en aditivos adicionales. Tendremos mucho cuidado con no utilizar muchos aceites y grasas porque alteran la viscosidad del Carbopol disminuyéndola considerablemente Como conservante podemos utilizar: </p><ol><li> Una mezcla de Nipagin ® (metil-paraben) y Nipasol ® (propil paraben) al 0,1% y 0,05% respectivamente. El primero es antibacteriano y el segundo antifúngico. Juntos potencian su acción y se venden en una mezcla comercial denominada Phenonip ®. Se inactivan parcialmente con emulgentes NO iónicos y con proteínas (colágeno, elastina). Tienen un pH óptimo de acción amplio. </li><li> Katon CG ® al 0,05% antibacteriano líquido de amplio espectro (Gram +, Gram -, levaduras, hongos). Se inactiva con oxidantes, reductores, aminas y sulfitos, Compatible con tensioactivos aniónicos, catiónicos, no iónicos y proteínas. Soluble en agua, amplio pH de acción (óptimo de 2 a 5) </li><li> Triclosan : muy utilizado en desodorantes. Insoluble en agua pero soluble en alcohol y tensioactivos NO iónicos. Dosis: < 0,5% en jabones pero < 0,2% en cosméticos axilares. Puede ser absorbido por algunos tipos de envases de plástico</li></ol> <h4> Conservación: </h4><p>Se debe mantener lejos de las fuentes de luz directa y calor.</p> <h4> Caducidad: </h4><p>Este producto posee un tiempo de vigencia de 3 años.</p><h4>PRECAUCION:</h4><p>Cuando añadimos el álcali poco a poco, debemos mezclarla muy bien o no gelificará el fondo del recipiente. Podemos tener un pH excesivamente alcalino en la superficie y excesivamente ácido en el interior. Si nos excedemos en la cantidad de álcali podemos recomponer el pH utilizando un ácido suave como el ácido láctico.</p>";

    document.getElementById('salida').innerHTML = resul,
    document.getElementById('procedimiento').innerHTML = procedimiento;

    popove();
    ponerigual();
}


function crema_depiladora() {
    var UI = document.getElementById('entrada').value;
    if (isNaN(UI)) {
        return false;
    }
    componente[124].v = p(5);
    componente[49].v = p(8);
    componente[125].v = p(3);
    componente[78].v = p(2);
    componente[02].v = p(2);
    componente[17].v = p(5);
    componente[00].v = p(60);
    componente[126].v = p(6);
    componente[190].v = p(4.5);
    componente[127].v = p(5);


    tratamiento(UI);
    tratamiento_producto(UI);


    resul =
        tca + UI + tipoproducto + fo + tcc + olli +
        componente[124].n + componente[124].v + lili +
        componente[49].n + componente[49].v + lili +
        componente[125].n + componente[125].v + lili +
        componente[78].n + componente[78].v + lili +
        componente[02].n + componente[02].v + lili +
        componente[17].n + componente[17].v + lili +
        componente[00].n + componente[00].v + lili +
        componente[126].n + componente[126].v + lili +
        componente[190].n + componente[190].v + lili +
        componente[127].n + componente[127].v + liol;


        quitarigual();
        var procedimiento = "<h3>PROCEDIMIENTO:</h3> <p>En el procedimiento de elaboracion de este producto se requerira de 2 ollas preferiblemente de vidrio refractario y 3 envases de plastico pueden ser cuñetes ya que se prepararan 3 mezclas por separado y luego se tendran que unir, procuren siempre trabajar con envases que sean 3 veces superior a la cantidad a preparar es decir si va a preparar 1 litro la capacidad de los envases a utilizar deberian de ser de 3 litros. </p><ul><li><b>PASO A:</b> En primer lugar en un envase debe mezclar muy bien el " + componente[126].n
         + " y el " + componente[190].n + " esta mezca debe hacerla en un envase de plastico duro y debe ser diluido en un tercio de la cantidad de " + componente[00].n + ".</li> <li><b>PASO B:</b> En otro envase debe colocarse el " + componente[10].n + " con otro tercio de " + componente[00].n + ", debe dejars alli hasta que se hidrate y aumente su volumen y se aprecie que este homogeneo.</li> <li><b>PASO C:</b> En una olla preferiblemente de vidrio refractario se debe colocar al baño de Maria a 75ºC  el "+componente[124].n + ", " + componente[49].n + ", " + componente[125].n + ", " + componente[78].n + " y el " + componente[02].n + ".</li><li><b>PASO D:</b> En otra olla colocar en baño de maria la "+componente[17].n+" con el ultimo tercio de "+componente[00].n+" y mezclar brevemente para unir ambos componentes. </li><li><b>PASO E:</b>Ahora debe unir lo obtenido en el <b>PASO D</b> con lo obtenido en el baso <b>PASO C</b>  </li><li>Cuando la emulcion obtenida en el paso <b>PASO E</b> este fria se debe incorporar las mezclas obtenidas en el <b>PASO B</b> y luego lo obtenido en el <b>PASO A</b> </li><li>Comprobar el pH. No debe superar pH de 11,5 y por ultimo Envasar </li></ul> <br> <div class = 'alert alert-info' role = 'alert'> <span class='glyphicon glyphicon-exclamation-sign' aria-hidden='true'> </span><span class='sr-only'>Error:</span> El Emulgin B-1 es una forma comercializada del Acido Cetoestearílico 20 OE. Es un emulgente No iónico. Los emulgentes secundarios aumentan considerablemente la estabilidad de la emulsión.</div>";

    document.getElementById('salida').innerHTML = resul,
    document.getElementById('procedimiento').innerHTML = procedimiento;

    popove();
    ponerigual();
}


function crema_pieles_envejecidas() {
    var UI = document.getElementById('entrada').value;
    if (isNaN(UI)) {
        return false;
    }
    componente[119].v = p(24);
    componente[78].v = p(2);
    componente[87].v = p(2);
    componente[17].v = p(2);
    componente[128].v = p(1);
    componente[129].v = p(2);
    componente[08].v = p(1);
    componente[39].v = p(0.3);
    componente[00].v = p(90);



    tratamiento(UI);
    tratamiento_producto(UI);


    resul =
        tca + UI + tipoproducto + fo + tcc + olli +
        componente[119].n + componente[119].v + lili +
        componente[78].n + componente[78].v + lili +
        componente[87].n + componente[87].v + lili +
        componente[17].n + componente[17].v + lili +
        componente[128].n + componente[128].v + lili +
        componente[129].n + componente[129].v + lili +
        componente[08].n +   componente[08].ext + componente[08].v + componente[08].rosa + lili +
        componente[39].n + componente[39].v + lili +
        componente[00].n + componente[00].v + liol;


        quitarigual();
        var procedimiento = "<h3>PROCEDIMIENTO:</h3> <p>Para la elaboracion de este producto usted necesitara 2 ollas de vidrio refractario preferiblemente y 1 envase de plastico, se recomienda que las capacidades de los envases sea el doble de la cantidad a preparar.</p><ul><li><b>PASO A:</b> En primer lugar en una de las ollas de vidrio colocar en baño de Maria a 75ºC la " + componente[119].n + ", " + componente[78].n + " y "+ componente[87].n + ".</li> <li><b>PASO B:</b> En otro envase a baño de Maria a 75ºC debe colocarse la " + componente[17].n + ", " + componente[128].n + ", " + componente[129].n + ", " + componente[39].n + " y el " + componente[00].n + ".</li> <li><b>PASO C:</b> En un envase plastico mezclar lo obtenido en el <b>PASO B</b> con lo obtenido en el <b>PASO A</b>, se recomienda primero agregar en el envase plastico la mezcla del <b>PASO B</b> y luego de a poco agregar lo obtenido en el <b>PASO A</b> este paso hay que hacerlo con las mezclas calientes y al unificar todo debe aplicarse un baño frio (Lo inverso al baño de Maria) y debe agitarse lentamente, no hacer movimientos rapidos o bruscos.</li><li>Ya por ultimo agregar la " + componente[08].n + " y envasar.</li></ul> <br> <div class = 'alert alert-info' role = 'alert'> <span class='glyphicon glyphicon-exclamation-sign' aria-hidden='true'> </span><span class='sr-only'>Error:</span> Se vende una mezcla de conservantes con el nombre comercial de FENONIP® o PHENONIP® que equivale al Nipagín® (metilparaben)(antibacteriano)+Nipasol ® (propilparaben)(antifúngico)+ fenoxietanol (antibacteriano).</div>";

    document.getElementById('salida').innerHTML = resul,
    document.getElementById('procedimiento').innerHTML = procedimiento;

    popove();
    ponerigual();
}


function crema_descamante() {
    var UI = document.getElementById('entrada').value;
    if (isNaN(UI)) {
        return false;
    }
    componente[100].v = p(6);
    componente[124].v = p(5);
    componente[78].v = p(4);
    componente[130].v = p(2);
    componente[131].v = p(5);
    componente[28].v = p(0.7);
    componente[01].v = p(1);
    componente[111].v = p(0.05);
    componente[39].v = p(0.2);
    componente[00].v = p(90);
    componente[132].v = p(10);
    componente[67].v = p(10);
    componente[08].v = p(0.2);



    tratamiento(UI);
    tratamiento_producto(UI);


    resul =
        tca + UI + tipoproducto + fo + tcc + olli +
        componente[100].n + componente[100].v + lili +
        componente[124].n + componente[124].v + lili +
        componente[78].n + componente[78].v + lili +
        componente[130].n + componente[130].v + lili +
        componente[131].n + componente[131].v + lili +
        componente[28].n + componente[28].v + lili +
        componente[01].n + componente[01].v + lili +
        componente[111].n + componente[111].v + lili +
        componente[39].n + componente[39].v + lili +
        componente[00].n + componente[00].v + lili +
        componente[132].n + componente[132].v + lili +
        componente[67].n + componente[67].v + lili +
        componente[08].n +   componente[08].ext + componente[08].v + componente[08].rosa + liol;


        quitarigual();
        var procedimiento = "<h3>PROCEDIMIENTO:</h3> <p>Para la elaboracion de este producto usted necesitara 2 ollas de vidrio refractario preferiblemente y 1 envase de plastico, se recomienda que las capacidades de los envases sea el doble de la cantidad a preparar.</p><ul><li><b>PASO A:</b> En primer lugar en una de las ollas de vidrio colocar en baño de Maria a 75ºC el " + componente[100].n + ", " + componente[124].n + ", " + componente[78].n + " y el " + componente[130].n + ".</li> <li><b>PASO B:</b> En otro envase a baño de Maria a 75ºC debe colocarse el " + componente[131].n + ", " + componente[28].n + ", " + componente[01].n + ", " + componente[111].n + ", " + componente[39].n + " y el " + componente[00].n + ".</li> <li><b>PASO C:</b> Lo obtenido en el <b>PASO B</b> incorporarlo en el envase que contiene la mezcla del <b>PASO A</b> a la vez en otro recipiente debe mezclar el "+componente[132].n + " y el " + componente[67].n+" y luego incorporar a la mezcla del <b>PASO C</b>, al unificar todo debe aplicarse un baño frio (Lo inverso al baño de Maria) y debe agitarse lentamente, no hacer movimientos rapidos o bruscos, pero todo debe estar homogeneo.</li><li>Ya por ultimo agregar la " + componente[08].n + " y envasar.</li></ul> <br> <div class = 'alert alert-info' role = 'alert'> <span class='glyphicon glyphicon-exclamation-sign' aria-hidden='true'> </span><span class='sr-only'>Error:</span> El almidón de arroz es un suave descamante por frotación.</div><h3>USO Y APLICACIÓN</h3><p>Esta crema se aplicará con movimientos rotatorios, durante 1-3 minutos, según el tipo. En pieles muy grasas se aplicará 1 vez por semana. En las secas no antes de 2 semanas. En las sensiblesno más de 2 veces por año.</p>";

    document.getElementById('salida').innerHTML = resul,
    document.getElementById('procedimiento').innerHTML = procedimiento;

    popove();
    ponerigual();
}


function crema_antiarrugas() {
    var UI = document.getElementById('entrada').value;
    if (isNaN(UI)) {
        return false;
    }
    componente[119].v = p(25.5);
    componente[134].v = p(2);
    componente[87].v = p(1);
    componente[137].v = p(0.5);
    componente[131].v = p(5);
    componente[141].v = p(0.2);
    componente[00].v = p(63);
    componente[142].v = p(2);
    componente[143].v = p(3);

    tratamiento(UI);
    tratamiento_producto(UI);

    resul =
        tca + UI + tipoproducto + fo + tcc + olli +
        componente[119].n + componente[119].v + lili +
        componente[134].n + componente[134].v + lili +
        componente[87].n + componente[87].v + lili +
        componente[137].n + componente[137].v + lili +
        componente[131].n + componente[131].v + lili +
        componente[141].n + componente[141].v + lili +
        componente[00].n + componente[00].v + lili +
        componente[142].n + componente[142].v + lili +
        componente[143].n +   componente[143].v + liol;


        quitarigual();
        var procedimiento = "<h3>PROCEDIMIENTO:</h3> <p>Para la elaboracion de este producto usted necesitara 2 ollas de vidrio refractario preferiblemente y 1 envase de plastico, se recomienda que las capacidades de los envases sea el doble de la cantidad a preparar.</p><ul><li><b>PASO A:</b> En primer lugar en una de las ollas de vidrio colocar en baño de Maria a 75ºC la " + componente[119].n + ", " + componente[134].n + ", " + componente[87].n + " y la " + componente[137].n + ".</li> <li><b>PASO B:</b> En otro envase a baño de Maria a 75ºC debe colocarse el " + componente[131].n + ", " + componente[141].n + " y el " + componente[00].n + ".</li> <li><b>PASO C:</b> Lo obtenido en el <b>PASO B</b> incorporarlo en el envase que contiene la mezcla del <b>PASO A</b>, al unificar todo puede aplicarse un baño frio (Lo inverso al baño de Maria) aun cuando para mejores resultados se debe dejar enfriar mientras no se deja de agitar lentamente, procure no hacer movimientos rapidos o bruscos, pero todo debe estar homogeneo, monitoree que la temperatura llegue a 37°C.</li><li>Ya por ultimo cuando la mezcla tenga la temperatura de 37°C agregar la " + componente[142].n + " y "+ componente[143].n +" y por ultimo envasar en tarros de boca ancha.</li></ul> <br> <div class = 'alert alert-info' role = 'alert'> <span class='glyphicon glyphicon-exclamation-sign' aria-hidden='true'> </span><span class='sr-only'>Error:</span> La acción antiarrugas del colágeno es muy discutible. Su molécula tiene un tamaño tan grande que prácticamente no puede atravesar la piel. Puede atravesarla, en mayor proporción, si está hidrolizado. Su acción, es más por su efecto hidratante en el exterior de la piel</div>";

    document.getElementById('salida').innerHTML = resul,
    document.getElementById('procedimiento').innerHTML = procedimiento;

    popove();
    ponerigual();
}



function crema_hidratante() {
    var UI = document.getElementById('entrada').value;
    if (isNaN(UI)) {
        return false;
    }
    componente[70].v = p(25);
    componente[66].v = p(5);
    componente[144].v = p(5);
    componente[138].v = p(0.1);
    componente[139].v = p(0.05);
    componente[08].v = p(1);
    componente[00].v = p(90);

    tratamiento(UI);
    tratamiento_producto(UI);

    resul =
        tca + UI + tipoproducto + fo + tcc + olli +
        componente[70].n + componente[70].v + lili +
        componente[66].n + componente[66].v + lili +
        componente[144].n + componente[144].v + lili +
        componente[138].n + componente[138].v + lili +
        componente[139].n + componente[139].v + lili +
        componente[08].n + componente[08].v + lili +
        componente[00].n +   componente[00].v + liol;


        quitarigual();
        var procedimiento = "<h3>PROCEDIMIENTO:</h3> <p>Para la elaboracion de este producto usted necesitara 2 envases y por lo menos 1 olla de vidrio refractario preferiblemente, se recomienda que las capacidades de los envases tengan el doble de capacidad de la cantidad a preparar.</p><ul><li><b>PASO A:</b> En primer lugar en un unvase se disuelve " + componente[138].n + ", " + componente[139].n + " y " + componente[00].n + ".</li> <li><b>PASO B:</b> A la mezcla obtenida debe agregar " + componente[70].n + "  y llevar todo a baño de Maria a 75ºC.</li> <li><b>PASO C:</b> Una vez fundida la mezcla anterior, incorporar " + componente[66].n + " y " + componente[144].n + ".</li><li><b>PASO D:</b>Retirar del calor y enfriar en un baño de agua fría, Agitar lentamente mientras se enfría, en ese punto debe agregar " + componente[08].n + ".</li><li><b>PASO E:</b> Batir la crema para aumentar la esponjosidad, puede utilizar una batidora electrica o una batidora manual pero que permita incorporar aire a la crema.</li><li><b>PASO F:</b> Envasar con la lengua de gato e impregnar la contratapa con esencia si no se quiere adicionar perfume a la crema.</li></ul> <br> <div class = 'alert alert-info' role = 'alert'> <span class='glyphicon glyphicon-exclamation-sign' aria-hidden='true'> </span><span class='sr-only'>Error:</span> El " + componente[144].n + " se guarda en frigorífico, El cosmético se contamina fácilmente, por lo que extremaremos la asepsia en el area de trabajo, se sugiere que se efectue desinfeccion produnda en el area de trabajo. Sin los conservantes caducará en unas semanas, o antes. Para prolongar su conservación se guardará en lugares frescos, los tarros de envase tendrán doble fondo y se cogerá la crema con una cucharilla limpia y no debe tener contacto con los dedos.</div>";

    document.getElementById('salida').innerHTML = resul,
    document.getElementById('procedimiento').innerHTML = procedimiento;

    popove();
    ponerigual();
}


function crema_hidronutritiva_antistres_termica() {
    var UI = document.getElementById('entrada').value;
    if (isNaN(UI)) {
        return false;
    }
    componente[119].v = p(22);
    componente[87].v = p(2);
    componente[78].v = p(1);
    componente[134].v = p(2);
    componente[131].v = p(5);
    componente[145].v = p(2);
    componente[146].v = p(2);
    componente[39].v = p(0.2);
    componente[143].v = p(3);
    componente[08].v = p(0.2);
    componente[00].v = p(90);

    tratamiento(UI);
    tratamiento_producto(UI);

    resul =
        tca + UI + tipoproducto + fo + tcc + olli +
        componente[119].n + componente[119].v + lili +
        componente[87].n + componente[87].v + lili +
        componente[78].n + componente[78].v + lili +
        componente[134].n + componente[134].v + lili +
        componente[131].n + componente[131].v + lili +
        componente[145].n + componente[145].v + lili +
        componente[146].n + componente[146].v + lili +
        componente[39].n + componente[39].v + lili +
        componente[143].n + componente[143].v + lili +
        componente[08].n +   componente[08].ext + componente[08].v + componente[08].rosa + lili +
        componente[00].n +   componente[00].v + liol;


        quitarigual();
        var procedimiento = "<h3>PROCEDIMIENTO:</h3> <p>Para la elaboracion de este producto usted necesitara 2 envases recomendado que sean de vidrio refractario preferiblemente, se recomienda que las capacidades de los envases tengan el doble de capacidad de la cantidad a preparar.</p><ul><li><b>PASO A:</b> En un primer envase a baño de Maria a 75ºC mezclar " + componente[119].n + ", " + componente[87].n + ", " + componente[78].n + " y " + componente[134].n + ".</li> <li><b>PASO B:</b> En otro envase debe calentar la mezcla de " + componente[131].n + ", " + componente[145].n + ", " + componente[146].n + ", " + componente[39].n + ", " + componente[143].n + " y " + componente[00].n + ".</li> <li><b>PASO C:</b> Aun en caliente debe verter el producto obtenido en el <b>PASO B</b> en el obtenido en el<b>PASO A</b>, agregar la " + componente[08].n + " y enfriar en un baño de Maria Inverso o en un baño frio para luego poder envasarlo.</li></ul> <br> <div class = 'alert alert-info' role = 'alert'> <span class='glyphicon glyphicon-exclamation-sign' aria-hidden='true'> </span><span class='sr-only'>Error:</span> El " + componente[87].n + ", además de emoliente, es bioestimulante, anti-radicales libres y rico en vitamina E.<br>El " + componente[39].n + " es una mezcla comercial de conservantes antibacterianos y antifúngicos. La base autoemulsionable pertenece al grupo de los NO IÖNICOS.</div>";

    document.getElementById('salida').innerHTML = resul,
    document.getElementById('procedimiento').innerHTML = procedimiento;

    popove();
    ponerigual();
}


function crema_hidronutritiva_con_karite_filtro_uv() {
    var UI = document.getElementById('entrada').value;
    if (isNaN(UI)) {
        return false;
    }
    componente[156].v = p(10);
    componente[157].v = p(3);
    componente[78].v = p(2);
    componente[158].v = p(3);
    componente[160].v = p(1);
    componente[131].v = p(2);
    componente[39].v = p(0.1);
    componente[163].v = p(0.05);
    componente[08].v = p(0.2);
    componente[00].v = p(90);

    tratamiento(UI);
    tratamiento_producto(UI);

    resul =
        tca + UI + tipoproducto + fo + tcc + olli +
        componente[156].n + componente[156].v + lili +
        componente[157].n + componente[157].v + lili +
        componente[78].n + componente[78].v + lili +
        componente[158].n + componente[158].v + lili +
        componente[160].n + componente[160].v + lili +
        componente[131].n + componente[131].v + lili +
        componente[39].n + componente[39].v + lili +
        componente[163].n + componente[163].v + lili +
        componente[08].n + componente[08].v + lili +
        componente[00].n +   componente[00].v + liol;


        quitarigual();
        var procedimiento = "<h3>PROCEDIMIENTO:</h3> <p>Para la elaboracion de este producto usted necesitara 2 envases recomendado que sean de vidrio refractario preferiblemente, se recomienda que las capacidades de los envases tengan el doble de capacidad de la cantidad a preparar.</p><ul><li><b>PASO A:</b> En un primer envase a baño de Maria a 75ºC mezclar " + componente[156].n + ", " + componente[157].n + ", " + componente[78].n + ", " + componente[158].n + " y " + componente[160].n + ".</li> <li><b>PASO B:</b> En otro envase debe calentar la mezcla de " + componente[131].n + ", " + componente[39].n + ", " + componente[163].n + " y " + componente[00].n + ".</li> <li><b>PASO C:</b> Aun en caliente debe verter el producto obtenido en el <b>PASO B</b> en el obtenido en el<b>PASO A</b> agregar la " + componente[08].n + " y enfriar en un baño de Maria Inverso o en un baño frio para luego poder envasarlo.</li></ul> <br> <div class = 'alert alert-info' role = 'alert'> <span class='glyphicon glyphicon-exclamation-sign' aria-hidden='true'> </span><span class='sr-only'>Error:</span> La " + componente[158].n + ", además de emoliente y bioestimulante, es un protector solar, contiene alantoína, provitamina A, antiinflamatorio y Vitamina E.</div>";

    document.getElementById('salida').innerHTML = resul,
    document.getElementById('procedimiento').innerHTML = procedimiento;

    popove();
    ponerigual();
}


function crema_despues_del_sol() {
    var UI = document.getElementById('entrada').value;
    if (isNaN(UI)) {
        return false;
    }
    componente[119].v = p(23);
    componente[78].v = p(2);
    componente[87].v = p(1);
    componente[17].v = p(3);
    componente[128].v = p(2);
    componente[129].v = p(3);
    componente[141].v = p(0.2);
    componente[00].v = p(65.8);

    tratamiento(UI);
    tratamiento_producto(UI);

    resul =
        tca + UI + tipoproducto + fo + tcc + olli +
        componente[119].n + componente[119].v + lili +
        componente[78].n + componente[78].v + lili +
        componente[87].n + componente[87].v + lili +
        componente[17].n + componente[17].v + lili +
        componente[128].n + componente[128].v + lili +
        componente[129].n + componente[129].v + lili +
        componente[141].n + componente[141].v + lili +
        componente[00].n +   componente[00].v + liol;


        quitarigual();
        var procedimiento = "<h3>PROCEDIMIENTO:</h3> <p>Este producto podemos decir que se divide en 2 fases una OLEOSA y una ACUOSA, recomendamos que para la elaboracion de este producto usted emplee 2 envases recomendado que sean de vidrio refractario preferiblemente, se recomienda que las capacidades de los envases tengan el doble de capacidad de la cantidad a preparar.</p><ul><li><b>PASO A:</b> En este paso se denomina FASE OLEOSA y el debera en un primer envase a baño de Maria a 75ºC mezclar " + componente[119].n + ", " + componente[78].n + " y " + componente[87].n + ".</li> <li><b>PASO B:</b> En otro envase debe calentar la mezcla de " + componente[17].n + ", " + componente[128].n + ", " + componente[129].n + ", " + componente[141].n + " y " + componente[00].n + ".</li> <li><b>PASO C:</b> Aun en caliente debe verter el producto obtenido en el <b>PASO B</b> en el obtenido en el<b>PASO A</b> agitando lentamente y dejar enfriar para envasar.</li></ul> <br>";

    document.getElementById('salida').innerHTML = resul,
    document.getElementById('procedimiento').innerHTML = procedimiento;

    popove();
    ponerigual();
}

function crema_para_masajes() {
    var UI = document.getElementById('entrada').value;
    if (isNaN(UI)) {
        return false;
    }
    componente[124].v = p(8);
    componente[161].v = p(3);
    componente[162].v = p(5);
    componente[51].v = p(3);
    componente[88].v = p(18);
    componente[90].v = p(0.05);
    componente[17].v = p(5);
    componente[163].v = p(0.3);
    componente[00].v = p(57.6);

    tratamiento(UI);
    tratamiento_producto(UI);

    resul =
        tca + UI + tipoproducto + fo + tcc + olli +
        componente[124].n + componente[124].v + lili +
        componente[161].n + componente[161].v + lili +
        componente[162].n + componente[162].v + lili +
        componente[51].n + componente[51].v + lili +
        componente[88].n + componente[88].v + lili +
        componente[90].n + componente[90].v + lili +
        componente[17].n + componente[17].v + lili +
        componente[163].n + componente[163].v + lili +
        componente[00].n +   componente[00].v + liol;


        quitarigual();
        var procedimiento = "<h3>PROCEDIMIENTO:</h3> <p>Se recomienda que emplee 2 envases que sean de vidrio refractario preferiblemente, intente que las capacidades de los envases tengan el doble de capacidad de la cantidad a preparar.</p><ul><li><b>PASO A:</b> En un primer envase a baño de Maria a 75ºC mezclar " + componente[124].n + ", " + componente[161].n + ", " + componente[162].n + ", " + componente[51].n + ", " + componente[88].n + " y " + componente[90].n + ".</li> <li><b>PASO B:</b> En otro envase debe calentar la mezcla de " + componente[17].n + ", " + componente[163].n + " y " + componente[00].n + ".</li> <li><b>PASO C:</b> Aun en caliente debe verter el producto obtenido en el <b>PASO A</b> en el obtenido en el<b>PASO B</b> agitando lentamente y envasar, puede hacer este procedimiento sin necesidad de que este frio el producto.</li></ul> <br><div class = 'alert alert-info' role = 'alert'> <span class='glyphicon glyphicon-exclamation-sign' aria-hidden='true'> </span><span class='sr-only'>Error:</span> El " + componente[163].n + " es una mezcla comercial de " + componente[138].n + " y " + componente[139].n + " (parabenes) con Fenoxietanol</div>";

    document.getElementById('salida').innerHTML = resul,
    document.getElementById('procedimiento').innerHTML = procedimiento;

    popove();
    ponerigual();
}

function crema_nutritiva() {
    var UI = document.getElementById('entrada').value;
    if (isNaN(UI)) {
        return false;
    }
    componente[70].v = p(25);
    componente[87].v = p(4);
    componente[110].v = p(4);
    componente[164].v = p(0.4);
    componente[138].v = p(0.1);
    componente[139].v = p(0.05);
    componente[08].v = p(0.1);
    componente[00].v = p(80);


    tratamiento(UI);
    tratamiento_producto(UI);

    resul =
        tca + UI + tipoproducto + fo + tcc + olli +
        componente[70].n + componente[70].v + lili +
        componente[87].n + componente[87].v + lili +
        componente[110].n + componente[110].v + lili +
        componente[164].n + componente[164].v + lili +
        componente[138].n + componente[138].v + lili +
        componente[139].n + componente[139].v + lili +
        componente[08].n + componente[08].v + lili +
        componente[00].n +   componente[00].v + liol;


        quitarigual();
        var procedimiento = "<h3>PROCEDIMIENTO:</h3> <p>Para esta preparacion solo necesitara 1 envase preferiblemente que sea de vidrio refractario, intente que la capacidad de este envase sea el doble de la cantidad a preparar.</p><ul><li>Primeramente debe se debe disolver en el envase " + componente[138].n + ", " + componente[139].n + " y " + componente[00].n + ".</li> <li>Luego debe añadir " + componente[70].n + " y llevar a baño de Maria a 75ºC.</li> <li>Una vez fundida la mezcla anterior y aun en caliente se debe incorporar " + componente[87].n + ", " + componente[110].n + " y " + componente[164].n + ".</li><li>Retirar del calor y enfriar en un baño de Maria inverso, es decir en agua fría.</li><li>Agitar lenta pero constantemente mientras se enfría.</li><li>Añadir poco a poco la " + componente[08].n + " recuerde que tambien puede preparar este producto sin perfume.</li><li>Una vez fria debe batir la crema para aumentar la esponjosidad, puede hacerlo con una batidora manual o con una batidora electrica para obtener un mejor resultado.</li><li>Envasar con la lengua de gato y golpeando el tarro para eliminar las burbujas de aire contaminante.</li></ul> <br><div class = 'alert alert-info' role = 'alert'> <span class='glyphicon glyphicon-exclamation-sign' aria-hidden='true'> </span><span class='sr-only'>Error:</span> El cosmético se contamina fácilmente, por lo que extremaremos la asepsia en el area de trabajo, se sugiere que se efectue desinfeccion produnda en el area de trabajo. Sin los conservantes caducará en unas semanas, o antes. Para prolongar su conservación se guardará en lugares frescos, los tarros de envase tendrán doble fondo y se cogerá la crema con una cucharilla limpia y no debe tener contacto con los dedos.</div>";

    document.getElementById('salida').innerHTML = resul,
    document.getElementById('procedimiento').innerHTML = procedimiento;

    popove();
    ponerigual();
}


function crema_hidronutritiva_tipo_dermox() {
    var UI = document.getElementById('entrada').value;
    if (isNaN(UI)) {
        return false;
    }
    componente[70].v = p(25);
    componente[66].v = p(3);
    componente[87].v = p(2);
    componente[110].v = p(2);
    componente[144].v = p(2);
    componente[138].v = p(0.1);
    componente[139].v = p(0.05);
    componente[08].v = p(0.2);
    componente[00].v = p(80);


    tratamiento(UI);
    tratamiento_producto(UI);

    resul =
        tca + UI + tipoproducto + fo + tcc + olli +
        componente[70].n + componente[70].v + lili +
        componente[66].n + componente[66].v + lili +
        componente[87].n + componente[87].v + lili +
        componente[110].n + componente[110].v + lili +
        componente[144].n + componente[144].v + lili +
        componente[138].n + componente[138].v + lili +
        componente[139].n + componente[139].v + lili +
        componente[08].n + componente[08].v + lili +
        componente[00].n +   componente[00].v + liol;


        quitarigual();
        var procedimiento = "<h3>PROCEDIMIENTO:</h3> <p>Para esta preparacion solo necesitara 1 envase preferiblemente que sea de vidrio refractario, intente que la capacidad de este envase sea el doble de la cantidad a preparar.</p><ul><li>Primeramente debe se debe disolver en el envase " + componente[138].n + ", " + componente[139].n + " y " + componente[00].n + ".</li> <li>Luego debe añadir " + componente[70].n + " y llevar a baño de Maria a 75ºC.</li> <li>Una vez fundida la mezcla anterior y aun en caliente se debe incorporar " + componente[66].n + ".</li><li>Agregar " + componente[87].n + ", " + componente[110].n + " y " + componente[144].n + " y retirar del calor para poder enfriar en un baño de Maria inverso, es decir en agua fría.</li><li>Agitar lenta pero constantemente mientras se enfría.</li><li>Añadir poco a poco la " + componente[08].n + " recuerde que tambien puede preparar este producto sin perfume.</li><li>Una vez fria debe batir la crema para aumentar la esponjosidad, puede hacerlo con una batidora manual o con una batidora electrica para obtener un mejor resultado.</li><li>Envasar con la lengua de gato y golpeando el tarro para eliminar las burbujas de aire contaminante.</li></ul> <br><div class = 'alert alert-info' role = 'alert'> <span class='glyphicon glyphicon-exclamation-sign' aria-hidden='true'> </span><span class='sr-only'>Error:</span> El cosmético se contamina fácilmente, por lo que extremaremos la asepsia en el area de trabajo, se sugiere que se efectue desinfeccion produnda en el area de trabajo. Sin los conservantes caducará en unas semanas, o antes. Para prolongar su conservación se guardará en lugares frescos, los tarros de envase tendrán doble fondo y se cogerá la crema con una cucharilla limpia y no debe tener contacto con los dedos.</div>";

    document.getElementById('salida').innerHTML = resul,
    document.getElementById('procedimiento').innerHTML = procedimiento;

    popove();
    ponerigual();
}

function crema_hidronutritiva_tipo_beducen() {
    var UI = document.getElementById('entrada').value;
    if (isNaN(UI)) {
        return false;
    }
    componente[70].v = p(25);
    componente[87].v = p(1);
    componente[135].v = p(1);
    componente[137].v = p(0.5);
    componente[131].v = p(5);
    componente[1000].v = p(3);
    componente[141].v = p(0.3);
    componente[00].v = p(64.2);

    tratamiento(UI);
    tratamiento_producto(UI);

    resul =
        tca + UI + tipoproducto + fo + tcc + olli +
        componente[70].n + componente[70].v + lili +
        componente[87].n + componente[87].v + lili +
        componente[135].n + componente[135].v + lili +
        componente[137].n + componente[137].v + lili +
        componente[131].n + componente[131].v + lili +
        componente[1000].n + componente[1000].v + lili +
        componente[141].n + componente[141].v + lili +
        componente[00].n +   componente[00].v + liol;


        quitarigual();
        var procedimiento = "<h3>PROCEDIMIENTO:</h3> <p>Para esta preparacion necesitara 2 envases preferiblemente que sean de vidrio refractario, intente que la capacidad de estos envases sean el doble de la cantidad a preparar, este producto posee 2 fases una OLEOSA y una ACUOSA.</p><ul><li><b>FASE OLEOSA</b>Primeramente en uno de los envases debe colocar a baño de Maria a 75ºC los siguientes productos: " + componente[70].n + ", " + componente[87].n + ", " + componente[135].n + " y " + componente[137].n + ".</li> <li><b>FASE ACUOSA</b>Separadamente en el otro envase igualmente debe incorporar: " + componente[131].n + ", " + componente[1000].n + ", " + componente[141].n + " y " + componente[00].n + " y llevar a baño de Maria a 75ºC.</li> <li> Una vez fundidos incorporamos <b>FASE ACUOSA</b> sobre <b>FASE OLEOSA</b> agitando suavemente.</li><li>Dejar enfriar y envasar.</li></ul> <br><div class = 'alert alert-info' role = 'alert'> <span class='glyphicon glyphicon-exclamation-sign' aria-hidden='true'> </span><span class='sr-only'>Error:</span> El cosmético se contamina fácilmente, por lo que extremaremos la asepsia en el area de trabajo, se sugiere que se efectue desinfeccion produnda en el area de trabajo. Sin los conservantes caducará en unas semanas, o antes. Para prolongar su conservación se guardará en lugares frescos, los tarros de envase tendrán doble fondo y se cogerá la crema con una cucharilla limpia y no debe tener contacto con los dedos.</div>";

    document.getElementById('salida').innerHTML = resul,
    document.getElementById('procedimiento').innerHTML = procedimiento;

    popove();
    ponerigual();
}

function crema_de_manos_no_ionica() {
    var UI = document.getElementById('entrada').value;
    if (isNaN(UI)) {
        return false;
    }
    componente[165].v = p(5);
    componente[532].v = p(1);
    componente[80].v = p(10);
    componente[17].v = p(5);
    componente[00].v = p(79);
    componente[08].v = p(0.5);
    componente[39].v = p(0.5);


    tratamiento(UI);
    tratamiento_producto(UI);

    resul =
        tca + UI + tipoproducto + fo + tcc + olli +
        componente[165].n + componente[165].v + lili +
        componente[532].n + componente[532].v + lili +
        componente[80].n + componente[80].v + lili +
        componente[17].n + componente[17].v + lili +
        componente[00].n + componente[00].v + lili +
        componente[08].n + componente[08].v + lili +
        componente[39].n +   componente[39].v + liol;

        quitarigual();
        var procedimiento = "<h3>PROCEDIMIENTO:</h3> <p>Para esta preparacion necesitara 2 envases preferiblemente que sean de vidrio refractario, intente que la capacidad de estos envases sean el doble de la cantidad a preparar, este producto posee 2 fases una OLEOSA y una ACUOSA.</p><ul><li><b>FASE OLEOSA</b>Primeramente en uno de los envases debe colocar a baño de Maria a 75ºC los siguientes productos: " + componente[165].n + ", " + componente[532].n + " y " + componente[80].n + ".</li> <li><b>FASE ACUOSA</b>Separadamente en el otro envase igualmente debe mezclar: " + componente[17].n + ", " + componente[00].n + ", " + componente[08].n + " y " + componente[39].n + " y llevar a baño de Maria a 75ºC.</li> <li> Una vez fundidos incorporamos <b>FASE ACUOSA</b> sobre <b>FASE OLEOSA</b> agitando suavemente.</li><li>Dejar enfriar y envasar.</li></ul> <br><div class = 'alert alert-info' role = 'alert'> <span class='glyphicon glyphicon-exclamation-sign' aria-hidden='true'> </span><span class='sr-only'>Error:</span> El cosmético se contamina fácilmente, por lo que extremaremos la asepsia en el area de trabajo, se sugiere que se efectue desinfeccion produnda en el area de trabajo. Sin los conservantes caducará en unas semanas, o antes. Para prolongar su conservación se guardará en lugares frescos, los tarros de envase tendrán doble fondo y se cogerá la crema con una cucharilla limpia y no debe tener contacto con los dedos.</div>";

    document.getElementById('salida').innerHTML = resul,
    document.getElementById('procedimiento').innerHTML = procedimiento;

    popove();
    ponerigual();
}



function crema_de_manos_de_mantequilla() {
    var UI = document.getElementById('entrada').value;
    if (isNaN(UI)) {
        return false;
    }
    componente[166].v = p(10);
    componente[02].v = p(4);
    componente[80].v = p(4);
    componente[17].v = p(6);
    componente[00].v = p(75);
    componente[167].v = p(1);
    componente[08].v = p(0.5);
    componente[39].v = p(0.5);


    tratamiento(UI);
    tratamiento_producto(UI);

    resul =
        tca + UI + tipoproducto + fo + tcc + olli +
        componente[166].n + componente[166].v + lili +
        componente[02].n + componente[02].v + lili +
        componente[80].n + componente[80].v + lili +
        componente[17].n + componente[17].v + lili +
        componente[00].n + componente[00].v + lili +
        componente[167].n + componente[167].v + lili +
        componente[08].n + componente[08].v + lili +
        componente[39].n +   componente[39].v + liol;

        quitarigual();
        var procedimiento = "<h3>PROCEDIMIENTO:</h3> <p>El nombre de esta crema viene dado por el olor del acido láctico caracteristico. Para esta preparacion necesitara 2 envases preferiblemente que sean de vidrio refractario, intente que la capacidad de estos envases sean el doble de la cantidad a preparar, este producto posee 2 fases una OLEOSA y una ACUOSA.</p><ul><li><b>FASE OLEOSA</b>Primeramente en uno de los envases debe colocar a baño de Maria a 75ºC los siguientes productos: " + componente[166].n + ", " + componente[02].n + " y " + componente[80].n + ".</li> <li><b>FASE ACUOSA</b>Separadamente en el otro envase igualmente debe mezclar: " + componente[17].n + ", " + componente[00].n + ", " + componente[167].n + ", " + componente[08].n + " y " + componente[39].n + " y llevar a baño de Maria a 75ºC.</li> <li> Una vez fundidos incorporamos <b>FASE ACUOSA</b> sobre <b>FASE OLEOSA</b> agitando suavemente.</li><li>Dejar enfriar y envasar.</li></ul> <br><div class = 'alert alert-info' role = 'alert'> <span class='glyphicon glyphicon-exclamation-sign' aria-hidden='true'> </span><span class='sr-only'>Error:</span> El cosmético se contamina fácilmente, por lo que extremaremos la asepsia en el area de trabajo, se sugiere que se efectue desinfeccion produnda en el area de trabajo. Sin los conservantes caducará en unas semanas, o antes. Para prolongar su conservación se guardará en lugares frescos, los tarros de envase tendrán doble fondo y se cogerá la crema con una cucharilla limpia y no debe tener contacto con los dedos.</div>";

    document.getElementById('salida').innerHTML = resul,
    document.getElementById('procedimiento').innerHTML = procedimiento;

    popove();
    ponerigual();
}




function crema_de_manos_de_limon() {
    var UI = document.getElementById('entrada').value;
    if (isNaN(UI)) {
        return false;
    }
    componente[166].v = p(12);
    componente[02].v = p(5);
    componente[17].v = p(6);
    componente[00].v = p(57);
    componente[41].v = p(7);
    componente[08].v = p(1);
    componente[39].v = p(0.5);


    tratamiento(UI);
    tratamiento_producto(UI);

    resul =
        tca + UI + tipoproducto + fo + tcc + olli +
        componente[166].n + componente[166].v + lili +
        componente[02].n + componente[02].v + lili +
        componente[17].n + componente[17].v + lili +
        componente[00].n + componente[00].v + lili +
        componente[41].n + componente[41].v + lili +
        componente[08].n + componente[08].v + lili +
        componente[39].n + componente[39].v + liol;

        quitarigual();
        var procedimiento = "<h3>PROCEDIMIENTO:</h3> <p>El nombre de esta crema viene dado por el olor del acido láctico caracteristico. Para esta preparacion necesitara 2 envases preferiblemente que sean de vidrio refractario, intente que la capacidad de estos envases sean el doble de la cantidad a preparar, este producto posee 2 fases una OLEOSA y una ACUOSA.</p><ul><li><b>FASE OLEOSA</b>Primeramente en uno de los envases debe colocar a baño de Maria a 75ºC los siguientes productos: " + componente[166].n + ", " + componente[02].n + " y " + componente[80].n + ".</li> <li><b>FASE ACUOSA</b>Separadamente en el otro envase igualmente debe mezclar: " + componente[17].n + ", " + componente[00].n + ", " + componente[167].n + ", " + componente[08].n + " y " + componente[39].n + " y llevar a baño de Maria a 75ºC.</li> <li> Una vez fundidos incorporamos <b>FASE ACUOSA</b> sobre <b>FASE OLEOSA</b> agitando suavemente.</li><li>Dejar enfriar y envasar.</li></ul> <br><div class = 'alert alert-info' role = 'alert'> <span class='glyphicon glyphicon-exclamation-sign' aria-hidden='true'> </span><span class='sr-only'>Error:</span> El cosmético se contamina fácilmente, por lo que extremaremos la asepsia en el area de trabajo, se sugiere que se efectue desinfeccion produnda en el area de trabajo. Sin los conservantes caducará en unas semanas, o antes. Para prolongar su conservación se guardará en lugares frescos, los tarros de envase tendrán doble fondo y se cogerá la crema con una cucharilla limpia y no debe tener contacto con los dedos.</div>";

    document.getElementById('salida').innerHTML = resul,
    document.getElementById('procedimiento').innerHTML = procedimiento;

    popove();
    ponerigual();
}



function crema_de_manos_con_cera_cationica() {
    var UI = document.getElementById('entrada').value;
    if (isNaN(UI)) {
        return false;
    }
    componente[166].v = p(7);
    componente[17].v = p(8);
    componente[00].v = p(85);
    componente[08].v = p(1);
    componente[39].v = p(0.5);


    tratamiento(UI);
    tratamiento_producto(UI);

    resul =
        tca + UI + tipoproducto + fo + tcc + olli +
        componente[166].n + componente[166].v + lili +
        componente[17].n + componente[17].v + lili +
        componente[00].n + componente[00].v + lili +
        componente[08].n + componente[08].v + lili +
        componente[39].n + componente[39].v + liol;

        quitarigual();
        var procedimiento = "<p>Este tipo de cremas son ideales ya que restablece y estabiliza el manto natural protector de la piel. Ideal para manos secas o agrietadas y otras zonas como codos, rodillas, talones e inclusive la cola del bebé, que sufren la acción agresiva de agentes externos. Humecta y devuelve la elasticidad, es altamente cicatrizante previniendo afecciones dado que crea una película que actúa como barrera sin generar sensación grasosa.</p><h3>PROCEDIMIENTO: </h3> <p>Para preparar esta crema se requiere un envase preferiblemente de vidrio refractario que tenga el doble de capacidad del total de producto a preparar. </p> <ul><li>Debe colocar a baño de Maria a 75ºC todos los ingredientes.</li> <li> Una vez fundidos incorporamos no se debe dejar de agitar suavemente.</li><li>Dejar enfriar y envasar.</li></ul> <br><div class = 'alert alert-info' role = 'alert'> <span class='glyphicon glyphicon-exclamation-sign' aria-hidden='true'> </span><span class='sr-only'>Error:</span> El cosmético se contamina fácilmente, por lo que extremaremos la asepsia en el area de trabajo, se sugiere que se efectue desinfeccion produnda en el area de trabajo. Sin los conservantes caducará en unas semanas, o antes. Para prolongar su conservación se guardará en lugares frescos, los tarros de envase tendrán doble fondo y se cogerá la crema con una cucharilla limpia y no debe tener contacto con los dedos.</div>";

    document.getElementById('salida').innerHTML = resul,
    document.getElementById('procedimiento').innerHTML = procedimiento;

    popove();
    ponerigual();
}




function crema_facial_formula_1() {
    var UI = document.getElementById('entrada').value;
    if (isNaN(UI)) {
        return false;
    }
    componente[80].v = p(38);
    componente[49].v = p(3);
    componente[168].v = p(3);
    componente[124].v = p(12);
    componente[17].v = p(4);
    componente[00].v = p(40);
    componente[39].v = p(0.5);
    componente[07].v = p(0.5);
    componente[08].v = p(0.5);

    tratamiento(UI);
    tratamiento_producto(UI);

    resul =
        tca + UI + tipoproducto + fo + tcc + olli +
        componente[80].n + componente[80].v + lili +
        componente[49].n + componente[49].v + lili +
        componente[168].n + componente[168].v + lili +
        componente[124].n + componente[124].v + lili +
        componente[17].n + componente[17].v + lili +
        componente[00].n + componente[00].v + lili +
        componente[39].n + componente[39].v + lili +
        componente[07].n + componente[07].v + lili +
        componente[08].n + componente[08].v + liol;

        quitarigual();
        var procedimiento = "<h3>PROCEDIMIENTO:</h3> <p>Para esta preparacion necesitara 2 envases preferiblemente que sean de vidrio refractario, intente que la capacidad de estos envases sean el doble de la cantidad a preparar, este producto posee 2 fases una OLEOSA y una ACUOSA.</p><ul><li><b>FASE OLEOSA</b>Primeramente en uno de los envases debe colocar a baño de Maria a 75ºC los siguientes productos: " + componente[80].n + ", " + componente[49].n + ", " + componente[168].n + " y " + componente[124].n + ".</li> <li><b>FASE ACUOSA</b>Separadamente en el otro envase igualmente debe mezclar: " + componente[17].n + ", " + componente[00].n + ", " + componente[39].n + " y " + componente[07].n + " y llevar a baño de Maria a 75ºC.</li> <li> Una vez fundidos incorporamos <b>FASE OLEOSA (Abundante)</b> sobre <b>FASE ACUOSA (Escasa)</b> agitando siempre de forma suave.</li><li>Dejar enfriar y agregar la " + componente[08].n + " para luego envasar.</li></ul> <br><div class = 'alert alert-info' role = 'alert'> <span class='glyphicon glyphicon-exclamation-sign' aria-hidden='true'> </span><span class='sr-only'>Error:</span> El cosmético se contamina fácilmente, por lo que extremaremos la asepsia en el area de trabajo, se sugiere que se efectue desinfeccion produnda en el area de trabajo. Sin los conservantes caducará en unas semanas, o antes. Para prolongar su conservación se guardará en lugares frescos, los tarros de envase tendrán doble fondo y se cogerá la crema con una cucharilla limpia y no debe tener contacto con los dedos.</div>";

    document.getElementById('salida').innerHTML = resul,
    document.getElementById('procedimiento').innerHTML = procedimiento;

    popove();
    ponerigual();
}




function crema_facial_formula_2() {
    var UI = document.getElementById('entrada').value;
    if (isNaN(UI)) {
        return false;
    }
    componente[80].v = p(30);
    componente[532].v = p(3);
    componente[100].v = p(12);
    componente[28].v = p(1.5);
    componente[06].v = p(5);
    componente[00].v = p(48.5);
    componente[39].v = p(0.5);
    componente[07].v = p(0.5);
    componente[08].v = p(0.5);

    tratamiento(UI);
    tratamiento_producto(UI);

    resul =
        tca + UI + tipoproducto + fo + tcc + olli +
        componente[80].n + componente[80].v + lili +
        componente[532].n + componente[532].v + lili +
        componente[100].n + componente[100].v + lili +
        componente[28].n + componente[28].v + lili +
        componente[06].n + componente[06].v + lili +
        componente[00].n + componente[00].v + lili +
        componente[39].n + componente[39].v + lili +
        componente[07].n + componente[07].v + lili +
        componente[08].n + componente[08].v + liol;

        quitarigual();
        var procedimiento = "<h3>PROCEDIMIENTO:</h3> <p>Para esta preparacion necesitara 2 envases preferiblemente que sean de vidrio refractario, intente que la capacidad de estos envases sean el doble de la cantidad a preparar, este producto posee 2 fases una OLEOSA y una ACUOSA.</p><ul><li><b>FASE OLEOSA</b>Primeramente en uno de los envases debe colocar a baño de Maria a 75ºC los siguientes productos: " + componente[80].n + ", " + componente[532].n + " y " + componente[100].n + ".</li> <li><b>FASE ACUOSA</b>Separadamente en el otro envase igualmente debe mezclar: " + componente[28].n + ", " + componente[06].n + ", " + componente[00].n + ", " + componente[39].n + " y " + componente[07].n + " y llevar a baño de Maria a 75ºC.</li> <li> Una vez fundidos incorporamos <b>FASE ACUOSA (Abundante)</b> sobre <b>FASE OLEOSA (Escasa)</b> agitando siempre de forma suave.</li><li>Dejar enfriar y agregar la " + componente[08].n + " para luego envasar.</li></ul> <br><div class = 'alert alert-info' role = 'alert'> <span class='glyphicon glyphicon-exclamation-sign' aria-hidden='true'> </span><span class='sr-only'>Error:</span> El cosmético se contamina fácilmente, por lo que extremaremos la asepsia en el area de trabajo, se sugiere que se efectue desinfeccion produnda en el area de trabajo. Sin los conservantes caducará en unas semanas, o antes. Para prolongar su conservación se guardará en lugares frescos, los tarros de envase tendrán doble fondo y se cogerá la crema con una cucharilla limpia y no debe tener contacto con los dedos.</div>";

    document.getElementById('salida').innerHTML = resul,
    document.getElementById('procedimiento').innerHTML = procedimiento;

    popove();
    ponerigual();
}




function crema_desodorante() {
    var UI = document.getElementById('entrada').value;
    if (isNaN(UI)) {
        return false;
    }
    componente[124].v = p(8);
    componente[78].v = p(2);
    componente[02].v = p(4.7);
    componente[1002].v = p(5);
    componente[169].v = p(2);
    componente[49].v = p(8);
    componente[130].v = p(3);
    componente[158].v = p(3);
    componente[00].v = p(54.7);
    componente[66].v = p(5);
    componente[17].v = p(5);
    componente[99].v = p(0.1);
    componente[41].v = p(0.2);
    componente[163].v = p(0.3);

    tratamiento(UI);
    tratamiento_producto(UI);

    resul =
        tca + UI + tipoproducto + fo + tcc + olli +
        componente[124].n + componente[124].v + lili +
        componente[78].n + componente[78].v + lili +
        componente[02].n + componente[02].v + lili +
        componente[1002].n + componente[1002].v + lili +
        componente[169].n + componente[169].v + lili +
        componente[49].n + componente[49].v + lili +
        componente[130].n + componente[130].v + lili +
        componente[158].n + componente[158].v + lili +
        componente[00].n + componente[00].v + lili +
        componente[66].n + componente[66].v + " Tambien puede utilizar " +
        componente[17].n + componente[17].v + lili +
        componente[99].n + componente[99].v + lili +
        componente[41].n + componente[41].v + lili +
        componente[163].n + componente[163].v + liol;

        quitarigual();
        var procedimiento = "<h3>PROCEDIMIENTO:</h3> <p>Para esta preparacion necesitara 2 envases preferiblemente que sean de vidrio refractario, intente que la capacidad de estos envases sean el doble de la cantidad a preparar, este producto posee 2 fases una OLEOSA y una ACUOSA.</p><ul><li><b>PASO 1</b> Primeramente en uno de los envases debe colocar a baño de Maria a 75ºC los siguientes productos: " + componente[124].n + ", " + componente[78].n + ", " + componente[02].n + ", " + componente[1002].n + ", " + componente[169].n + ", " + componente[49].n + ", " + componente[130].n + " y " + componente[158].n + ".</li> <li><b>PASO 2</b> En el otro envase igualmente debe mezclar: " + componente[00].n + ", " + componente[66].n + ", " + componente[99].n + ", " + componente[41].n + " y " + componente[163].n + " y llevar a baño de Maria a 75ºC.</li> <li> Una vez fundidos incorporamos <b>LA MEZCLA OBTENIDA EN EL PASO B</b> sobre <b>LA MEZCLA OBTENIDA EN EL PASO A</b> agitando siempre de forma suave.</li><li>Este producto debe enfriarse bajo agitacion si van a colocar " + componente[08].n + " deben hacerlo cuando la mezcla este exactamente a 37ºC para luego envasar, la formula recomendada no indica fragancia ya que los ingredientes del mismo poseen al terminar un olor agradable.</li></ul>";

    document.getElementById('salida').innerHTML = resul,
    document.getElementById('procedimiento').innerHTML = procedimiento;

    popove();
    ponerigual();
}


function colorete_en_polvo_compacto() {
    var UI = document.getElementById('entrada').value;
    if (isNaN(UI)) {
        return false;
    }
    componente[57].v = p(47.7);
    componente[170].v = p(16);
    componente[171].v = p(6);
    componente[47].v = p(5);
    componente[172].v = p(5);
    componente[132].v = p(10);
    componente[93].v = p(4);
    componente[07].v = p(6);
    componente[08].v = p(0.1);
    componente[91].v = p(6);
    componente[138].v = p(0.15);
    componente[139].v = p(0.05);

    tratamiento(UI);
    tratamiento_producto(UI);

    resul =
        tca + UI + tipoproducto + fo + tcc + olli +
        componente[57].n + componente[57].v + lili +
        componente[170].n + componente[170].v + lili +
        componente[171].n + componente[171].v + lili +
        componente[47].n + componente[47].v + lili +
        componente[172].n + componente[172].v + lili +
        componente[132].n + componente[132].v + lili +
        componente[93].n + componente[93].v + lili +
        componente[07].n + componente[07].v + lili +
        componente[08].n + componente[08].v + lili +
        componente[91].n + componente[91].v + lili +
        componente[138].n + componente[138].v + lili +
        componente[139].n + componente[139].v + liol;

        quitarigual();
        var procedimiento = "<h3>PROCEDIMIENTO:</h3> <p>Para esta preparacion necesitara 1 mortero Mezclar todos los componentes en el mortero, para su homogeneización. Dejar para el final la adición del perfume para posteriormente envasar.</p><br><div class = 'alert alert-info' role = 'alert'> <span class='glyphicon glyphicon-exclamation-sign' aria-hidden='true'> </span><span class='sr-only'>Error:</span> El caolín elimina parte del brillo antiestático del talco. Para polvos sueltos, se disminuye la cantidad de caolín, óxido de Zn, estearatos y se elimina el almidón que facilita la compresión..</div>";

    document.getElementById('salida').innerHTML = resul,
    document.getElementById('procedimiento').innerHTML = procedimiento;

    popove();
    ponerigual();
}

function crema_anticelulitica() {
    var UI = document.getElementById('entrada').value;
    if (isNaN(UI)) {
        return false;
    }
    componente[105].v = p(5);
    componente[106].v = p(10);
    componente[107].v = p(5);
    componente[108].v = p(2);
    componente[109].v = p(1);
    componente[110].v = p(4);
    componente[70].v = p(25);
    componente[66].v = p(5);
    componente[138].v = p(0.15);
    componente[139].v = p(0.05);
    componente[08].v = p(0.2);
    componente[00].v = p(95);

    tratamiento(UI);
    tratamiento_producto(UI);

    resul =
        tca + UI + tipoproducto + fo + tcc + olli +
        componente[105].n + componente[105].v + lili +  //1
        componente[106].n + componente[106].v + lili +  //2
        componente[107].n + componente[107].v + lili +  //3
        componente[108].n + componente[108].v + lili +  //4
        componente[109].n + componente[109].v + lili +  //5
        componente[110].n + componente[110].v + lili +  //6
        componente[70].n + componente[70].v + lili +    //7
        componente[66].n + componente[66].v + lili +    //8
        componente[138].n + componente[138].v + lili +  //9
        componente[139].n + componente[139].v + lili +  //10
        componente[08].n + componente[08].v + lili +    //11
        componente[00].n + componente[00].v + liol;     //12

        quitarigual();
        var procedimiento = "<h3>PROCEDIMIENTO:</h3> <p>Para esta preparacion necesitara 2 envases preferiblemente que sean de vidrio refractario, intente que la capacidad de estos envases sean el doble de la cantidad a preparar.</p><ul><li><b>PASO 1</b> Primeramente en uno de los envases debe colocar a baño de Maria a 75ºC por separado los siguientes componentes: " + componente[70].n + " y " + componente[00].n + ".</li> <li><b>PASO 2</b> Añadir " + componente[109].n + " y " + componente[66].n + " al " + componente[00].n + ".</li> <li><b>PASO 3</b> Adicionar " +componente[105].n+", "+componente[106].n+", "+componente[107].n+", "+componente[108].n+", "+componente[110].n+" en "+componente[70].n+".</li><li><b>PASO 4</b> Agregar "+ componente[138].n +" "+ componente[139].n +"sobre " + componente[00].n + " y agitar hasta su disolución.</li><li><b>PASO 5</b>Vertemos la mezcla que contiene el "+componente[00].n+" sobre la mezcla del "+componente[70].n+"</li><li><b>PASO 6</b>Dejar enfriar mientras agitamos lentamente y añadir "+componente[08].n+"</li><li><b>PASO 7</b>Batir la emulsión para que quede esponjosa. Envasar en el tarro, poco a poco, dando ligeros golpecitos periódicos para eliminar el aire del envase, que se apreciará por la presencia de burbujas en la superficie del tarro al golpearlo con cuidado.</li></ul><br><div class = 'alert alert-info' role = 'alert'> <span class='glyphicon glyphicon-exclamation-sign' aria-hidden='true'> </span><span class='sr-only'>Error:</span> El cosmético se contamina fácilmente, por lo que se extremará la asepsia en su fabricación (guantes y mascarilla). Sin los conservantes, caducará en breves semanas como mucho. Envasaremos en tarros de doble fondo y en lugares frescos para aumentar su conservación. Se envasará la crema con una espátula, no con los dedos que facilitan la contaminación del cosmético.<br>Tome en cuenta que el color y el olor (sin la esencia) son poco atractivos.</div>";

    document.getElementById('salida').innerHTML = resul,
    document.getElementById('procedimiento').innerHTML = procedimiento;

    popove();
    ponerigual();
}


function crema_de_colageno_para_la_piel() {
    var UI = document.getElementById('entrada').value;
    if (isNaN(UI)) {
        return false;
    }
    componente[119].v = p(24);
    componente[87].v = p(1);
    componente[78].v = p(2);
    componente[134].v = p(2);
    componente[131].v = p(5);
    componente[141].v = p(0.15);
    componente[00].v = p(60.85);
    componente[143].v = p(5);

    tratamiento(UI);
    tratamiento_producto(UI);

    resul =
        tca + UI + tipoproducto + fo + tcc + olli +
        componente[119].n + componente[119].v + lili +  //1
        componente[87].n + componente[87].v + lili +    //2
        componente[78].n + componente[78].v + lili +    //3
        componente[134].n + componente[134].v + lili +  //4
        componente[131].n + componente[131].v + lili +  //5
        componente[141].n + componente[141].v + lili +  //6
        componente[00].n + componente[00].v + lili +    //7
        componente[143].n + componente[143].v + liol;   //8

        quitarigual();
        var procedimiento = "<h3>PROCEDIMIENTO:</h3> <p>Para esta preparacion necesitara 2 envases preferiblemente que sean de vidrio refractario, intente que la capacidad de estos envases sean el doble de la cantidad a preparar.</p><ul><li><b>PASO 1</b> Colocar en Baño María (75°C) para fundir "+ componente[119] +" "+ componente[87] +" "+ componente[78] +" "+ componente[134] +" a esta fase se le llama (FASE OLEOSA).</li> <li><b>PASO 2</b> Independientemente mezclar en otro recipiente al baño María "+componente[131].n+", "+componente[141].n+" y "+componente[00].n+" a esta fase se le llama  (FASE ACUOSA).</li> <li><b>PASO 3</b> Incorporar la fase acuosa sobre la fase oleosa agitando suavemente.</li><li><b>PASO 4</b> Una vez homogeneizado sacar del baño María y dejar enfriar hasta 37oC sin dejar de agitar.</li><li><b>PASO 5</b> ya por ultimo Incorporar "+componente[143].n+" y envasar.</li></ul><br><div class = 'alert alert-info' role = 'alert'> <span class='glyphicon glyphicon-exclamation-sign' aria-hidden='true'> </span><span class='sr-only'>Error:</span> <b> NOTA INFORMATIVA</b><br> La molécula de colágeno es demasiado grande para que pueda penetrar por la epidermis. Su acción es hidratante superficial. Si el colágeno está hidrolizado puede penetrar algo más y llegar a la dermis donde los fibroblastos sintetizan las fibras de colágeno.</div>";

    document.getElementById('salida').innerHTML = resul,
    document.getElementById('procedimiento').innerHTML = procedimiento;

    popove();
    ponerigual();
}
