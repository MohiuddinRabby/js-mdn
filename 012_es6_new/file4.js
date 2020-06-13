/**
 * demoData provides some fake data
 * find//findIndex()
 */
const demoData = [
    {
      "title":'Healthy Meal Plan',
      "subtitle":'How we dream about our future',
      "description":'Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it.',
      "img":'https://i.ibb.co/Rp7Rq7j/lunch1.png',
      "catagories":'lunch',
      "price":9.99,
      "keys":"100123"
    },
    {
      "title":'Fried Chicken Bento',
      "subtitle":'How we dream about our future',
      "description":'Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it.',
      "img":'https://i.ibb.co/tZcTkjP/lunch2.png',
      "catagories":'lunch',
      "price":12.99,
      "keys":"1001234",
    },
    {
      "title":'Trragon-Rubbed-Salmon',
      "subtitle":'How we dream about our future',
      "description":'Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it.',
      "img":'https://i.ibb.co/swCTwsn/lunch3.png',
      "catagories":'lunch',
      "price":23.99,
      "keys":"100145234",
    },
    {
      "title":'Indian Lunch',
      "subtitle":'How we dream about our future',
      "description":'Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it.',
      "img":'https://i.ibb.co/Dt93FCR/lunch4.png',
      "catagories":'lunch',
      "price":15.99,
      "keys":"10012347",
    },
    {
      "title":'Beaf Steak',
      "subtitle":'How we dream about our future',
      "description":'Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it.',
      "img":'https://i.ibb.co/27bybcK/lunch5.png',
      "catagories":'lunch',
      "price":7.99,
      "keys":"1001423",
    },
    {
      "title":'Honey Soy Salmon',
      "subtitle":'How we dream about our future',
      "description":'Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it.',
      "img":'https://i.ibb.co/LtgpdK4/lunch6.png',
      "catagories":'lunch',
      "price":19.99,
      "keys":"1770123",
    },
    {
      "title":'Salmon with Grapefruits',
      "subtitle":'How we dream about our future',
      "description":'Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it.',
      "img":'https://i.ibb.co/WK4LXD1/dinner1.png',
      "catagories":'dinner',
      "price":9.99,
      "keys":"108453",
    },
  ]

  //find
  //findIndex()

  const itemKey = '10012347';
  const item = demoData.find(item=>item.keys===itemKey);
  // console.log(item)
  const itemIndex = demoData.findIndex(item=>item.keys===itemKey);
  console.log(itemIndex);
