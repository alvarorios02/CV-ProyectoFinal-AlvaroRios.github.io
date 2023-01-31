


const obj = {
    "género": " femenino ",
    "nombre": {
      "título": " Señorita ",
      "primero": " Jennie ",
      "último": " Nichols "
    },
    "localización": {
      "calle": {
        "número": 8929 ,
        "nombre": " Valwood Pkwy ",
      },
      "ciudad": " facturación ",
      "estado": " Míchigan ",
      "país": " Estados Unidos ",
      "código postal": " 63104 ",
      "coordenadas": {
        "latitud": " -69.8246 ",
        "longitud": " 134.8719 "
      },
      "zona horaria": {
        "desplazamiento": " +9:30 ",
        "descripción": " Adelaida, Darwin "
      }
    },
    "correo electrónico": " jennie.nichols@example.com ",
    "acceso": {
      "uuid": " 7a0eed16-9430-4d68-901f-c0d4c1c3bf00 ",
      "nombre de usuario": " pavo real amarillo117 ",
      "contraseña": " addison ",
      "sal": " sld1yGtd ",
      "md5": " ab54ac4c0be9480ae8fa5e9e2a5196a3 ",
      "sha1": " edcf2ce613cbdea349133c52dc2f3b83168dc51b ",
      "sha256": " 48df5229235ada28389b91e60a935e4f9b73eb4bdb855ef9258a1751f10bdc5d "
    },
    "dob": {
      "fecha": " 1992-03-08T15:13:16.688Z ",
      "edad": 30
    },
    "registrado": {
      "fecha": " 2007-07-09T05:51:59.390Z ",
      "edad": 14
    },
    "teléfono": " (272) 790-0888 ",
    "celular": " (489) 330-2385 ",
    "identificación": {
      "nombre": " Número de Seguro Social ",
      "valor": " 405-88-3636 "
    },
    "fotografía": {
      "grande": " https://randomuser.me/api/portraits/men/75.jpg ",
      "medio": " https://randomuser.me/api/portraits/med/men/75.jpg ",
      "miniatura": " https://randomuser.me/api/portraits/thumb/men/75.jpg "
    },
    "nat": " Estados Unidos ",
    "estudios": {
        "primario": "Colegio San Vicente",
        "secundario": "EPET 3",
        "universidad": "Facultad de Ingenieria",
        "titulo": "Ingeniero Civil"
      },
      "experiencia": {
        "empresa1": "Operaria CALIDRA S.A.",
        "empresa3": "Encargada en Moneteverde",
        "empresa2": "Supervisora Barrick Gold"
      }
  };

//DATOS PERSONALES
  document.getElementById('tecla').addEventListener("click", mostrarYocultar);

  function mostrarYocultar() {
      if (document.getElementById('infopersonal').style.display=='none') {
        document.getElementById('infopersonal').style.display= 'block';
      } else {
        document.getElementById('infopersonal').style.display= 'none';
      }
  };
  
  document.getElementById("infopersonal1").innerHTML = "Nombre: " +obj.nombre.título +obj.nombre.primero +obj.nombre.último;
  document.getElementById("infopersonal2").innerHTML = "Género: " +obj.género;
  document.getElementById("infopersonal3").innerHTML = "Edad: " +obj.dob.edad +" años";
  document.getElementById("infopersonal4").innerHTML = "Nacionalidad: " +obj.nat;


  // DATOS DE CONTACTO:
  document.getElementById('tecla1').addEventListener("click", mostrarYocultar1);

  function mostrarYocultar1() {
      if (document.getElementById('datosdecontacto').style.display=='none') {
        document.getElementById('datosdecontacto').style.display= 'block';
      } else {
        document.getElementById('datosdecontacto').style.display= 'none';
      }
  };
  
  document.getElementById("datosdecontacto1").innerHTML = "Correo Electrónico:  " +obj["correo electrónico"];
  document.getElementById("datosdecontacto2").innerHTML = "Celular: " +obj.celular;
  document.getElementById("datosdecontacto3").innerHTML = "Teléfono: " +obj.teléfono;

  // DATOS DE ESTUDIOS:
  document.getElementById('tecla2').addEventListener("click", mostrarYocultar2);

  function mostrarYocultar2() {
      if (document.getElementById('estudios').style.display=='none') {
        document.getElementById('estudios').style.display= 'block';
      } else {
        document.getElementById('estudios').style.display= 'none';
      }
  };
  
  document.getElementById("estudios1").innerHTML = "Primario:  " +obj.estudios.primario;
  document.getElementById("estudios2").innerHTML = "Secundario: " +obj.estudios.secundario;
  document.getElementById("estudios3").innerHTML = "Universidad: " +obj.estudios.univeridad;
  document.getElementById("estudios4").innerHTML = "Titulo: " +obj.estudios.titulo;


  // DATOS DE EXPERIENCIA LABORAL:
  document.getElementById('tecla3').addEventListener("click", mostrarYocultar3);

  function mostrarYocultar3() {
      if (document.getElementById('experiencialaboral').style.display=='none') {
        document.getElementById('experiencialaboral').style.display= 'block';
      } else {
        document.getElementById('experiencialaboral').style.display= 'none';
      }
  };
  
  document.getElementById("experiencialaboral1").innerHTML = "Puesto y Compañia:  " +obj.experiencia.empresa1;
  document.getElementById("experiencialaboral2").innerHTML = "Puesto y Compañia: " +obj.experiencia.empresa2;
  document.getElementById("experiencialaboral3").innerHTML = "Puesto y Compañia:  " +obj.experiencia.empresa3;