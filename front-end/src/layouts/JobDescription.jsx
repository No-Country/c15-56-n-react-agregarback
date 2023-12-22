import { useState } from "react";
import "./jobDescription.css";
import Modal from "../components/Modal";

export default function JobDescription({ description }) {
  const [modalOpen, setModalOpen] = useState(false);
  const desc = JSON.parse(description);
  const date = new Date(desc.date);
  const months = [
    "January",
    "Fenbruary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const modalFunc = (e) => {
    e.preventDefault();
    setModalOpen(true);
  };

  return (
    <div
      id="jobdescriptio-container"
      className="bg-white text-black p-10 rounded-2xl grid grid-flow-row h-fit basis-3/4"
    >
      <div className="grid grid-flow-col cont-title-apply">
        <div className="col-span-5">
          <h1 className="font-medium text-4xl text-left text-[#363848]">
            {desc.title}
          </h1>
          <h3 className="font-normal text-lg text-left text-[#9183e6]">
            Posted by recruited {desc.recruiter.name} on{" "}
            {months[date.getMonth()]} {date.getDate()},{date.getFullYear()}
          </h3>
        </div>
        <img id="heart-icon" src="heart.svg" />
        <button
          id="applynow-btn"
          className="bg-sky-200 px-6 py-3 rounded-3xl text-sky-600"
          onClick={modalFunc}
        >
          Apply Now
        </button>
      </div>
      <div className="grid grid-flow-col grid-cols-3 px-10 py-10 text-left icons-description">
        <div className="flex flex-row gap-5">
          <img id="money-bag-icon" src="money-bag.svg" />
          <div>
            <h3>
              ${desc.salary} - ${desc.salary + desc.salaryVariable}
            </h3>
            <p>Monthly Salary</p>
          </div>
        </div>
        <div className="flex flex-row gap-5">
          <img id="compass-icon" src="compass.svg" />
          <div>
            <h3>{desc.experience}+ Years</h3>
            <p>Experience</p>
          </div>
        </div>
        <div className="flex flex-row gap-5">
          <img id="location-icon" className="" src="location-job.svg" />
          <div className="self-start">
            <h3>{desc.location}</h3>
            <p>Location</p>
          </div>
        </div>
      </div>
      <div className="row-span-4">
        <h2 className="font-semibold text-xl text-left my-5">
          Job Description
        </h2>
        <p className="text-left">{desc.description}</p>
      </div>
      <Modal isOpen={modalOpen} isClosed={() => setModalOpen(false)} />
    </div>
  );
}
