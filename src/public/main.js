const getOperationExpression = () => {
  const value = document.getElementById('operationField').value;
  //console.log(`value: ${value}`);
  getRestult(apiRequest)
    .then(data => {
      console.log(data); // JSON data parsed by `data.json()` call
    });
}

// Listen for click events on = request
document.getElementById('equalsBtn').addEventListener('click', getOperationExpression);

let apiRequest = `http://localhost:3000/api/v1/operation`;

const getRestult = async (url) => {

  const response = await fetch(url, {
    method: 'GET', 
    mode: 'cors', 
    cache: 'no-cache',
    credentials: 'same-origin', 
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow', 
    referrerPolicy: 'no-referrer'
    //body: JSON.stringify(data) 
  });

  return response.json(); 
}



