<script>
/*
export let form;
export let name;

$: field = form.field(name);
$: value = form.field(name).value;
$: state = field.state; // example: { valid: false, error: 'Field is invalid!' }

function onInput() {
    console.log('onInput');
    form.validate();

    // on:input={onInput}
}
*/
</script>

<!--
<div class="input" class:error={$state?.valid === false}>
  <input type="text" {name} bind:value={$value} />
  <p class="validation">{$state?.error}</p>
</div>
-->
<style lang="postcss" scoped>
/*
input + .validation {
  display: none;
}

.error .validation {
  display: block;
}

.error {
  color: tomato;
  font-weight: bolder;
}
*/
</style>
