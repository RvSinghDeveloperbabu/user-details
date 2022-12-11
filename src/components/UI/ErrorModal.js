import Card from "./Card";
import Button from "./Button";
import classes from "../UI/ErrorModal.module.css";

const ErrorModal = (props) => {
  const handleOkayButton = () => {
    props.clickOkay();
  };
  return (
    <div>
      <div className={classes.backdrop}></div>
      <Card className={classes.modal}>
        <header className={classes.header}>{props.title}</header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={handleOkayButton}> Okay </Button>
        </footer>
      </Card>
    </div>
  );
};
export default ErrorModal;
