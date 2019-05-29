console.log(`Script runnung`);

function GETUserInfo() {
    const input = document.getElementById("getuserInfo").value;
    const url = "api/showprofile/" + input;

    axios.get(url).then(response => {
        console.log("let's go get that profile");
        console.log(JSON.stringify(response.data[0].username));
        for (var i = 0; i > response.data.length; i++) {
        // var user = JSON.stringify(response.data[i].username);
        // var p = document.createElement("p");
        // var parent = document.getElementById("userInfoButton");
        // parent.appendChild(p);
        // p.innerText = user;
        console.log(`Checkout ${response.data[0].username}`);
        }
    });
};

function POSTUserInfo() {
    const userName = document.getElementById("user-name").value;
    const userId = document.getElementById("user-id").value;
    const message = document.getElementById("message").value;
//console.log(`${userName} ${userId} ${message}`);
   
const payload = {
    userName,
    userId,
    message
}

     axios.post("/api/", payload)
    .then(response => {
        console.log(response.data);
        document.getElementById("userInfo").innerText = response.data;
    });
}

function getAllUsers() {
    axios.get('api/getallusers')
    .then(response => {
        document.getElementById("allUserResult").innerHTML = JSON.parse(JSON.stringify(response.data));
    });
}

