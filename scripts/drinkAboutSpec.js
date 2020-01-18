describe("The whatCanIDrink function", function() {
    beforeEach(function() {
        drink = new whatCanIDrink();
    });

    describe("Checks the age", function() {
        it("should exist", function() {
            expect(whatCanIDrink).toBeDefined();
        });

        it("should return Drink Toddy when whatCanIDrink(13) is called", function() {
            var result = whatCanIDrink(13)
            expect(result).toBe("Drink Toddy");
        });

        it("should return Drink Coke when whatCanIDrink(17) is called", function() {
                    var result = whatCanIDrink(17)
                    expect(result).toBe("Drink Coke");
                });

        it("should return Drink Beer when whatCanIDrink(18) is called", function() {
                    var result = whatCanIDrink(18)
                    expect(result).toBe("Drink Beer");
                });

        it("should return Drink Whisky when whatCanIDrink(28) is called", function() {
                    var result = whatCanIDrink(28)
                    expect(result).toBe("Drink Whisky");
                });

        it("should return no drink when whatCanIDrink(200) is called", function() {
                    var result = whatCanIDrink(200)
                    expect(result).toBe("Sorry. I can't tell what drink because that age is incorrect!");
                });
            });
   });