import { FaLinkedin,FaGithub,FaEnvelope} from 'react-icons/fa';  // Import the LinkedIn icon

export default function About({state}) {
    const content={
        "English":
            {
                "about": "Software developer experienced in web development and data science. I am passionate about creating innovative solutions to complex problems. I am a quick learner and a team player who is always eager to learn new technologies and methodologies. And develop cloud-based applications using AWS services as S3 Bucket.",
              
            },

        "French":
        {
            "about": "Développeuse de logiciels expérimenté dans le développement web et la science des données. Je suis passionné par la création de solutions innovantes à des problèmes complexes. Je suis un apprenant rapide et un joueur d'équipe qui est toujours désireux d'apprendre de nouvelles technologies et méthodologies.",
        }

    }

    return (
  
        <section className="resume-section" id="about">
            <div className="resume-section-content">
                <h3 className="mb-0 ">
                    Yagmur GULEC
                  
                </h3>
                <div className="subheading mb-5">
                 
                    <a className="text-info" href="mailto:name@email.com">yagmurgulec89@gmail.com</a>
                </div>
                <p className="lead mb-5">{content[state]['about']}</p>
            
                <div className="social-icons">
                <a className="btn btn-primary mb-3 mx-3" href="YagmurGulecCV.pdf">{state==="English"?"Download my CV" :"Télécharger mon CV"}</a>

                  <a
                                    href="https://www.linkedin.com/in/yagmurgulec/"  // Replace with your LinkedIn profile URL
                                    target="_blank"  // Open in new tab
                                    rel="noopener noreferrer"  // Improve security
                                    className="social-icon"  // Optional class for custom styling
                                ><FaLinkedin /> </a>
                                    <a
                                    href="https://github.com/YagmurGULEC"  // Replace with your LinkedIn profile URL
                                    target="_blank"  // Open in new tab
                                    rel="noopener noreferrer"  // Improve security
                                    className="social-icon"  // Optional class for custom styling
                                >
                                <FaGithub /> </a>
                    </div>
            </div>
        </section>

    );
   }