import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";

import { checkUserSession } from "./store/user/user.action";
//import { setCurrentUser } from "./store/user/user.action";
//import { onAuthStateChangedListener, createUserDocumentFromAuth, getCurrentUser } from "./utils/firebase/firebase.utils";

import Home from "./routes/home/home.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";

const App = () => {
  const dispatch = useDispatch();

  /*useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
        if (user) {
            createUserDocumentFromAuth(user);
        }
        
        console.log(user);
        dispatch(setCurrentUser(user));
    });

    return unsubscribe;
  }, [dispatch]);*/

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch])

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />}/>
        <Route path="shop/*" element={<Shop />}/>
        <Route path="checkout" element={<Checkout />}/>
        <Route path="auth" element={<Authentication />}/>
      </Route>
    </Routes>
  );
}

export default App;
