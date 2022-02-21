import {
  List,
  Datagrid,
  TextField,
  EditButton,
  SimpleForm,
  Edit,
  TextInput,
  Create,
  Show,
  TabbedShowLayout,
  Tab,
  ReferenceField,
  DateField,
  NumberField,
  useNotify,
  useRefresh,
  useRedirect,
  ShowButton
} from "react-admin";

import CustomerIcon from '@material-ui/icons/AccountBox';


const CustomerTitle = ({ record: customer }) => {
  return <span>{customer ? customer.name : ""}</span>;
};

const CustomerCreate = (props) => {
  const notify = useNotify();
  const refresh = useRefresh();
  const redirect = useRedirect();

  const onSuccess = ({ data }) => {
    notify(`Customer created Successfully`);
    redirect(`/customers`);
    refresh();
  };


  return (
    <Create onSuccess={onSuccess} {...props}>
      <SimpleForm>
        <TextInput source="name" />
        <TextInput source="address" />
        <TextInput source="contact" />
      </SimpleForm>
    </Create>
  )
}
const CustomerEdit = (props) => (
  <Edit mutationMode="pessimistic" title={<CustomerTitle />} {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="address" />
      <TextInput source="contact" />
    </SimpleForm>
  </Edit>
);

const CustomerSaleList = (props) => (
  <List {...props}>
    <Datagrid rowClick="show">
      <DateField source="date" />
      <TextField source="invoice" />
      <NumberField source="total" />
    </Datagrid>
  </List>
);

const CustomerShow = (props) => (
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
      <Tab label="sales" path="sales">
        <CustomerSaleList />
      </Tab>
      <Tab label="Account"></Tab>
    </TabbedShowLayout>
  </Show>
);

const CustomersFilters = [<TextInput source="q" label="Search" alwaysOn />];

const CustomersList = (props) => (
  <List filters={CustomersFilters} {...props}>
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
  create: CustomerCreate,
  edit: CustomerEdit,
  show: CustomerShow,
  list: CustomersList,
  icon: CustomerIcon
}