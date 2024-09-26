"use strict"

// const onclickAdd =() => {

//     let totalScore = 0;

//     const q1 = document.querySelector('input[name="questionnaire1"]:checked');
//     const q2 = document.querySelector('input[name="questionnaire2"]:checked');
//     const q3 = document.querySelector('input[name="questionnaire3"]:checked');
//     const q4 = document.querySelector('input[name="questionnaire4"]:checked');
//     const q5 = document.querySelector('input[name="questionnaire5"]:checked');

//     totalScore += q1 +  q2 +  q3 +  q4 + q5;

//     document.getElementById("total").innerText(`合計点：${totalScore}`);

// };

const onclickAdd =() => {

const resultButton = document.getElementsByTagName("button")[0];
resultButton.addEventListener("click",()  => {

    let totalScore = 0;

    const q1 = document.querySelector('input[name="questionnaire1"]:checked');
    const q2 = document.querySelector('input[name="questionnaire2"]:checked');
    const q3 = document.querySelector('input[name="questionnaire3"]:checked');
    const q4 = document.querySelector('input[name="questionnaire4"]:checked');
    const q5 = document.querySelector('input[name="questionnaire5"]:checked');

    totalScore += parseInt(q1.value) + parseInt(q2.value) + parseInt(q3.value) + parseInt(q4.value) + parseInt(q5.value);

    if (totalScore <= 13) {
        document.getElementById("total").innerText =`合計点：${totalScore}です。大うつ病の可能性があります。`;
    }  else {
        document.getElementById("total").innerText =`合計点：${totalScore}です。精神状態は良好です！`;
    };

  });

};



onclickAdd();