import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { SideBarLinks } from "./SideNav";
import { Home } from "@mui/icons-material";
import { useSelector } from "react-redux";
import {
  AlertCircle,
  AlertOctagon,
  AlertTriangle,
  BriefcaseBusiness,
  Layers3,
  ShieldAlert,
} from "lucide-react";
import { usePage } from "@inertiajs/react";

export default function AccordionUsage({ name, icon }) {
  const { latestProjects } = usePage().props;

  const isSideNavCollapsed = useSelector((state) => {
    state.global.isSideNavCollapsed;
  });

  return (
    <div>
      <Accordion
        className={`dark:bg-black dark:text-gray-100 ${isSideNavCollapsed ? "w-0 hidden" : "w-64"}`}
        style={{ borderRadius: 0 }}
        sx={{ boxShadow: "none" }}
      >
        <div className="ml-4">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            className="dark:text-gray-200 text-gray-900 font-semibold"
          >
            {icon}
            {name}
          </AccordionSummary>
        </div>

        <AccordionDetails>
          <div className="flex flex-col items-center justify-start mt-0">
            {name === "Projects" ? (
              <ProjectComponent latestProjects={latestProjects} />
            ) : (
              <PriorityLevelComponent />
            )}
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

const PriorityLevels = [
  {
    href: "/priority/urgent",
    icon: <AlertCircle className="text-gray-800 dark:text-gray-200 h-6 w-6" />,
    label: "Urgent",
  },
  {
    href: "/priority/high",
    icon: <ShieldAlert className="text-gray-800 dark:text-gray-200 h-6 w-6" />,
    label: "High",
  },
  {
    href: "/priority/medium",
    icon: (
      <AlertTriangle className="text-gray-800 dark:text-gray-200 h-6 w-6" />
    ),
    label: "Medium",
  },
  {
    href: "/priority/low",
    icon: <AlertOctagon className="text-gray-800 dark:text-gray-200 h-6 w-6" />,
    label: "Low",
  },

  {
    href: "/priority/backlog",
    icon: (
      <Layers3
        className="text-gray-800 dark:text-gray-200"
        fontSize="x-small"
      />
    ),
    label: "Backlog",
  },
];

const PriorityLevelComponent = () => {
  return PriorityLevels.map(({ href, icon, label }) => (
    <SideBarLinks
      key={label}
      className="py-2"
      href={href}
      icon={icon}
      label={label}
    />
  ));
};

const ProjectComponent = ({ latestProjects }) => {
  return latestProjects.map((project) => (
    <SideBarLinks
      key={project.id}
      className="py-2"
      href={"/projects/" + project.id}
      icon={
        <BriefcaseBusiness className="text-gray-800 dark:text-gray-200 h-5 w-5" />
      }
      label={"Project " + project.title}
    />
  ));
};
