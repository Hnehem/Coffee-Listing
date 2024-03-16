import Card from "../components/Card";

export default function Content({content}) {
  return (
    <section id="cards">
      {content.map(info => <Card product={info} />)}
    </section>
  );
}
