import Card from "../UI/Card";
import styles from "../Users/AddUser.module.css";
import Button from "../UI/Button";
import { useState } from "react";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [entedUsername, setEnterdUsername] = useState("");
  const [entedAge, setEnterdAge] = useState("");
  const [error, setError] = useState();
  const AddUserHandler = (event) => {
    event.preventDefault();
    if (entedUsername.trim().length === 0 || entedAge.trim().length === 0) {
      setError({
        title: "Invaild Input",
        message: "please enter valide name and age(non-empty values).",
      });
      return;
    }
    if (+entedAge.trim() < 1) {
      setError({
        title: "Invaild Age",
        message: "please enter valide age(>0)",
      });
      return;
    }
    props.onAddUser(entedUsername, entedAge);
    setEnterdUsername("");
    setEnterdAge("");
  };

  const handleEnterdUsername = (event) => {
    setEnterdUsername(event.target.value);
  };

  const handleEnterdAge = (event) => {
    setEnterdAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
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
          <input
            id="name"
            type="text"
            value={entedUsername}
            onChange={handleEnterdUsername}
          />
          <label htmlFor="age">Age(In Years)</label>
          <input
            id="age"
            type="number"
            value={entedAge}
            onChange={handleEnterdAge}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};
export default AddUser;
