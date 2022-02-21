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
  TextField,
  TextInput,
  SelectArrayInput,
  ChipField,
  ReferenceArrayInput,
  ReferenceArrayField,
  SingleFieldList
} from "react-admin";
import UserIcon from '@material-ui/icons/People';

const UserCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="first_name" />
      <TextInput source="last_name" />
      <TextInput source="username" />
      <TextInput source="email" />
      <ReferenceArrayInput reference="groups" source="groups" label="Groups">
        <SelectArrayInput>
          <ChipField source="name" />
        </SelectArrayInput>
      </ReferenceArrayInput>
      <BooleanInput source="is_superuser" />
      <BooleanInput source="is_active" />
    </SimpleForm>
  </Create>
);

const UserEdit = (props) => (
  <Edit mutationMode="pessimistic" {...props}>
    <SimpleForm>
      <TextField source="full_name" />
      <ReferenceArrayInput reference="groups" source="groups" label="Groups">
        <SelectArrayInput>
          <ChipField source="name" />
        </SelectArrayInput>
      </ReferenceArrayInput>
      <BooleanInput source="is_active" />
      <BooleanInput source="is_superuser" />
    </SimpleForm>
  </Edit>
);


const UsersFilter = [
  <TextInput label="Search" source="q" alwaysOn />
];

const UserList = (props) => (
  <List filters={UsersFilter} {...props}>
    <Datagrid rowClick="edit">
      <TextField source="full_name" />
      <EmailField source="email" />
      <ReferenceArrayField source="groups" reference="groups">
        <SingleFieldList>
          <ChipField source="name" />
        </SingleFieldList>
      </ReferenceArrayField>
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