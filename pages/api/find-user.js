

export default function handler(req, res) {
    fetch(`http://34.230.20.245:5000/find-user`, {
    //   fetch(`http://localhost:5000/find-user`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'address': req.headers.address,
      }
    }).then(response => response.json())
    .then(data => {
      console.log(data)
      res.status(200).json(data)
      })
      
  }