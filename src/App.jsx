import Input from "./components/Input";
import List from "./components/List";

function App() {
  return (
    <>
      <div className="p-10 flex items-center flex-col">
        <Input />
        <h2 className="text-center mb-3">This is you ToDo list</h2>
        <List />
      </div>
    </>
  );
}

export default App;
