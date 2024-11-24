import React from "react";
import FormikForm from "./components/FormikForm"; // Import the FormikForm component
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <h1>User Registration with Formik</h1>
      </header>
      <main>
        {/* Render the FormikForm component */}
        <FormikForm />
      </main>
    </div>
  );
}

export default App;
