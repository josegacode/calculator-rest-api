
const makeRequest = async (url, data) => {
    return fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
      //body: data // body data type must match "Content-Type" header
    })
}

const getOperationExpression = () => {
  const rawExpression = document.getElementById('operationField').value;
  
  const rawValues = rawExpression.split(' ').slice(0);
  const postData = {
    rawExpression: rawExpression,
    operations: []
  }

  // SYNTAX VALIDATION for expressions with spaces 
  // Clean the request
  // Separates each value when the browser found blank space
  // put it in a comma instead, then makes a new
  // array taking the argument from 0 index to the
  // end of it

  // Left to right ...
  // Extract operations with ()
  let operation = [];
  rawValues.forEach((element, index) => {
    if(element.includes(`(`)) {
      //console.log(`[${index}]${element}`);

      // Gets the first operand ingoring '('
      operation[0] = element.charAt(1); 
    } else if(element.includes(`)`)) {
      //console.log(`[${index}]${element}`);

      // Type of operation
      operation[1] = rawValues[index-1]; 

      // Gets the second operand ingoring '('
      operation[2] = element.charAt(0); 
    } else {
      // just put it in
    }

    // One operation was formatted
    if(operation.length == 3) {
      postData.operations.push(operation);
      operation = [];
    }
  })

  // Then extras expression of *, /
  // Finally extract expression like +, -
  

  //console.log(`Values collected ${JSON.stringify(postData)}`);

  let url = `http://localhost:3000/api/v1/operation`;

  makeRequest(url, postData)
    .then(response => response.json())
    .then(data => {
      document.getElementById('operationResponse').value = JSON.stringify(data, null, 2);
    })
    .catch(error => console.log(`Error: ${error}`));
}

// Listen for click events on = request
document.getElementById('equalsBtn').addEventListener('click', getOperationExpression);






