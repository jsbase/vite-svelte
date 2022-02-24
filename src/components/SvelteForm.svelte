<script>
import { createEventDispatcher } from 'svelte';
import { onMount } from 'svelte';
import Toggler from './components/Toggler.svelte';
import createForm from '@spaceavocado/svelte-form';
import {
  required,
  min,
  max,
  between,
  rx,
  ignoreEmpty,
  url,
  email
} from '@spaceavocado/svelte-form';
import TextInput from './SvelteFormInputField.svelte';
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
  //subscribe: true,
};

let form;

onMount(() => {
	form = createForm(
    {
      title: '',
      url: '',
      tags: [''],
    },
    {
      title: [
        required('This field is required'),
        email('Please enter the account email!'),
      ],
      url: [
        required('This field is required'),
        url('Please enter a valid url format!'),
      ],
      tags: [
        ignoreEmpty(),
      ],
    },
    formOpts
  );

  // directly subscribe to form state change
  //form.subscribe((f) => console.log(f.valid));

  // or use shorthand access
  console.log('Initial validation: ', $form.valid)

  // get the current form data
  console.log('Form Data: ', form.data())
});

// add new router
const method = 'POST'; // or PUT
const headers = { 'Content-Type': 'application/json' };

function onSave() {
  console.log('onSave validation: ', $form.valid);

  form.validate();

  const newRouter = {
    "title": "Mega Router",
    "url": "https:/brave.search.com",
    "tags": [
      "three"
    ],
  };

	fetch('http://localhost:3303/routers', {
		method,
		headers,
		body: JSON.stringify(newRouter),
	})
	.then(response => response.json())
	.then(data => {
		console.log('Success:', data);
	})
	.catch(error => console.error);
});
</script>

<TextInput name="title" form={form} />

<TextInput name="url" form={form} />

<Toggler name="tags" value="tag-1" />
<Toggler name="tags" value="tag-2" />
<Toggler name="tags" value="tag-3" />

<button title="save" on:click="{() => dispatch('onSave')}">
  <Icon icon={saveAs} />
  <span >Save</span>
</button>
