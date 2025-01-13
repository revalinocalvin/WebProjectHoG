//const jwt = require('jsonwebtoken');

//const authenticate = (req, res, next) => {
    //const token = req.headers['authorization'];
    //if (!token) return res.status(403).send('Token is required');

    //jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      //  if (err) return res.status(403).send('Invalid token');
        //req.user = user;
        //next();
    //});
//};

//module.exports = authenticate;



const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.protect = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(401).json({ success: false, message: 'Not authorize to access this route' });
    }

    jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
        if (err) {
            return res.status(401).json({ success: false, message: 'Not authorize to access this route' });
        }
        req.user = await User.findById(decoded.id);
        next();
    });
};

exports.authorize = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return res.status(403).json({
                success: false,
                message: `User role ${req.user.role} is not authorized to access this route`
            });
        }
        next();
    };
};
