import {
  Edit,
  Create,
  SimpleForm,
  TextInput,
  NumberField,
  List,
  Datagrid,
  TextField,
  NumberInput,
  Field,
  SelectInput,
} from "react-admin";



const AccountCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <SelectInput
        source="category"
        choices={[
          { id: 'CASH', name: 'CASH' },
          { id: 'MOBILE MONEY', name: 'MOBILE MONEY' },
          { id: 'BANK', name: 'BANK' },
        ]}
      />
      <NumberInput source="balance" />
    </SimpleForm>
  </Create>
);

const AccountEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="name" />
    </SimpleForm>
  </Edit>
);

const AccountList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="name" />
      <TextField source="category" />
      <NumberField source="balance" />
    </Datagrid>
  </List>
);


export default {
  create: AccountCreate,
  edit: AccountEdit,
  list: AccountList,
}