import "./footballClub.css";
function FootballClub(props) {
  const { name, country } = props;
  return (
    <div class="footballClub">
      <h2>Name: {name}</h2>
      <p>Country: {country}</p>
    </div>
  );
}

export default FootballClub;
