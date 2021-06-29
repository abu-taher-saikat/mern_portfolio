import React,{useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { projects } from '../actions/projectAction';
import Categories from '../components/Projects/Categories';
import Menu from '../components/Projects/Menu';

import '../styles/Project.scss';


const Projects = () => {
    const [menuItems, setMenuItems] = useState();
    const [categories, setCategories] = useState();

    const dispatch = useDispatch();
    
    const projectList = useSelector(state => state.projectList);
    const {loading, error, projects: projectFiles} = projectList;

    // useEffect(()=>{
    //     // if(loading === false){
    //     //     dispatch(projects());
    //     // }
    //     dispatch(projects)
    // },[])
    

    useEffect(()=>{ 
        dispatch(projects());
        setMenuItems(projectFiles);
    },[dispatch])
    
    return ( 
        <>
            {loading ? <h1> data is loading </h1> : (
                
                <div className="projects">
                    <section className="menu">
                        <div className="title">
                                <h2>Project Showcase</h2>
                                {error && <h1>error</h1>}
                                    {/* <Categories categories={categories} filterItems={filterItems} /> */}
                                    {/* <Menu items={menuItems} />  */}
                            <div className="underline"></div>
                            {console.log(`menuItems`, menuItems)}
                        </div>
                    </section>
                </div>
            )}
        </>
    )
}

export default Projects
