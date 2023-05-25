class SectionFood extends HTMLElement {
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
          .container-section{
            display: flex;
            flex-direction: column;
            border-right: 1px solid black;
            border-bottom: 1px solid black;
            border-left: 1px solid black;
            padding: 1rem;
            height: 52vh;
            justify-content: space-between;
            align-items: center;
        }
        .section-description-food{
            display: flex;
            width: 95%;
            height: 14vh;
            background-color: #5e505033;
            border-radius: 10px;
            border: 1px solid black;
            background-color: white;
        }
        
        .section-description-food img{
            height: 100%;
            border-radius: 10px;
        
        }
        
        .section-description-food p{
            display: flex;
            width: 100%;
            text-align: start;
            align-items: center;
            padding: 1.7rem;
            font-size: 1.2rem;
        }
          </style>
  
          <section class="container-section">
          <figure class="section-description-food">
            <img src="images/Rectangle 50.png" alt="food vegetables">
            <p>Test the flawor of the best vegetables in town</p>
          </figure>
          <figure class="section-description-food">
            <img src="images/Rectangle 51.png" alt="meat">
            <p>Test the flawor of the best meat in town</p>
          </figure>
          <figure class="section-description-food">
            <img src="images/Rectangle 52.png" alt="asian food">
            <p>Test the flawor of the best asian food in town</p>
          </figure>
        </section>
          `;
    }
  }
  
  // window.customElements.define es una función que se utiliza para registrar y definir un nuevo elemento
  //personalizado en la plataforma web, permitiendo la creación de componentes reutilizables con su propio comportamiento y apariencia.
  window.customElements.define("mi-section", SectionFood);
  