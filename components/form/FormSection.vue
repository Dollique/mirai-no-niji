<template>
  <form v-editable="blok" class="form-section">
    <fieldset v-for="blok in blok.fields" :key="blok._uid">
        <component :is="blok.component" :blok="blok" />
    </fieldset>

    <fieldset>
      <button type="submit" class="form__button" data-callback="handleFormSubmit">Submit</button>
    </fieldset>
  </form>
</template>

<script>
  export default {
    props: {
      blok: {
        type: Object,
        required: true,
      },
    },
  }

  var handleFormSubmit = function () {
    var formApiEndpoint = 'http://geyst.appengine.flow.ch:8080'

    console.log("test");

    /*

    var formRequest = new Request(formApiEndpoint, {
        method: 'POST',
        body: JSON.stringify({
          name: nameInput.value,
          message: messageInput.value
        })
      })

      fetch(formRequest)
        .then(function(response) {
          if (response.status === 200) {
            return response.json()
          } else {
            throw new Error('Something went wrong on api server!')
          }
        })
        .then(function(response) {
          successEl.style.display = 'block'
          buttonEl.style.display = 'block'
          sendingEl.style.display = 'none'
          nameInput.value = ''
          messageInput.value = ''
        }).catch(function(error) {
        errorsEl.style.display = 'block'
        buttonEl.style.display = 'block'
        sendingEl.style.display = 'none'
        console.error(error)
      })

    */

  }
</script>
