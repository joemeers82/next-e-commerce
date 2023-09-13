"use client";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { useStore } from "../../store";

export default function ProductPreviewButton({ product }) {
  const previewProduct = (product) => {
    const { productCart } = useStore.getState("productCart");
    useStore.setState({
      productCart: [...productCart, product],
      selectedProduct: product,
      showPreviewProduct: true,
    });
  };
  return (
    <>
      <RemoveRedEyeIcon
        fontSize="large"
        className="border rounded-full bg-white p-1"
        onClick={() => {
          previewProduct(product);
        }}
      />
    </>
  );
}
