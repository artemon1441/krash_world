
export default function handler(req, res) {
  fetch(`http://34.230.20.245:5000/update-email`, {
    // fetch(`http://localhost:5000/update-email`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      address: req.headers.address,
      email: req.headers.email
    },
  }).then(response => response.json())
  .then(data => {
    console.log(data)
    res.status(200).json(data)
    })
    
}