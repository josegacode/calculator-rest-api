
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
  const rawValues = document.getElementById('operationField').value;
  
  // Clean the request
  // Separates each value when the browser found blank space
  // put it in a comma instead, then makes a new
  // array taking the argument from 0 index to the
  // end of it
  const postData = {
    values: rawValues.split(' ').slice(0)
  }
  //console.log(`Values collected ${JSON.stringify(postData)}`);

  let url = `http://localhost:3000/api/v1/operation`;

  makeRequest(url, postData)
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => console.log(`Error: ${error}`));
}

// Listen for click events on = request
document.getElementById('equalsBtn').addEventListener('click', getOperationExpression);






