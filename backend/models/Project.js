const mongoose = require('mongoose');
const slugify = require('slugify');


const projectSchema = new mongoose.Schema({
    title : {
        type : String,
        required : [true, 'Please add a title'],
        unique : true,
        trim : true,
        maxlength : [50, 'title can not be more than 50 characters']
    },
    description : {
        type : String,
        required : [true, 'Please add a Description'],
        unique : true,
        trim : true,
        maxlength : [10000, 'maxlength can not be more than 10000 characters']
    },
    slug : String,
    github : String,
    live : String,
    tags : {
        require : true,
        type : String,
    },
    photo : {
        type : String,
        require : false
    }
},{timestamps : true})


projectSchema.pre('save', function(next){
    this.slug = slugify(this.title, {lower : true});
    next();
})

// module.exports = mongoose.model('Project', projectSchema);
const Project = mongoose.model('project', projectSchema);
module.exports = Project;