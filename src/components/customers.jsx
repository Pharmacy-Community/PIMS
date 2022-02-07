import {
  List,
  Datagrid,
  TextField,
  EditButton,
  SimpleForm,
  Edit,
  TextInput,
  Create,
} from "react-admin";

const CustomerTitle = ({ record: customer }) => {
  return <span>{customer ? customer.name : ""}</span>;
};

const CustomerCreate = (props) => (
  <Create title={CustomerTitle} {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="address" />
      <TextInput source="contact" />
    </SimpleForm>
  </Create>
);

const CustomerEdit = (props) => (
  <Edit title={<CustomerTitle />} {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="address" />
      <TextInput source="contact" />
    </SimpleForm>
  </Edit>
);

const CustomersFilters = [<TextInput source="name" label="Name" alwaysOn />];

const CustomersList = (props) => (
  <List filters={CustomersFilters} {...props}>
    <Datagrid rowClick="edit">
      <TextField source="name" />
      <TextField source="address" />
      <TextField source="contact" />
      <EditButton />
    </Datagrid>
  </List>
);

export { CustomersList, CustomerEdit, CustomerCreate };
