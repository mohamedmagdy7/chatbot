import "./TriggerButton.scss";

export const TriggerButton = ({ toggleShow }) => {
  return (
    <button className="chatbot-trigger" onClick={toggleShow}></button>
  );
};
export default TriggerButton;
