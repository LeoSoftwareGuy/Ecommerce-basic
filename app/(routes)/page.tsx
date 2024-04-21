import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-lis";
import Container from "@/components/ui/container";

export const revalidate = 0;
const HomePage = async () => {
  const billboard = await getBillboard("6625341084a3e19ad6468cdd");
  const products = await getProducts({ isFeatured: true });
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Feature Products" items={products} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
