quizdata = [
    //1
{  
  question:"Koji se jezik izvršava u pretraživaču?",

  a:"Java",
  b:"C++ / C#",
  c:"Python",
  d:"JavaScript",
  correct:"d"





},
//2
{

    question:"Od čega ke CSS skraćeno?",

    a:"Central Style Sheets",
    b:"Cascading Style Sheets",
    c:"Cascading Simple Sheets",
    d:"Cascading Sample Simulation",
    correct:"b"

},
//3
{

    question:"Od čega je HTML skraćeno?",

    a:"Hypertext Markup Language",
    b:"Hypertext Makrdown Language",
    c:"Hyperloop Mega language",
    d:"Hyper Multyi language",
    correct:"a"

},
//4
{
    
    question:"Koje godine je nastao JavaScript?",

    a:"1996",
    b:"2001",
    c:"1995",
    d:"Ništa od navedenog",
    correct:"a"


   }

]

quiz= document.getElementById('quiz')
answerEls= document.querySelectorAll('input')
questionEl= document.getElementById('question')
a_text=document.getElementById('a_text')
b_text=document.getElementById('b_text')
c_text=document.getElementById('c_text')
d_text=document.getElementById('d_text')
submitBtn= document.getElementById('submit')

currentQuestion = 0 
score = 0

LoadQuiz()

function LoadQuiz(){
   deselectAnswers()
   currentQuizData = quizdata[currentQuestion]
   questionEl.innerText = currentQuizData.question
   a_text.innerText = currentQuizData.a
   b_text.innerText = currentQuizData.b
   c_text.innerText = currentQuizData.c
   d_text.innerText = currentQuizData.d
}

function deselectAnswers(){
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelectedAnswer(){
answer = undefined
answerEls.forEach(answerEl => {

    if(answerEl.checked){
        answer=answerEl.id
    }
 });
 
 return answer

}
submitBtn.addEventListener('click', ()=>{
    answer = getSelectedAnswer()
    if(answer !=undefined){
        if(answer == quizdata[currentQuestion].correct){
            score++
        }
        currentQuestion++
        if(currentQuestion < quizdata.length){
            LoadQuiz()
        }else{
            quiz.innerHTML=`<h2>Odgovorili ste ${score}/${quizdata.length} pitanja tačno</h2>
            <button onclick= "location.reload()">Probaj ponovo</button>
            `
        }
    }else{
     alert('Niste označili nijedan odgovor!')

    }

 

})












