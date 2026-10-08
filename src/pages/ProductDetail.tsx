import { Link, useParams } from "react-router-dom";
import ExplorerWindow from "../components/explorer/ExplorerWindow";
import { Thumb } from "../components/files/FileItems";
import { PRODUCTS } from "../data/products";

const ProductDetail = () => {
  const { slug } = useParams();
  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    return (
      <ExplorerWindow title="Not found" path={`/shop/${slug}`} items={0}>
        <p className="text-sm">file not found.</p>
        <Link to="/shop" className="text-sm text-accent underline">
          ← back to /shop
        </Link>
      </ExplorerWindow>
    );
  }

  return (
    <ExplorerWindow title={product.name} path={`/shop/${product.slug}`} items={1} status="Mock shop">
      <div className="max-w-2xl">
        <Thumb label={product.name} />
        <h1 className="text-xl font-bold mt-4">{product.name}</h1>
        <p className="text-sm text-accent font-bold mt-1">{product.price}</p>
        <p className="font-doc text-[15px] leading-7 mt-3">{product.description}</p>

        {product.includes.length > 0 && (
          <>
            <h2 className="text-sm font-bold mt-6 mb-2 uppercase tracking-wide">What&apos;s included</h2>
            <ul className="font-doc text-[15px] leading-7 list-disc pl-5">
              {product.includes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </>
        )}

        <div className="text-sm mt-4 flex flex-col gap-1">
          <p><span className="text-muted">Format:</span> {product.format}</p>
          <p><span className="text-muted">License:</span> {product.license}</p>
        </div>

        <button
          type="button"
          disabled
          title="Checkout is not available yet"
          className="mt-5 px-5 py-2 text-sm font-bold border border-line bg-select text-muted cursor-not-allowed"
        >
          Buy — coming soon
        </button>
      </div>
    </ExplorerWindow>
  );
};

export default ProductDetail;
