const { Resemble } = require('@resemble/node');

const ALLProjects = async (req, res) => {
    try {
        Resemble.setApiKey('dT1iznEUAGbY1J5cwR7kmAtt')
        let page = 1
        let pageSize = 10
        const response = await Resemble.v2.projects.all(page, pageSize)
        res.send({
            message: "Fetch All Projects",
            status: 200,
            data: response?.items
        })

    } catch (err) {
        res.send({
            message: "No Projects Found",
            status: 404
        })
    }
}

const SpecificProject = async (req, res) => {
    try {
        const uuid = req?.params?.uuid
        Resemble.setApiKey('dT1iznEUAGbY1J5cwR7kmAtt');
        const data = await Resemble.v2.projects.get(uuid);
        res.send({
            message: `Data Fetch for ${data?.item?.name} Project`,
            status: 200,
            data: data?.item
        })
    } catch (err) {
        res.send({
            message: "Data Not Fetched",
            status: 404
        })
    }


}

const CreateNewProject = async (req, res) => {
    try {
        Resemble.setApiKey('dT1iznEUAGbY1J5cwR7kmAtt')
        const New_project = await Resemble.v2.projects.create({
            name : req.body.name,
            description : req.body.description,
            is_public : req.body.is_public,
            is_collaborative : req.body.is_collaborative,
            is_archived: req.body.is_archived
        })
        res.send({
            message: `New Project Created`,
            status: 200,
            data: New_project
        })

    } catch (err) {
        res.send({
            message: 'Project Creation Rejected',
            status: 404
        })

    }
}

const UpdateExistingProject = async (req,res) =>{
    const uuid = req.params.uuid;
    
    Resemble.setApiKey('dT1iznEUAGbY1J5cwR7kmAtt')
    const Update_data = await Resemble.v2.projects.update(uuid,{
        name : req.body.name,
        description : req.body.description,
        is_public : req.body.is_public,
        is_collaborative : req.body.is_collaborative,
        is_archived: req.body.is_archived
    })
    res.send({
        message:`${Update_data?.item?.name} Project has been Updated`,
        status:200,
        data: Update_data?.item
    })
}

module.exports = {
    ALLProjects,
    SpecificProject,
    CreateNewProject,
    UpdateExistingProject
}