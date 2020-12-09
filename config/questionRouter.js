const express = require('express')
const router = express.Router()
const controller = require('../controllers/questionController')
const { requireAuth } = require('../middlware/authMiddlware')



//get

router.get('/api/Getquestions', controller.AllQuestions)
router.get('/api/Getquestion/:id', controller.OneQuestion)

//post
router.post('/api/AddQuestion', requireAuth, controller.NewQuestion)

//delete
router.delete('/api/RemoveQuestion/:id', requireAuth, controller.DeleteQuestion)

//put
router.put('/api/EditQuestion/:id', requireAuth, controller.ChangeQuestion)


module.exports = router