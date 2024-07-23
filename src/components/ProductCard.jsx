import { Link } from "react-router-dom";

import ProductActionButton from "./ProductActionButton";

function ProductCard({
  productId,
  title,
  price,
  shortDescription,
}) {
  //use title to identify correct image. Transfor title to lowercase and change space with underscore.
  const imageName = title ? title.replace(" ", "_").toLowerCase() : null;
  const image = `/assets/product_images/${imageName}.png`;

  return (
    <div className="flex flex-col justify-evenly w-[350px] h-[405px] rounded shadow-md text-opacity-25 p-3">
      <div className="py-1">
        <h6 className="font-bold text-blue text-lg tracking-wide">{title}</h6>
        <p className="font-normal text-sm">Price: {price} &#8364;</p>
      </div>
      <div className="container mx-auto size-[50%]">
        <img
          className=" object-contain"
          // src={require(`../assets/product_images/${imageName}.png`)}
          src={image}
          alt={title}
        />
      </div>
      <p className="p-2 leading-relaxed">{shortDescription}</p>
      <div className="flex justify-center gap-3 py-2">
        <Link to={`/Product/${productId}`}>
          <button className="btn-transparent">details</button>
        </Link>
        {/* Action buttons to open update form or delete */}
        <ProductActionButton productId={productId} />
      </div>
    </div>
  );
}
export default ProductCard;
