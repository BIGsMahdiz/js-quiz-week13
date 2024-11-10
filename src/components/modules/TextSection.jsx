import tabInformation from "@/constant/tab";

import styles from "@/styles/TextSection.module.css";

function TextSection({ step, setStep }) {
  const tabIndex = tabInformation[step - 1];
  return (
    <div className={styles.text}>
      <p>{tabIndex.description}</p>
    </div>
  );
}

export default TextSection;
