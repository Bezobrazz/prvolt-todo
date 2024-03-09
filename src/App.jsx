import Input from "./components/Input";
import List from "./components/List";

function App() {
  return (
    <>
      <div className="h-screen p-10 flex items-center flex-col">
        <Input />
        <h1 className="text-center text-xl font-bold mb-3 text-gray-500">
          This is you ToDo list
        </h1>
        <List />
      </div>
    </>
  );
}

export default App;
