import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Montserrat:300,600&display=swap');

    *, *::before, *::after {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        padding: 0 !important;
        margin: 0 !important;

    }

    html {
        font-size: 62.5%;
        
    }

    body {
        font-size: 1.6rem;
        font-family: "Montserrat", sans-serif;
        background-color:black;
        color:white;
        @media screen and (max-width:768px) {
             overflow:hidden !important;   
        }

    
  }
    
`;


export default GlobalStyle