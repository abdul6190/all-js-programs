const transactions = [
    {
        id: 1,
        timestamp: 1656076800000,
        price: 10,
        category: 'Food',
        itemName: 'Pizza',
    },
    {
        id: 2,
        timestamp: 1656259600000,
        price: 20,
        category: 'Food',
        itemName: 'Burger',
    },
    {
        id: 3,
        timestamp: 1656019200000,
        price: 15,
        category: 'Clothing',
        itemName: 'T-Shirt',
    },
    {
        id: 4,
        timestamp: 1656364800000,
        price: 30,
        category: 'Electronics',
        itemName: 'Headphones',
    },
    {
        id: 5,
        timestamp: 1656105600000,
        price: 25,
        category: 'Clothing',
        itemName: 'Jeans',
    },
];

function calculateTotalSpentByCategory(transactions) {

   let spentByCategory = {}
   let result = []
   for(let i=0; i<transactions.length; i++){
    if (spentByCategory[transactions[i].category]){
        spentByCategory[transactions[i].category]+=transactions[i].price;
    }
    else {
        spentByCategory[transactions[i].category] = transactions[i].price;
    }
   }
   
   Object.keys(spentByCategory).map(category => result.push({'category':category, 'totalSpent': spentByCategory[category]}));
   console.log(result);
   
}
  



calculateTotalSpentByCategory(transactions);