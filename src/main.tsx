import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import produce from 'immer'
import 'bootstrap/dist/css/bootstrap.css'
import AppContainer from './chapter402/AppContainer'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppContainer />
  </React.StrictMode>,
)


let quiz = {
  'students': ['김예진', '송유현', '백호현', '강현주'],
  'quizlist': [
    {
      'question': '오늘 먹은 음식이 아닌 것은?',
      'options': [
        { 'no': 1, 'option': '홈런볼' },
        { 'no': 2, 'option': '반미' },
        { 'no': 3, 'option': '청포도그린티' },
        { 'no': 4, 'option': '육포' },
      ],
      'answer': 4
    },
    {
      'question': '강현주 지갑에 들어있는 금액은?',
      'options': [
        { 'no': 1, 'option': '7000원' },
        { 'no': 2, 'option': '15000원' },
        { 'no': 3, 'option': '500원' },
        { 'no': 4, 'option': '로또 한 장' },
      ],
      'answer': 2
    },
  ]
}

// 상태트리 끝단을 변경한 새로운 객체 생성
const quiz2 = produce(quiz, draft => {
  draft.quizlist[0].options[0].option = '하리보'
})

console.log(quiz === quiz2) //false
console.log(quiz.quizlist === quiz2.quizlist) //false
console.log(quiz.quizlist[0] === quiz2.quizlist[0]) //false
console.log(quiz.quizlist[0].options[0] === quiz2.quizlist[0].options[0]) //false
console.log(quiz.quizlist[0].options[0].option === quiz2.quizlist[0].options[0].option) //false
console.log(quiz.students === quiz2.students) //true
