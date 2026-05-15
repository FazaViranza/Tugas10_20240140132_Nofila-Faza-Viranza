function Card({ item }) {
  return (
    <div className="card">
      <img src={item.image} alt={item.title} />

      <h2>{item.title}</h2>

      <p>{item.desc}</p>
    </div>
  );
}

export default Card;