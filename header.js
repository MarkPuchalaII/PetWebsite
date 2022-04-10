

class Header extends HTMLElement {
    constructor() {
      super()
  
      const shadowRoot = this.attachShadow({ mode: 'closed' });
      shadowRoot.innerHTML = `
      <style>
        * {
        font-family: arial;
        --darkBlue: #003B6D;
        --lightBlue: #6699CC;
    
        --darkGrey: #676767;
        --lightGrey: #BDBDBD;
        font-weight: bold;
        }

        #header {
          height: 5rem;
          background: white;
          padding: 0.5rem;
        }

        .headerImage {
          height: 100%;
        }

        #navbar-nav {
          list-style: none;
          padding: 0;
          margin: 0;

          width: 100%;
          height: 3rem;
          
          display: flex;
          place-items: center;
        }

        .nav-item {
          height: 100%;
          display: flex;
          place-items: center;

          text-transform: uppercase;
        }

        .nav-item:last-child {
          margin-left: auto;
          padding-right: 15px;
        }
        
        .nav-item:not(:last-Child):hover {
          text-decoration: none;
          background: var(--lightGrey);
        }
        
        a {
          height: 100%;
          width: 100%;
          padding-left: 1rem;
          padding-right: 1rem;
          
          display: flex;
          flex-direction: row;
          place-items: center;
          
          color: white;
          text-decoration: none;
        }
        
        a:hover {
          color: black;
        }

        #petsHeader {
          display: block;
        }

        #dropdown { 
          display: none;
          position: absolute;
          min-width: 6rem;
          box-shadow: 0px 8px 8px 0px rgba(0,0,0,0.2);
        }

        #dropdown a {
          padding-left: 1rem;
          padding-top: 0.5rem;
          padding-bottom: 0.5rem;
          background: var(--lightGrey);
          color: black;
          display: block;
        }

        #dropdown a:hover {
          background-color: var(--darkBlue);
          color: white;
        }
        
        #petsHeader:hover #dropdown {
          display: block;
        }

        #searchBox {
          position: relative;
          width: 10rem;
          height: 2rem;
          display: flex;
          place-items: center;
        }
        
        input {
          border: 0;
          color: #8b7d77;
          width: 100%;
          height: 100%;
          padding: 1rem;
          font-size: 18px;
          border-radius: 1rem;
          box-sizing: border-box;
          font-weight: bold;
        }

        svg {
          position: absolute;
          right: -1px;
          cursor: pointer;

          border-radius: 1rem;
          background: var(--lightBlue);
        }

        svg:hover {
          background: var(--darkBlue);
        }

      </style>

      <div id='header'>
        <img class='headerImage' src='images/petshoplogo.png' alt='Paradigm Pet Professionals logo'>
        <img class='headerImage' src='images/PPP_logo.png' alt='Paradigm Pet Professionals identifier'>
      </div>
      <ul id='navbar-nav'>
        <li class='nav-item'><a href='index.html'>home</a></li>

        <li class='nav-item' id='petsHeader'>
          <a href='pets.html'>Pets</a>
          <div id='dropdown'>
            <a href='cats.html'>Cats</a>
            <a href='dogs.html'>Dogs</a>
            <a href='fish.html'>Fish</a>
          </div>
        </li>

        <li class='nav-item'><a href='resources.html'>resources</a></li>
        <li class='nav-item'><a href='about.html'>about</a></li>
        
        <li class='nav-item'>
          <div id='searchBox'>
            <input type='search' placeholder='search'>
            <svg viewbox='-10 -10 45 45' width='2rem' height='2rem' fill='white'>
              <path d="M16.325 14.899l5.38 5.38a1.008 1.008 0 0 1-1.427 1.426l-5.38-5.38a8 8 0 1 1 1.426-1.426zM10 16a6 6 0 1 0 0-12a6 6 0 0 0 0 12z">
            </svg>
          </div>
        </li>
      </ul>
      `
    }
  }
  
  customElements.define('header-component', Header)

 