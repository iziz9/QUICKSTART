import React from "react";
import { MatzipType } from "./App";
import styles from "./styles";

type MatzipItemPropsType = {
  matzipItem: MatzipType
}

const MatzipItem = (props: MatzipItemPropsType) => {
  const item = props.matzipItem;

  return (
    <li
      style={styles.listItemStyle}
      className={item.revisitIntention ? 'list-group-item active' : 'list-group-item'}>
      {item.name}
    </li >
  )
}

export default MatzipItem