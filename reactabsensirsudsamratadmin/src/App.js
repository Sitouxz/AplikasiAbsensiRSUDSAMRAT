import logo from "./logo.svg";
import "./App.css";

const App = () => {
  const users = [
    {
      id: 1,
      name: "John Doe",
      age: 30,
      email: "john.doe@example.com",
      address: "123 Main Street",
      city: "New York",
      country: "USA",
    },
    {
      id: 2,
      name: "Jane Smith",
      age: 25,
      email: "jane.smith@example.com",
      address: "456 Oak Avenue",
      city: "Los Angeles",
      country: "USA",
    },
    {
      id: 3,
      name: "Michael Johnson",
      age: 28,
      email: "michael.johnson@example.com",
      address: "789 Elm Lane",
      city: "Chicago",
      country: "USA",
    },
  ];

  return (
    <div>
      <div className="justify-center items-center h-screen">
        <p className="text text-7xl font-bold">ABSENSI RSUD SAMRAT</p>
        <div class="overflow-x-auto">
          <table class="table">
            <thead>
              <tr>
                <th>id</th>
                <th>Name</th>
                <th>age</th>
                <th>email</th>
                <th>Address</th>
                <th>city</th>
                <th>Country</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.age}</td>
                  <td>{user.email}</td>
                  <td>{user.address}</td>
                  <td>{user.city}</td>
                  <td>{user.country}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default App;
