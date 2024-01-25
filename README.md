# dice-baseball
A home-grown baseball game played with dice.

Expections - to build a game in javascript to help improve my Javascript Skills

## Rules:
Baseball Dice rules:

2 - 18 players

There are 9 innings

HOW TO PLAY:
Pitching
The pitcher rolls 1 dice (the pitching dice),
Odds = strikes
Even = balls

Batter
One player rolls up to 4 dice or 3 dice accordingly (the batting dies):
On each batters opening pitch they roll all 4 batter dies,
The batter rolls the dice according to the pitcher's pitch.

example:
if the pitcher rolls a strike, the batter rolls the number of dies they have left it strikes,
if the pitcher rolls a ball, the batter rolls the number of dies they have left in balls.

Game play:
Opening pitch:
The pitchers rolls the pitch dice,
after the batter rolls all 4 batter dies,
if the pitcher rolls a 4 (an even number) this indicates a strike(s) thrown.
the batter rolls their dice and rolls a 1,3,6,4 ...

In play:
Foul balls and strikes
Foul balls are only hit when the pitchers STRIKE dice number(in the case 4) matches the batters strike number(4).. just like it human baseball, you cannot be out on a foul ball if you have two strikes, but is always a strike 1 or 2.


The play is determined by what has been rolled.
Since the pitch is a 4(even) the pitch in play is strike.
Because the pitcher rolled strikes, balls are not counted in this round.
The batter must now avoid rolling even numbers.
If the batter rolls an even numbered dice this is considered a strike.
since the batter rolled a 1(ball),3(ball),6(strike),4(foul ball - strike) the count is.
2 strike 0 balls

Next Pitch:
Hitting and balls
If the pitcher rolls a 3 (an odd number), The batter wants to try to match that dice to render the hit dice.
Now the batter rolls their dice. Because the batter still has 4 ball remaining, they roll all 4 dice.
2,5,3,3
if the batter matches at least one die, they can roll the hit dice. OR take the balls for the count. If they take the balls, the count is now
2 strikes, and 3 balls
if they want to take a hit, the hit dies play as follows:
1 = Single
2 = Double
3 = Triple
4 = HR
5 = Foul ball
6 = Fly out

Challenge:
if there is a man on base, the pitcher can try to throw them out with a challenge.
The challenge is simple.
The pitch must roll one die and the runner must roll one dice.
If the pitcher rolls a higher number the runner is out
if the batter rolls a higher number the batter is safe and advances to the next base.
Ties are null and must be rolled again.

Stealing:
To steal, the batter must have a runner in play on 1st or 2nd (cannot steal home).
If more than one player on each team anyone other than the pitcher must roll against the batter aka the catcher,
If the batter rolls a higher dice then the runner advances(only one runner)
Ff the catcher rolls the higher die the runner is out.
Ties are null and must be rolled again.
