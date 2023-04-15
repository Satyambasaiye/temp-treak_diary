import React from "react";
function Home() {
  return (
    <div className="flex flex-col  items-center h-screen ">
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white rounded-lg shadow p-8">
          <h2 className="md:text-2xl text-lg font-bold mb-2">Users</h2>
          <p className="text-gray-600">Total: 100 </p>
        </div>
        <div className="bg-white rounded-lg shadow p-8">
          <h2 className="text-lg font-bold mb-2 md:text-2xl ">Sales</h2>
          <p className="text-gray-600">Total: $10,000</p>
        </div>
        <div className="bg-white rounded-lg shadow p-8">
          <h2 className="text-lg font-bold mb-2 md:text-2xl ">Orders</h2>
          <p className="text-gray-600">Total: 50</p>
        </div>
      </div>
    </div>
  );
}
export default Home;
