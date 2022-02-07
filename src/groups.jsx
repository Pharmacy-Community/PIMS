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

export const GroupCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
        </SimpleForm>
    </Create>
);


export const GroupEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="name" />
        </SimpleForm>
    </Edit>
);


export const GroupList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
        </Datagrid>
    </List>
);

