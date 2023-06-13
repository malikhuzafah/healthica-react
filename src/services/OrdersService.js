import GenericService from "./GenericService";

class OrdersService extends GenericService {
  constructor() {
    super();
  }

  getOrders = () => this.get("/orders");
  getOrder = (_id) => this.get("/orders/" + _id);
  addOrder = (data) => this.post("/orders", data);
  updateOrder = (_id, data) => this.put("/orders/" + _id, data);
  deleteOrder = (_id) => this.delete("/orders/" + _id);
}

let orderService = new OrdersService();
export default orderService;
