<template>
<div class="dropper">
    <input type="file" @change="uploadImages($event.target.files)" multiple accept="images/*">
    <span>Drag file here!</span>
    </div>  
</template>

<script>
import {mapActions} from 'vuex';
export default {
 name:'UploadFrom',
 methods: {
     ...mapActions(['uploadImages']),
 },
}
</script>

<style scoped>
.dropper{
    height: 30vh;
    border:2px dashed black;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.dropper:hover{
    background-color: #eee;
}
input{
    width: 100%;
    position: absolute;
    height: 30vh;
    opacity: 0;
}
</style>