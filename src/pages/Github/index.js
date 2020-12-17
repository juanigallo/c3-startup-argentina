import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Github() {
  const [githubData, setGithubData] = useState({});
  const { user } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const data = await fetch(`https://api.github.com/users/${user}`);
    const json = await data.json();

    setGithubData(json);
  }

  return (
    <>
      <p>El nombre del usuario que estoy buscando es: {githubData.name}</p>
      <p>La bio del usuario que estoy buscando es: {githubData.bio}</p>
    </>
  );
}

export default Github;
