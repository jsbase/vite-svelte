<script>
import {onMount} from 'svelte';
import createForm from '@spaceavocado/svelte-form';
import {required, ignoreEmpty, url, email} from '@spaceavocado/svelte-form';
import Button from './Button.svelte';
//import Toggler from './Toggler.svelte';
import Icon from '@iconify/svelte';
import save24Filled from '@iconify/icons-fluent/save-24-filled';
//import saveAs from '@iconify/icons-codicon/save-as';
//import closeFilled from '@iconify/icons-carbon/close-filled';
//import addFilled from '@iconify/icons-carbon/add-filled';
//import clearOutlined from '@iconify/icons-ant-design/clear-outlined';
//import arrowReset24Filled from '@iconify/icons-fluent/arrow-reset-24-filled';
//import {onMount, createEventDispatcher} from 'svelte';
//const dispatch = createEventDispatcher();

const method = 'POST'; // or PUT
const headers = {'Content-Type': 'application/json'};

let form;

onMount(() => {
  form = createForm(
    {
      title: '',
      url: '',
      tags: ['']
    },
    {
      title: [
        required('This field is required'),
        email('Please enter the account email!')
      ],
      url: [
        required('This field is required'),
        url('Please enter a valid url format!')
      ],
      tags: [ignoreEmpty()]
    },
    {
      onCreateValidation: true
    }
  );

  // directly subscribe to form state change
  //form.subscribe(onChange);

  // or use shorthand access
  console.log('Initial validation: ', $form.valid);

  // get the current form data
  console.log('form.data(): ', form.data());
});

/* $: titleField = form.field('title');
$: titleValue = titleField.value;
$: isValidTitle = titleField.state.valid; */

/* function getPayload() {
  console.log('getPayload: ', form.data());
  return form.data();
} */

/*
function onSubmit() {
  console.group('onSubmit');
  console.log('form: ', form);
  console.log('form.data(): ', form.data());
  console.log('$form: ', $form);
  console.log('$form.valid: ', $form.valid);
  console.groupEnd();

  form.validate();

  addRouter(getPayload());
}
// on:click={onSubmit}
*/

/* async function addRouter(payload) {
  const body = JSON.stringify(payload);
  const options = {method, headers, body};

  try {
    const res = await fetch('http://localhost:3303/routers', options);
    return res.json();
  } catch (errMsg) {
    throw new Error(errMsg);
  }
} */
</script>

<fieldset>
  <div class="flex flex-col-reverse">
    <input
      class="input {!false ? 'error' : ''}"
      type="text"
      name="title"
      id="router_title"
      value="" />
    <label for="router_title">Title</label>
    <p class="validation">Does your title looks liuke this? "test@bla.de"</p>
  </div>
  <!-- <TextInput name="title" {form} /> -->
  <!-- <TextInput name="url" {form} /> -->
</fieldset>

<fieldset class="flex flex-col-reverse">
  <input id="tag-1" name="tag" type="checkbox" class="toggle-checkbox" />
  <label for="tag-1">One</label>

  <input id="tag-2" name="tag" type="checkbox" class="toggle-checkbox" />
  <label for="tag2">Two</label>

  <input id="tag-3" name="tag" type="checkbox" class="toggle-checkbox" />
  <label for="tag-3">Three</label>
</fieldset>

<Button>
  <Icon icon={save24Filled} />
  <span class="group-focus:hidden">Submit</span>
</Button>

<style scoped lang="postcss">
fieldset {
  @apply border-transparent p-2;
}
.validation {
  @apply hidden text-red-600;
}

.toggle-checkbox {
  @apply absolute block h-6 w-6 cursor-pointer appearance-none rounded border-4 bg-white;
}

.toggle-checkbox + label {
  @apply text-xs text-gray-700;
}
</style>
