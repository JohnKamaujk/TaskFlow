import Header from "@/components/Header";
import { PlusSquare } from "lucide-react";
import React from "react";

type Props = {
  activeTab: string;
  setActiveTab: (tabName: string) => void;
};

const ProjectHeader = ({ activeTab, setActiveTab }: Props) => {
  return (
    <div className="px-4 xl:px-6">
      <div className="pb-6 pt-6 lg:pb-4 lg:pt-8">
        <Header
          name="Product Design Development"
          buttonComponent={
            <button className="flex items-center rounded-md bg-blue-primary px-3 py-2 text-white hover:bg-blue-600">
              <PlusSquare className="mr-2 h-5 w-5" /> New Boards
            </button>
          }
        />
      </div>
    </div>
  );
};

export default ProjectHeader;
