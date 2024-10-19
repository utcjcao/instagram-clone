import flattenDeep from "lodash/flattenDeep";
import React, { Component } from "react";
import { Route, Routes as ReactRoutes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

const generateFlattenRoutes = (routes) => {
  if (!routes) return [];
  return flattenDeep(
    routes.map(({ routes: subRoutes, ...rest }) => [
      rest,
      generateFlattenRoutes(subRoutes),
    ])
  );
};

export const renderRoutes = (mainRoutes) => {
  const Routes = ({ isAuthorized }) => {
    const layouts = mainRoutes.map(({ layout: Layout, routes }, index) => {
      const subRoutes = generateFlattenRoutes(routes);
      return (
        <Route key={index} element={<Layout />}>
          {subRoutes.map(({ component: Component, path, name, isPublic }) => {
            return (
              Component &&
              path && (
                <Route
                  key={name}
                  element={
                    <ProtectedRoute
                      isPublic={isPublic || false}
                      isAuthorized={isAuthorized}
                      path={path}
                    >
                      <Component />
                      //{" "}
                    </ProtectedRoute>
                  }
                />
              )
            );
          })}
        </Route>
      );
    });
    return <ReactRoutes>{layouts}</ReactRoutes>;
  };
  return Routes;
};

// const Routes = ({ isAuthorized }) => {
//   const layouts = mainRoutes.map(({ layout: Layout, routes }, index) => {
//     const subRoutes = generateFlattenRoutes(routes);
//     return (
//       <Route key={index} element={<Layout />}>
//           {subRoutes.map(({ component: Component, path, name, isPublic }) => {
//             return (
//               Component &&
//               path &&
//               <Route key={name} element={<ProtectedRoute isPublic={isPublic || false} isAuthorized={isAuthorized} path={path}><Component />
//                 <ProtectedRoute/>
//               </Route>}
//               )
//             );
//           }</Route>)}

//     );
//   });
//   return <ReactRoutes>{layouts}</ReactRoutes>;
// };
// return Routes;
