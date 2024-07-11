import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

const App = () => {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <Main />
      <Footer />
    </main>
  );
};
export default App;
