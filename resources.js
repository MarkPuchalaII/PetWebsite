class Resource extends HTMLElement {
    constructor() {
        super()
    }
  
    connectedCallback() {
        this.innerHTML = `
            <style>
                #resourceNav{
                    list-style: none;
                    padding: 0;
                    margin-top: 1rem;
        
                    width: 100%;
                    
                    display: grid;
                    place-items: center;
                    gap: 1rem;
                    grid-template-columns: repeat(auto-fill, minmax(64px, 1fr));
                }
                
                .resourceNavItem {
                    height: 4rem;
                    border-radius: 0.5rem;
                    width: 100%;
                }

                img {
                    height: 100%;
                }

                #shelter {
                    background: #119b9d;
                    grid-column: span 2 / auto;
                }

                #ASPCA, #fish {
                    grid-column: span 3 / auto;
                }

                #snakes {
                    grid-column: span 4 / auto;
                }

                #birds {
                    grid-column: span 1 / auto;
                }


            </style>
            <h1>Looking for your new best friend?</h1>

            <p>
                The following organizations can help you find and adopt the perfect companion:
            </p>
            
            <div id='resourceNav'>
                <a class='resourceNavItem' id='shelter' href='https://theshelterpetproject.org/'>
                    <img src='images/shelterPetProject.png' title='ASPCA' alt='Shelter Pet Project logo'>
                </a>
                <a class='resourceNavItem' id='ASPCA' href='https://www.aspca.org/'>
                    <img src='images/ASPCA.png' title='ASPCA' alt='ASPCA logo'>
                </a>
                <a class='resourceNavItem' id='snakes' href='https://savethesnakes.org/snakerescuecall/'>
                    <img src='images/saveTheSnakes.webp' title='Snake Rescue' alt='Save the Snakes logo'>
                </a>
                <a class='resourceNavItem' id='fish' href='https://www.sterlingshelter.org/humane-society/koi-fish-rescue/'>
                    <img src='images/sterlingShelter.png' title='Fish Rescue' alt='Sterling Shelter logo'>
                </a>
                <a class='resourceNavItem' id='birds' href='https://ftlob.rescuegroups.org/'>
                    <img src='images/forTheLoveOfBirds.jpg' title='Bird Rescue' alt='For the Love of Birds logo'>
                </a>
            </div>
        `
    }
}
  
customElements.define('resource-component', Resource)