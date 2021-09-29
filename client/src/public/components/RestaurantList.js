import React from "react";
import "../styles/restaurant_list.css"
import RestaurantDetail from "./RestaurantDetail";

export default function RestaurantList({restaurants}){
    return(
    <section className ="restaurant-list">
        <RestaurantDetail restaurants={restaurants} />
  </section>
    );
};