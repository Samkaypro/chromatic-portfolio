import { ArrowTopRightOnSquareIcon,CodeBracketSquareIcon } from "@heroicons/react/24/outline";
type ProjectProps = {
  projectName: string;
  projectSummary: string;
  techCard1: string;
  techCard2: string;
  techCard3: string;
  projectLink:string;
  backgroundImage:string;
  githubLink: string;
};


const ProjectCard = (props: ProjectProps) => {
  return (
    <div  >
      <div 
      style={{backgroundImage: `url(${props.backgroundImage})`, backgroundSize: 'cover',}}
      className='bg-gray-600 h-80 max-w-[18rem] rounded-md  mx-auto mb-12 text-white group'
      >
        <div className='bg-gray-600/70 h-80 w-72 rounded-md  px-4 mx-auto mb-12 text-white backdrop-brightness-[.2] '>
        <p className="font-extrabold text-lg pt-[60%]">{props.projectName}</p>
        <p className="text-sm pt-2">{props.projectSummary}</p>
        <div className="flex py-2">
          <p className="tech-stack-card">{props.techCard1}</p>
          <p className="tech-stack-card">{props.techCard2}</p>
          <p className="tech-stack-card">{props.techCard3}</p>
        </div>
        <div className="flex gap-x-4 items-center">
        <a href={`${props.githubLink}`} target='_blank' className={props.githubLink === "" ? `hidden` : `flex cursor-pointer text-white items-center`}>
          {/* <span className="underline pr-4 ">View Live Site</span> */}
          <CodeBracketSquareIcon className="h-5 w-5 underline my-2  cursor-pointer"/>
        </a>
        <a href={`${props.projectLink}`} target='_blank' className={props.projectLink === "" ? `hidden` : `flex cursor-pointer text-white items-center`}>
          {/* <span className="underline pr-4 ">View Live Site</span> */}
          <ArrowTopRightOnSquareIcon className="h-5 w-5 underline my-2  cursor-pointer"/>
        </a>
        </div>
      </div>
      </div>
    </div>
  );
};

export default ProjectCard;
