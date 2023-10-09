import Articles from "./components/Articles/Articles";
import Header from "./components/Header";
import { useEffect, useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  return (
    <>
      <Header setSearchHandler={setSearch} />
      <Articles search={search} />
    </>
  );
}

export default App;
