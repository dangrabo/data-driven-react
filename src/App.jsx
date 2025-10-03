import Header from "./components/Header.jsx";
import Entry from "./components/Entry.jsx";
import data from "./data.js";

function App() {

  const entries = data.map(el => <Entry key={el.id} {...el}/>)

  return (
    <>
      <Header />
      <main className="container">
        {entries}
      </main>
    </>
  );
}

export default App;
