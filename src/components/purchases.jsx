import { makeStyles } from "@material-ui/core/styles";
import {
    ArrayField,
  ArrayInput,
  Create,
  Datagrid,
  DateField,
  DateInput,
  Edit,
  List,
  NumberField,
  NumberInput,
  ReferenceField,
  ReferenceInput,
  SelectInput,
  Show,
  SimpleForm,
  SimpleFormIterator,
  SimpleShowLayout,
  TextField,
  TextInput,
} from "react-admin";

const PurchaseTitle = ({ record: purchase }) => {
    return <span>Purchase: {purchase ? purchase.invoice : ""}</span>;
  };


export const PurchaseCreate = (props) => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateInput source="date" />
        <TextInput source="invoice" />
        <ReferenceInput source="supplier_id" reference="suppliers">
          <SelectInput optionText="name" optionValue="id" />
        </ReferenceInput>
        <ArrayInput source="items">
          <SimpleFormIterator>
            <ReferenceInput
              label="Product"
              source="product_id"
              reference="products"
            >
              <SelectInput optionText="name" optionValue="id" />
            </ReferenceInput>
            <TextInput source="batch_number" label="Batch Number" />
            <DateInput source="expiry_date" label="Expiry Date" />
            <NumberInput source="pack_size" label="Pack Size" />
            <NumberInput source="pack_cost" label="Pack Cost" />
            <NumberInput source="quantity" label="Quantity" />
          </SimpleFormIterator>
        </ArrayInput>
      </SimpleForm>
    </Create>
  );
};

export const PurchaseEdit = (props) => {
  //   TODO Make form vetfical

  return (
    <Edit title={<PurchaseTitle/>} {...props}>
      <SimpleForm>
        <DateInput source="date" />
        <TextInput source="invoice" />
        <ReferenceInput source="supplier_id" reference="suppliers">
          <SelectInput optionText="name" optionValue="id" />
        </ReferenceInput>
        <ArrayInput source="items">
          <SimpleFormIterator>
            <ReferenceInput
              label="Product"
              source="product_id"
              reference="products"
            >
              <SelectInput optionText="name" optionValue="id" />
            </ReferenceInput>
            <TextInput source="batch_number" label="Batch Number" />
            <DateInput source="expiry_date" label="Expiry Date" />
            <NumberInput source="pack_size" label="Pack Size" />
            <NumberInput source="pack_cost" label="Pack Cost" />
            <NumberInput source="quantity" label="Quantity" />
          </SimpleFormIterator>
        </ArrayInput>
      </SimpleForm>
    </Edit>
  );
};

export const PurchaseShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <DateField source="date" />
      <TextField source="invoice" />
      <ReferenceField source="supplier_id" reference="suppliers">
        <TextField source="name" />
      </ReferenceField>
      <NumberField source="total" />
      <ArrayField source="items">
        <Datagrid>
          <ReferenceField source="product_id" reference="products">
            <TextField source="name" />
          </ReferenceField>
          <TextField source="batch_number" />
          <DateField source="expiry_date" />
          <NumberField source="pack_size" />
          <NumberField source="pack_cost" />
          <NumberField source="quantity" />
        </Datagrid>
      </ArrayField>
    </SimpleShowLayout>
  </Show>
);

// TODO Add Date range filter
const prchaseFilters = [
  <TextInput source="invoice" label="Invoice" alwaysOn />,
  <ReferenceInput
    source="supplier_id"
    label="Supplier"
    reference="suppliers"
    alwaysOn
    allowEmpty
  >
    <SelectInput optionText="name" />
  </ReferenceInput>,
];

const PurchaseList = (props) => (
  <List filters={prchaseFilters} {...props}>
    <Datagrid rowClick="show">
      <DateField source="date" />
      <TextField source="invoice" />
      <ReferenceField source="supplier_id" reference="suppliers">
        <TextField source="name" />
      </ReferenceField>
      <NumberField source="total" />
    </Datagrid>
  </List>
);

export { PurchaseList };
