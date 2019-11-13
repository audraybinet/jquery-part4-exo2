$(function(){
  function validateInput(marks){
    marks.each(function(){
      if (!isNaN($(this).val()))
      return false}
  }
});
return true;
// la logique : on recupere les notes

//ensuite creer fonction qui calcule la moyenne
function averageCalcul(marks){
//on va chercher le nombre d'element
//creation variable + somme des deux
var sum = 0
var nbMarks = noteList
marks.each(function(){
sum += parseInt($(this).val());//ou +
});
return (sum/nbMarks).tofixed(2);
};
//appreciation + condition
function displayAppreciation(average){
  var appreciation;
  if (average == 20){
    appreciation = 'excellent'
  }
  else if (average >16){
    appreciation = 'tres bien'
  }
  else if (average>=13){
    appreciation = 'bien'
  }
  else if (average>=10){
    appreciation = 'moyen'
  }
  else{
    appreciation = 'Mauvais'
  }
return appreciation;
};
$('button').click(function(){
  var marks =$('input');
  let average = averageCalcul(marks);
  displayAppreciation(average);
});
});
