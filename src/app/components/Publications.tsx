type Publication = {
    title: string;
    url: string;
    date: string;
    journal: string;
    description: string;
};

const publications: Publication[] = [
    {
        title: "Clustering Eating Behaviors in Time: A Machine Learning Approach to Preventive Health",
        url: "https://towardsdatascience.com/clustering-eating-behaviors-in-time-a-machine-learning-approach-to-preventive-health/",
        date: "May 8, 2025",
        journal: "Towards Data Science",
        description: "An article exploring temporal dietary patterns using Modified Dynamic Time Warping and unsupervised clustering.",
    },
    {
        title: "End-to-End AWS RDS Setup with Bastion Host Using Terraform",
        url: "https://towardsdatascience.com/end-to-end-aws-rds-setup-with-bastion-host-using-terraform/",
        date: "Jul 28, 2025",
        journal: "Towards Data Science",
        description: "An article detailing the setup of AWS RDS with a Bastion host using Terraform.",
    },
    {
        title: "How to Import Pre-Annotated Data into Label Studio and Run the Full Stack with Docker",
        url: "https://towardsdatascience.com/how-to-import-pre-annotated-data-into-label-studio-and-run-the-full-stack-with-docker/",
        date: "August 29, 2025",
        journal: "Towards Data Science",
        description: "An article detailing the process of importing pre-annotated data into Label Studio and running the full stack with Docker.",
    },
    // Add more publications as needed
];

export default function Publications({ language }: { language: "en" | "fr" }) {
    return (
        <section id="publications" className="py-5 bg-white">
            <div className="container">
                <h2 className="text-center mb-5">
                    {language === "fr" ? "Publications" : "Publications"}
                </h2>
                <div className="row">
                    {publications.map((pub, index) => (
                        <div className="col-md-12 mb-4" key={index}>
                            <div className="card shadow-sm">
                                <div className="card-body">
                                    <h5 className="card-title">
                                        <a
                                            href={pub.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-decoration-none"
                                        >
                                            {pub.title}
                                        </a>
                                    </h5>
                                    <h6 className="card-subtitle mb-2 text-muted">{pub.date}</h6>
                                    <h6 className="card-subtitle mb-2 text-muted">{pub.journal}</h6>
                                    <p className="card-text">{pub.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
