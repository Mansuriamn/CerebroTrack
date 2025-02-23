import React from 'react'
import "./Explore.css"


const ExploreSection = ({ imgSrc, title, description }) => {
  return (
    <div className="explore">
      <div className="img-exp">
        <img height={"400px"} width={"100rem"} src={imgSrc} alt="Explore Section" />
      </div>
      <div className="content-exp">
        <h2>{title}</h2>
        <p>{description}</p>
        <button className="btn-exp">Explore More</button>
      </div>
    </div>
  );
};

const Explore = () => {
  const exploreData = [
    {
      imgSrc: "https://img.freepik.com/free-vector/organic-flat-illustration-people-asking-questions_23-2148904975.jpg?ga=GA1.1.269231880.1733222811&semt=ais_hybrid",
      title: `" What problem does this website solve ? "`,
      description:
        "This website helps users create personalized portfolios to showcase their skills, projects, and competitive programming achievements. It simplifies the process, making it accessible without technical expertise.",
    },
    {
      imgSrc: "https://img.freepik.com/free-vector/appointment-booking-with-smartphone_52683-40016.jpg?ga=GA1.1.269231880.1733222811&semt=ais_authors_boost",
      title: `" How to use this website and add information ? "`,
      description:
        "Users can register, log in, and access a dashboard to add information like photos, skills, projects, and coding stats. The platform offers simple forms for easy data input and updates.",
    },
    {
      imgSrc: "https://img.freepik.com/free-vector/cyber-data-security-online-concept-illustration-internet-security-information-privacy-protection_1150-37328.jpg?ga=GA1.1.269231880.1733222811&semt=ais_hybrid",
      title: `" How ensure security and privacy for users ? "`,
      description:
        "We ensure security through secure logins and data encryption. Users also control the visibility of their information to maintain privacy.",
    },
  ];

  return (
    <div>
      {exploreData.map((item, index) => (
        <ExploreSection
          key={index}
          imgSrc={item.imgSrc}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default Explore;