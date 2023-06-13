import GenericService from "./GenericService";

class CartService extends GenericService {
  constructor() {
    super();
  }

  getCartItems = (userId) => this.get("/cart/" + userId);
  addCartItem = (data) => this.post("/cart", data);
  updateCartItem = (_id, data) => this.put("/cart/" + _id, data);
  deleteCartItem = (_id) => this.delete("/cart/" + _id);
}

let cartService = new CartService();
export default cartService;
