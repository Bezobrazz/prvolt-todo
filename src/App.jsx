import Input from "./components/Input";
import List from "./components/List";
import Filter from "./components/Filter.jsx";
import Counter from "./components/Counter.jsx";

function App() {
  return (
    <>
      <div className="h-screen p-10 flex items-center flex-col">
        <Input />
        <h1 className="text-center text-xl font-bold mb-3 text-gray-500">
          This is you ToDo list
        </h1>
        <div className="w-full flex-wrap flex justify-start items-center gap-2 mb-2">
          <Filter />
          <div className="w-full flex gap-2 flex-wrap justify-center">
            <Counter />
          </div>
        </div>
        <List />
      </div>
    </>
  );
}

export default App;
