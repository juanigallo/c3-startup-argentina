import Navbar from "../../components/Navbar";
import List from "../../components/List";

import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");

  function handleCallback(value) {
    setSearch(value);
  }

  return (
    <>
      <Navbar onChange={handleCallback} />
      <List filter={search} />
    </>
  );
}

export default App;
