const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
const users = [
  {  UserName: 'John Doe', email: 'john@example.com', password:'john' },
  {  UserName: 'Jane Smith', email: 'jane@example.com', password:'jane' },
  {  UserName: 'Bob Johnson', email: 'bob@example.com',password:'bob' },
  {  UserName: 'sam', email: 'sam@example.com',password:'sam' },
  {  UserName: 'mark', email: 'mark@example.com',password:'mark' },

];

app.get('/users', (req, res) => {
  res.json(users);
});
app.post('/register',(req,res)=>{
  try{
    const {UserName,email,password}=req.body;
    if(!UserName || !email || !password){
      res.status(400).json({error:'UserName, email and password are required '});
    } else {
      const existingUser=users.find(user=> user.email===email);
      if(existingUser){
        res.status(409).json({ error: 'User already exists' });
      } else {
        users.push({UserName,email,password});
        res.status(201).json({message: 'User registered successfully' });
      }
    }
  }
  catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
})

app.post('/login',(req,res)=>{
  try{
    const {email,password}=req.body;
    if(!email || !password){
      res.status(400).json({error:'email and password are required'})
    }else{
      const verifiedUser = users.find(user => user.email === email && user.password === password);
      if(verifiedUser){
        res.status(200).json({message:"Sucessfully logged in"});
      }
      else{
        res.status(401).json({message:'invalid login details'})
      }
    }
  }
  catch(error){
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});