import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import StatsCard from '../statsCard/StatsCard';
import { FaUsers, FaUserCheck } from "react-icons/fa";

const DashHome = () => {
    const { user } = useContext(AuthContext);
    const [stats, setStats] = useState({
     total: 0, mine: 0
    });


 useEffect(() => {
    const loadCounts = async () => {
      const [all, mine] = await Promise.all([
        fetch("https://hobby-hub-server-one-tau.vercel.app/groups/count").then(r => r.json()),
        fetch(`https://hobby-hub-server-one-tau.vercel.app/mygroups/count?email=${user.email}`).then(r => r.json()),
      ]);
      setStats({ total: all.count, mine: mine.count });
    };
    loadCounts();
  }, [user.email]);

    return (
    <section className="space-y-8">
      {/* user greeting */}
      <div className="flex items-center gap-4 bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
        <img src={user.photoURL} alt="" className="w-16 h-16 rounded-full" />
        <div>
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
            Welcome, {user.displayName || "User"}!
          </h2>
          <p className="text-gray-500 dark:text-gray-400">{user.email}</p>
        </div>
      </div>

      {/* stats cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatsCard
          title="Total Groups"
          count={stats.total}
          icon={<FaUsers className="text-3xl text-cyan-600" />}
        />
        <StatsCard
          title="My Groups"
          count={stats.mine}
          icon={<FaUserCheck className="text-3xl text-emerald-500" />}
        />
      </div>
    </section>
    );
};

export default DashHome;