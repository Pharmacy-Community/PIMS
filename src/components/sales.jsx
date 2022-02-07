import {
  Datagrid,
  DateField,
  List,
  ReferenceField,
  TextField,
} from "react-admin";

export const SaleList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <DateField source="date" />
      <ReferenceField source="customer_id" reference="customers">
        <TextField source="name" />
      </ReferenceField>
    </Datagrid>
  </List>
);
