import "./user.css";
function User(props) {
  console.log(props);

  const { nume, varsta, gender, address } = props;

  aux();
  return (
    <div className="User">
      <h2>Nume: {nume}</h2>
      <p>Varsta: {varsta - 100}</p>
      <p>Gender: {gender}</p>
      <p>Adresa: {address}</p>
    </div>
  );
}

function aux() {
  console.log("Other things");
}

export default User;
