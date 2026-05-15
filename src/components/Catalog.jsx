import { useState } from "react";
import products from "../data/products";

function Catalog({ setIsLogin }) {
  const [selectedCar, setSelectedCar] = useState(products[0]);

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

        </div>

      </div>

    </div>
  );
}

export default Catalog;