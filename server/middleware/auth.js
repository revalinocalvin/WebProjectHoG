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

exports.protect = async (req, res, next) => {
    let token;

    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
    ) {
        token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
        return res.status(401).json({ success: false, message: 'Not authorized to access this route' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id).select('-password');

        if (!req.user) {
            return res.status(404).json({ success: false, message: 'No user found with this ID' });
        }

        next();
    } catch (err) {
        console.error(err);
        res.status(401).json({ success: false, message: 'Not authorized to access this route' });
    }
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
