import starFilled from "../assets/svg/Star_fill.svg";
import star from "../assets/svg/Star.svg";

export default function Card({ product }) {
  const { available, id, image, name, popular, price, rating, votes } = product;

  return (
    <article key={id} id={id} className="card">
      <div className="card-view">
        <img src={image} alt={`${name} image`} />
        {popular && <span>Popular</span>}
        </div>
      <div className="card-info flex">
        <div>
          <h3 className="title">{name}</h3>
          <div className="rating">
            <img
              src={rating ? starFilled : star}
              alt={rating ? "Filled yellow star" : "Not filled star"}
            />
            {!rating && <p>No ratings</p>}
            {rating && (
              <p>
                <span>{rating}</span>({votes} votes)
              </p>
            )}
          </div>
        </div>
        <div>
          <div className="price">{price}</div>
          {!available && <span className="status">Sold out</span>}
        </div>
      </div>
    </article>
  );
}
