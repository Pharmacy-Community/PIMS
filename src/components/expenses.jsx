import {
  Create,
  Datagrid,
  DateField,
  DateInput,
  List,
  NumberField,
  NumberInput,
  ReferenceField,
  ReferenceInput,
  SelectInput,
  Show,
  SimpleForm,
  SimpleShowLayout,
  TextField,
  TextInput,
} from "react-admin";

const ExpenseCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <DateInput source="date" />
      <TextInput source="details" />
      <ReferenceInput label="Account" source="account_id" reference="accounts"
        filter={{ category: "CASH" }}>
        <SelectInput optionText="name" optionValue="id" />
      </ReferenceInput>
      <NumberInput source="amount" />
    </SimpleForm>
  </Create>
);

const ExpenseShow = props => (
  <Show {...props}>
    <SimpleShowLayout>
      <DateField source="date" />
      <TextField source="details" />
      <NumberField source="amount" />
      <ReferenceField source="account_id" reference="accounts">
        <TextField source="name" />
      </ReferenceField>
    </SimpleShowLayout>
  </Show>
);

// TODO Add daterange filter, account filter, entrant filter
const expenseFilters = [
  <TextInput source="details" label="Details" alwaysOn />,
  <ReferenceInput source="account_id" reference="accounts" alwaysOn>
    {/* TODO FIlter Only Expense Accounts */}
    <SelectInput optionText="name" optionValue="id" />
  </ReferenceInput>
];

const ExpenseList = (props) => (
  <List filters={expenseFilters} {...props}>
    <Datagrid rowClick="show">
      <DateField source="date" />
      <TextField source="details" />
      <ReferenceField source="account_id" reference="accounts">
        <TextField source="name" />
      </ReferenceField>
      <NumberField source="amount" />
    </Datagrid>
  </List>
);

export default {
  create: ExpenseCreate,
  list: ExpenseList,
  show: ExpenseShow
}

