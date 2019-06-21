## Welcome to the Drop React Test!

If you haven't already, you will need to run the following from the terminal in
this directory in order to spin up the server.

```
  npm install
  npm start
```

It should be running at `localhost:3008`, so navigate there in your browser
(preferably _Chrome_)

_Take a look around._

There are 3 tabs:

* The default `Points` tab
* The `Offers` tab
* And the `Rewards` tab

Everything is populated with mock data from the `reducers` folder

_For each of the following tasks, provide a brief description of your work and
any technical decisions you made_

We will be evaluating based on robustness and best coding practices, as well as product sense and creativity.

#### For your first task, I would like you to improve the Points tab

1. The current layout of Points tab is a bit strange. **The points should be
   sorted by date descending.** In addition, **Highlight the active tab with
   Drop green (#0de47f)**

2. The PointBalance component takes one prop, `amount`, where `amount` is the
   amount of points the user has earned. The Points container receives a prop,
   `points`, which is an array of all the point objects the user has earned. The
   PointBalance component should be added to the tab, and rendered below the
   logo, but above the nav bar. **Use the points array to compute the users
   point balance and pass it to the PointBalance component**

3. Currently, there is no way for a user to earn points on Drop. **Introduce an
   action and reducer case that allows the user to earn points.** For the sake
   of example, **Create an interval function which will add a randomly generated
   point object every once in awhile**

**BONUS**: Make something happen when the user taps their point balance.
Consider what they might find most useful or interesting and explain your
choice.

`explantation:` For the click of the point balance, i decided to expose the available rewards that the user has. Personally, I think this would be the best set of information to expose to the user because I think the user's main interest in the points are the rewards that they can redeem it for.

#### For your next task, I would like you to improve the Offers tab

1. At the moment, the OfferItem component is hard coded within the render
   function. This makes the parent component more complicated and discourages
   code re-use. **Pull the rendering logic for the OfferItem out of the render
   function and in a new component in its own file**

2. Right now the user cannot tell much about the offer from the OfferItem
   component. We have `amount` on the offer, which represents the amount of
   points they earn per dollar spent; and we have `type` on the offer, which
   represents whether it can earn once, or many times. **Make better use of the
   information available in the offer to tell the user more about it (Feel free
   to add as much or as little as you like)** Ensure you make good use of props
   to make the OfferItem component easy to understand.

3. We would like to add the ability for a user to select a favorite offer. When
   finished, the favorited offer should be displayed at the top, with something
   to make it stand out visually. **Add appropriate actions and reducer cases to
   allow this.**

**BONUS**: Make OfferItem visually distinctive from PointItem and RewardItem,
and make something happen when you click. Make the changes to suit the purpose
of each component and explain your choices.

`explanation:` For the OfferItem component, i decided to include coins in the component as a visual indicator that the offer is related to what they spend. The more they spend on an offer, the more points they will attain. As well, for the click of the offer to favorite, i think exposing a Modal to properly ask if the user wants to favorite the offer is the best outcome, as it gives the user the knowledge of what they're doing and it asks for their permission to do so.

#### For your final task, I would like you to add functionality to the Rewards tab

1. Right now the RewardItem is a bit boring. We would like to add a progress bar
   that shows the user their progress toward each reward. **Create a ProgressBar
   component and use it within RewardItem to display the progress based on the
   current point balance.**

2. Currently, there is no way to redeem a reward in the app. **When a user
   clicks on a reward, we should bring up an alert. If they have enough points,
   the alert should let them know the reward was redeemed. If they do not have
   enough points, the alert should let them know they are short points. Add
   reducer cases and actions such that when a user redeems a reward, their point
   balance is updated to reflect their new balance.**

3. After the last task, there is no way to see historical reward redemptions.
   **Add reducer cases and actions such that when a user redeems a reward, a
   point record with a negative amount representing the redemption is created
   and displayed in the points tab.**

**BONUS**: Make RewardItem visually distinctive from PointItem and OfferItem.
Make the changes to suit the purpose of the RewardItem component and explain
your choice.

`Explanation:` I think the best way to visually differentiate the RewardItem from the other item cards was too show a dollar bill, indicating that the user will receive a reward. Most people will allocate the reward with money, hence conveying the idea that the user will get money (rebates) in return. I also added a 'REDEEMED' badge on the RewardsItem for whenever the rewards has been redeemed.

_Thanks for being a Drop member_ ;)
