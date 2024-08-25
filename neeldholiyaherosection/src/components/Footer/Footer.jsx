import FooterCard from "./FooterCard";
import "./Footer.css";

const skills = [
    {
        heading: "Languages",
        contentList: ["Python", "Java", "C++", "C", "JavaScript"]
    },
    {
        heading: "Tools",
        contentList: ["MySQL", "Git", "Docker", "Postman", "VS Code", "Jupyter", "PyCharm", "IntelliJ"]
    },
    {
        heading: "Frameworks",
        contentList: ["Node", "React", "Numpy", "Pandas", "Matplotlib", "Seaborn", "Spring", "Robotics Operating System"]
    }
]

function Footer(){
    return (
        <footer className="footer flex wrap" id="contact">
            <div className="footer-personal-content flex-column">
                <h1 className="primary-font">
                    Want to work with me?
                </h1>
                <p className="secondary-font">
                    Want to hire me for your organisation? Or got some ideas in mind? I am always open to new opportunities and collaborations. Feel free to reach out to me. 
                </p>
                <a href="https://drive.google.com/file/d/1IR3K-YKbpvLwStTdmWzE7xgeqAzuSBo2/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="footer-resume secondary-font"> Check out my Resume</a>

                <div className="footer-contact flex-column">
                    <h3 className="primary-font">
                        Contact Me
                    </h3>
                    <a href="mailto:neeldholiya04@gmail.com" target="_blank" rel="noopener noreferrer" className="secondary-font">
                        Email
                    </a>
                    <a href="https://www.linkedin.com/in/neel-dholiya040205" target="_blank" rel="noopener noreferrer" className="contact-link secondary-font">
                        LinkedIn
                    </a>
                    <a href="https://www.instagram.com/neeldholiya04/" target="_blank" rel="noopener noreferrer" className="contact-link secondary-font">
                        Instagram
                    </a>
                    <a href="https://github.com/neeldholiya04" target="_blank" rel="noopener noreferrer" className="contact-link secondary-font">
                        Github
                    </a>
                </div>
            </div>
            <div className="footer-card-container flex wrap">
                {skills.map((skill, index) => <FooterCard key={index} index={index} {...skill}/>)}
            </div>      
        </footer>
    )
}

export default Footer;
