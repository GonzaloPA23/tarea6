class NavBotones extends HTMLElement {
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
        .container-nav{
            display: flex;
            justify-content:space-between;
            padding: 1rem;
            border-left: 1px solid black;
            border-bottom: 1px solid black;
            border-right: 1px solid black;
            align-items: center;
        }
        
        .container-nav button{
            background-color: #027000;
            color: white;
            width: 25%;
        }
          </style>
  
        <nav class="container-nav">
          <button>Veg</button>
          <button>Meat</button>
          <button>Asian</button>
        </nav>
          `;
    }
  }
  
  // window.customElements.define es una función que se utiliza para registrar y definir un nuevo elemento
  //personalizado en la plataforma web, permitiendo la creación de componentes reutilizables con su propio comportamiento y apariencia.
  window.customElements.define("mi-nav-botones", NavBotones);
  