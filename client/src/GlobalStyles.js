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
    background-color: var(--primarycolor);
    color: var(--lightgrey);
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    line-height: 1.5;
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
  align-items: left;
  border-radius: 0 5px 5px 0;
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.2);
  display: grid;
  grid-column-gap: 0px;
  grid-template-columns: 2fr 3fr 0.5fr;
  grid-template-rows: 1fr;
  margin-bottom: 5px;
  margin-left: 0px;
  padding: 5px 5px 5px 0;
  width: 80vw;
  
}
.card_arrow{
  cursor: pointer;
  align-items: center;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  justify-self: flex-end;
  span {
    height: 1rem;
    margin-right: 10px;
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
    height: 0;
    overflow: hidden;
    padding-bottom: 56.25%;
    position: relative;
  }
  .video-responsive iframe {
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
  .mobileOnlyNotice {
    display: none;
  }
  @media only screen and (min-width: 420px) {
  .discoverBtn {
    display: none;
  }
  .mobileOnlyNotice {
    color: var(--darkgrey);
    display: flex;
  }
}

`
