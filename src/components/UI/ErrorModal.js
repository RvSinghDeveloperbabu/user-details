import Card from "./Card";
import Button from "./Button";
import classes from "../UI/ErrorModal.module.css";
import Wraper from "../Helpers/Wraper";
const ErrorModal = (props) => {
  return (
    <Wraper>
      <div className={classes.backdrop} onClick={props.onConfirm}></div>
      <Card className={classes.modal}>
        <header className={classes.header}>{props.title}</header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onConfirm}> Okay </Button>
        </footer>
      </Card>
    </Wraper>
  );
};
export default ErrorModal;
