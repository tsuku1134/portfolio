const quiz = [
  {
     question : 'ゲーム市場、もっとも売れたゲーム機は次のうちどれ？',
     answers : [ 'スーパーファミコン',
                  'プレイステーション2',
                  'ニンテンドーDS',
                  'ニンテンドースイッチ'
                ],
                correct: 'ニンテンドーDS'
  }, {
    question : '糸井重里が企画に関わった、任天堂の看板ゲームといえばどれ？',
     answers : [ 'MOTHER2',
                  'スーパーマリオブラザーズ3',
                  'スーパードンキーコング',
                  '星のカービィ'
                ],
                correct: 'MOTHER2'
  }, {
    question : 'ファイナルファンタジーⅣの主人公の名前は？',
     answers : [ 'フリオニール',
                  'クラウド',
                  'ディーダ',
                  'セシル'
                ],
                correct: 'セシル'
  }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
let buttonLength = $button.length

//クイズの問題文、選択肢を定義
const setupQuiz = () => {
  console.log(document.getElementById('js-question').textContent = quiz[quizIndex].question);
  let buttonIndex = 0;
  while(buttonIndex < buttonLength) {
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex]
    buttonIndex++;
}
}
setupQuiz();


const clickHandler = (e) => {
  if (quiz[quizIndex].correct ===  e.target.textContent) {
    window.alert('正解！');
    score++;
  } else {
    window.alert('不正解！')
  }

  quizIndex++;

  if(quizIndex < quizLength) {
    setupQuiz();

  } else {
    window.alert('終了！あなたの正解数は' + score + '/' + quizLength + 'です！');

  }
};

let handlerIndex = 0;
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener('click',(e)=> {
    clickHandler(e);
  });
  handlerIndex++;
}
