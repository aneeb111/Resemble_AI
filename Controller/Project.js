const { Resemble } = require('@resemble/node');

const ALLProjects = async (req,res) => {
    try{
        Resemble.setApiKey('dT1iznEUAGbY1J5cwR7kmAtt')
        let page = 1
        let pageSize = 10
        const response = await Resemble.v2.projects.all(page, pageSize)
        res.send({
            message:"Fetch All Projects",
            status:200,
            data: response?.items
        })
       
    }catch(err){
        res.send({
            message:"No Projects Found",
            status:404
        })
    }
}

const SpecificProject = async (req,res) => {
    try{
        const uuid = req?.params?.uuid
        Resemble.setApiKey('dT1iznEUAGbY1J5cwR7kmAtt');
       const data = await Resemble.v2.projects.get(uuid);
       res.send({
        message:`Data Fetch for ${data?.item?.name} Project`,
        status:200,
        data: data?.item
       })
    }catch(err){
        res.send({
            message:"Data Not Fetched",
            status:404
           })
    }
    

}
module.exports = {
    ALLProjects,
    SpecificProject
}