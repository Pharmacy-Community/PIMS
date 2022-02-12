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

const GroupCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
        </SimpleForm>
    </Create>
);


const GroupEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="name" />
        </SimpleForm>
    </Edit>
);


const GroupList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
        </Datagrid>
    </List>
);

export default {
    create: GroupCreate,
    edit: GroupEdit,
    list: GroupList
}