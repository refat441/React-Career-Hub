import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
  const [job, setJob] = useState([]);
  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJob(data));
  }, []);

  return (
    <div className="text-center mt-5">
      <h2 className="text-4xl">Features Jobs {job.length}</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
        fugiat. Voluptatum dolores perspiciatis expedita. Fuga possimus
        doloremque sapiente cupiditate aperiam consequuntur, obcaecati
        asperiores veniam facere totam est, quas illo! Possimus!
      </p>

      <div className="grid grid-cols-2 gap-6 my-6">
        {job.map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>
    </div>
  );
};

export default FeaturedJobs;
