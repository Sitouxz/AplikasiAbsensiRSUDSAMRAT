import "../../App.css";
import trash from "../../img/Trash.png";
import edit from "../../img/edit.png";
const CreateAkunTableComponent = () => {
  const tableData = [
    {
      profilPicture: "",
      name: "John Doe",
      password: "08:30 AM",
      nik: "Shift 1",
      Bidang: "Present",
      bukti: "Buka",
    },
    {
      profilPicture: "",
      name: "John Doe",
      password: "08:30 AM",
      nik: "Shift 1",
      Bidang: "Present",
      bukti: "Buka",
    },
    {
      profilPicture: "",
      name: "John Doe",
      password: "08:30 AM",
      nik: "Shift 1",
      Bidang: "Present",
      bukti: "Buka",
    },
    // Add other data rows here
  ];

  return (
    <>
      {tableData.map((row, index) => (
        <tr key={index}>
          <td>{row.profilPicture}</td>
          <td>{row.name}</td>
          <td>{row.password}</td>
          <td>{row.nik}</td>
          <td>{row.Bidang}</td>
          <td className="">
            <div className="flex justify-center items-center gap-2">
              <button>
                <img src={edit} alt="edit-logo" className=" h-7 w-7" />
              </button>
              <button className="flex justify-center items-center">
                <img src={trash} alt="trash-logo" className=" h-9 w-9" />
              </button>
            </div>
          </td>
        </tr>
      ))}
    </>
  );
};

export default CreateAkunTableComponent;
