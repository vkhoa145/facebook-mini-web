import ActivityList from '@/components/activity-list/activity-list';
import SideBar from '@/components/side-bar/side-bar';
import { ReactNode } from 'react';

export default function NewFeedLayout({ children }: { children: ReactNode }) {
  return (
    <div className='grid grid-cols-10 mt-14'>
      <SideBar />
      <div className='col-start-4 col-span-4'>{children}</div>
      <ActivityList />
    </div>
  );
}
