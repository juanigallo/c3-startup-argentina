import Autocomplete from "../Autocomplete";

function Navbar(props) {
  function handleCallback(value) {
    props.onChange(value);
  }

  return (
    <nav>
      <h1>Startup argentina</h1>
      <Autocomplete onChange={handleCallback} />
    </nav>
  );
}

export default Navbar;
