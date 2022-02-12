import {
  Datagrid,
  DateField,
  EditGuesser,
  List,
  ReferenceField,
  TextField,
} from "react-admin";


const SaleList = (props) => (
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

export default {
  list: SaleList,
  edit: EditGuesser
}