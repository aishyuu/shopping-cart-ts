import { Button, Stack } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"
import storeItems from '../data/storeItems.json'
import { formatCurrency } from "../utilities/formatCurrency"

type CartItemProps = {
    id: number
    quantity: number
}

export function CartItem({ id, quantity }: CartItemProps) {
    const { removeFromCart } = useShoppingCart()
    const item = storeItems.find(i => i.id === id)
    if (item == null) return null

    return(
        <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
            <img src={item.images} style={{width: '125px', height: '75px', objectFit:'scale-down'}}></img>
            <div className="me-auto">
                <div>
                    {item.name} {quantity > 1 && <span className="text-muted" style={{fontSize: '.65rem'}}>
                        x{quantity}
                        </span>}
                </div>
                <div className="text-muted" style={{ fontSize: '0.75rem' }}>
                    {formatCurrency(item.sale_price)}
                </div>
            </div>
            <div>
                {formatCurrency(item.sale_price * quantity)}
            </div>
            <Button variant="outline-danger" size="sm" onClick={() => removeFromCart(item.id)}>&times;</Button>
        </Stack>
    )
}