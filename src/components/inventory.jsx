import { Datagrid, DateField, List, NumberField, ReferenceField, TextField } from "react-admin";


export const InventoryList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <ReferenceField source="purchase_id" reference="purchases">
                <TextField source="invoice" />
            </ReferenceField>
            <ReferenceField source="product_id" reference="products">
                <TextField source="name" />
            </ReferenceField>
            <TextField source="batch_number" />
            <DateField source="expiry_date" />
            <NumberField source="pack_size" />
            <NumberField source="pack_cost" />
            <NumberField source="quantity" />
            <NumberField source="available_units" />
        </Datagrid>
    </List>
);