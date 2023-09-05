export default function User(props) {
  return (
    <div className="card">
      <p>Hi, my name is {props.name}! </p>
      <img class="img" src={props.src}></img>
      <p>Age : {props.age}</p>
      <p>Favorite food : {props.food}</p>
    </div>
  );
}