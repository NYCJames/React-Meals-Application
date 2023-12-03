import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Search from "./components/Search";
import Favorites from "./components/Favorites";
import Meals from "./components/Meals";
import Modal from "./components/Modal";
import { useGlobalContext } from "./Context";

function App() {
  // const [count, setCount] = useState(0);

  const { showModal, favorites } = useGlobalContext();
  // console.log(favorites.length);

  return (
    <>
      <main>
        <Search></Search>
        {favorites.length > 0 && <Favorites></Favorites>}
        <Meals></Meals>
        {showModal && <Modal></Modal>}
      </main>
    </>
  );
}

export default App;
