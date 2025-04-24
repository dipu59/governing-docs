import Hero from "./components/home/hero";
import Footer from "./components/shared/footer";
import Navber from "./components/shared/navber";

function App() {
  return (
    <main className="max-w-[1440px] min-w-[375px] px-4 bg-[url(/hero-bg.svg)] bg-no-repeat object-cover bg-left-top  mx-auto  font-default">
      <div className="">
        <Navber />
        <Hero/>
        {/* <Footer/> */}
      </div>
    </main>
  );
}

export default App;
