console.log(`Script runnung`);

function GETUserInfo() {
    const input = document.getElementById("getuserInfo").value;
    const url = "/showprofile/" + input;
    //axios .get

    axios.get(url)
    .then(response => {
        console.log(response.data);
        document.getElementById("userInfo").innerText = response.data;
    });
}

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
    axios.get("getallusers")
    .then(response => {
        document.getElementById("allUserResult").innerHTML = JSON.parse(JSON.stringify(response.data));
    });
}

