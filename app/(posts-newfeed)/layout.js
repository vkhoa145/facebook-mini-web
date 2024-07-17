import ActivityList from "@/components/activity-list/activity-list";
import SideBar from "@/components/side-bar/side-bar";

export default function NewFeedLayout({ children }) {
  return (
    <div className="grid grid-cols-10 mt-14">
      <SideBar/>
      <div className="col-start-4 col-span-4">
        {children}
      </div>
      <ActivityList/>
    </div>
  );
}
