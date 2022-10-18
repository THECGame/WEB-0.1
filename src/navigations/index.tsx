import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NotFoundPage } from "../screens/NotFoundPage";
import { MainScreenNavigator } from "./Main/MainScreenNavigator";
export function AppRouter() {
  const [allNavigator, setAllNavigator] = useState([] as any[]);
  useEffect(() => {
    setAllNavigator(MainScreenNavigator);
  }, []);
  //Navbar - Footer will added in after and before line is BrowserRouter
  return (
    <BrowserRouter>
      <main role={"main"}>
        <Routes>
          {allNavigator.map(function (route, index) {
            return (
              <Route
                key={index + "Navi"}
                path={route.path}
                element={route.screen}
              />
            );
          })}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
