import * as React from "react";
import styles from './switch-medium.module.scss'

type SwitchMediumProps = {
  //
};

const SwitchMedium: React.FC<any> = () => {
  return <>
    <div className={styles.content_header}>
      <label htmlFor="toggle-switch" className={styles.content_label}>
        <input type="checkbox" id="toggle-switch" className={styles.switch_button} />
      </label>
    </div>
  </>;
};

export default SwitchMedium;
