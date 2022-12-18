import Card from "./Card";
import Button from "./Button";
import classes from "../UI/ErrorModal.module.css";
import React from "react";
import ReactDOM from "react-dom";
const ErrorModal = (props) => {
  const OverLay = (props) => {
    return <div className={classes.backdrop} onClick={props.onConfirm}></div>;
  };

  const ErrorModal = (props) => {
    return (
      <Card className={classes.modal}>
        <header className={classes.header}>{props.title}</header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onConfirm}> Okay </Button>
        </footer>
      </Card>
    );
  };

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <OverLay onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ErrorModal
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};
export default ErrorModal;
