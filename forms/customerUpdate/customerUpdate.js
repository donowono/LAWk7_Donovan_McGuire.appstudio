btnShow1.onclick=function(){
  query = "SELECT * FROM customer"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=djm42254&query=" + query)
  if (req.status == 200) {
  allCustomers = JSON.parse(req.responseText)
  let message = ""
  for (i = 0; i < allCustomers.length; i++)
      message = message + allCustomers[i]
  txtShow.value = message
 }else { 
        txtShow.value = "Error code: " + req.status
}
}


btnSubmit1.onclick=function(){
  let oldName = inptOldName.value
  let newName = inptNewName.value
  
  query = "SELECT * FROM customer WHERE `name` = '" + oldName + "'"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=djm42254&query=" + query)
  if (req.status == 200) {
    allCustomers = JSON.parse(req.responseText)
    if (allCustomers.length > 0) {
        query = "UPDATE customer SET `name` = '" + newName +"' WHERE `name` = '" + oldName + "'"
        req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=djm42254&query=" + query)
        if (req.status == 200)
            if (req.responseText == 500)
                alert("You have succesfully updated the customer's name")
            else
                alert("Something went wrong while trying to update the customer's name")
        else 
            alert("Something went wrong")
            }
        }
}
