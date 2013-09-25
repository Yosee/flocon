# Benchmark

All benchmark have been made on the same machine and in the same conditions (meaning same applications running on the machine).

Configuration:
- Processor: 1.7 GHz Intel Core i7
- Memory: 8 Go 1600 MHz DDR3
- OS: OS X 10.8.5
- Node: 0.10.18


## [Unik](https://github.com/ricardobeat/unik)
```
antoine: ~/Developer/Node/unik/test
$ node sharding.js
Burst size 60
Starting 4 workers...
2481300 ids, 496260 ids/sec, 68 MB, 4 workers
5052060 ids, 514152 ids/sec, 72 MB, 4 workers
7619280 ids, 513444 ids/sec, 84 MB, 4 workers
9946320 ids, 465408 ids/sec, 84 MB, 4 workers
12301500 ids, 471036 ids/sec, 84 MB, 4 workers
14699580 ids, 479616 ids/sec, 84 MB, 4 workers
17156400 ids, 491364 ids/sec, 84 MB, 4 workers
19475160 ids, 463752 ids/sec, 84 MB, 4 workers
21373380 ids, 379644 ids/sec, 84 MB, 4 workers
23436780 ids, 412680 ids/sec, 84 MB, 4 workers
24788160 ids, 270276 ids/sec, 84 MB, 4 workers
26246160 ids, 291600 ids/sec, 84 MB, 4 workers
28384860 ids, 427740 ids/sec, 116 MB, 4 workers
30585900 ids, 440208 ids/sec, 116 MB, 4 workers
32809680 ids, 444756 ids/sec, 116 MB, 4 workers
35003580 ids, 438780 ids/sec, 116 MB, 4 workers
37193700 ids, 438024 ids/sec, 116 MB, 4 workers
39400860 ids, 441432 ids/sec, 116 MB, 4 workers
41582520 ids, 436332 ids/sec, 116 MB, 4 workers
43782660 ids, 440028 ids/sec, 116 MB, 4 workers
45986880 ids, 440844 ids/sec, 116 MB, 4 workers
48197400 ids, 442104 ids/sec, 116 MB, 4 workers
50392380 ids, 438996 ids/sec, 116 MB, 4 workers
52658700 ids, 453264 ids/sec, 116 MB, 4 workers
55029420 ids, 474144 ids/sec, 116 MB, 4 workers
57231180 ids, 440352 ids/sec, 116 MB, 4 workers
59484960 ids, 450756 ids/sec, 116 MB, 4 workers
61781640 ids, 459336 ids/sec, 116 MB, 4 workers
64193940 ids, 482460 ids/sec, 116 MB, 4 workers
66824640 ids, 526140 ids/sec, 116 MB, 4 workers
69052980 ids, 445668 ids/sec, 116 MB, 4 workers
71333040 ids, 456012 ids/sec, 116 MB, 4 workers
73589160 ids, 451224 ids/sec, 116 MB, 4 workers
75873600 ids, 456888 ids/sec, 116 MB, 4 workers
78156540 ids, 456588 ids/sec, 116 MB, 4 workers
80501640 ids, 469020 ids/sec, 116 MB, 4 workers
82760760 ids, 451824 ids/sec, 116 MB, 4 workers
85243800 ids, 496608 ids/sec, 116 MB, 4 workers
87882420 ids, 527724 ids/sec, 116 MB, 4 workers
90569220 ids, 537360 ids/sec, 116 MB, 4 workers
93217020 ids, 529560 ids/sec, 116 MB, 4 workers
95897040 ids, 536004 ids/sec, 116 MB, 4 workers
98567880 ids, 534168 ids/sec, 116 MB, 4 workers
101295720 ids, 545568 ids/sec, 116 MB, 4 workers
```

Processor usage: 90%. Generate approximately 500,000 ids/sec.



## [Long](https://github.com/dcodeIO/Long.js)
```
antoine: ~/Developer/Yosee/GitHub/flocon/bench
$ node sharding.js
Burst size 60
Starting 4 workers...
1989900 ids, 397980 ids/sec, 205 MB, 4 workers
3952140 ids, 392448 ids/sec, 205 MB, 4 workers
5763840 ids, 362340 ids/sec, 207 MB, 4 workers
7734120 ids, 394056 ids/sec, 205 MB, 4 workers
9496980 ids, 352572 ids/sec, 207 MB, 4 workers
11348700 ids, 370344 ids/sec, 207 MB, 4 workers
13194420 ids, 369144 ids/sec, 207 MB, 4 workers
14996220 ids, 360360 ids/sec, 207 MB, 4 workers
16830300 ids, 366816 ids/sec, 207 MB, 4 workers
18649440 ids, 363828 ids/sec, 207 MB, 4 workers
20495820 ids, 369276 ids/sec, 206 MB, 4 workers
22295640 ids, 359964 ids/sec, 205 MB, 4 workers
24090240 ids, 358920 ids/sec, 207 MB, 4 workers
25905960 ids, 363144 ids/sec, 207 MB, 4 workers
27709320 ids, 360672 ids/sec, 206 MB, 4 workers
29496360 ids, 357408 ids/sec, 206 MB, 4 workers
31286520 ids, 358032 ids/sec, 206 MB, 4 workers
33059700 ids, 354636 ids/sec, 204 MB, 4 workers
34878120 ids, 363684 ids/sec, 208 MB, 4 workers
36650760 ids, 354528 ids/sec, 205 MB, 4 workers
38450280 ids, 359904 ids/sec, 205 MB, 4 workers
40245480 ids, 359040 ids/sec, 206 MB, 4 workers
42043320 ids, 359568 ids/sec, 207 MB, 4 workers
43823460 ids, 356028 ids/sec, 205 MB, 4 workers
45661440 ids, 367596 ids/sec, 204 MB, 4 workers
47450100 ids, 357732 ids/sec, 207 MB, 4 workers
49282800 ids, 366540 ids/sec, 205 MB, 4 workers
51054180 ids, 354276 ids/sec, 208 MB, 4 workers
52873380 ids, 363840 ids/sec, 206 MB, 4 workers
54657000 ids, 356724 ids/sec, 208 MB, 4 workers
56456580 ids, 359916 ids/sec, 207 MB, 4 workers
58303320 ids, 369348 ids/sec, 207 MB, 4 workers
60144420 ids, 368220 ids/sec, 208 MB, 4 workers
61971480 ids, 365412 ids/sec, 207 MB, 4 workers
63843000 ids, 374304 ids/sec, 206 MB, 4 workers
65688300 ids, 369060 ids/sec, 206 MB, 4 workers
67566660 ids, 375672 ids/sec, 205 MB, 4 workers
69417600 ids, 370188 ids/sec, 205 MB, 4 workers
71253360 ids, 367152 ids/sec, 208 MB, 4 workers
73084620 ids, 366252 ids/sec, 205 MB, 4 workers
74949840 ids, 373044 ids/sec, 206 MB, 4 workers
76679460 ids, 345924 ids/sec, 209 MB, 4 workers
78549000 ids, 373908 ids/sec, 206 MB, 4 workers
80424660 ids, 375132 ids/sec, 206 MB, 4 workers
82356720 ids, 386412 ids/sec, 207 MB, 4 workers
84234660 ids, 375588 ids/sec, 206 MB, 4 workers
86146500 ids, 382368 ids/sec, 205 MB, 4 workers
88061880 ids, 383076 ids/sec, 206 MB, 4 workers
89982120 ids, 384048 ids/sec, 208 MB, 4 workers
91919040 ids, 387384 ids/sec, 208 MB, 4 workers
93844140 ids, 385020 ids/sec, 208 MB, 4 workers
95772900 ids, 385752 ids/sec, 207 MB, 4 workers
97688880 ids, 383196 ids/sec, 205 MB, 4 workers
99566640 ids, 375552 ids/sec, 205 MB, 4 workers
101485920 ids, 383856 ids/sec, 206 MB, 4 workers
```

Processor usage: 90%. Generate approximately 360,000 ids/sec.



## [Bigint](https://github.com/substack/node-bigint)
```
antoine: ~/Developer/Yosee/GitHub/flocon/bench
$ node sharding.js
Burst size 60
Starting 4 workers...
522480 ids, 104496 ids/sec, 220 MB, 4 workers
1052220 ids, 105948 ids/sec, 223 MB, 4 workers
1564440 ids, 102444 ids/sec, 224 MB, 4 workers
2102100 ids, 107532 ids/sec, 224 MB, 4 workers
2639040 ids, 107388 ids/sec, 224 MB, 4 workers
3120900 ids, 96372 ids/sec, 224 MB, 4 workers
3636960 ids, 103212 ids/sec, 224 MB, 4 workers
```

Processor usage: 90%. Generate approximately 100,000 ids/sec.



## [Bignum](https://github.com/justmoon/node-bignum)
```
antoine: ~/Developer/Yosee/GitHub/flocon/bench
$ node sharding.js
Burst size 60
Starting 4 workers...
499320 ids, 99864 ids/sec, 223 MB, 4 workers
1018740 ids, 103884 ids/sec, 224 MB, 4 workers
1533180 ids, 102888 ids/sec, 224 MB, 4 workers
2051160 ids, 103596 ids/sec, 224 MB, 4 workers
2516160 ids, 93000 ids/sec, 224 MB, 4 workers
2983020 ids, 93372 ids/sec, 224 MB, 4 workers
3465780 ids, 96552 ids/sec, 224 MB, 4 workers
3926880 ids, 92220 ids/sec, 224 MB, 4 workers
4403580 ids, 95340 ids/sec, 224 MB, 4 workers
```

Processor usage: 90%. Generate less than 100,000 ids/sec.



## [C++ / flocon](https://github.com/Yosee/flocon)
```
antoine: ~/Developer/Yosee/GitHub/flocon/bench
$ node sharding.js
Burst size 60
Starting 4 workers...
5471340 ids, 1094268 ids/sec, 68 MB, 4 workers
9715500 ids, 848832 ids/sec, 68 MB, 4 workers
14892420 ids, 1035384 ids/sec, 68 MB, 4 workers
20346300 ids, 1090776 ids/sec, 68 MB, 4 workers
25950960 ids, 1120932 ids/sec, 68 MB, 4 workers
31578420 ids, 1125492 ids/sec, 68 MB, 4 workers
37208580 ids, 1126032 ids/sec, 68 MB, 4 workers
42971880 ids, 1152660 ids/sec, 68 MB, 4 workers
48583440 ids, 1122312 ids/sec, 68 MB, 4 workers
54097440 ids, 1102800 ids/sec, 68 MB, 4 workers
59937360 ids, 1167984 ids/sec, 68 MB, 4 workers
65436000 ids, 1099728 ids/sec, 68 MB, 4 workers
71312520 ids, 1175304 ids/sec, 68 MB, 4 workers
76958340 ids, 1129164 ids/sec, 68 MB, 4 workers
82624440 ids, 1133220 ids/sec, 68 MB, 4 workers
88360320 ids, 1147176 ids/sec, 68 MB, 4 workers
93865920 ids, 1101120 ids/sec, 68 MB, 4 workers
99621180 ids, 1151052 ids/sec, 68 MB, 4 workers
105160500 ids, 1107864 ids/sec, 68 MB, 4 workers
```

Processor usage: 50%. Generate more than 1,000,000 ids/sec.