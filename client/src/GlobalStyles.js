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
 --primarybtnlight: #CAB75B;
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

  h3 {
  font-weight: 500;
  
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

  ul,
  li {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
// --> card
.card {
  display: grid;
  grid-template-columns: 2fr 3fr 0.5fr;
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  width: 80vw;
  border-radius: 0 5px 5px 0;
  margin-left: 0px;
  margin-bottom: 5px;
  padding: 5px 5px 5px 0;
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.2);
  align-items: left;
  
}

.card_arrow{
  cursor: pointer;
  align-items: center;
  justify-self: flex-end;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  span {
    margin-right: 10px;
    height: 1rem;
    width: 1rem;
  }
}

.card_details {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

// --> favIcon : Artist.jsx, Track.jsx
  .favIcons {
    bottom: 6;
    margin-top: 5rem;
    position: fixed;
    right: 0;
    z-index: 80;
  }
  .favLabel {
    position: absolute;
    right: 0;
    z-index: 100;
  }
  .circle {
    background-color: #ff1d1d;
    border-radius: 50%;
    bottom: 2;
    height: 33px;
    margin-bottom: 8px;
    position: absolute;
    right: 0;
    width: 48px;
    z-index: 90;
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
