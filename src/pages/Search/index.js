import { Link } from "react-router-dom";

function Search() {
  return (
    <div>
      <Link to="/github/juanigallo">Ir a JuaniGallo</Link>
      <br />
      <Link to="/github/course-it">Ir a CourseIt</Link>
    </div>
  );
}

export default Search;
