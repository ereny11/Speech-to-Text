<template>
    <main>
        <h1>Welcome to Speech Text Project</h1>

        
        <div class="app__try-button">
          
          <textarea class="text-field" placeholder="Text from Speech" rows="5" v-model="speech"></textarea>

          <SpeechToText class="app__stt-button" @speech="onSpeechReceived($event)"/>
      </div>
       
    </main>
    
</template>

<script>
import SpeechToText from '@/components/SpeechToText.vue';

export default {
    components: {
        SpeechToText
    },
    data() {
        return {
            speech: ''
        };
    },
    methods: {
        onSpeechReceived(speech) {
            console.log('Reveived', speech);
            this.speech = speech;
        }
    }
};
</script>

<style scoped>
main{
    text-align: center;
}
h1{
 color: #0085A7;
 margin: 50px 0;
}
.text-field{
    width: 100%;
    border-radius: 8px;
    box-shadow: 0px 1px 5px 0px #F3F3F3;
    border-color: #D8D8D8;
    padding: 7px;
    transition: 0.2s ease-in-out;
    margin-bottom: 30px;
}
.text-field:focus{
    border-color: #A9A9A9;
    outline: 0;
    transition: 0.2s ease-in-out;
}

</style>