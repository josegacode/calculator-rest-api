
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
  let postData = [];
  const rawExpression = document.getElementById('operationField').value;
  postData.push(rawExpression);

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






