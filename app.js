const quiz = [
  {
    question:'ゲーム市場、最も売れたゲームは次のどれ？',
    answers:[
      'スーパーファミコン',
      'プレステ2',
      '64',
      'ゲームボーイ'
    ],
    correct:'ゲームボーイ'
  }, {
    question:'ゲーム市場、最も売れたゲームは次のどれ？',
    answers:[
      'スーパーファミコン',
      'プレステ2',
      '64',
      'ゲームボーイ'
    ],
    correct:'ゲームボーイ'
  }, {
    question:'ゲーム市場、最も売れたゲームは次のどれ？',
    answers:[
      'スーパーファミコン',
      'プレステ2',
      '64',
      'ゲームボーイ'
    ],
    correct:'ゲームボーイ'
  }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}

setupQuiz();

const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent){
  window.alert('正解！');
  score++;
  } else {
  window.alert('不正解！');
  }

  quizIndex++;

  if(quizIndex < quizLength){
    //問題数があればこちらを実行
    setupQuiz();
  } else {
    //問題数がなければこちらを実行
    window.alert('終了！あなたの正解数は' + score + '/' + quizLength + 'です');
  }
};

//ボタンをクリックしたら正誤判定
let handleIndex = 0;
while(handleIndex < buttonLength){
  $button[handleIndex].addEventListener('click', (e) => {
    clickHandler(e);
   });
   handleIndex++;
};