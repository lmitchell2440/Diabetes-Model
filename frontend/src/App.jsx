import { useState } from "react";
import "./App.css";

function App() {
  // Form Pages
  const [page, setPage] = useState(0);

  // Store answers
  const [formData, setFormData] = useState({
    value1: "",
    value2: "",
  });

  // Update answers from input forms
  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  // Next page
  function nextPage() {
    setPage(page + 1);
  }

  // Previous page
  function previousPage() {
    setPage(page - 1);
  }

  return (
    <div className="app">
      <header className="navbar">
        <h2>Diabetes Predictor</h2>

        <nav>
          <a href="#home">Home</a>
        </nav>
      </header>

      <main id="home" className="main-content">
        <h1>Diabetes Prediction</h1>

        <div className="form-container">

          {/* First Form To Display */}
          {/* Can change form info and info up to to save and then add more forms for whatever needs to be prompted */}
          {page === 0 && (
            <div>
              <h2>Page Title</h2>

              <label>Input 1</label>
              <input
                type="number"
                name="value1"
                value={formData.value1}
                onChange={handleChange}
              />

              <label>Input 2</label>
              <input
                type="number"
                name="value2"
                value={formData.value2}
                onChange={handleChange}
              />

              <button onClick={nextPage}>Next</button>
            </div>
          )}

          
      








        

        </div>
      </main>
    </div>
  );
}

export default App;