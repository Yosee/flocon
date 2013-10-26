# flocon [![Build Status](https://travis-ci.org/Yosee/flocon.png?branch=master)](https://travis-ci.org/Yosee/flocon)

64-bits unique ID generator for Node.js written in C++.

Due to Javascript limitations to handle 53 bits Integer, this module returns a 64 bits integer using a String representation.

**flocon** is meant to be used with [mongoose](https://github.com/learnboost/mongoose) and [mongoose-long](https://github.com/aheckmann/mongoose-long) but feel free to use it with any other database.

## Disclaimer

This is an experimental module. We strongly discourage you to use it production for the moment since we don't have tested it enough.

Despite, if you want to use and contribute to this module, your help is welcome!


## Requirements

This module requires [C++11](http://en.wikipedia.org/wiki/C++11) because we use [chrono](http://www.cplusplus.com/reference/chrono/) to work with timestamps.


## Installation

```
npm install flocon --save
```


## Usage

```javascript
var flocon = require('flocon');
var id = flocon.snow();
console.log(typeof id); // string
```

### flocon.snow()

Returns a [Snowflake](https://github.com/twitter/snowflake/)-inspired 64-bit IDs String object constructed using:

<table>
	<tr>
		<th>Input</th>
		<th>Size</th>
		<th>Comment</th>
	</tr>
	<tr>
		<td>Time (milliseconds)</td>
		<td>41 bits</td>
		<td>Time elapsed since epoch, hardcoded to January 1st, 2012.</td>
	</tr>
	<tr>
		<td>Process ID</td>
		<td>10 bits</td>
		<td>
			Process ID that is generating the 64-bits ID.<br />
			Can handle up to 1024 different process ID. 
		</td>
	</tr>
	<tr>
		<td>Counter</td>
		<td>13 bits</td>
		<td>
			Incremental value starting from 0 and re initialised every ms.<br />
			Can generate 8192 per process per ms.
		</td>
	</tr>
</table>
`.snow()` can generate a total of `18,446,744,073,709,551,616` values.



## Tests

`npm test` or check inside [bench](https://github.com/Yosee/flocon/tree/master/bench) for more tests.

## References

- [Twitter Snowflake](https://github.com/twitter/snowflake/)
- [Sharding IDs at Instagram](http://instagram-engineering.tumblr.com/post/10853187575/sharding-ids-at-instagram)
- [Ricardo's unik node.js module](https://github.com/ricardobeat/unik)


## Licence

The MIT License (MIT)

Copyright (c) 2013 Yosee &lt;opensource@yosee.com&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
