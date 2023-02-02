import React, { useState } from "react";
import produce from 'immer'

export type MatzipListItemType = {
  no: number,
  matzip: string,
  done: boolean,
};

//provider로 전달한 데이터(value) 타입 정의
//state: 상태
//actions: 상태 변경 함수들
export type MatzipListContextValueType = {
  state: { matzipList: Array<MatzipListItemType>},
  actions: {
    addMatzip: (matzip: string) => void,
    deleteMatzip: (no: number) => void,
    toggleDone: (no:number) => void,
  }
}

//앞서 정의한 타입 또는 null을 이용해 Context 객체 생성
const MatzipContext = React.createContext<MatzipListContextValueType | null>(null)

//Provider 컴포넌트의 자식 컴포넌트 타입 정의
type PropsType = {
  children: JSX.Element | JSX.Element[],
}

//상태와 상태 변경 함수를 데이터 타입 형식으로 구성해 작성한 후 value속성으로 전달
export const MatzipProvider = (props: PropsType) => {
  const [matzipList, setMatzipList] = useState<Array<MatzipListItemType>>([
    { no: 1, matzip: '김네집', done: true },
    { no: 2, matzip: '에페스케밥', done: false },
    { no: 3, matzip: '사왓디', done: true },
    { no: 4, matzip: '이즈미르', done: false },
  ])

  const addMatzip = (matzip: string) => {
    const newMatzipList = produce(matzipList, (draft: Array<MatzipListItemType>) => {
      draft.push({no: new Date().getTime(), matzip: matzip, done: false})
    })
    setMatzipList(newMatzipList)
  }

  const deleteMatzip = (no:number) => {
    const index = matzipList.findIndex(item => item.no === no)
    const newMatzipList = produce(matzipList, (draft: Array<MatzipListItemType>) => { 
      draft.splice(index, 1)
    })
    setMatzipList(newMatzipList)
  }

  const toggleDone = (no: number) => {
    const index = matzipList.findIndex(item => item.no === no)
    const newMatzipList = produce(matzipList, (draft: Array<MatzipListItemType>) => {
      draft[index].done = !draft[index].done
    })
    setMatzipList(newMatzipList)
  }

  //<Provider>의 value로 전달할 객체 생성
  const values: MatzipListContextValueType = {
    state: { matzipList },
    actions: {addMatzip, deleteMatzip, toggleDone}
  }

  return (
    <MatzipContext.Provider value={values}>
      { props.children }
    </MatzipContext.Provider>
  )
}

export default MatzipContext
