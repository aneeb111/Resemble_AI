const router = require('express').Router()

const { ALLProjects , SpecificProject } = require('../Controller/Project')

router.get('/GetAllProjects' , ALLProjects);
router.get('/Get/:uuid' , SpecificProject);

module.exports = router