//jwtverify token
const jwtgeneration = require("./jwt");
const jwt = require("jsonwebtoken");

module.exports = {
    get: (req, res) => {
        const accessToken = jwtgeneration.getAccessgeneratedToken();
        const refreshToken = jwtgeneration.getRefressgeneratedToken();

        jwt.verify(accessToken, "1234567", (err, decoded) => {
            if (err) {
                if (err.name === 'TokenExpiredError') {
                   
                    jwt.verify(refreshToken, "1234567", (err, decoded) => {
                        if (err) {
                           
                            return res.status(401).json({ error: 'Invalid or expired refresh token' });
                        } else {
                            
                            const newAccessToken = jwt.sign(decoded, "1234567", { expiresIn: '5s' });
                            res.status(201).json({ message: 'New access token generated', accessToken: newAccessToken });
                        }
                    });
                } else {
                    
                    res.status(500).json({ error: err.message });
                }
            } else {
              res.status(201).json({ message: 'Token verified', decoded });
            }
        });
    }
};
