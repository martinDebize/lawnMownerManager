# Lawn Mowner Manager

## Installation

After importing the project locally, run `npm install` into the main folder to install all the modules then `ng serve --open` to run the app serve.

Then go to `http://localhost:4200` to see the app.

## Utilisation

You have two ways to use it :

* Enter your inputs manually via a graphic form (be sure to respect that your mowners are not out of bounds) then determine the trajectories of your mowners in a frame next to the lawn.

OR

* Import a file following the specifications of the problem to immediatly see the results on the lawn.

## Possible improvements

* The graphic interface is rudimentary and could surely be improved

* There are little error processing in the app. Mostly on the file import part where I didn't took the time yet to control if the mowners as inputs are out of bounds or not and simply if the file has a good format.

* Unitary tests are missing to see if the input entries give the right outputs. The graphic interface only tests it.

* Persistence with remote services (use of NodeJS for instance) to save configurations and trajectories taken by the mowners.