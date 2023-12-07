import "./companyDescription.css";

export default function CompanyDescription({ description }) {
  const des = JSON.parse(description);
  return (
    <div
      id="company-container"
      className="flex flex-col content-center gap-5 bg-white text-black h-fit rounded-xl basis-1/4 p-6"
    >
      <div className=" basis-4/12 text-center">
        <div id="img-logo-company">
          <img src={des.image} className="mx-auto" />
        </div>
        <h2 className="font-medium text-2xl">{des.name}</h2>
      </div>

      <div className="basis-1/12 flex flex-row text-left">
        <img src="location.svg" className="w-12 m-auto  basis-1/5" />
        <div className="col-span-3 my-auto  basis-4/5  ml-5">
          <h3 className="font-semibold text-xl">{des.location}</h3>
          <p>Location</p>
        </div>
      </div>

      <div className="basis-1/12 flex flex-row text-left">
        <img src="person.svg" className="w-12 m-auto basis-1/5" />
        <div className="col-span-3 my-auto  basis-4/5 ml-5">
          <h3 className="font-semibold text-xl">{des.employees}</h3>
          <p>employees</p>
        </div>
      </div>

      <div className="basis-4/12 text-center mx-auto">
        <h4>About Company</h4>
        <p className="text-left">{des.description}</p>
      </div>

      <button className="basis-1/12 disable cursor-default bg-slate-200 rounded-md p-2 px-8 m-auto">
        {des.vacancy} Vacancy
      </button>
    </div>
  );
}
