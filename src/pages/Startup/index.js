import { useParams } from "react-router-dom";
import data from "../../data/startups.json";

function Startup() {
  const { name } = useParams();

  console.log(data, name);
  return (
    <div>
      {data.map((a, key) => {
        return (
          <div key={key}>
            {a.name.toLowerCase() == name.toLowerCase() && (
              <>
                <h2>Nombre: {a.name}</h2>
                <h3>Descripcion: {a.description}</h3>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Startup;
