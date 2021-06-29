const express = require('express');

const router = express.Router();

const { getAllProject, postAProject, deleteAProjectById, getAProjectById, updateAProjectById, singleFileUpload} = require('../controllers/project');

const {upload} = require('../helpers/filehelper');

// const { v4: uuidv4 } = require('uuid');
// const multer = require('multer');

//
// /api/v1/note/:userid/all
router.route('/').get(getAllProject);
router.route('/:id').get(getAProjectById);
router.route('/update/:id').put(updateAProjectById);
router.route('/post').post(postAProject);
router.route('/remove/:id').delete(deleteAProjectById);

// router.route('/singleFile').post(upload.single('file'), singleFileUpload)
router.post('/singleFile', upload.single('file'), singleFileUpload)

module.exports = router;