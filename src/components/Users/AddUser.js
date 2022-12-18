import Card from "../UI/Card";
import styles from "../Users/AddUser.module.css";
import Button from "../UI/Button";
import { useState, useRef } from "react";
import ErrorModal from "../UI/ErrorModal";
import Wraper from "../Helpers/Wraper";

const AddUser = (props) => {
  const enteredName = useRef();
  const enteredUserAge = useRef();
  const [error, setError] = useState();
  const AddUserHandler = (event) => {
    const userName = enteredName.current.value;
    const userAge = enteredUserAge.current.value;
    event.preventDefault();
    if (userName.trim().length === 0 || userAge.trim().length === 0) {
      setError({
        title: "Invaild Input",
        message: "please enter valide name and age(non-empty values).",
      });
      return;
    }
    if (+userAge.trim() < 1) {
      setError({
        title: "Invaild Age",
        message: "please enter valide age(>0)",
      });
      return;
    }
    console.log(userName, userAge);
    props.onAddUser(userName, userAge);
    enteredName.current.value = "";
    enteredUserAge.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wraper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={AddUserHandler}>
          <label htmlFor="name">Name</label>
          <input id="name" type="text" ref={enteredName} />
          <label htmlFor="age">Age(In Years)</label>
          <input id="age" type="number" ref={enteredUserAge} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wraper>
  );
};
export default AddUser;
