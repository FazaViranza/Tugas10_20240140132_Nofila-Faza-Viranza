import { useState } from "react";
import products from "../data/products";

function Catalog({ setIsLogin }) {

  const [selectedCar, setSelectedCar] =
    useState(products[0]);

  const [category, setCategory] =
    useState("Supercar");

  const [date, setDate] =
    useState("");

  return (
    <div className="catalog-page">

      {/* SIDEBAR */}

      <div className="sidebar">

        <div>

          <h2 className="logo">Ferrari</h2>

          <p className="menu-title">
            SPORTS CARS
          </p>

          <div className="car-list">

            {products.map((car) => (
              <div
                key={car.id}
                className={`car-item ${
                  selectedCar.id === car.id
                    ? "active"
                    : ""
                }`}
                onClick={() => setSelectedCar(car)}
              >
                {car.name}
              </div>
            ))}

          </div>

          {/* SELECT */}

          <div className="form-section">

            <label>Category</label>

            <select
              value={category}
              onChange={(e) =>
                setCategory(e.target.value)
              }
            >
              <option>Supercar</option>
              <option>Hypercar</option>
              <option>GT Racing</option>
              <option>Luxury</option>
            </select>

          </div>

          {/* DATE */}

          <div className="form-section">

            <label>Test Drive Date</label>

            <input
              type="date"
              value={date}
              onChange={(e) =>
                setDate(e.target.value)
              }
            />

          </div>

        </div>

        <button
          className="logout-btn"
          onClick={() => setIsLogin(false)}
        >
          Logout
        </button>

      </div>

      {/* HERO */}

      <div className="hero-section">

        <img
          src={selectedCar.image}
          alt={selectedCar.name}
        />

        <div className="hero-overlay"></div>

        <div className="hero-content">

          <h1>{selectedCar.name}</h1>

          <p>{selectedCar.desc}</p>

          {/* DISPLAY SELECT */}

          <div className="info-box">

            <h3>Selected Category</h3>
            <p>{category}</p>

          </div>

          {/* DISPLAY DATE */}

          <div className="info-box">

            <h3>Test Drive Date</h3>
            <p>
              {date || "No date selected"}
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Catalog;