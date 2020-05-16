<template>
  <div class="history">
    <h1>This is a history page</h1>
    <!-- <div v-for="kv in rows" :key="kv">
        <p>{{kv.k}}</p>
        <p>{{kv.v}}</p>
    </div> -->
    <p>{{message1}}</p>
  </div>
</template>

<script>
export default {
    data(){
        return {
            message1: 'qwer'
        }
    }
}
</script>
