Some TODOs:

* Persist rides data between sessions. 
  * [x] Use LocalStorage to save rides.
  * Explore Redux. 

* More advanced UI
  - [x] Current design depends on not having many rides. Need to limit display to some number of rides. Start with limit of 10, and filter by distance or date? 
      - Added a date filter for month, and now the list always displays rides from the current month. 
  - [] Display the month's total miles.
  - [] Diplay the year's total miles. 

* Pull data from Strava.
  * Once the data store is ready, have an option to load rides since a certain date. 