<script>
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

// Please see the opts below.
const formOpts = {
  //subscribe: true,
  //onCreateValidation: false,
};

const form = createForm(
  {
    title: '',
  },
  {
    title: [
      required('This field is required'),
      email('Invalid email format')
    ],
  }
);

// directly subscribe to form state change
//form.subscribe((f) => console.log(f.valid));

// or use shorthand access
console.log($form.valid)

// get the current form data
console.log('Form Data: ', form.data())
form.validate();
</script>

<TextInput
  form={form}
  name="title" />

<TextInput
  form={form}
  name="url" />
