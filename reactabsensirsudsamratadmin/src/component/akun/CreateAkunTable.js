import "../../App.css"; // We'll create this file to add custom styles
import TableBody from "./CreateAkunTableComponent";

const CreateAkunTable = () => {
  return (
    <div className=" p-8">
      <table className=" table table-lg text-center w-full border-collapse mt-5">
        <thead>
          <tr>
            <th></th>
            <th>Nama</th>
            <th>Password</th>
            <th>NIK</th>
            <th>Bidang/Jabatan</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <TableBody />
        </tbody>
      </table>
    </div>
  );
};

export default CreateAkunTable;
