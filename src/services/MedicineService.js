import GenericService from "./GenericService";

class MedicineService extends GenericService {
  constructor() {
    super();
  }

  getMedicines = () => this.get("/medicines");
  getMedicine = (_id) => this.get("/medicines/" + _id);
  addMedicine = (data) => this.post("/medicines", data);
  updateMedicine = (_id, data) => this.put("/medicines/" + _id, data);
  deleteMedicine = (_id) => this.delete("/medicines/" + _id);
}

let medicineService = new MedicineService();
export default medicineService;
