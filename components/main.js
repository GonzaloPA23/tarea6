class EtiquetaMain extends HTMLElement {
    // Este es el constructor de la clase, acá se heredarán los atributos y métodos del padre
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      // Acá van los otros atributos (no olvidar el this que hace referencia a la clase Nombre_Clase)
    }
  
    // Acá van los métodos de la clase
    connectedCallback() {
      this.render();
    }
  
    render() {
      // Acá iran los estilos y la creación de las etiquetas con sus componentes y/o atributos
      this.shadowRoot.innerHTML = `
          <style>
          * {
              box-sizing: border-box;    
              margin: 0;
              padding: 0;
              font-family:monospace;
          }
          button{
              height: fit-content;
              width: fit-content;
              border: none;
              border-radius: 20px;
              cursor: pointer;
              padding: 0.4rem;
              background-color: white;
          }
        main{
            display: flex;
            background-image: url(/images/Rectangle\ 3.png);
            background-repeat: no-repeat;
            background-size:100% 100%;
            overflow: hidden;
            justify-content: flex-start;
            height: 35vh;
            padding: 1.3rem;
            border: 1px solid black;
        }
        .container-main{
            display: flex;
            width: 30%;
            flex-direction: column;
            justify-content: space-around;
            color: black;
            font-size: 1.3rem;
        }
        #reservar{
            padding-left: 0.9rem;
            padding-right: 0.9rem;
            background-color: #027000;
            color: white;
            font-size: 1.3rem;
        }
          </style>
  
        <main>
        <div class="container-main">
            <h1>Meal</h1>
            <p>Delicious</p>
            <button id="reservar">Reserve</button>
          </div>
        </main>
          `;
    }
  }
  
  // window.customElements.define es una función que se utiliza para registrar y definir un nuevo elemento
  //personalizado en la plataforma web, permitiendo la creación de componentes reutilizables con su propio comportamiento y apariencia.
  window.customElements.define("mi-main", EtiquetaMain);
  