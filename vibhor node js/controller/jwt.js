const jwt=require("jsonwebtoken");

console.log("jwt token generation");

let AccessgeneratedToken;
let RefressgeneratedToken;
//let secretKey;

module.exports = {
    post: (req, res) => {
        const user= req.body;
console.log(user);
//const secretKey = '1234567';


//Accesstoken generation
AccessgeneratedToken = jwt.sign(user, '1234567', { expiresIn: '5s' });
console.log("Access token generation" +AccessgeneratedToken);

//Refresstoen generation

RefressgeneratedToken = jwt.sign(user, '1234567');
console.log("Refress token generation" +RefressgeneratedToken);
res.status(201).json({ message: 'Refress and access token generated', RefressgeneratedToken, AccessgeneratedToken});
    },
    getAccessgeneratedToken: () => AccessgeneratedToken,
    getRefressgeneratedToken: () => RefressgeneratedToken,
    //getSecretKey: () => secretKey
};


