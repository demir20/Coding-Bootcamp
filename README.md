# Coding-Bootcamp

Fully functional calendar with Daily Planner.

Features include:
  - Color coding based on whether day/hour is in the past, present or future
  - Events saved to local storage on both calendar and planner
  - Current date displayed in header
  - Quote of the Day API
  - Clear calendar functionality
  - Add events via form input
  - Full 2020 year
  - Form validation
  
Use: To add an event, click the "Add Event" Button and complete the form. To view the event, click on the number button in the respective calendar box (changes to a darker shade on hover). To save events to the Daily Planner after typing in the text area, simply click "Back to Calendar". Clear Calendar clears ALL events. Blue is present, red is past, green is future, grey is next or previous month.

Bugs:
Switching from when switching back to current month from previous month, the application does not load correctly.


ASSIGNMENT DETAILS:

05 Third-Party APIs: Work Day Scheduler

Your Task
Create a simple calendar application that allows a user to save events for each hour of the day by modifying starter code. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.
You'll need to use the Moment.js library to work with date and time. Be sure to read the documentation carefully and concentrate on using Moment.js in the browser.

User Story
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively

Acceptance Criteria
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with time blocks for standard business hours
WHEN I view the time blocks for that day
THEN each time block is color-coded to indicate whether it is in the past, present, or future
WHEN I click into a time block
THEN I can enter an event
WHEN I click the save button for that time block
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
