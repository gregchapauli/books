import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import AddBooks from "./containers/AddBooks";

function App() {
  return (
    <div className="App">
      <p>
        <NavBar />
        <AddBooks />
        <Footer />
      </p>
    </div>
  );
}

export default App;
