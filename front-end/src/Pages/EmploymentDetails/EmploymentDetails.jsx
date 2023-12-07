import CompanyDescription from "../../layouts/CompanyDescription";
import JobDescription from "../../layouts/JobDescription";
import logo from "../../assets/mercado.jpeg";
import "./EmploymentDetails.css";
import { Link } from "react-router-dom";

export default function EmployementDetails() {
  const descCompany = JSON.stringify({
    image: logo,
    name: "Livre Merchado",
    location: "Argentina, CABA",
    employees: "800 - 1200",
    description:
      "We are a cutting-edge tech company dedicated to pushing boundaries and creating innovative solutions that enhance user experiences. Join our dynamic team and be part of shaping the future of digital design.",
    vacancy: 23,
  });
  const descJob = JSON.stringify({
    title: "Lead UI/UX Designer",
    date: "2022/12/12",
    company: {
      name: "Livre Merchado",
    },
    recruiter: {
      name: "Gonzales",
    },
    salary: 8000,
    salaryVariable: 4000,
    experience: 5,
    locacion: "Remote/Hybrid",
    description:
      "We are seeking a dynamic Lead UI/UX Designer to join our innovative team. In this role, you will spearhead the design strategy and execution, ensuring a seamless and visually appealing user experience across our digital platforms. The ideal candidate should have a minimum of 5 years of hands-on experience in UI/UX design, with a strong portfolio showcasing their proficiency in creating intuitive and aesthetically pleasing interfaces. As a leader in the design process, you will collaborate closely with cross-functional teams, translating business requirements into compelling design solutions. Proficiency in industry-standard design tools, a keen eye for detail, and a deep understanding of user-centered design principles are essential. Join us in shaping the future of our products and delivering an exceptional user experience.",
  });
  return (
    <div
      id="employement-details-container"
      className="flex flex-col text-center"
    >
      <div id="title-area" className="p-4 z-30">
        <Link to={'/employments'}><img id="back-icon" src="arrow-left-back.svg" /></Link>
        <h1 className="font-semibold text-4xl">Job Details</h1>
      </div>
      <div
        id="desscription-area"
        className="flex flex-row px-10 gap-10 z-50 relative bottom-28 ml-6"
      >
        <CompanyDescription description={descCompany} />
        <JobDescription description={descJob} />
      </div>
    </div>
  );
}
