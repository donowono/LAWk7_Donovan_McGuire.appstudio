let req = ""
let query = ""
let results = ""
let pw = "Bolognabaddie37!"  
let netID = "djm42254"


btnName.onclick=function(){
  query = "SELECT `name` FROM customer"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=djm42254&query=" + query)
  if (req.status == 200) {
  results = JSON.parse(req.responseText)
  let message = ""
  for (i = 0; i < results.length; i++)
      message = message + results[i]
  txt1.value = message
 }else { 
        txt1.value = "Error code: " + req.status
}
}