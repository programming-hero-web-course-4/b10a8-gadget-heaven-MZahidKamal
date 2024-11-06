const getAllCategories = (gadgets) => {
    let categories = [];
    gadgets.forEach((item) => {
        if (!categories.includes(item.category)) {
            categories.push(item.category);
        }
    })
    return categories;
}

/*--------------------------------------------------------------------------------------------------------------------*/

const add_to_LS_cart = (gadgetObj) => {
    let id_Array = localStorage.getItem('gh_cart_ls') ? JSON.parse(localStorage.getItem('gh_cart_ls')) : [];
    if (!id_Array.includes(gadgetObj.id)) {
        let newIdArray = [...id_Array, gadgetObj.id];
        localStorage.setItem('gh_cart_ls', JSON.stringify(newIdArray));
    }
}

/*--------------------------------------------------------------------------------------------------------------------*/

const remove_from_LS_cart = (gadgetObj) => {
    let id_Array = localStorage.getItem('gh_cart_ls') ? JSON.parse(localStorage.getItem('gh_cart_ls')) : [];
    if (id_Array.includes(gadgetObj.id)) {
        let newIdArray = id_Array.filter(id => id !== gadgetObj.id)
        localStorage.setItem('gh_cart_ls', JSON.stringify(newIdArray));
    }
}

/*--------------------------------------------------------------------------------------------------------------------*/

const get_cart_from_LS = (allGadgetsArray) => {
    let id_Array = localStorage.getItem('gh_cart_ls') ? JSON.parse(localStorage.getItem('gh_cart_ls')) : [];
    let obj_array = [];
    id_Array.forEach(id => {
        let gadgetObj = allGadgetsArray.find(gadget => gadget.id === id);
        if (gadgetObj) {
            obj_array.push(gadgetObj);
        }
    })
    return obj_array;
}

/*--------------------------------------------------------------------------------------------------------------------*/

const empty_LS_cart = () => {
    localStorage.setItem('gh_cart_ls', JSON.stringify([]));
}

/*--------------------------------------------------------------------------------------------------------------------*/

export {
    getAllCategories,
    add_to_LS_cart,
    remove_from_LS_cart,
    get_cart_from_LS,
    empty_LS_cart
};
