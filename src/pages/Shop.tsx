import ExplorerWindow from "../components/explorer/ExplorerWindow";
import { FileItem } from "../components/files/FileItems";
import { PRODUCTS } from "../data/products";

const Shop = () => {
  return (
    <ExplorerWindow title="Shop" path="/shop" items={PRODUCTS.length} status="Mock shop">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
        {PRODUCTS.map((p) => (
          <FileItem
            key={p.slug}
            to={`/shop/${p.slug}`}
            name={p.name}
            meta={p.price}
            excerpt={p.description}
          />
        ))}
      </div>
    </ExplorerWindow>
  );
};

export default Shop;
