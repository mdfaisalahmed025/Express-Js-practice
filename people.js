
const express =require('express')
const router =express.Router()

const {
     getPeople,
    creatPerson,
    createPersonPostman,
    UpdatePerson,
    deletPerson,
} = require('../controllers/people')

// router.get('/', getPeople )
// router.post('/', creatPerson )
// router.post('/postman', createPersonPostman)
// router.put('/:id', UpdatePerson)
// router.delete('/:id', deletPerson )


router.route('/').get(getPeople).post(creatPerson);
router.route('/postman').post(createPersonPostman);
router.route('/:id').put(UpdatePerson).delete(deletPerson)

module.exports = router