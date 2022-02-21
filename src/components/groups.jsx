import {
    List,
    Datagrid,
    TextField,
    EditButton,
    SimpleForm,
    Edit,
    TextInput,
    Create,
    ReferenceArrayField,
    SingleFieldList,
    ChipField,
    Show,
    TabbedShowLayout,
    Tab
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

const GroupsFilter = [
    <TextInput label="Search" source="q" alwaysOn />
]
const GroupList = props => (
    <List filters={GroupsFilter} {...props}>
        <Datagrid rowClick="edit">
            <TextField source="name" />
            <ReferenceArrayField source="users" reference="users" label="Users">
                <SingleFieldList>
                    <ChipField source="full_name" />
                </SingleFieldList>
            </ReferenceArrayField>
        </Datagrid>
    </List>
);

const GroupPermissionsList = (props) => (
    <List {...props}>
        <Datagrid rowClick="show">
            <TextField source="name" />
            <TextField source="name" />
        </Datagrid>
    </List>
);

const GroupShow = (props) => (
    <Show {...props}>
        <TabbedShowLayout>
            <Tab label="permissions" path="permissions">
                <GroupPermissionsList />
            </Tab>
            <Tab label="users"></Tab>
        </TabbedShowLayout>
    </Show>
);



export default {
    create: GroupCreate,
    edit: GroupEdit,
    show: GroupShow,
    list: GroupList
}