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

export const AccountCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <SelectInput
        source="category"
      />
      <NumberInput source="balance" />
    </SimpleForm>
  </Create>
);

export const AccountEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="name" />
    </SimpleForm>
  </Edit>
);

export const AccountList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="name" />
      <TextField source="category" />
      <NumberField source="balance" />
    </Datagrid>
  </List>
);
