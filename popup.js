fetch("https://raw.githubusercontent.com/FroggyTheDeveloper/slevov-k-dy/refs/heads/main/discounts.json")
    .then(response => response.json())
    .then(discounts => {

        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            const url = new URL(tabs[0].url);

            document.getElementById("shop").textContent = url.hostname;

            const discount = discounts[url.hostname];

            if (discount) {

               const today = new Date();
const expires = new Date(discount.expires + "T23:59:59");

                if (today <= expires) {

                    document.getElementById("discount").textContent = discount.code;
                    document.getElementById("discountInfo").textContent = "Sleva: " + discount.discount;
                    document.getElementById("description").textContent = discount.description;
                    document.getElementById("copy").style.display = "block";

                } else {

                    document.getElementById("discount").textContent = "Kód vypršel";
                    document.getElementById("discountInfo").textContent = "";
                    document.getElementById("description").textContent = "";
                    document.getElementById("copy").style.display = "none";

                }

            } else {

                document.getElementById("discount").textContent = "Kód nemáme";

            }

            document.getElementById("copy").addEventListener("click", function() {

                const code = document.getElementById("discount").textContent;

                navigator.clipboard.writeText(code);

                document.getElementById("copy").textContent = "Kód zkopírován ✓";

            });

        });

    });