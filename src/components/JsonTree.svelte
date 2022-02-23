<script>
  import JSONTree from 'svelte-json-tree'
  import * as Routers from '../db.json'

    // your json data to view
     /* const value = {
          array: [1, 2, 3],
              bool: true,
                  object: {
                        foo: 'bar'
                            },
                            		symbol: Symbol('foo'),
                                		nested: [{
                                    			a: [1, '2', null, undefined]
                                          		}]
                                                } */
                                                </script>
                                                <JSONTree {Routers} />