import {
  ArrayField,
  BooleanField,
  BooleanInput,
  Create,
  Datagrid,
  Edit,
  EmailField,
  List,
  ReferenceField,
  SimpleForm,
  SingleFieldList,
  TextField,
  TextInput,
} from "react-admin";
import UserIcon from '@material-ui/icons/People';

const UserCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="first_name" />
      <TextInput source="last_name" />
      <TextInput source="username" />
      <TextInput source="email" />
      <TextInput source="groups" />
      <BooleanInput source="is_superuser" />
      <BooleanInput source="is_active" />
    </SimpleForm>
  </Create>
);

const UserEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="first_name" />
      <TextInput source="last_name" />
      <TextInput source="groups" />
      <BooleanInput source="is_active" />
      <BooleanInput source="is_superuser" />
    </SimpleForm>
  </Edit>
);

const UserList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="first_name" />
      <TextField source="last_name" />
      <TextField source="username" />
      <EmailField source="email" />
      <ArrayField source="groups">
        <SingleFieldList>
          <TextField source="name" />
        </SingleFieldList>
      </ArrayField>
      <BooleanField source="is_active" />
      <BooleanField source="is_superuser" />
    </Datagrid>
  </List>
);


export default {
  create: UserCreate,
  edit: UserEdit,
  list: UserList,
  icon: UserIcon
}