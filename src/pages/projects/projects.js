import git from "../../assets/github.png";
import linkIcon from "../../assets/icons/link_icon.svg";
import React,{useState} from "react";
import "./projects.css";
function Projects() {
const [activeItemID, setActiveItemID] = useState("");
  function projectShow(id) {
    if(activeItemID){
      document.getElementById(activeItemID).classList.remove('project_item_active');
    }
    document.getElementById(id).classList.add('project_item_active');
    setActiveItemID(id);
  }
  function OpenNewTab(params) {
    params === "git"
      ? window.open("https://github.com/sanoop7/Tictacktoe", "_blank")
      : window.open("https://tic-tac-toe-sanoop.netlify.app", "_blank");
  }

  return (
    <div className="projects" id="projects">
      <span className="section_1_head"><span className="Myself_I">P</span>rojects</span>
      <div className="project_main">
       <div className="projects_main_list">
        <div id="project_item_1" className="project_item" onClick={(e) => projectShow(e.target.id)}>
          <div className="project_links">
            <div className="demo_link" onClick={() => OpenNewTab("demo")}><img className="project_links_icon" alt="pro_pic" src={linkIcon}  />Demo</div>
            <div className="repo_link" onClick={() => OpenNewTab("git")}><img className="project_links_icon" alt="pro_pic" src={git} />Repo</div>
          </div>
        </div>  
        <div id="project_item_2" className="project_item" onClick={(e) => projectShow(e.target.id)}>
          <div className="project_links">
            <div className="demo_link" onClick={() => OpenNewTab("demo")}><img className="project_links_icon" alt="pro_pic" src={linkIcon}  />Demo</div>
            <div className="repo_link" onClick={() => OpenNewTab("git")}><img className="project_links_icon" alt="pro_pic" src={git} />Repo</div>
          </div>
        </div>
       </div>
       <div className="project_des">

       </div>
      </div>
    </div>
  );
}

export default Projects;
