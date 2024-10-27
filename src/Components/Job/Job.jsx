const Job = ({ job }) => {
  const {
    logo,
    job_title,
    company_name,
    location,
    job_type,
    salary,
    remote_or_onsite,
  } = job;
  return (
    <div className="card card-compact bg-base-100 w-50 shadow-xl">
      <figure>
        <img src={logo} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{job_title}</h2>
        <p>{company_name}</p>
        <div>
          <button className="px-5 py-2 font-extrabold border rounded border-[#7R90FE] mr-4">
            {remote_or_onsite}
          </button>
          <button className="px-5 py-2 font-extrabold border rounded border-[#7R90FE] mr-4">
            {job_type}
          </button>
        </div>
        <div className="card-actions justify-end">
          <button className="btn btn-primary"> View Details </button>
        </div>
      </div>
    </div>
  );
};

export default Job;
