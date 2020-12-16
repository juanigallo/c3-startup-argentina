function Startup(props) {
  const { data } = props;

  return (
    <div>
      <p>Nombre: {data.name}</p>
      <p>Descripcion: {data.description}</p>
    </div>
  );
}

export default Startup;
