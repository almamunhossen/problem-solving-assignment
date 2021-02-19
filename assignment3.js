// Function 1 - Kilometer To Meter Converter

function kilometerToMeter(kilometerValue) {
    var meterValue = kilometerValue*1000;       // 1000 meter = 1 kilometer
    return kilometerValue+" Kilometer = "+meterValue+" Meter";
}
console.log(kilometerToMeter(30));


// Function 2 - Budget Calculator

function budgetCalculator() {
    var clock = 1; //আপনি কয়টি ঘড়ি কিনতে চান?
    var mobile = 2; //আপনি কয়টি মোবাইল কিনতে চান?
    var laptop = 2; //আপনি কয়টি ল্যাপটপ কিনতে চান?

    var clockPrice = 50;
    var mobilePrice = 100;
    var laptopPrice = 500;
    
    var totalPrice = clock * clockPrice + mobile * mobilePrice + laptop * laptopPrice;
    console.log("Total Cost = " + totalPrice + " Tk");
}

budgetCalculator()


// Function 3 - Hotel Cost Calculator

function hotelCost() {
    var days = 15; //আপনি মোট কতদিন হোটেলে থাকবেন?

    if (days >= 21) {
        var firstTenDaysCost = 10*100;
        var secondTenDaysCost = 10*80;
        var extraDays = days-20;
        var extraDaysCost = extraDays*50;
        var totalCost = firstTenDaysCost+secondTenDaysCost+extraDaysCost;
    } else if (days >= 11) {
        var firstTenDaysCost = 10*100;
        var extraDays = days-10;
        var extraDaysCost = extraDays*80;
        var totalCost = firstTenDaysCost+extraDaysCost;
    } else {
        var totalCost = days*100;
    }

    console.log("Total Hotel Cost = " + totalCost + " Tk");
}

hotelCost()

// Function 4 - Mega Friend || Finding the longest string

var friends = ["Ayan Hossen", "Shobuj", "Onurag", "Jayan Hossen", "Jannat"];

function megaFriend(array) {
    let longestName = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i].length > longestName.length) { 
            // এখানে >= না দিয়ে > দেওয়ার কারণে যদি একাধিক পরিমাণ সবচেয়ে বড় থাকে তাহলে প্রথমটাকে দেখাবে
            longestName = array[i];
        }
    }
    return longestName;
}

console.log(megaFriend(friends));
