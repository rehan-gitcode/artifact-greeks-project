"use client";

import { useEffect, useState } from "react";
import { Pencil, Trash2, Search } from "lucide-react";

export default function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [editUser, setEditUser] = useState(null);
  const [searchMode, setSearchMode] = useState("");

  const fetchData = async () => {
    const res = await fetch("http://localhost:2000/getdata");
    const data = await res.json();
    setUsers(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const deleteUser = async (id) => {
    if (!confirm("Are you sure you want to delete this profile?")) return;
    await fetch(`http://localhost:2000/deletedata/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },  
      body: JSON.stringify({ id }),
    });
    fetchData();
  };

  const updateUser = async () => {
  if (!editUser?._id) {
    alert("User ID missing");
    return;
  }

  await fetch(`http://localhost:2000/update/${editUser._id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(editUser),
  });

  setEditUser(null);
  fetchData();
};


  

  const filteredUsers = users.filter((u) =>
    searchMode ? u.mode?.toLowerCase() === searchMode.toLowerCase() : true
  );

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      

      {/* Search Bar */}
      <div className="mb-6 flex items-center gap-2">
        <Search className="text-gray-500" />
        <select
          value={searchMode}
          onChange={(e) => setSearchMode(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="">All Modes</option>
          <option value="online">Online</option>
          <option value="offline">Offline</option>
          <option value="hybrid">Hybrid</option>
        </select>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4 ">
        {filteredUsers.map((user) => (
          <div
            key={user._id}
            className="bg-white rounded-2xl shadow  pl-20 p-4 relative"
          >
            <div className="absolute top-2 right-2 flex gap-2">
              <button
                onClick={() => setEditUser(user)}
                className="text-blue-600 hover:text-blue-800"
              >
                <Pencil size={18} />
              </button>
              <button
                onClick={() => deleteUser(user._id)}
                className="text-red-600 hover:text-red-800"
              >
                <Trash2 size={18} />
              </button>
            </div>

            <h2 className="text-2xl font-semibold">{user.fullName}</h2>
            <p className="text-sm text-gray-600">{user.email}</p>
            <p className="mt-2"><span className="font-medium pr-3 ">Mobile: </span>{user.mobile}</p>
            <p> <span className="font-medium pr-3">Qualification:   </span>{user.qualification}</p>
            <p> <span className="font-medium  pr-3">City:</span> {user.city}</p>
            <p className="mt-2">
              <span className="font-medium  pr-3">Mode:</span> {user.mode}
            </p>
            <p>
              <span className="font-medium  pr-3">Batch:</span> {user.batch}
            </p>
            <p className="mt-2 text-sm text-gray-700"><span className="font-medium">Queries:</span>{user.queries}</p>
          </div>
        ))}
      </div>

      {/* Edit Modal */}
      {editUser && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
          <div className="bg-white rounded-xl p-6 w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Edit Profile</h2>

            {[
              "fullName",
              "email",
              "mobile",
              "qualification",
              "mode",
              "batch",
              "city",
              "queries",
            ].map((field) => (
              <input
                key={field}
                className="border p-2 rounded w-full mb-2"
                placeholder={field}
                value={editUser[field] || ""}
                onChange={(e) =>
                  setEditUser({ ...editUser, [field]: e.target.value })
                }
              />
            ))}

            <div className="flex justify-end gap-2 mt-4">
              <button
                onClick={() => setEditUser(null)}
                className="px-4 py-2 border rounded"
              >
                Cancel
              </button>
              <button
                onClick={updateUser}
                className="px-4 py-2 bg-blue-600 text-white rounded"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}







//  "use client";

// import { useEffect, useState } from "react";
// // import { Card, CardContent } from "@/components/ui/card";
// // import { Button } from "@/components/ui/button";

// export default function AdminDashboard() {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch("http://localhost:2000/getdata")
//       .then((res) => res.json())
//       .then((result) => {
//         setData(result);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error(err);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) return <p className="p-6">Loading data...</p>;

//   return (
//     <div className="p-6 grid gap-4">
//       <h1 className="text-2xl font-bold">Admin Dashboard</h1>

//       {data.length === 0 && <p>No data found</p>}

//       {data.map((item, index) => (
//         <Card key={index} className="rounded-2xl shadow">
//           <CardContent className="p-4 flex justify-between items-center">
//             <div>
//               <p className="font-semibold">Name: {item.fullname}</p>
//               <p className="text-sm text-gray-600">email: {item.email}</p>
//             </div>
//             <Button variant="outline">View</Button>
//           </CardContent>
//         </Card>
//       ))}
//     </div>
//   );
// }
