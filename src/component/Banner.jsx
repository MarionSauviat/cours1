export default function Banner() {
  const title = 'Panier';
  const Monstera = 8;
  const Lierre = 10;
  const Fleur = 15;
  return (
    <>
      <h1>{title.toUpperCase()}</h1>
      <ul>
        <li>Monstera : {Monstera} €</li>
        <li>Lierre : {Lierre} €</li>
        <li>Fleur : {Fleur} €</li>
      </ul>
      <p>Total : {Fleur + Lierre + Monstera} €</p>
    </>
  );
}