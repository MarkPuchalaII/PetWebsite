class Adoption extends HTMLElement {
    constructor() {
        super()
    }
  
    connectedCallback() {
        this.innerHTML = `
            <style>
                #adoptionContainer {
                    display: flex;
                    flex: 2 1 100px;
                    gap: 7rem;
                    justify-content: center;
                }
                
                #consultInfo {
                    flex: 2;
                }
                
                #consultButton {
                    flex: 1;
                    border: none;
                    border-radius: 1rem;
                    text-decoration: none;
                    
                    font-size: 2rem;
                    background: var(--darkBlue);
                    color: white;
                    
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    text-align: center;
                    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
                    font-weight: bold;
                }
            </style>
            <div id='adoptionContainer'>
                <div id='consultInfo'>
                    <h2>We are happy to help you navigate the adoption process!</h2>
                    <div>
                        We will guide you through each step in the process from determining which type of pet is best suited for your family and home environment, to completing the necessary paperwork, to bringing your new loved one home. 
                        Please fill out our contact form to request a consultation. We will contact you within 48 hours to schedule a consultation. All fields are required.
                    </div>
                </div>
                <a id='consultButton' href='resources.html'>Consult a Pexpert!</a>
            </div>
        `
    }
  }
  
customElements.define('adoption-component', Adoption)