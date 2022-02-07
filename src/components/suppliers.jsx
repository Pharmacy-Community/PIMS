import {
  List,
  Datagrid,
  TextField,
  EditButton,
  SimpleForm,
  Edit,
  TextInput,
  Create,
  ReferenceInput,
  SelectInput,
  Show,
  SimpleShowLayout,
  TabbedShowLayout,
  Tab,
  NumberField,
  DateField,
} from "react-admin";

const SupplierCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="address" />
      <TextInput source="contact" />
    </SimpleForm>
  </Create>
);

const SupplierTitle = ({ record: supplier }) => {
  return <span>{supplier ? supplier.name : ""}</span>;
};

const SupplierEdit = (props) => (
  <Edit title={<SupplierTitle />} {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="address" />
      <TextInput source="contact" />
    </SimpleForm>
  </Edit>
);

const SupplierPurchaseList = (props) => (
  <List {...props}>
    <Datagrid rowClick="show">
      <DateField source="date" />
      <TextField source="invoice" />
      <NumberField source="total" />
    </Datagrid>
  </List>
);

export const SupplierShow = (props) => (
  <Show {...props}>
    <TabbedShowLayout>
      <Tab label="summary">
        <TextField source="name" />
        <TextField source="address" />
        <TextField source="contact" />
      </Tab>
      <Tab label="purchases" path="purchases">
        <SupplierPurchaseList/>
      </Tab>
      <Tab label="Account"></Tab>
    </TabbedShowLayout>
  </Show>
);

const supplierFilters = [<TextInput source="name" label="Name" alwaysOn />];

const SupplierList = (props) => (
  <List filters={supplierFilters} {...props}>
    <Datagrid rowClick="show">
      <TextField source="name" />
      <TextField source="address" />
      <TextField source="contact" />
      <EditButton />
    </Datagrid>
  </List>
);

export { SupplierList, SupplierEdit, SupplierCreate };
