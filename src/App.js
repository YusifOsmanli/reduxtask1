import AddForm from "./components/AddForm";
import Cards from "./components/Cards";
import SearchForm from "./components/SearchForm";
import Footer from "./layout/Footer";

function App() {
  return (
    <div className="App">
      <AddForm/>
      <SearchForm/>
      <Cards/>
      <Footer/>
    </div>
  );
}

export default App;
