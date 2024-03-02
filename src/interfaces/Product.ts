export interface Product {
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

export interface Paging {
  page: number;
  total_page: number;
  total_products: number;
}

export interface CategoryState {
  data: Product[];
  paging: Paging;
}

export interface ProductsState {
  data: Product[];
  paging: Paging;
  category: Record<string, CategoryState>;
  status_code: number;
  detail_product: Product;
}

export interface ProductsPageState {
  page: number;
  isLoading: boolean;
  active: string;
  statusCode: number;
}

export interface ProductDetailState {
  product: Product;
  hidden: boolean;
}

export interface ProductDetailProps {
  productDetailState: ProductDetailState;
  setProductDetailState: React.Dispatch<
    React.SetStateAction<ProductDetailState>
  >;
}
