btnName2.onclick=function(){
  query = "SELECT * FROM customer"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=djm42254&query=" + query)
  if (req.status == 200) {
  allCustomers = JSON.parse(req.responseText)
  let message = ""
  for (i = 0; i < allCustomers.length; i++)
      message = message + allCustomers[i]
  txtNames.value = message
 }else { 
        txtNames.value = "Error code: " + req.status
}
}

btnDel.onclick=function(){
  let customerDel = inptName.value
  let found = false
  for (i = 0; i < allCustomers.length ; i++) {
      if (customerDel == allCustomers[i][1]) {
      found = true
      break
      }
    }
    if (found == false) {
    txtNames.value = "The pet name is not in the database"
} else if (found == true) {
    query = "DELETE FROM customer WHERE `name` = '" + customerDel + "'"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=djm42254&query=" + query)
    if (req.status == 200)
        alert(`You have successfully deleted the customer ${customerDel}`)
    }
}
