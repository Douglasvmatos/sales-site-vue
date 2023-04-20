<template>
    <div class="vl-parent absolute bg-black">
        <loading 
        v-model:active="isLoading" 
        :can-cancel="true" 
        :on-cancel="onCancel" 
        :is-full-page="true" />
    </div>
</template>

<script lang="ts">
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';

export default {
    data() {
        return {
            isLoading: true,
        }
    },
    components: {
        Loading
    },
    methods: {
        doAjax() {
            this.isLoading = true;
            setTimeout(() => {
                this.isLoading = false
            }, 2000)
        },
        onCancel() {
            console.log('User cancelled the loader.')
        },
    },
}
</script>

