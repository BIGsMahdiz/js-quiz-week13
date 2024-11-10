import tabInformation from "@/constant/tab";

import styles from "@/styles/Buttons.module.css";

function Buttons({ step, setStep }) {
  console.log(step);
  const clickHandler = () => {};
  return (
    <div className={styles.buttons}>
      {tabInformation.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setStep(tab.id)}
          className={tab.id === step ? styles.active : null}
        >
          {tab.name}
        </button>
      ))}
    </div>
  );
}

export default Buttons;
