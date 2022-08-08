const wears = [
    {
        "name": " Combo",
        "price": " $130",
        "image": require("../assets/images/image8.jpg"),
        "number": 10000000000000

    },

    {
        "name": " Nude Inspire",
        "price": " $70",
        "image": require('../assets/images/image11.jpg'),
        "number": 2

    },


    {
        "name": " Grey Anatomy",
        "price": " $180",
        "image": require('../assets/images/image12.jpg'),
        "number": 3

    },

    {
        "name": " Combo Sisters",
        "price": " $140",
        "image": require('../assets/images/image15.jpg'),
        "number": 4

    },

    {
        "name": " Peachy Darlin",
        "price": " $90",
        "image": require('../assets/images/image17.jpg'),
        "number": 5

    },

    {
        "name": " Triple Card",
        "price": " $180",
        "image": require('../assets/images/image16.jpg'),
        "number": 6

    }



];



export default wears

export function singleWear(number){
    return wears.find((wear) => wear.number === number)
}

