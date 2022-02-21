const InputForm = (props) => {
  const handleTextInput = (event) => {
    props.handleTextInput(event.target.value);
  };

  const handleDate = (event) => {
    props.handleDate(event.target.value);
  };

  const handleClick = (event) => {
    props.handleClick(event.target.name);
  };

  return (
    <>
      <div className="form">
        <label htmlFor="input">
          Create new task:
          <input
            type="text"
            id="text"
            name="text"
            placeholder="Create new task..."
            value={props.state.text}
            onChange={handleTextInput}
          />
          <p className="error">{props.state.errorMessage}</p>
        </label>

        <label>
          The end of task:
          <input
            type="date"
            id="date"
            name="date"
            value={props.minDate}
            min={props.minDate}
            onChange={handleDate}
          />
        </label>
      </div>
      <div className="buttonsContainer">
        <button className="btnOne" name="doFirst" onClick={handleClick}>
          1.Do First
        </button>
        <button className="btnTwo" name="schedule" onClick={handleClick}>
          2. Schedule
        </button>
        <button className="btnThree" name="delegate" onClick={handleClick}>
          3. Delegate
        </button>
        <button className="btnFour" name="dontDo" onClick={handleClick}>
          4. Don't do
        </button>
      </div>
    </>
  );
};

export default InputForm;
