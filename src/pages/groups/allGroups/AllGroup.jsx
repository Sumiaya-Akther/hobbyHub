import React, { useEffect, useMemo, useState } from 'react';
import GroupCard from './groupCard/GroupCard';
import Loading from '../../../components/loading/Loading';

const AllGroup = () => {
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState('date');     // 'date' or 'name'
  const [sortOrder, setSortOrder] = useState('desc');     // 'asc' or 'desc'

  /* ❶ মাত্র একবার সব ডেটা এনে রাখি */
  useEffect(() => {
    fetch('http://localhost:3000/groups')
      .then(r => r.json())
      .then(d => { setGroups(d); setLoading(false); })
      .catch(e => { console.error(e); setLoading(false); });
  }, []);


  const sortedGroups = useMemo(() => {
    const collator = new Intl.Collator('en', { sensitivity: 'base' });

    return [...groups].sort((a, b) => {
      let aField = a[sortBy];
      let bField = b[sortBy];


      if (sortBy === 'date') {
        aField = aField ? new Date(aField) : new Date(0);
        bField = bField ? new Date(bField) : new Date(0);
        return sortOrder === 'asc'
          ? aField - bField
          : bField - aField;
      } else {
        aField = aField ? aField.toString() : '';
        bField = bField ? bField.toString() : '';
        return sortOrder === 'asc'
          ? collator.compare(aField, bField)
          : collator.compare(bField, aField);
      }
    });
  }, [groups, sortBy, sortOrder]);

  if (loading) {
    return <Loading />;
  }

  return (
    <section className="px-4 py-10 space-y-6">
      <h1 className="text-3xl md:text-4xl font-bold text-cyan-600 dark:text-cyan-300 mb-2 text-center">
        All Hobby Groups
      </h1>
      <p className="text-center mb-10">
        Explore hobby groups and find your perfect match!
      </p>


      {/* ❸ Sort controls */}
      <div className="flex items-center justify-center gap-4 mb-6">
        <select
          value={sortBy}
          onChange={e => setSortBy(e.target.value)}
          className="border px-4 py-2 rounded-md dark:bg-gray-800 dark:text-white"
        >
          <option value="date">Sort by Date</option>
          <option value="name">Sort by Name</option>
        </select>

        <select
          value={sortOrder}
          onChange={e => setSortOrder(e.target.value)}
          className="border px-4 py-2 rounded-md dark:bg-gray-800 dark:text-white"
        >
          <option value="desc">Descending</option>
          <option value="asc">Ascending</option>
        </select>
      </div>

      {/* ❹ Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sortedGroups.map(g => (
          <GroupCard key={g._id} group={g} />
        ))}
      </div>
    </section>
  );
};

export default AllGroup;
