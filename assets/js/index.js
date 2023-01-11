const propiedades = document.querySelector(".propiedades")
const total = document.querySelector("#total")
const cuartos = document.querySelector("#cuartos").valueAsNumber

const inmuebles = [
  {
    name: "Casa de campo",
    description: "Un lugar ideal para descansar de la ciudad",
    src:
      'https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg',
    rooms: 2,
    m: 170
  },
  {
    name: "Casa de playa",
    description: "Despierta tus días oyendo el oceano",
    src:
      'https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg',
    rooms: 2,
    m: 130
  },
  {
    name: "Casa en el centro",
    description: "Ten cerca de ti todo lo que necesitas",
    src:
      'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
    rooms: 1,
    m: 80
  },
  {
    name: "Casa rodante",
    description: "Conviertete en un nómada del mundo sin salir de tu casa",
    src:
      'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
    rooms: 1,
    m: 6
  },
  {
    name: "Departamento",
    description: "Desde las alturas todo se ve mejor",
    src:
      'https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg',
    rooms: 3,
    m: 200
  },
  {
    name: "Mansión",
    description: "Vive una vida lujosa en la mansión de tus sueños ",
    src:
      'https://images.mansionglobal.com//im-697060',
    rooms: 5,
    m: 500
  },
  {
    name: "Casa de Campo",
    description: "Para disfrutar de la vista al mar",
    src:
      'https://img10.naventcdn.com/avisos/18/00/51/90/33/36/720x532/52648437.jpg',
    rooms: 3,
    m: 200
  },
];

crearFiltroDeBusqueda()

function crearFiltroDeBusqueda() {

  propiedades.innerHTML = ""
  total.innerHTML = 0

  const cuartos = document.querySelector("#cuartos").valueAsNumber
  const desde = document.querySelector("#desde").valueAsNumber
  const hasta = document.querySelector("#hasta").valueAsNumber

  const valorCuartos = document.querySelector("#valorCuartos")
  const valorDesde = document.querySelector("#valorDesde")
  const valorHasta = document.querySelector("#valorHasta")

  valorCuartos.innerHTML = cuartos
  valorDesde.innerHTML = desde
  valorHasta.innerHTML = hasta


  if (document.querySelector("#filtrar").className == "") {
    filtroDeBusqueda = inmuebles
  } else {
    filtroDeBusqueda = inmuebles.filter(filtro => (filtro.rooms == cuartos && filtro.m >= desde && filtro.m <= hasta))
  }

  for (const inmueble of filtroDeBusqueda) {
    const templateDeInmueble = `
    <div class="propiedad">
      <div class="img"
          style="background-image: url(${inmueble.src})">
      </div>
      <section>
        <h5>${inmueble.name}</h5>
        <div class="d-flex justify-content-between">
          <p>Cuartos: ${inmueble.rooms}</p>
          <p>Metros: ${inmueble.m}</p>
        </div>
        <p class="my-3">${inmueble.description}</p>
        <button class="btn btn-info ">Ver más</button>
      </section>
    </div>
    `;
    propiedades.innerHTML += templateDeInmueble;
    total.innerHTML++
  }
}

/* Manipulación del boton de Busqueda */
const filtrar = document.querySelector("#filtrar")
const button = document.querySelector("#mostrar")

// También se puede ejecutar con un escuchador de click, quitando el onclick del elemento html <button>
// button.addEventListener("click", mostrarMas)

function mostrar() {
  if (filtrar.className == "abierto") {
    filtrar.className = ""
    button.textContent = "Personalice busqueda"
    document.getElementById("cuartos").valueAsNumber = 0
    document.getElementById("desde").valueAsNumber = 0
    document.getElementById("hasta").valueAsNumber = 0
    crearFiltroDeBusqueda()
  } else {
    filtrar.className = "abierto"
    button.textContent = "Mostrar todo"
  }
}