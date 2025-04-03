<template>
    <h1>Home Page</h1>
</template>

<script>
var xhttp = new XMLHttpRequest()
xhttp.open("GET", "http://localhost:3000/", true)
xhttp.send()
xhttp.onreadystatechange = function () {
    console.log(this.readyState)
    console.log(this.status)
    console.log(this.responseText)
}
</script>