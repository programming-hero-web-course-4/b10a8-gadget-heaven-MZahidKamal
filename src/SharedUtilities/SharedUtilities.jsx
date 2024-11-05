const getAllCategories = (gadgets) => {
    let categories = [];
    gadgets.forEach((item) => {
        if (!categories.includes(item.category)) {
            categories.push(item.category);
        }
    })
    return categories;
};

const getFilteredGadgets = (category, gadgets) => {
    return gadgets.filter((gadget) => gadget.category === category)
}

export {getAllCategories, getFilteredGadgets};
