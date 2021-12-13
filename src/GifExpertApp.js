import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

export const GifExpertApp = ({defaulCategories = []}) => {
    // const [categories, setCategories] = useState(["Hunter X"]);
    const [categories, setCategories] = useState(defaulCategories);
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />
            <ol>
                {categories.map((category) => {
                    return <GifGrid category={category} key={category} />;
                })}
            </ol>
        </>
    );
};

export default GifExpertApp;
