import type { NextPage } from 'next';
import { DashboardLayout } from '@/components';
import { Dashboard } from '@/screens';

const DashboardPage: NextPage = () => {
  return (
    <DashboardLayout>
      <Dashboard />
    </DashboardLayout>
  );
};

export default DashboardPage;
