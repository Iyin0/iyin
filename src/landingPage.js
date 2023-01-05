import { projects } from './projects';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { useRef } from 'react';


const LandingPage = () => {

    const my_project = useRef(null)
    const scroll = () => my_project.current.scrollIntoView()

    return (
        <div className="landingPage">
            <section className="front">
                <div className="container" data-aos="fade-right">
                    <div className="intro">
                        <div className="bio">
                            <h1>Iyinoluwa Bilewu</h1>
                            <h2>Web Developer</h2>
                            <p>Hi! I'm iyin. A passionate web app developer who have developed and deployed websites using HTML,
                                SCSS and Javascript along with ReactTS (Typescript)and NodeJS. I have also utilized database management systems such as My SQL and MongoDB</p>
                        </div>
                        <HashLink smooth to="/" className="project-link" onClick={scroll}>SEE MY PROJECTS</HashLink>
                        <p className='all-links'><a href="https://github.com/Iyin0" className="links">Github</a> / <a href="https://www.linkedin.com/in/isaac-bilewu-906716196/" className="links">LinkedIn</a> / <a href="https://drive.google.com/file/d/1WLTdXK3IeLdsGVMfYlhUJnLtz9rdzTHU/view?usp=sharing" className="links">Resume</a></p>
                    </div>
                </div>
                <div className="container" data-aos="fade-left">
                    <div className="pics">
                        <img src={require("./images/logo_LOGO_resized.png")} alt="logo" />
                    </div>
                </div>
            </section>

            <section className="my-project" id="projects" ref={my_project}>
                <h2 data-aos="fade-up">MY PROJECTS</h2>
                {projects.map((project) => (
                    <div className="project-list" key={project.id} data-aos="fade-up">
                        <div className="project-info" data-aos="fade-right">
                            <h3>{project.name}</h3>
                            <p className="info">{project.info}</p>
                            <p className="dev-tool">{project.dev_tool}</p>
                            <Link to={`/project/${project.id}`} className='check'>MORE DETAILS</Link>
                        </div>
                        <Link to={`/project/${project.id}`} className="img-container" data-aos="fade-left"><img src={project.features[0].image[0]} alt="project thumbnail" className="proj-img"></img></Link>
                    </div>
                ))}
            </section>
        </div>
    );
}

export default LandingPage;