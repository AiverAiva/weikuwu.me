<template>
    <span ref="text"></span>
    <span class="cursor">|</span>
</template>
  
<script>
export default {
    props: {
        content: {
            type: Array,
            required: true
        },
        typeSpeed: {
            type: Number,
            default: 100
        },
        deleteSpeed: {
            type: Number,
            default: 50
        },
        waitTime: {
            type: Number,
            default: 2000
        }
    },
    data() {
        return {
            currentIndex: 0,
            currentText: "",
            deleting: false
        };
    },
    mounted() {
        this.startTyping();
    },
    methods: {
        async startTyping() {
            while (true) {
                if (!this.deleting) {
                    if (this.currentText.length < this.content[this.currentIndex].length) {
                        this.currentText += this.content[this.currentIndex][this.currentText.length];
                        this.$refs.text.textContent = this.currentText;
                        await new Promise((resolve) => setTimeout(resolve, this.typeSpeed));
                    } else {
                        this.deleting = true;
                        await new Promise((resolve) => setTimeout(resolve, this.waitTime));
                    }
                } else {
                    if (this.currentText.length > 0) {
                        this.currentText = this.currentText.slice(0, -1);
                        this.$refs.text.textContent = this.currentText;
                        await new Promise((resolve) => setTimeout(resolve, this.deleteSpeed));
                    } else {
                        this.deleting = false;
                        this.currentIndex = (this.currentIndex + 1) % this.content.length;
                    }
                }
            }
        }
    }
};
</script>
  