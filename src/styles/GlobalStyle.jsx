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




  * {
    box-sizing: border-box;
  }


  body {
    font-size: 24px;
    font-family: 'Dongle_R';
    color: white;
    overflow-x: hidden;  
    background-color: rgba(0, 0, 0, 0.356);
  }

  ::-webkit-scrollbar {
  width: 0.5rem;
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
