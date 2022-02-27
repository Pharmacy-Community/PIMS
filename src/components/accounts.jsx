import {
  Edit,
  Create,
  SimpleForm,
  TextInput,
  NumberField,
  List,
  Datagrid,
  TextField,
  NumberInput,
  Field,
  SelectInput,
  ReferenceInput,
} from "react-admin";

import AccountIcon from '@material-ui/icons/LibraryBooks';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const AccountCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <SelectInput
        source="category"
        choices={[
          { id: 'CASH', name: 'CASH' },
          { id: 'MOBILE MONEY', name: 'MOBILE MONEY' },
          { id: 'BANK', name: 'BANK' },
        ]}
      />
      <NumberInput source="balance" />
    </SimpleForm>
  </Create>
);

const AccountEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="name" />
    </SimpleForm>
  </Edit>
);




export const LinkToRelatedAccount = ({ record }) => {
  let account = record.account
  return account ? (
    <Button
      color="primary"
      component={Link}
      to={{
        pathname: '/accounts',
        search: `filter=${JSON.stringify({ account_id: account.id })}`,
      }}
    >
      Account {account.name} ;
    </Button>
  ) : null;
};


export const AccountCategoriesFilter = <SelectInput source="category" choices={[
  { id: 'SUPPLIER', name: 'SUPPLIER ACCOUNTS' },
  { id: 'CUSTOMER', name: 'CUSTOMER ACCOUNTS' },
  { id: 'CASH', name: 'CASH ACCOUNTS' },
  { id: 'BANK', name: 'BANK ACCOUNTS' },
  { id: 'MOBILE MONEY', name: 'MOBILE MONEY ACCOUNTS' },
]} alwaysOn />;

export const FilterByAccountFilter =
  <ReferenceInput label="Account" source="account_id" reference="accounts" alwaysOn>
    <SelectInput optionText="name" optionValue="id" />
  </ReferenceInput>;



const AccountListFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
  AccountCategoriesFilter
]

const AccountList = (props) => (
  <List filters={AccountListFilters} {...props}>
    <Datagrid rowClick="edit">
      <TextField source="name" />
      <TextField source="category" />
      <NumberField source="balance" />
    </Datagrid>
  </List>
);


export default {
  create: AccountCreate,
  edit: AccountEdit,
  list: AccountList,
  icon: AccountIcon
}