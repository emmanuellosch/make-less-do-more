import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
}

h1 {
  color: #111; 
  font-family: 'Open Sans Condensed', sans-serif; 
  font-size: 50px; 
  font-weight: 700; 
  line-height: 64px; 
  margin: 0 0 0; 
  padding: 20px 30px; 
  text-align: center; 
  text-transform: uppercase;
}

.date { 
  color: #111; 
  display: block; 
  font-family: 'Open Sans', sans-serif; 
  font-size: 16px; 
  position: relative; 
  text-align: center; 
  z-index: 1; }

.date:before { 
  border-top: 1px solid #111; 
  content: ""; 
  position: absolute; 
  top: 12px; 
  left: 0; 
  width: 100%; 
  z-index: -1; }

.waste { 
  color: #111; 
  display: block; 
  font-family: 'Open Sans', sans-serif; 
  font-size: 16px; 
  padding-bottom: 38px; 
  position: relative; 
  text-align: center; 
  z-index: 1; }

.waste:before { 
  border-top: 1px solid #111; 
  content: ""; 
  position: absolute; 
  top: 12px; 
  left: 0; 
  width: 100%; 
  z-index: -1; }

.date_span, 
.waste_span { 
  background: #fdfdfd; 
  padding: 0 10px; 
  text-transform: uppercase; 
}

.line { 
  border-top: 1px solid #111; 
  display: block; 
  margin-top: 60px; 
  padding-top: 50px; 
  position: relative; }

  .kitchen-wrapper {
  max-width: 500px;
  margin-bottom: 50px;
  padding: 40px 25px;
  background-color: whitesmoke;
  font-family: Arial;
  font-size: 16px;
  line-height: 1.5rem;
  letter-spacing: 1px;

  

}

  .bathroom-wrapper {
  max-width: 500px;
  margin-bottom: 50px;
  padding: 40px 25px;
  background-color: whitesmoke;
  font-family: Arial;
  font-size: 16px;
  line-height: 1.5rem;
  letter-spacing: 1px;
}

.livingroom-wrapper {
  max-width: 500px;
  margin-bottom: 50px;
  padding: 40px 25px;
  background-color: whitesmoke;
  font-family: Arial;
  font-size: 16px;
  line-height: 1.5rem;
  letter-spacing: 1px;
}
.sleepingroom-wrapper {
  max-width: 500px;
  margin-bottom: 50px;
  padding: 40px 25px;
  background-color: whitesmoke;
  font-family: Arial;
  font-size: 16px;
  line-height: 1.5rem;
  letter-spacing: 1px;
}

.kidsroom-wrapper {
  max-width: 500px;
  margin-bottom: 50px;
  padding: 40px 25px;
  background-color: whitesmoke;
  font-family: Arial;
  font-size: 16px;
  line-height: 1.5rem;
  letter-spacing: 1px;
}

.homemade-wrapper {
  max-width: 500px;
  margin-bottom: 50px;
  padding: 40px 25px;
  
  line-height: 1.5rem;
  letter-spacing: 1px;

  background: #faf7f2;
    box-sizing: border-box;
    font-family: "Lato", sans-serif;
    font-size: 16px;
    font-weight: 400;
    

}

.favorites-wrapper {
  max-width: 500px;
  margin-bottom: 50px;
  padding: 40px 25px;
  line-height: 1.5rem;
  letter-spacing: 1px;
  letter-spacing: 1px;
  background: #faf7f2;
    box-sizing: border-box;
    font-family: "Lato", sans-serif;
    font-size: 16px;
    font-weight: 400;
}

.profil-wrapper {
  max-width: 500px;
  margin-bottom: 50px;
  padding: 40px 25px;

  letter-spacing: 1px;
  background: #faf7f2;
    box-sizing: border-box;
    font-family: "Lato", sans-serif;
    font-size: 16px;
    font-weight: 400;
}
 



`;
