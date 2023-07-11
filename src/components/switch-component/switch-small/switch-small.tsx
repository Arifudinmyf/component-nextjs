import * as React from "react";
import styles from './switch-small.module.scss'

type SwitchSmallProps = {
  //
};

const SwitchSmall: React.FC<any> = () => {
  return <div>
    <div className={styles.content_header}>
      <label htmlFor="toggle-switch" className={styles.content_label}>
        <input type="checkbox" id="toggle-switch" className={styles.switch_button} />
      </label>
    </div>
  </div>;
};

export default SwitchSmall;
