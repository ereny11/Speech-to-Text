import { Subject } from 'rxjs';

var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;

export default class SpeechToText {
    constructor() {
        this.recognition = new SpeechRecognition();
        this.result = 'created';
        this.resultSubject = new Subject();

        this.recognition.lang = 'en-EN';
        this.recognition.interimResults = false;
        this.recognition.maxAlternatives = 1;

        this.recognition.onresult = (event) => {
            console.log('Event', event);

            const last = event.results.length - 1;
            this.result = event.results[last][0].transcript;

            console.log(`Confidence: ${event.results[0][0].confidence}`, this.result);
            this.resultSubject.next(this.result);
        };

        this.recognition.onspeechend = () => {
            this.recognition.stop();
            console.log('Speech end');
            this.resultSubject.next('');
        };
    }

    speak() {
        this.recognition.start();
        return this.resultSubject;
    }
}