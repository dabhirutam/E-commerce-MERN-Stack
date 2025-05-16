
const Dashboard = (req, res) => {
    try {
        res.status(200).json({status:true, msg: 'Welcome Admistor Dashboard'});
    } catch (error) { return res.status(500).json({ status: false, msg: "Server error." }) }
}

module.exports = {
    Dashboard
}