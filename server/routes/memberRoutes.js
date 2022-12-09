const express = require('express')
const router = express.Router()
const memberControllers = require('../controllers/memberControllers')

router.get('/getMembers', memberControllers.getMembers)

// router.get('/', (req,res) => {
//   res.send('Router is working')
// })

router.post('/addMember', memberControllers.addMember)
router.get('/getMembers', memberControllers.getMembers)

module.exports = router