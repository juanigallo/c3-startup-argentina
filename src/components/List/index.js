import Startup from "../Startup";

function List(props) {
  const startups = [
    {
      name: "CourseIt",
      description: "Esto es CourseIt"
    },
    {
      name: "Endava",
      description: "This is endava"
    }
  ];

  return (
    <section>
      {startups
        .filter((startup) =>
          startup.name.toLowerCase().includes(props.filter.toLowerCase())
        )
        .map((startup, key) => {
          return <Startup data={startup} key={key} />;
        })}
    </section>
  );
}

export default List;
