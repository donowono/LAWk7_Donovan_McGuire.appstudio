btnShow.onclick=function(){
  query = "SELECT * FROM customer"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=djm42254&query=" + query)
  if (req.status == 200) {
  allCustomers = JSON.parse(req.responseText)
  let message = ""
  for (i = 0; i < allCustomers.length; i++)
      message = message + allCustomers[i]
  txtCustomers.value = message
 }else { 
        txtNames.value = "Error code: " + req.status
}
}


btnSubmit.onclick=function(){
  let name = inptName1.value
  let street = inptStreet.value
  let city = inptCity.value
  let state = inptState.value
  let zipcode = inptZipCode.value
  query = "INSERT INTO customer (`name`,`street`, `city`, `state`, `zipcode`) VALUES ('" + name + "', '" + street + "', '" + city + "', '" + state + "', '" + zipcode + "')"
  
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=djm42254&query=" + query)
  if (req.status == 200) {
    if (req.responseText == 500)
        alert ("You successfulyl added the customer")
    else
        alert("Something went wrong with adding the customer")
    }
    

}

