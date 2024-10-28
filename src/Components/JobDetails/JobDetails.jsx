import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const job = jobs?.find((job) => job.id === idInt);
  console.log(job);
  return (
    <div>
      <div className="grid gap-4 md:grid-cols-4 mt-10">
        <h2>The Job IS: {job.job_title}</h2>
        <div className="border md:col-span-3">
          <p>{job.company_name}</p>
        </div>
        <div className="broder">Refat 3</div>
        <button className="btn btn-laberder">Apply Now</button>
      </div>
    </div>
  );
};

export default JobDetails;
