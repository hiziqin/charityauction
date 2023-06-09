// Array to store bid items

let bidItems = [

  { code: '#001', name: 'Marina at Straits Quay, Penang', reservedPrice: 250 },

  { code: '#002', name: 'Bussorah Street, Singapore', reservedPrice: 250 },

  { code: '#003', name: 'Lorong Stewart, Georgetown', reservedPrice: 250 },

  { code: '#004', name: 'Foodcourt at Ghim Moh, Singapore', reservedPrice: 250 },

  { code: '#005', name: 'Cafe at Lebuh Campbell, Georgetown', reservedPrice: 250 },

  { code: '#006', name: 'AirView Building, Singapore', reservedPrice: 250 },

  { code: '#007', name: 'Penang Street, Little India Georgetown', reservedPrice: 250 },

  { code: '#008', name: 'Holland Village Food Court, Singapore', reservedPrice: 250 },

  { code: '#009', name: 'Cafe at Tanjong Pagar Road Singapore', reservedPrice: 250 },

  { code: '#010', name: 'Christmas Morning Breakfast, Singapore', reservedPrice: 250 },

  { code: '#011', name: 'Breakfast at Ikea, Singapore', reservedPrice: 150 },

  { code: '#012', name: 'Ubud, Bali', reservedPrice: 250 },

  { code: '#013', name: 'Kampong Kling Mosque, Malacca', reservedPrice: 250 },

  { code: '#015', name: 'Tiong Bahru Estate, Singapore', reservedPrice: 250 },

  { code: '#016', name: 'Afternoon in Georgetown-1', reservedPrice: 150 },

  { code: '#017', name: 'Afternoon in Georgetown-2', reservedPrice: 150 },

];


// Array to store bids

let bids = [];


// Function to place a bid

function placeBid(bidder, code, amount) {

  // Check if bidder has already placed a bid

  const existingBid = bids.find((bid) => bid.bidder === bidder);

  if (existingBid) {

    console.log('You have already placed a bid.');

    return;

  }


  // Find the bid item by code

  const bidItem = bidItems.find((item) => item.code === code);

  if (!bidItem) {

    console.log('Invalid bid item code.');

    return;

  }


  // Check if the bid amount is higher than the reserved price

  if (amount <= bidItem.reservedPrice) {

    console.log('Your bid amount must be higher than the reserved price.');

    return;

  }


  // Add the new bid to the array

  bids.push({ bidder, code, amount });

  console.log('Bid placed successfully.');

}


// Function to view the highest bid (admin only)

function viewHighestBid() {

  if (isAdmin()) {

    // Sort the bids array by amount in descending order

    const sortedBids = bids.sort((a, b) => b.amount - a.amount);

    if (sortedBids.length > 0) {

      const highestBid = sortedBids[0];

      const bidItem = bidItems.find((item) => item.code === highestBid.code);

      console.log(`The highest bid is $${highestBid.amount} by ${highestBid.bidder} for item ${bidItem.name}.`);

    } else {

      console.log('No bids have been placed yet.');

    }

  } else {

    console.log('Access denied. Only admin can view the highest bid.');

  }

}


// Function to check if the user is an admin (sample implementation)

function isAdmin() {

  // Replace this implementation with your own logic to determine if the user is an admin

  const userRole = 'admin';

  return userRole === 'admin';

}


// Example usage:

placeBid('John', '#001', 300); // Bidder John places a bid of $300 for item #001

placeBid('Alice', '#001', 350); // Bidder Alice places a bid of $350 for item #001 (should fail because Alice has already placed a bid)

placeBid('Bob', '#002', 400); // Bidder Bob places a bid of $400 for item #002


const generateHighestBidBtn = document.getElementById('generate-highest-bid');

const highestBidInfo = document.getElementById('highest-bid-info');


generateHighestBidBtn.addEventListener('click', () => {

  viewHighestBid();

  highestBidInfo.textContent = 'The highest bid is $400 by Bob for item Bussorah Street, Singapore.';

});