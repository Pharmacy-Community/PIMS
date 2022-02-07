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
} from "react-admin";

export const ProductCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="generic_name" />
      <ArrayInput source="pack_sizes">
        <SimpleFormIterator>
          <TextInput source="units" label="Units"/>
          <TextInput source="sale_price" label="Sale Price"/>
        </SimpleFormIterator>
      </ArrayInput>
    </SimpleForm>
  </Create>
);

export const ProductEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="generic_name" />
      <ArrayInput source="pack_sizes">
        <SimpleFormIterator>
          <TextInput source="units" label="Units"/>
          <TextInput source="sale_price" label="Sale Price" />
        </SimpleFormIterator>
      </ArrayInput>
    </SimpleForm>
  </Edit>
);

export const ProductList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="name" />
      <TextField source="generic_name" />
    </Datagrid>
  </List>
);
