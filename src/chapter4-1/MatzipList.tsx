import React from 'react'
import { MatzipType } from './App';
import MatzipItem from './MatzipItem';

type MatzipListPropsType = {
  matzips: Array<MatzipType>;
}

const MatzipList = (props: MatzipListPropsType) => {
  const list = props.matzips;

  //반복 렌더링에는 꼭 key값 부여하기
  const matzips = list.map((item, index) => {
    return (
      <MatzipItem key={item.no} matzipItem={item} />
    )
  })
  return <ul className='list-group'>{matzips}</ul>
}

export default MatzipList