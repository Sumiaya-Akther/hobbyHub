import React from 'react';

const StatsCard = ({ title, count, icon }) => {
    return (
        <div className="flex items-center gap-4 p-5 bg-white dark:bg-gray-800 rounded-xl shadow">
            {icon}
            <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">{title}</p>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">{count}</h3>
            </div>
        </div>
    );
};

export default StatsCard;

