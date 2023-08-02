import api from "../axios.config";

//get data pegawaii
const getEmployee = async () => {
  try {
    const data = await api.get("/employees");
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export { getEmployee };
