interface Product {
  id: number;
  name: string;
  image: string;
  category: string;
  rate?: number | null;
  sold?: number | null;
  initial_price: number;
  stock: number;
  description?: string | null;
}

interface Paging {
  page: number;
  total_page: number;
  total_products: number;
}

interface CategoryState {
  data: Product[];
  paging: Paging;
}

interface ProductsState {
  data: Product[];
  paging: Paging;
  category: Record<string, CategoryState>;
  status_code: number;
  detail_product: Product;
}

interface ProductsPageState {
  page: number;
  isLoading: boolean;
  active: string;
  statusCode: number;
}

interface ProductDetailState {
  product: Product;
  hidden: boolean;
}

interface ProductDetailProps {
  productDetailState: ProductDetailState;
  setProductDetailState: React.Dispatch<
    React.SetStateAction<ProductDetailState>
  >;
}
