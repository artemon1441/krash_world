

export default function handler(req, res) {
    fetch(`http://34.230.20.245:5000/get-users`, {
    //   fetch(`http://localhost:5000/get-users`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(response => response.json())
    .then(data => {
      console.log(data)
      res.status(200).json(data)
      })
      
  }