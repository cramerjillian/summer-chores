# Summer Chores (Callback Version)

This code simulates completing a list of summer chores using callback functions. The person must complete the following list of chores in this specific order:

1. Mowing the yard
2. Weedeating the edges of the house and fence line
3. Trimming the hedges
4. Collect fallen wood for summer night fires
5. Water the garden

Although each task takes a varying amount of time, using callback functions ensures the chores will be completed in the correct order.

## Simulating Tiredness

Each chore function (after mowing the yard) will generate a random integer between 0-10 at the beginning.

If the random number is above the required threshold, the person will complete the chore successfully and move on to the next via callback function.

If the number is below the required threshold, the person will fall asleep and the callback function for the next task will not be called.

The required threshold increases gradually with each subsequent chore, simulating a person growing more tired as they complete more chores.