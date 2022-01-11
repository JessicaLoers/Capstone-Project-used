import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

:root {

  --primarycolor: #333333;
  --secondarycolor: #F7C4D4;
  
  //--> Greys
  --lightgrey: #F8F8F8;
  --darkgrey: #333333;

  
 //--> btn
 --primarybtn: #FCD637;
 --secondarybtn: #333333;

//--> signals
--primarysignal: #FF1D1D;

  //--> red
 --primaryred: #FF1D1D;
 --secondaryred: #B91313;
 --darkred: #B91313;

   //--> cards
 --cardtrack: #00CE82;
 --cardartist: #5B81EE; 


}

 *,
  *::before,
  *::after {
    box-sizing: border-box;
  }


  body {
    color: var(--lightgrey);
    background-color: var(--primarycolor);
    font-family: 'Poppins', sans-serif;
    line-height: 1.5;
    font-size: 1rem;
  }

h1,
  h2,
  h3 {
    line-height: 1.2;
  }
  
  body,
  h1,
  h2,
  h3,
  p {
    margin: 0;
  }

// --> card
.card {
  display: flex;
  width: 80vw;
  flex-direction: row;
  position: relative;
  border-radius: 0 5px 5px 0;
  margin-left: 0px;
  margin-bottom: 5px;
  padding: 5px;
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.2);
}

// --> YoutubeEmbed

.video-responsive {
    overflow: hidden;
    padding-bottom: 56.25%;
    position: relative;
    height: 0;
  }
  
  .video-responsive iframe {
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    position: absolute;
  }
`
