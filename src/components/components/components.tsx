import SwitchLarge from "@components/switch-component/switch-large";
import SwitchMedium from "@components/switch-component/switch-medium";
import SwitchSmall from "@components/switch-component/switch-small";
import * as React from "react";
import styles from './components.module.scss'

type ComponentsProps = {
  //
};

const Components: React.FC<any> = () => {
  return <>
    <div className={styles.layout_component}>
      <SwitchSmall />
    </div>
    <div className={styles.layout_component}>
      <SwitchMedium />
    </div>
    <div className={styles.layout_component}>
      <SwitchLarge />
    </div>
  </>;
};

export default Components;
