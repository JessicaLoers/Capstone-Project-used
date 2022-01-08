import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  --primary:#063F47;
  --light : #fcfcfc;
}

body {
  font-family: 'Poppins', sans-serif;
  background-color:#e4a1e8;
  color: var(--primary);
}



h2 {
  font-size: 1.3rem;
}

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
`;