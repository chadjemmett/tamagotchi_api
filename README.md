##Tamagotchi API

This api is a simple backend to a tamagotchi-like game. When requested, this API will send an update on a specific tamagotchi creature.

###Here's some things it will need.

1. The status of the creature
2. It's current status and level of evolution.
3. tests
4. Various status levels.
  1. hunger
  2. happiness
  3. discipline
  4. age
  5. sick?
  6. messy?
  7. Asleep?
  8. Lights on?
  9. if eating, what type of food?
  10. ??

Here's how it will work. A user creates a tamagotchi. It gets a name, a username. We do that with a post request. 
It also gets a time stamp when it was created. It also gets a check in time. We save the username and the tamagotchi name to the db.
After creation it sends back an object with all the data it needs. See above. It also has a check in time. The time that it last was updated. 
Most of the work will be checking the time and comparing the difference between check in the last check in time and the current time.
