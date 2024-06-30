

export default function handler(req, res) {
    fetch(`http://34.230.20.245:5000/user`, {
    //   fetch(`http://localhost:5000/user`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "address": req.headers.address,
        "timestamp": req.headers.timestamp
      }
    }).then(response => response.json())
    .then(data => {
      console.log(data)
      res.status(200).json(data)
      })
      
  }