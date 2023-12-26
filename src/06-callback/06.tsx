import { ChangeEvent, MouseEvent } from "react";

export const User = () => {
  const onClickDeleteHandler = (event: MouseEvent<HTMLButtonElement>) =>
    alert(event.currentTarget.name);

  const onChangeTextareaHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    console.log(e.currentTarget.value);
    console.log(e.currentTarget.className);
  };

  const onBlurHandler = () => {
    console.log("Focus lost!");
  };

  return (
    <div>
      Daniil
      <button name={"delete"} onClick={onClickDeleteHandler}>
        Delete
      </button>
      <button name={"save"} onClick={onClickDeleteHandler}>
        Save
      </button>
      <textarea
        onBlur={onBlurHandler}
        className="textarea"
        onChange={onChangeTextareaHandler}
      >
        Chototam
      </textarea>
    </div>
  );
};
