<template>
    <div>
        <div class="speech-to-text__button-container">
            <div @click="onClick()" :class="{ 'speech-to-text__button--speaking': isSpeaking }"
                    class="speech-to-text__button">
                    <button v-if="!isSpeaking" class="btn record-btn">Record Audio</button>
                    <button v-if="isSpeaking" class="btn stop-btn">Stop Record</button>
                    
                </div>
            </div>
    </div>
</template>

<script>
import SpeechToText from '../services/speech-recognition'


export default {
    name: 'SpeechToText',
    data() {
        return {
            isSpeaking: false,
            speech: '',
            speechService: {},
        };
    },
    methods: {
        onClick() {
            this.isSpeaking = true;
            this.speechService.speak().subscribe(
                (result) => {
                    this.speech = result;
                    this.$emit('speech', this.speech);
                    this.isSpeaking = false;
                    // console.log('Result', result);
                },
                (error) => {
                    console.log('Error', error);
                    this.isSpeaking = false;
                },
                () => {
                    this.isSpeaking = false;
                }
            );
            console.log('speechService started');
        }
    },
    props: {
        msg: String
    },
    created() {
        this.speechService = new SpeechToText();
    }
};
</script>

<style scoped>
.btn{
    border: 1px solid #A9A9A9;
    border-radius: 8px;
    padding: 10px;
}
.record-btn{
    background-color: #FFFFFF;
    color: #0085A7;  
}
.stop-btn{
    background-color: #D50A0A;
    color: #FFFFFF;
}
</style>
