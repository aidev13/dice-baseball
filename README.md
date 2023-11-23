# dice-baseball
A home-grown baseball game played with dice.

Expections - to build a game in javascript to help improve my Javascript Skills

# My Notes and Journey.

##### 11/23/23

Happy Thanksgiving. Went deer hunting this morning and saw nothing. Today I attempted to write an if-statment using ||. My first attenpt looked like this...

```
if (output === 1 || 3 || 5) {
  run code
} else if (output === 2 || 4 || 6) {
  run this code
}
```

this broke and did not excute properly.

I ended up with the following...

```
if(output === 1 || output === 3 || output === 5) {
    playText.innerText = "Strike!"
  }
  else
  playText.innerText = 'Ball!'
```

This works, for now. I am wondering if i can use some kind of mathod for odds and even numbers?? 'Im heppy with this for now!
