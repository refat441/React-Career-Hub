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
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Job;
