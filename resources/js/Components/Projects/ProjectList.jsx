import React from "react";

const isProjects = (projects) => {
    return projects.map((data, i) => {
        return (
            <div key={i} className="card w-96 bg-base-100 shadow-xl">
                <figure>
                    <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{data.project_name}</h2>
                    <p>{data.project_desc}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Category</div>
                        <div className="badge badge-outline">
                            {data.project_client}
                        </div>
                    </div>
                </div>
            </div>
        );
    });
};

const noProjects = () => {
    return <div>Data tidak ditemukan</div>;
};

const ProjectList = ({ projects }) => {
    return !projects ? noProjects() : isProjects(projects);
};

export default ProjectList;
