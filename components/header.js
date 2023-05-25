class EtiquetaHeader extends HTMLElement {
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
        header{
            display: flex;
            position: sticky;
            width: 100%;
            height: 7vh;
            padding: 1rem;
        }
        nav.container--options--header{
            display: flex;
            justify-content: space-between;
            width: 100vw;
        }
        
        .container--options--header button{
            color: #027000;
            font-size: 1.3rem;
        }
        
        .container--options--header img{
            height: 60%;
            width: 100%;
        }
        </style>

        <header>
        <nav class="container--options--header">
          <button><i class="fa-solid fa-bars"></i></button>
          <a href="index.html">
            <img src="images/Little Lemmon.svg" alt="Logo">
          </a>
          <div>
            <button>
                Login
            </button>
            <button>
              <i class="fa-solid fa-cart-shopping"></i>            
            </button>
          </div>
        </nav>
      </header>
        `;
  }
}

// window.customElements.define es una función que se utiliza para registrar y definir un nuevo elemento
//personalizado en la plataforma web, permitiendo la creación de componentes reutilizables con su propio comportamiento y apariencia.
window.customElements.define("mi-header", EtiquetaHeader);
