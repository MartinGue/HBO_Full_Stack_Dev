var bottles = 10; // bottles is initialized here instead

for ( ; bottles > 0 ; ) { // empty initialization and increment

alert("There were " + bottles + " green bottles, hanging on the wall. And if one green bottle should accidently fall, there'd be " 
+ (bottles-1) + " green bottles hanging on the wall");
bottles--; // increment moved into code block
}