// const { default: mongoose } = require('mongoose') dont' need this
const Member = require('../models/memberModel')
// const mongoose = require('mongoose') don't need this

const getMembers = (req, res) => {
  console.log('getting members')
  res.send(()=> console.log('got members'))
}

const addMember = (req, res) => {
  console.log('adding member', req.body.name)
  // console.log(req.body.name)
  const memberItem = new Member({
    name: req.body.name,
    goldStatus: req.body.goldStatus,
    club: req.body.club
  })
  memberItem.save((err, memberItem) => {
    if(err) {
      console.log('error')
      res.send(err)
      res.status(400).json({message: "Not able to add member"})
      console.log(err)
    }
    console.log('success')
    res.status(200)
  })
}

module.exports = { getMembers, addMember }