

"use strict";

const naruto = {
    name: "Naruto",

    speak() {

        console.log("A", this.name);

        return function () {

            console.log("B", this?.name);

            return () => {

                console.log("C", this?.name);

                return function () {

                    console.log("D", this?.name);

                }.bind({
                    name: "Kakashi"
                });

            };

        }.bind({
            name: "Sasuke"
        });

    }
};

const first = naruto.speak();

const second = first();

const third = second();

third.call({
    name: "Madara"
});

console.log(typeof class Naruto {});