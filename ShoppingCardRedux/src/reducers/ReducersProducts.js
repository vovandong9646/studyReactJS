
var initialState = [
    {
        id: 1,
        name: "Iphone 7 Plus 64GB",
        image:'https://cdn2.tgdd.vn/Products/Images/42/87837/iphone-7-128gb-3-300x300.jpg',
        rating : 1,
        description: "san pham do apple san xuat",
        price : 300
    },
    {
        id: 2,
        name: "SamSung galaxy S8 Plus",
        image:'https://cdn4.tgdd.vn/Products/Images/42/103404/samsung-galaxy-j7-pro-vang-dong1-300x300.png',
        rating : 3,
        description: "san pham do SamSung san xuat",
        price : 150
    },
    {
        id: 3,
        name: "Iphone X Plus 256GB",
        image:'https://cdn1.tgdd.vn/Products/Images/42/114111/iphone-x-256gb-h1-2-300x300.jpg',
        rating : 4,
        description: "san pham do apple san xuat",
        price : 200
    }
];

const myReducer = (state=initialState, action) => {
    switch(action.type) {

        default: return [...state];
    }
};

export default myReducer;