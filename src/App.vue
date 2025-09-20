<script setup>
</script>

<template>
    <div class="container">
        <RouterView />
    </div>
</template>

<style>
    h1{
        color: black;
    }

    button{
        background-color: #007bff;
        border: black solid 1px;
        color: black;
        cursor: pointer;
        padding: 7px 5px;
        font-size: 16px;
        border-radius: 3px;
    }
    body{
        background-color: #007bff;
        font-family: Arial Helvetica sans-serif;
    }

    button:hover{
        background-color: #b4cce6;
    }

    .container{
        max-width: 80%;
        margin: 40px auto;
        padding: 30px;
        background-color: white;
        border-radius: 10px;
        border: black solid 2px;
        align-items: center;
    }

    a, a:visited{
        text-decoration: none;
        color: black;
    }
</style>
