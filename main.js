class DigitalClock {
    constructor(element){
        this.element =element;
    }

    getTimeParts() {
        const now = new Date();

        return {
            hour: now.getHours() % 12 || 12,
            minutes: now.getMinutes(),
            isAm: now.getHours<12
        }
    }


    update (){
        const parts = this.getTimeParts();
        const minutesFormatted = parts.minutes.toString().padStart(2,"0");
        const timeFormatted = `${parts.hour}:${minutesFormatted}`
        const ampm = parts.isAm ? "AM" : "PM";
        this.element.querySelector(".clock-time").textContent=timeFormatted;
        this.element.querySelector(".clock-ampm").textContent=ampm;

   

        }

        start() {
            setInterval(() => {
                this.update();
            },500);
        }
   
}

const clockElement = document.querySelector(".clock");
const clockObject = new DigitalClock(clockElement);

clockObject.start();