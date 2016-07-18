var jinhan = {
    name: "jinhan",
    hello: function() {
        console.log("hello world");
    }
};

function isPositiveOrNagative(a) {
    if (a == 0) {
        console.log("0입니다.")
    } else if(a < 0) {
        console.log("음수입니다.")
    } else {
        console.log("양수입니다.")
    }
}

isPositiveOrNagative(-1)
isPositiveOrNagative(0)
isPositiveOrNagative(2)
