import React,{ useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {projectSubmits } from '../actions/projectAction';

const AddProjects = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [github, setGithub] = useState('');
    const [live, setLive] = useState('');
    const [tags, setTags] = useState('');
    const [file, setFile] = useState(null);

    const dispatch = useDispatch()

    const projectSubmit = useSelector(state => state.projectSubmit);
    const {loading, error, project} = projectSubmit;

    const handleSubmit = (e) => {
        e.preventDefault();

    const newPost = {
        title,
        description,
        github,
        live,
        tags
      };

       if (file) {
        const data = new FormData();
        const filename = Date.now() + file.name;
        data.append("name", filename);
        data.append("file", file);
        newPost.photo = filename;

        console.log(`newPost`, newPost)

        dispatch(projectSubmits(data, newPost))
        }


    }
    

    return (
        <div>
            <form onSubmit={handleSubmit} encType="maitpart/form-data">
                <div>
                {file && (
                        <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
                    )}
                </div>
                <label>
                    Title:
                    <input type="text" name="title" value={title} onChange={(e)=> setTitle(e.target.value)} />
                </label>
                <label>
                    Description:
                    <input type="text" name="description" value={description} onChange={(e)=> setDescription(e.target.value)} />
                </label>
                <label>
                    Github:
                    <input type="text" name="github" value={github} onChange={(e)=> setGithub(e.target.value)}  />
                </label>
                <label>
                    Live:
                    <input type="text" name="live" value={live} onChange={(e)=> setLive(e.target.value)}  />
                </label>
                <label>
                    File:
                    <input
                        type="file"
                        id="fileInput"
                        // style={{ display: "none" }}
                        onChange={(e) => setFile(e.target.files[0])}
                    />
                </label>
                <label>
                    Tags:
                    <input type="text" name="tags" value={tags} onChange={(e)=> setTags(e.target.value)}  />
                </label>

                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default AddProjects
