import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { useStore } from "../../store";

export default function ProductPreviewButton({ product }) {
  const previewProduct = (e, product) => {
    e.preventDefault();
    const { productCart } = useStore.getState("productCart");
    useStore.setState({
      selectedProduct: product,
      showPreviewProduct: true,
    });
  };

  return (
    <>
      <RemoveRedEyeIcon
        fontSize="large"
        className="border rounded-full bg-white p-1"
        onClick={(e) => {
          previewProduct(e, product);
        }}
      />
    </>
  );
}
