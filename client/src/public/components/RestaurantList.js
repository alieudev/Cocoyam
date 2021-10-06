import React from "react";
import RestaurantDetail from "./RestaurantDetail";

export default function RestaurantList({restaurants, searchTerm}){
    return(
        <RestaurantDetail searchTerm={searchTerm} restaurants={restaurants} />
    );
};