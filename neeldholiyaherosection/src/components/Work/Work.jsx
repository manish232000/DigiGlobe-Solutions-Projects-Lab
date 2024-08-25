import { useState } from "react";
import WorkCard from "./WorkCard";
import "./Work.css";
import roadsign from "../../assets/img/roadsign.png";
import aerofit from "../../assets/img/aerofit.jpg";
import diamond from "../../assets/img/diamond.png";
import health from "../../assets/img/health.jpg";
import imageEditor from "../../assets/img/image-editor.jpg";

const filters = ["All", "Web Development", "Machine Learning", "Data Science", "Desktop Application"];
const allWorks = [
    {
        img: roadsign,
        title: "Road Sign Detection",
        tags: ["Machine Learning","Web Development"],
        description: "Trained the Convolutional Neural Network model on a Russian Dataset of Road Sign Images and deployed it on a website.",
        link: "https://github.com/AnayGarodia/The-Logical-Order"
    },
    {
        img: aerofit,
        title: "Aerofit Case Study",
        tags: ["Data Science"],
        description: "Performed EDA on the dataset and gave insights, and  proposed some business recommendations to the company.",
        link: "https://docs.google.com/document/d/1Cud1JjUHDgl3ZsegtKG4YZXTJCLAbINcmsXprAap5Qw/edit?usp=sharing"
    },
    {
        img: diamond,
        title: "Diamond Price Prediction",
        tags: ["Data Science", "Machine Learning"],
        description: "Deployed a multiple linear regression model. Checked for multicollinearity, error analysis & homoscedasity.",
        link: "https://colab.research.google.com/drive/1BI-YYNa6xiWb58a1JadEkXl8oMRBB_eP?usp=sharing"
    },
    {
        img: health,
        title: "HealSYNC",
        tags: ["Web Development"],
        description: "A comprehensive platform for doctors to manage their patients, appointments, and prescriptions.",
        link: "https://github.com/arthurW1935/skill-overflow"
    },
    {
        img: imageEditor,
        title: "Image Editor",
        tags: ["Desktop Application"],
        description: "An Image Editor with Basic Editing Features like Rotate, Flip, GrayScale, Blurr, etc",
        link: "https://github.com/neeldholiya04/Image_Editor"
    },

]

function Work(){
    const [filterBy, setFilterBy] = useState("All");
    let works = allWorks;
    if(filterBy !== "All") works = works.filter(work => work.tags.includes(filterBy));

    return (
        <section className="work flex-column center" id="work">
            <div className="work-head flex-column center">
                <h1 className="work-brand primary-font large-text">
                    My Work
                </h1>
                <p className="work-desc secondary-font">
                    I have worked on a variety of projects ranging from Web Development to Machine Learning. Here are some of my works. 
                </p>
            </div>
            <div className="work-container">
                <div className="work-filter secondary-font">
                    Filter by: {filters.map((filter, index) => (
                        <button key={index} onClick={() => setFilterBy(filter)} className={`work-filter-button secondary-font ${filterBy === filter ? 'active' : ''}`}>{filter}</button>
                    ))}
                </div>
                <div className="work-contents flex wrap">
                    {works.map((work, index) => (<WorkCard key={index} index={index} {...work}/>))}
                </div>
            </div>
        </section>
    )
}

export default Work;