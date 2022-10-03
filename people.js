
let { people } =require('../data')


const getPeople = (req,res) => {
     res.status(200).json({ success:true,  data:people  })
}

const creatPerson =(req,res) => {
     const {name} =req.body

     if(!name){
          return res
          .status(400)
          .json({success:false, msg: 'please provide name value'})
     }
     res.status(201).send({success:true, person:name})
}

const createPersonPostman = (req,res) => {
     const {name} = req.body
     if(!name){
          return res
          .status(400)
          .json({success:false, msg: 'please provide name value'})
     }
     res.status(201).send({success:true, data: [...people, name]})

}

const UpdatePerson= (req,res) => {
     const {id} = req.params
     const {name} =req.body
     console.log(id, name)
     
     const person=people.find(
          (person) => person.id === Number(id))

     if(!person) {
          return res
          .status(404)
          .json({success:false, msg: `no person with this ${id}`})
     }
     const newpeople =people.map((person) => {
          if(person.id === Number(id)) {
               person.name =name
          }
          return person
     })

     res.status(200).json({success:true, data:newpeople})

}

const deletPerson = (req,res) => {

     const person=people.find(
          (person) => person.id === Number(req.params.id))

     if(!person) {
          return res
          .status(404)
          .json({success:false, msg: `no person with this ${req.params.id}`})
     }
     const newPeople =people.filter(
          (person)=> person.id !== Number (req.params.id))
     return res.status(200).json({success: true, data: newPeople})

}

module.exports = {
    getPeople,
    creatPerson,
    createPersonPostman,
    UpdatePerson,
    deletPerson
}
