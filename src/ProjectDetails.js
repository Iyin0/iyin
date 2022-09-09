import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { projects } from "./projects";
import { HashLink } from 'react-router-hash-link';
import { useRef } from 'react';

const ProjectDetails = () => {

    const my_features = useRef(null)
    const scroll = () => my_features.current.scrollIntoView()

    const { id } = useParams()
    const project = projects.find(proj => proj.id === parseInt(id))
    const feat = `/project/${id}`

    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    return (
        <div className="project-detail">
            <section className="front">
                <div className="project-container" data-aos="fade-right">
                    <div className="project-intro">
                        <div className="project-about">
                            <h1>{project.name}</h1>
                            <h2>About</h2>
                            <p>{project.about}</p>
                            <p className="dev-tool">{project.dev_tool}</p>
                        </div>
                        <div className="project-feature-link">
                            <HashLink smooth to={feat} className="project-link" onClick={scroll}>FEATURES</HashLink>
                            <a href={project.link} className="project-link">VIEW WEB APP</a>
                        </div>
                    </div>
                </div>
                <div className="project-container" data-aos="fade-left">
                    <div className="project-pics">
                        <img src={project.features[0].image[0]} alt="project" />
                    </div>
                </div>
            </section>

            <section className="project-features" id="features" ref={my_features}>
                <h2 data-aos="fade-up">FEATURES</h2>
                {project.features.map((feature, index) => (
                    <div className="feature-list" key={index} data-aos="fade-up">
                        <h4 data-aos="fade-up">{feature.name}</h4>
                        <div className="feature-images">
                            {feature.image.map((feature_img, index) => (
                                <img src={feature_img} alt="feature_img" key={index} data-aos="fade-up" />
                            ))}
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
}

export default ProjectDetails;