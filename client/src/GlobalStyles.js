import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`



body {
  display: flex;
 
  padding-top: 50px;
}

.app {
  width: 100vw;
}

.frontpage {
  color: #f77754;
}

.home-wrapper {
  max-width: 500px;
  margin: 50px auto;
  padding: 40px 25px;
  background-color: whitesmoke;
  font-family: Arial;
  font-size: 16px;
  line-height: 1.5rem;
  letter-spacing: 1px;
}


.menu {
  display: flex;
  justify-content: center;
  width: 100vw;
  position: fixed;
  bottom: 0;
  
}


.modal-wrapper {
  position: fixed;
  left: 0;
  top: 0;
  width: calc(100% - 40px);
  height: calc(100vh - 100px);
  background-color: rgba(0, 0, 0, 0.75);
  display: flex;
  justify-content: center;
  padding: 50px 20px;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
}

.no-modal-wrapper {
  max-width: 500px;
  font-size: 16px;
  line-height: 30px;
  background-color: #a4d1c8;
  padding: 20px;
  margin-top: 50px;
  border-radius: 10px;
}

.modal {
  width: 100%;
  height: fit-content;
  max-width: 300px;
  background-color: #a4d1c8;
  position: relative;
  border: 5px;
  box-shadow: 2px 4px 20px 0px rgba(0, 0, 0, 0.75);
  border-radius: 10px;
  padding: 20px;
}



.link {
  background-color: #537d91;
  color: white;
  font-size: 20px;
  font-family: Arial;
  padding: 10px;
  border-radius: 2px;
  margin-right: 10px;
}

 .rooms {
  display: flex;
  flex-direction: column;
  height: 80vh;
  justify-content: space-around;
  padding: 1rem; 
}

`;
