$(document).ready(function () {
    console.log("Ready");

    //http://bitwiseshiftleft.github.io/sjcl/ 
    //Secure data
    var data = {
        name: 'Scott',
        age: 36
    };
    var password = 'st5rYurTzx5';

    var hash_text = sjcl.encrypt(password, JSON.stringify(data));
    console.log(hash_text);
    console.log(hash_text.length);

    var decoded_text = sjcl.decrypt(password, hash_text);
    console.log(decoded_text);

    //Send dweet
    dweetio.listen_for("test-harding", function (dweet) {
        // This will be called anytime there is a new dweet for my-thing
        console.log('Got dweet:' + dweet);
    });



});

function sendDweet() {
    dweetio.dweet_for("test-harding", {
        some: "data"
    }, function (err, dweet) {
        console.log(dweet.thing); // "my-thing"
        console.log(dweet.content); // The content of the dweet
        console.log(dweet.created); // The create date of the dweet
    });
}