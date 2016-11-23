var pos = 0,right=0,name;
name = prompt("what is your name");
function get(x){
return document.getElementById(x);
}
var questions = [

    ["Most Runs scored by Pakistani batsman in test cricket?","J.Miandad","S.Afridi","R.Ponting","A"],
    ["When did Pakistan win Olympic gold medal in Hockey for the first time?","1980","1960","1962","B"],
    ["Which is the national bird of Pakistan?","Shaheen","chakor","Lion","B"],
    ["Which military alliance had Pakistan as its member?","NATO","MBC","ACCO","A"],
    ["Which is the national flower of Pakistan?","ROSE","THISTLE","JASMINE","C"],
    ["Who is the Pakistan most corrupt politician","Asif Zardari","Nawaz Sharif","Altaf Hussain","A"]

];

 function Question(){
    var test,test_status,chA,chB,chC,question,choices,choice,per;
    
  test = get("test");
  if(pos>=questions.length){
      per = Math.floor((right*100)/pos);
      test.innerHTML = "<h2>" +name+ " give "+right+" of "+questions.length+" question correct </h2>";
      test.innerHTML +="<h2> " +name+ " percentage is "+per+"%</h2>";
      pos=0;
      right = 0;
      return false;
  }
 test_status = get("test-status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
question = questions[pos][0];
chA = questions[pos][1];
chB = questions[pos][2];
chC = questions[pos][3];
test.innerHTML = "<h1>"+question+"</h1>";
test.innerHTML += "<input type = 'radio' name ='choices' value='A'>" +chA+ "<br>";
test.innerHTML += "<input type = 'radio' name ='choices' value='B'>" +chB+ "<br>";
test.innerHTML += "<input type = 'radio' name ='choices' value='C'>" +chC+ "<br><br>";
test.innerHTML += "<button onclick='checkAnswer()'>Submit</button>"


 }
 function checkAnswer(){
    choices = document.getElementsByName("choices");
    for(var i = 0 ; i  < choices.length; i++){

        if(choices[i].checked){
            choice = choices[i].value;
        }
    } 
    if(choice  == questions[pos][4]){
      right++;
    }
    pos++;
    Question();

 }
 window.addEventListener("load",Question,false);

