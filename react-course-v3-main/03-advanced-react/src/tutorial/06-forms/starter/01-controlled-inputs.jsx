const ControlledInputs = () => {
  return (
    <form className="form">
      <h4>Controlled Input</h4>
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input type="name" id="name" className="form-input" />
      </div>
      <div className="form-row">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input type="email" id="email" className="form-input" />
      </div>
      <button type="submit" className="btn">Submit</button>
    </form>
  );
};
export default ControlledInputs;
