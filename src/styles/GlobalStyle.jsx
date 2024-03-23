/**
 * @copyright Copyright © 2018-2019 Corretto, Inc. All rights reserved.
 */

import { normalize } from 'polished';
import { createGlobalStyle } from 'styled-components';

const Component = createGlobalStyle`

  ${normalize()};

  @font-face {
  font-family: 'Dongle_L';
  src: url('../../public//font//Dongle-Light.ttf');
  } 

  @font-face {
    font-family: 'Dongle_R';
    src: url('../../public//font//Dongle-Regular.ttf');
  }

  @font-face {
    font-family: 'Dongle_B';
    src: url('../../public//font//Dongle-Bold.ttf');
  }

  .dongle-light {
  font-family: "Dongle", sans-serif;
  font-weight: 300;
  font-style: normal;
  }

  .dongle-regular {
    font-family: "Dongle", sans-serif;
    font-weight: 400;
    font-style: normal;
  }

  .dongle-bold {
    font-family: "Dongle", sans-serif;
    font-weight: 700;
    font-style: normal;
  }


  * {
    box-sizing: border-box;
    padding: 0px;
    margin: 0px;
  }

  h1, h2, h3, h4, h5, h6, p {    
    font-size: 24px;
    font-family: "Dongle", sans-serif !important;  
    font-style: normal;

  }


  body {
    color: white;
    overflow-x: hidden;  
    background-color: rgba(0, 0, 0, 0.719);
  }

  ::-webkit-scrollbar {
  width: 0.8rem;
  background-color: black;
  }

  ::-webkit-scrollbar-thumb {
    height: 5%;
    background: rgb(13, 13, 14);
    border-radius: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #f2f2f270;
  }


  [data-rsbs-overlay] {
    max-width: 480px !important;
    margin: 0 auto !important;
  }
 `;

export default Component;
