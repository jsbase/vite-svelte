<script>
import {onMount, createEventDispatcher} from 'svelte';
import createForm from '@spaceavocado/svelte-form';
import {required, ignoreEmpty, url, email} from '@spaceavocado/svelte-form';
import Button from './Button.svelte';
import TextInput from './SvelteFormInputField.svelte';
//import Toggler from './Toggler.svelte';
import Icon from '@iconify/svelte';
import saveAs from '@iconify/icons-codicon/save-as';
//import closeFilled from '@iconify/icons-carbon/close-filled';
//import addFilled from '@iconify/icons-carbon/add-filled';
//import clearOutlined from '@iconify/icons-ant-design/clear-outlined';
//import arrowReset24Filled from '@iconify/icons-fluent/arrow-reset-24-filled';
//import save24Filled from '@iconify/icons-fluent/save-24-filled';

const dispatch = createEventDispatcher();

const formOpts = {
  onCreateValidation: false,
  subscribe: true
};

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
    formOpts
  );

  // directly subscribe to form state change
  form.subscribe(onChange);

  // or use shorthand access
  console.log('Initial validation: ', $form.valid);

  // get the current form data
  console.log('Form Data: ', form.data());
});

// add new router
const ROUTERS_API = import.meta.env.VITE_ROUTERS_API;
const method = 'POST'; // or PUT
const headers = {'Content-Type': 'application/json'};
// example with static data
const body = JSON.stringify({
  title: 'Mega Router',
  url: 'https:/brave.search.com',
  tags: ['three']
});

function onChange(event) {
  console.log('onChange: ', event);

  form.validate();

  console.log('onChange: ', form);
}

function onSave(event) {
  console.log('onSave validation: ', $form.valid);

  form.validate();

  fetch(ROUTERS_API, {
    method,
    headers,
    body
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
      dispatch('onSaved');
    })
    .catch((error) => console.error);
}
</script>

/* stylelint-disable CssSyntaxError */
<TextInput name="title" {form} />

<TextInput name="url" {form} />

<!--
<Toggler name="tags" value="tag-1" />
<Toggler name="tags" value="tag-2" />
<Toggler name="tags" value="tag-3" />
-->

<Button title="save" on:click={onSave}>
  <Icon icon={saveAs} />
  <span>Save</span>
</Button>
