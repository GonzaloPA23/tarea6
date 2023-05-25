class Pago extends HTMLElement {
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
          .box-title-green{
            display: flex;
            justify-content: center;
            align-items: center;
            height: 25vh;
        }
        
        .box-title-green h3{
            color:#027000;
            font-size: 2.8rem;
            font-weight: normal;
            font-style: italic;
        }
        .container-payment-complete{
            height: 93vh;
            border: 1px solid black;
        }
        
        .container-payment{
            display: flex;
            flex-wrap: wrap;
            height: 68vh;
            flex-direction: row;
            padding: 3rem;
            justify-content: center;
        }
        
        .container-payment section{
            background-color:#D9D9D9;
            display: flex;
            padding: 1rem;
            margin: 1rem;
            max-width: 30vw;
            align-items: center;
            text-align: center;
            height: 40%;
            font-size: 1.9rem;
        }
        
        .container-payment section:nth-child(n + 2){
            background-color: #FAF014;
        }
        
        .container-payment section:nth-child(3n + 1){
            background-color: #027000;
        }
          </style>
  
          <div class="container-payment-complete">
          <div class="box-title-green">
            <h3>Payment method</h3>
          </div>
          <div class="container-payment">
            <section>
              Payment 1
            </section>
            <section>
              Payment 2
            </section>
            <section>
              Payment 3
            </section>
            <section>
              Payment 4
            </section>
          </div>
        </div>
          `;
  }
}

// window.customElements.define es una función que se utiliza para registrar y definir un nuevo elemento
//personalizado en la plataforma web, permitiendo la creación de componentes reutilizables con su propio comportamiento y apariencia.
window.customElements.define("pagos-componente", Pago);
