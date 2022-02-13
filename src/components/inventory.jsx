import { Datagrid, DateField, EditGuesser, List, NumberField, ReferenceField, ShowGuesser, TextField } from "react-admin";
import InventoryIcon from '@mui/icons-material/Inventory';


const InventoryList = props => (
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

export default {
    list: InventoryList,
    show: ShowGuesser,
    edit: EditGuesser,
    options: { label: "Inventory" },
    icon: InventoryIcon
}