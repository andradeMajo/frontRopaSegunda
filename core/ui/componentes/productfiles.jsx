import { Card } from "../../ui/components/Card";
import { Button } from "../../ui/components/Button";
export const ProductCard = ({ product }) => {
  return (
    <Card>
      <img
        src={product.image}
        className="rounded-xl mb-3"
      />
      <h2 className="font-semibold">{product.name}</h2>
      <Button variant="secondary">
        Hacer Match
      </Button>
    </Card>
  );
};