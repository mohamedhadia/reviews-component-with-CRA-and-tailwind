import Reviews from "./Reviews";

function App() {
  return (
    <main className="h-screen bg-blue-200 flex flex-col items-center justify-center ">
      <section className="container flex justify-center mx-auto">
        <div className="title inline-block mx-auto">
          <h2 className=" text-5xl text-black font-bold">our reviews</h2>
          <div className="border-blue-400 w-1/2 border-b-4 mx-auto"></div>
        </div>
      </section>
      <Reviews />
    </main>
  );
}

export default App;
