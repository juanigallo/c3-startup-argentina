function Autocomplete(props) {
  function handleChange(e) {
    props.onChange(e.target.value);
  }

  return (
    <input onChange={handleChange} type="text" placeholder="Filtrar startups" />
  );
}

export default Autocomplete;
