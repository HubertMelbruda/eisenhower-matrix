import Button from "./Button"

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
        <Button text={"1.Do First"} className={"btnDoFirst"} name={"doFirst"} onClick={handleClick}/>
        <Button text={"2. Schedule"} className={"btnSchedule"} name={"schedule"} onClick={handleClick}/>
        <Button text={"3. Delegate"} className={"btnDelegate"} name={"delegate"} onClick={handleClick}/>
        <Button text={"4. Don't do"} className={"btnDontDo"} name={"dontDo"} onClick={handleClick}/>
      </div>
    </>
  );
};

export default InputForm;
