import * as React from "react";
import { Admin, Resource } from "react-admin";
import drfProvider, {
  jwtTokenAuthProvider,
  fetchJsonWithAuthJWTToken,
} from "ra-data-django-rest-framework";
import suppliers from "./components/suppliers";
import purchases from "./components/purchases";
import expenses from "./components/expenses";
import customers from "./components/customers";
import sales from "./components/sales";
import accounts from "./components/accounts";
import products from "./components/products";
import groups from "./components/groups";
import users from "./components/users";
import inventory from "./components/inventory";

const apiBaseUrl = "http://localhost:7000";

// TODO Add Auth provider
const authProvider = jwtTokenAuthProvider({
  obtainAuthTokenUrl: `${apiBaseUrl}/auth/jwt/create/`,
});
const dataProvider = drfProvider(apiBaseUrl, fetchJsonWithAuthJWTToken);

const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider} disableTelemetry>
    <Resource name="sales" {...sales} />
    <Resource name="customers" {...customers} />
    <Resource name="purchases" {...purchases} />
    <Resource name="suppliers" {...suppliers} />
    <Resource name="products" {...products} />
    <Resource name="inventory" {...inventory} />
    <Resource name="expenses" {...expenses} />
    <Resource name="accounts" {...accounts} />
    <Resource name="users" {...users} />
    <Resource name="groups" {...groups} />
  </Admin>
);

export default App;
