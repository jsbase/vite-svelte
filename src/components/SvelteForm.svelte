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

const dispatch = createEventDispatcher();
  
function onSumbit() {
  console.log('before dispatch new route: ', newRoute);
    
  dispatch('save', newRoute);
}

// Please see the opts below.
const formOpts = {
  //subscribe: true,
  //onCreateValidation: false,
};

const form = createForm(
  {
    title: '',
    url: '',
    tags: [''],
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

<Toggler name="tags" value="tag-1" />
<Toggler name="tags" value="tag-2" />
<Toggler name="tags" value="tag-3" />
