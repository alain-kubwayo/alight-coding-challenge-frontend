import Header from "../home/Header";
import Main from "../home/Main";
import Footer from "../home/Footer";

const Home = () => {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <Main />
      <Footer />
    </main>
  );
};
export default Home;
