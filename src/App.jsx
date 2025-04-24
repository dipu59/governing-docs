import Footer from "./components/shared/footer";
import Navber from "./components/shared/navber";

function App() {
  return (
    <main className="max-w-[1440px] min-w-[375px] px-4  mx-auto h-screen">
      <div className="">
        <Navber />
        <Footer/>
      </div>
    </main>
  );
}

export default App;
