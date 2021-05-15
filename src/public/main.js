const makeRequest = async (url, data) => {
    return fetch(url, {
      method: 'POST', 
      mode: 'cors',
      cache: 'no-cache', 
      credentials: 'same-origin', 
      headers: { 'Content-Type': 'application/json' },
      redirect: 'follow', 
      referrerPolicy: 'no-referrer', 
      body: JSON.stringify(data) 
    })
}

const getOperationExpression = () => {
  let postData = { expression: '' } 
  const rawExpression = document.getElementById('operationField').value;

  // Replaces 'x | X' by * instead over all expression for 
  // mathjs syntax purposes 
  const regex = /x/ig; 
  postData.expression = rawExpression.replace(regex, '*');
  let url = `http://localhost:3000/api/v1/operation`;
  document.getElementById('operationRequest').value = JSON.stringify(postData, null, 2);

  makeRequest(url, postData)
    .then(response => response.json())
    .then(data => {
      // Use .value for forms
      document.getElementById('operationResponse').value = JSON.stringify(data, null, 2);

      // User .innerHTML fors normal tags
      document.getElementById('resultField').innerHTML = `= ${data.result}`;
    })
    .catch(error => console.log(`Error: ${error}`));
}

// Listen for click events on = request
document.getElementById('equalsBtn').addEventListener('click', getOperationExpression);






