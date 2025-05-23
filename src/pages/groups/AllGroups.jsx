import React from 'react';
import { useLoaderData } from 'react-router';

const AllGroups = () => {
    const groups = useLoaderData();
    console.log(groups);
    

    return (
        <div>
            <h1>All group</h1>
        </div>
    );
};

export default AllGroups;