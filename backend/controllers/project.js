const Project = require('../models/Project');
const asyncHandler = require('../middleware/async');
const SingleFile = require('../models/SingleFile');


// @desc   get all Project
// @route  GET /api/v1/admin/getalluser
// @access Privet
exports.getAllProject = asyncHandler(async(req, res, next) => {
    const projects = await Project.find();

    if(!projects){
        return next(new ErrorResponse(`can't find any project`, 400 ));
    }
    res.status(200).json({
        success : true,
        count : projects.length,
        data : projects
    })
});

// @desc   poas a Project Image
// @route  POST /api/v1/project/singleFile
// @access Privet
exports.singleFileUpload = asyncHandler(async(req,res,next)=>{
    console.log(`req.file`, req.file)
    console.log(`req.body`, req.body)
    console.log('ROUTE ');

    try{
        const file = new SingleFile({
            fileName: req.file.originalname,
            filePath: req.file.path,
            fileType: req.file.mimetype,
            fileSize: fileSizeFormatter(req.file.size, 2) // 0.00
        });

        console.log(`file`, file)
        await file.save();
        res.status(201).send('File Uploaded Successfully');
    }catch(error) {
        // res.status(400).send(error.message);
        res.status(401).json({
            message : 'someting is wrong'
        })
    }
})

// @desc   get all Project by it's id
// @route  GET /api/v1/project/:id
// @access Privet
exports.getAProjectById = asyncHandler(async(req, res, next) => {
    const projectId = req.params.id;

    const project  = await Project.findById(projectId);

    if(!project){
        return next(new ErrorResponse(`can't find any project`, 400 ));
    }
    res.status(200).json({
        success : true,
        data : project
    })
});


exports.postAProject = asyncHandler(async (req, res, next) => {
    const newProject = new Project(req.body);
    console.log(`req.body`, req.body)
    try{
        const saveProject = await newProject.save();
        res.status(200).json(saveProject);

    }catch(err){
        res.status(500).json(err);
    }

    // if(!project){
    //     return next(new ErrorResponse(`can't find things on req.body`, 400 ));
    // }
    
    // res.status(201).json({
    //     success : true,
    //     data : project
    // })
});
















// @desc   Delete a project By it's id
// @route  POST /api/v1/post
// @access Privet
exports.deleteAProjectById = asyncHandler(async(req, res, next) => {
    const projectId = req.params.id;

    const project = await Project.findByIdAndRemove(projectId)

    if(!project){
        return next(new ErrorResponse(`can't find things on req.body`, 400 ));
    }

    res.status(201).json({
        success : true,
        data : "Project Removed SuccessFully"
    })
});


// @desc   Update a project By it's id
// @route  PUT /api/v1/project/update/
// @access Privet

exports.updateAProjectById = asyncHandler(async(req, res, next) => {
    let project = await Project.findById(req.params.id);

    if(!project){
        return next(new ErrorResponse(`can't find Project with this id ${req.params.id}`, 400 ));
    }
       // find by id an update.
       project = await Project.findByIdAndUpdate(req.params.id, req.body, {
        new : true,
        runValidators : true
    });

    res.status(200).json({
        success : true,
        data : project
    })
});




// file size formeter
const fileSizeFormatter = (bytes, decimal) => {
    if(bytes === 0){
        return '0 Bytes';
    }
    const dm = decimal || 2;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'YB', 'ZB'];
    const index = Math.floor(Math.log(bytes) / Math.log(1000));
    return parseFloat((bytes / Math.pow(1000, index)).toFixed(dm)) + ' ' + sizes[index];

}