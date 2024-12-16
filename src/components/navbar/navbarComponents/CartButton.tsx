import { Button } from "@/components/ui/button";
import Link from "next/link";
import { GiShop } from "react-icons/gi";

async function CartButton() {
  const numItemsCart = 9;

  return (
    <Button
      asChild
      variant="outline"
      size="icon"
      className="flex justify-center items-center relative"
    >
      <Link href="/cart">
        <GiShop className="w-5 h-5" />
        <span className="absolute -top-3 -right-3 bg-primary text-white rounded-full w-6 h-6 flex justify-center items-center text-x dark:text-blue-400 dark:bg-white ">
          {numItemsCart}
        </span>
      </Link>
    </Button>
  );
}

export default CartButton;


