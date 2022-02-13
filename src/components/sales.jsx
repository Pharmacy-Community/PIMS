import {
  Datagrid,
  DateField,
  EditGuesser,
  List,
  ReferenceField,
  TextField,
  Create,
  SimpleForm,
  NumberInput,
  ReferenceInput,
  SelectInput,
  DateInput,
  ArrayInput,
  SimpleFormIterator
} from "react-admin";
import SaleIcon from '@material-ui/icons/AttachMoney';

const SaleCreate = (props) => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateInput source="date" />
        <ReferenceInput label="Customer" source="customer_id" reference="customers">
          <SelectInput optionText="name" optionValue="id" />
        </ReferenceInput>
        <ReferenceInput label="Payment Account" source="account_id" reference="accounts">
          <SelectInput optionText="name" optionValue="id" />
        </ReferenceInput>
        <ArrayInput source="items">
          <SimpleFormIterator>
            <ReferenceInput label="Product" source="product_id" reference="products">
              <SelectInput optionText="name" optionValue="id" />
            </ReferenceInput>
            <NumberInput source="pack_size" label="Pack Size" />
            <NumberInput source="sale_price" label="Sale Price" />
            <NumberInput source="quantity" label="Quantity" />
          </SimpleFormIterator>
        </ArrayInput>
      </SimpleForm>
    </Create>
  );
}


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
  create: SaleCreate,
  list: SaleList,
  edit: EditGuesser,
  icon: SaleIcon
}