import "./App.css";
import data1 from "./db1.json";
import data2 from "./db2.json";
import Form from "./Form";

function App() {
  return (
    <div className="App">
      <section className="form-parent form-1">
        <h4>Form-1 for drug1.json</h4>
        <Form schema={data1} />
      </section>
      <section className="form-parent form-2">
        <h4>Form-2 for drug2.json</h4>
        <Form schema={data2} />
      </section>
    </div>
  );
}

export default App;
