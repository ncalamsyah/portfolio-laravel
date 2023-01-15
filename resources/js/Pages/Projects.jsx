import PrimaryButton from "@/Components/PrimaryButton";
import React from "react";
import { Head, Link } from "@inertiajs/inertia-react";
import ProjectList from "@/Components/Projects/ProjectList";
import Paginator from "@/Components/Projects/Paginator";

export default function Projects(props) {
    return (
        <div>
            <Head title={props.title} />
            <div className="flex flex-col lg:flex-row lg:flex-wrap items-stretch justify-center gap-4 p-4">
                <ProjectList projects={props.projects.data} />
            </div>
            <div className="flex flex-col justify-center items-center">
                <Paginator meta={props.projects.meta} />
            </div>
        </div>
    );
}
