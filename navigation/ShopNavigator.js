import { createAppContainer } from "react-navigation";

import { createStackNavigator } from "react-navigation-stack";

import ProductsOverviewScreen from "../screens/shop/ProductsOverviewScreen";
import ProductDetailScreen from "../screens/shop/ProductDetailScreen";
import Colors from "../constants/Colors";

const ProductsNavigator = createStackNavigator(
  {
    ProductsOverview: ProductsOverviewScreen,
    ProductDetail: ProductDetailScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.primary,
      },
      headerTitleStyle: {
        fontFamily: "Inter_900Black",
      },
      headerBackTitleStyle: {
        fontFamily: "Inter_900Black",
      },
      headerTintColor: "white",
    },
  }
);

export default createAppContainer(ProductsNavigator);
