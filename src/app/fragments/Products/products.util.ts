import {
  CategoryState,
  Product,
  ProductDetailState,
  ProductsPageState,
} from "../../../interfaces/product";
import {
  getCategoryProductsCall,
  getProductsCall,
} from "../../../lib/redux/products/products.action";
import { fetchSearchDataCall } from "../../../services/products/products.service";

export const loadMoreProducts = async (
  page: number,
  category: string,
  productsPageState: ProductsPageState,
  setProductsPageState: React.Dispatch<React.SetStateAction<ProductsPageState>>,
  dispatch: any
) => {
  try {
    const updatePageAndIsLoading = {
      ...productsPageState,
      page,
      isLoading: true,
    };
    setProductsPageState(updatePageAndIsLoading);

    if (category === "all") {
      await dispatch(getProductsCall(page));
    } else {
      await dispatch(getCategoryProductsCall({ category, page }));
    }

    const updateIsloading = { ...productsPageState, isLoading: false };
    setProductsPageState(updateIsloading);
  } catch (error) {
    console.error("Error fetching products:", error);
    const updateIsloading = { ...productsPageState, isLoading: false };
    setProductsPageState(updateIsloading);
  }
};

export const handleClickCategory = (
  ctgry: string,
  productsPageState: ProductsPageState,
  setProductsPageState: React.Dispatch<React.SetStateAction<ProductsPageState>>,
  dispatch: any,
  page: number,
  data: Product[],
  category: Record<string, CategoryState>
) => {
  const updateStatusCodeAndActive = {
    ...productsPageState,
    statusCode: 200,
    active: ctgry,
  };

  setProductsPageState(updateStatusCodeAndActive);

  if (ctgry === "all" && !data.length) {
    dispatch(getProductsCall(page));
  } else if (ctgry !== "all" && !category[ctgry].data.length) {
    dispatch(getCategoryProductsCall({ category: ctgry, page: 1 }));
    const updatePage = { ...productsPageState, page: 1 };
    setProductsPageState(updatePage);
  }
};

export const handleSubmitSearch = async (
  event: React.FormEvent<HTMLFormElement>,
  productsPageState: ProductsPageState,
  setProductsPageState: React.Dispatch<React.SetStateAction<ProductsPageState>>,
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>
) => {
  event.preventDefault();
  const { search } = event.currentTarget;
  const inputValue = search.value.split(" ");
  const {
    data: { data },
  } = await fetchSearchDataCall(inputValue, 1);
  const { products } = data;

  if (!products.length) {
    const updateStatusCode = {
      ...productsPageState,
      statusCode: 404,
    };

    setProductsPageState(updateStatusCode);
    setProducts([]);
    return;
  }

  setProducts(products);
  const updatePageAndStatusCode = {
    ...productsPageState,
    page: 1,
    statusCode: 200,
  };

  setProductsPageState(updatePageAndStatusCode);
  search.value = "";
};

export const handleClickBeli = (
  product: Product,
  setProductDetailState: React.Dispatch<
    React.SetStateAction<ProductDetailState>
  >
) => {
  setProductDetailState({ product: product, hidden: false });
};
