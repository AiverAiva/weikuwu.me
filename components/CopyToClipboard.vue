<template>
  <a @click="copyText" >
    <i class='bx bxs-copy'></i>
  </a>
</template>

<script>
  export default {
    name: 'CopyToClipboard',
    props: {
      text: {
        type: String,
        required: true
      },
      // message: {
      //   type: String,
      //   required: true
      // }
    },
    setup(props) {
      const copyText = () => {
        navigator.clipboard.writeText(props.text);
      }

      return {
        copyText
      }
    }
  }
</script>