import "./App.css";
import Testimonials from "./Components/Testimonial";
import reviews from "./data";

function App() {
  return (
    <div className="bg-gray-300 h-[100vh] w-[100vw] flex justify-center items-center">
      <div className=" flex flex-col justify-center items-center  mx-auto">
        <div className="flex flex-col justify-center items-center gap-1 mb-8">
          <h1 className="font-bold text-3xl">Testimonials</h1>
          <div className="w-[110px] h-1 bg-violet-400"></div>
        </div>
        <Testimonials reviews={reviews} />
      </div>
    </div>
  );
}

export default App;
