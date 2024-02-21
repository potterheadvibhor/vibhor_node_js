//refresstiken
const jwtgeneration=require("./jwt");
const jwt=require("jsonwebtoken");


module.exports = {
    
get: (req, res) => {
        
      
        const Refresstoken = jwtgeneration.getRefressgeneratedToken();

jwt.verify(Refresstoken, "1234567", (err, decoded) => {
    if (err) { 
    res.status(500).json({ error: err.name})}
    else {
        NewAccessgeneratedToken = jwt.sign(decoded, '1234567', { expiresIn: '5s' });
console.log("NewAccess token generation" +NewAccessgeneratedToken);

        res.status(201).json({ message: 'ReferessTokentoken verified', decoded});
    }});}}