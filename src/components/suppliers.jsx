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
  ReferenceField,
  ShowButton,
} from "react-admin";

import SupplierIcon from '@material-ui/icons/Store';


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
  <Edit mutationMode="pessimistic" title={<SupplierTitle />} {...props}>
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

const SupplierShow = (props) => (
  <Show {...props}>
    <TabbedShowLayout>
      <Tab label="summary">
        <TextField source="name" />
        <TextField source="address" />
        <TextField source="contact" />
        <ReferenceField reference="accounts" source="account_id" label="Account Balance">
          <TextField source="balance" />
        </ReferenceField>
      </Tab>
      <Tab label="purchases" path="purchases">
        <SupplierPurchaseList />
      </Tab>
      <Tab label="Account"></Tab>
    </TabbedShowLayout>
  </Show>
);

const supplierFilters = [<TextInput source="q" label="Search" alwaysOn />];

const SupplierList = (props) => (
  <List filters={supplierFilters} {...props}>
    <Datagrid rowClick="show">
      <TextField source="name" />
      <TextField source="address" />
      <TextField source="contact" />
      <ReferenceField reference="accounts" source="account_id" label="Account Balance">
        <TextField source="balance" />
      </ReferenceField>
      <EditButton />
      <ShowButton />
    </Datagrid>
  </List>
);

export default {
  create: SupplierCreate,
  edit: SupplierEdit,
  show: SupplierShow,
  list: SupplierList,
  icon: SupplierIcon
}
