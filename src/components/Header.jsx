import Button from "./Button";

export default function Header({filter, onFilterSelect}) {
  return (
    <div id="info">
      <div className="background"></div>
      <h1>Our Collection</h1>
      <p>
        Introducing our Coffee Collection, a selection of unique coffees from
        different roast types and origins, expertly roasted in small batches and
        shipped fresh weekly.
      </p>
      <div className="buttons">
        <Button type="button" isSelected={filter === 'all'} name="all" onClick={onFilterSelect}>
          All Products
        </Button>
        <Button type="button" isSelected={filter === 'available'} name="available" onClick={onFilterSelect}>
          Available Now
        </Button>
      </div>
    </div>
  );
}
