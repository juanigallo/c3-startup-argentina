import { Link } from "react-router-dom";

function Startup(props) {
  const { data } = props;

  return (
    <Link to={`/startup/${data.name}`}>
      <div>
        <p>Nombre: {data.name}</p>
        <p>Descripcion: {data.description}</p>
      </div>
    </Link>
  );
}

export default Startup;
