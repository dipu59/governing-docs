import Hero from "./components/home/hero";
import Partners from "./components/home/partners";
import ProblemSolution from "./components/home/problem-solution";
import Reviews from "./components/home/review";
import Simplify from "./components/home/simplify";
import Footer from "./components/shared/footer";
import Navber from "./components/shared/navber";

function App() {
  return (
    <>
      <main className="max-w-[1440px] min-w-[375px] md:px-0 px-4 bg-[url(/hero-bg.svg)] bg-no-repeat object-cover bg-left-top  mx-auto  font-default">
        <div className="">
          <Navber />
          <Hero />
          <ProblemSolution />
          <Reviews />
          <Partners />
          {/* <Faq/> */}
          <Simplify />
          <Footer />
        </div>
      </main>
    </>
  );
}

export default App;
