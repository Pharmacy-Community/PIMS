import * as React from "react";
import { Admin, Resource, ListGuesser, EditGuesser, ShowGuesser } from "react-admin";
import drfProvider, {
  jwtTokenAuthProvider,
  fetchJsonWithAuthJWTToken,
} from "ra-data-django-rest-framework";
import {
  SupplierCreate,
  SupplierEdit,
  SupplierList,
  SupplierShow,
} from "./components/suppliers";
import { PurchaseCreate, PurchaseEdit, PurchaseList, PurchaseShow } from "./components/purchases";
import { ExpenseCreate, ExpenseList, ExpenseShow } from "./components/expenses";
import {
  CustomerCreate,
  CustomerEdit,
  CustomersList,
} from "./components/customers";
import { SaleList } from "./components/sales";
import { AccountCreate, AccountEdit, AccountList } from "./components/accounts";
import { ProductCreate, ProductEdit, ProductList } from "./components/products";
import { GroupCreate, GroupEdit, GroupList } from "./groups";
import { UserCreate, UserEdit, UserList } from "./components/users";
import { InventoryList } from "./components/inventory";

const apiBaseUrl =
  "https://8000-antoniomande-dashboard-j9ww8rpsthb.ws-eu30.gitpod.io";

// TODO Add Auth provider
const authProvider = jwtTokenAuthProvider({
  obtainAuthTokenUrl: `${apiBaseUrl}/auth/jwt/create/`,
});
const dataProvider = drfProvider(apiBaseUrl, fetchJsonWithAuthJWTToken);

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="sales" list={SaleList} />
    <Resource
      name="customers"
      list={CustomersList}
      edit={CustomerEdit}
      create={CustomerCreate}
    />
    <Resource name="purchases" list={PurchaseList} edit={PurchaseEdit} create={PurchaseCreate} show={PurchaseShow}/>
    <Resource
      name="suppliers"
      list={SupplierList}
      edit={SupplierEdit}
      create={SupplierCreate}
      show={SupplierShow}
    />
    <Resource
      name="products"
      list={ProductList}
      edit={ProductEdit}
      create={ProductCreate}
    />
    <Resource name="inventory" options={{label:"Inventory"}} list={InventoryList} show={ShowGuesser} edit={EditGuesser}/>
    <Resource name="expenses" list={ExpenseList} create={ExpenseCreate} show={ExpenseShow}/>
    <Resource
      name="accounts"
      list={AccountList}
      edit={AccountEdit}
      create={AccountCreate}
    />
    <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate}/>
    <Resource
      name="groups"
      list={GroupList}
      edit={GroupEdit}
      create={GroupCreate}
    />
  </Admin>
);

export default App;
