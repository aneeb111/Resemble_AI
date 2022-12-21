const router = require('express').Router()

const { 
    ALLProjects ,
    SpecificProject ,
    CreateNewProject,
    UpdateExistingProject,
    DeleteProject
} = require('../Controller/Project')

router.get('/GetAllProjects' , ALLProjects);
router.get('/Get/:uuid' , SpecificProject);
router.post('/create', CreateNewProject);
router.put('/update/:uuid' , UpdateExistingProject);
router.delete('/delete/:uuid' , DeleteProject );



module.exports = router