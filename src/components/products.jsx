import {
  ArrayInput,
  Create,
  Datagrid,
  Edit,
  List,
  SimpleForm,
  SimpleFormIterator,
  TextField,
  TextInput,
  ShowGuesser,
  SimpleShowLayout,
  ArrayField,
  NumberField,
  Show,
  TabbedShowLayout,
  Tab
} from "react-admin";

const ProductCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="generic_name" />
      <ArrayInput source="pack_sizes">
        <SimpleFormIterator>
          <TextInput source="units" label="Units" />
          <TextInput source="sale_price" label="Sale Price" />
        </SimpleFormIterator>
      </ArrayInput>
    </SimpleForm>
  </Create>
);

const ProductEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="generic_name" />
      <ArrayInput source="pack_sizes">
        <SimpleFormIterator>
          <TextInput source="units" label="Units" />
          <TextInput source="sale_price" label="Sale Price" />
        </SimpleFormIterator>
      </ArrayInput>
    </SimpleForm>
  </Edit>
);


const ProductShow = props => (
  <Show {...props}>
    <TabbedShowLayout>
      <Tab label="Details">
        <TextField source="name" />
        <TextField source="generic_name" />
        <ArrayField source="pack_sizes">
          <Datagrid>
            <NumberField source="units" />
            <NumberField source="sale_price" />
          </Datagrid>
        </ArrayField>
      </Tab>
      <Tab label="Sales" path="sales">
      </Tab>
      <Tab label="Purchases" path="purchases"></Tab>
    </TabbedShowLayout>
  </Show>
);

const ProductList = (props) => (
  <List {...props}>
    <Datagrid rowClick="show">
      <TextField source="name" />
      <TextField source="generic_name" />
    </Datagrid>
  </List>
);




export default {
  create: ProductCreate,
  edit: ProductEdit,
  list: ProductList,
  show: ProductShow
}