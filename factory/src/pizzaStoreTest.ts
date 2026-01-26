import ChicagoStore from "./ChicagoStore";
import NYPizzaStore from "./NYPizzaStore";

const nyStore = new NYPizzaStore();
const chicago = new ChicagoStore();

nyStore.orderPizza('cheese');
chicago.orderPizza('cheese');
