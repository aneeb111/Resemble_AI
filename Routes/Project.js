const router = require('express').Router()

const { 
    ALLProjects ,
    SpecificProject ,
    CreateNewProject,
    UpdateExistingProject
} = require('../Controller/Project')

router.get('/GetAllProjects' , ALLProjects);
router.get('/Get/:uuid' , SpecificProject);
router.post('/create', CreateNewProject);
router.put('/update/:uuid' , UpdateExistingProject);
module.exports = router