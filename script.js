function publishName() {
    var answer = document.getElementById('name').value;
    answer = answer.toUpperCase();
    document.getElementById('show').innerHTML = "Olá " + answer + ", você está preparado(a)?";
    document.getElementById("submit").style.display = "none";
    document.getElementById("play").style.display = "block";
  } 
  
  function showQuestions(questionType){
    document.getElementById("container").style.display = "block";
    if (questionType == "quizzCountry") document.getElementById("countryQuizz").style.display = "block";
    else if (questionType == "quizzMovies") document.getElementById("moviesQuizz").style.display = "block";
  }
  
  function submitAnswerCountry() {
    var right = 0;
    var wrong = 0
    
    // buscar resposta q usuario selecionou
    var select_answer1 = document.querySelector('input[name="cq1"]:checked');
    var select_answer2 = document.querySelector('input[name="cq2"]:checked');
    var select_answer3 = document.querySelector('input[name="cq3"]:checked');
    console.log(select_answer1, select_answer2, select_answer3);
    
    //validar preenchimento de todas as questoes
    if (select_answer1 == null || select_answer2 == null || select_answer3 == null) {
        alert ("Ops! Precisamos de todos as respostas preenchidas para continuar");
    } 
    else {
        // comparar e validar o que usuario respondeu
        if (select_answer1.value == "a") right++;
        else wrong++;

        if (select_answer2.value == "c") right++;
        else wrong++;

        if (select_answer3.value == "b") right++;
        else wrong++;

        document.getElementById("divResult").innerHTML = "Acertos: " + right + "<br>Erros: " + wrong;

        showPlayAgain();
    }
  }

  function submitAnswerMovie() {
    var right = 0;
    var wrong = 0
    
    // buscar resposta q usuario selecionou
    var select_answer1 = document.querySelector('input[name="cm1"]:checked');
    var select_answer2 = document.querySelector('input[name="cm2"]:checked');
    var select_answer3 = document.querySelector('input[name="cm3"]:checked');
    console.log(select_answer1, select_answer2, select_answer3);
    
    //validar preenchimento de todas as questoes
    if (select_answer1 == null || select_answer2 == null || select_answer3 == null) {
        alert ("Ops! Precisamos de todos as respostas preenchidas para continuar");
    } 
    else {
        // comparar e validar o que usuario respondeu
        if (select_answer1.value == "a") right++;
        else wrong++;

        if (select_answer2.value == "b") right++;
        else wrong++;

        if (select_answer3.value == "b") right++;
        else wrong++;

        document.getElementById("divResult").innerHTML = "Acertos: " + right + "<br>Erros: " + wrong;

        showPlayAgain();
    }
  }

  function showPlayAgain() {
    document.getElementById("playAgain").style.display = "block";
    document.getElementById("play").style.display = "none";
    document.getElementById("container").style.display = "none";
  } 

  function play() {
    document.getElementById("playAgain").style.display = "none";
    document.getElementById("play").style.display = "block";
  } 