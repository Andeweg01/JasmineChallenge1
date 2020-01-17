describe("The whatCanIDrink function", function() {
    beforeEach(function() {
        drink = new whatCanIDrink();
    });

    describe("Checks the age"), function() {
        it("should exist"), function() {
            expect(whatCanIDrink).toBeDefined();
        });

        it("should return Drink Toddy when called whatCanIDrink(13)"), function() {
            var result = whatCanIDrink(13)
            expect(result).toBe("Drink Toddy");
        });

   it("should return Drink Coke when called whatCanIDrink(17)"), function() {
            var result = whatCanIDrink(17)
            expect(result).toBe("Drink Coke");
        });

   it("should return Drink Beer when called whatCanIDrink(18)"), function() {
            var result = whatCanIDrink(18)
            expect(result).toBe("Drink Beer");
        });

   it("should return Drink Whisky when called whatCanIDrink(28)"), function() {
            var result = whatCanIDrink(28)
            expect(result).toBe("Drink Whisky");
        });

   it("should return no drink when called whatCanIDrink(200)"), function() {
            var result = whatCanIDrink(200)
            expect(result).toBe("Sorry. I can't tell what drink because that age is incorrect!");
        });
     });
   });