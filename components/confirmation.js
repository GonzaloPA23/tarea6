class Confirmation extends HTMLElement {
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
          #font-small{
            font-size: 2.2rem;
        }
        
        .container-p {
            display: flex;
            padding-left: 17%;
            padding-right: 19%;
            padding-top: 5%;
        }
        
        .container-p p{
            text-align: start;
            font-size: 2rem;
            color: #027000;
        }
        
        .container-p span{
            color: #FAF014;
        }
        .container-p button{
            color: #027000;
            border: 1px solid #FAF014;
            position:absolute;
            bottom:150px;
            right: 22%; 
            width: 60%;
            font-size: 2rem;
        }
        
        .container-p button:hover{
            background-color: #FAF014;
        }
        
          </style>
  
       <section>
        <div class="box-title-green">
          <h3 id="font-small">Summary of reservation</h3>
        </div> 
        <div class="container-p">
          <p>Dear, <span>user,</span>  your reservation for the table T1, at 23th abril, has been made it</p>
        <a href="index.html"><button>BACK TO HOME</button></a>
        </div>
      </section>
          `;
    }
  }
  
  // window.customElements.define es una función que se utiliza para registrar y definir un nuevo elemento
  //personalizado en la plataforma web, permitiendo la creación de componentes reutilizables con su propio comportamiento y apariencia.
  window.customElements.define("message-confirmation", Confirmation);
  