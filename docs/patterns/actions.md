---
title: Actions
lead: Actions are a pattern that aid users with completing their jobs to be done on a webpage or product. Actions should empower users and be easy to find. They are typically labelled and defined by verbs.
---

This guideline sets out a common pattern for user actions so a rhythm can be built across the interface to ease disrupting user expectations.

## Examples

### Action as button in two styles

Filled (accent, danger or subtle)

```.jsx
<div> Example to come</div>
```

Minimal (accent, danger or subtle)

```.jsx
<div> Example to come</div>
```

## Best practice

- In a bar of actions, only make two actions immediately visible outside of action menu. All other actions should fall under an action menu
- There can only be one accent or danger button shown at a given time
- Be deliberate when deciding what actions to show outside of the action menu
- Where applicable, place destructive actions under an action menu to avoid any error from accidental clicking

To reduce user's cognitive load and the need to think whenever possible, if an icon is used to signify an action, always include a label with the exception of extremely common actions (create/add, delete)
To help users anticipate what's next and reduce any surprise that cause a dismissal of modals/dialogs, if action is not immediately resolved when clicked (e.g. require modal interface to complete task), append the label with an ellipsis with the exception of action as icon

## Content guidelines

Copy for actions should...

### Be succinct, but explicit

✔️ Do
Export as CSV
❌ Don't
Export user enrolments as CSV

### Be distinct and clear

✔️ Do
Use Create when object to be created will be new. Use Add when object is not.
❌ Don't
Use Add for create only
💬 While both create and add are positive actions that imply an increase, make them clear and distinct. In instances where user might be adding a new object and/or adding an existing one, use the more ambiguous add.

### Use similar labels for similar actions

✔️ Do
Create group, create portal, create event
❌ Don't
Create group, create new event, new portal

### Use active rather than passive voice

✔️ Do
Share...
❌ Don't
Social media share
💬 Following best practice, append action that is followed with a modal or menu with ellipsis


## Labelling actions

### Constructive actions

Constructive actions can be positive or negative. These are actions that are beneficial to the user without resulting in loss or irreversible change.
Create

Not new or create new	Portal, members, content	When a new object that never existed before on the platform or portal is about to be created

e.g. create portal, create event, create course
Add	Portal, members, content	
When an existing object is about to be added to the current set of objects 

❗️When both uses of add and create apply (user can either create a new object or add an existing one to the current set of objects), use the more inclusive an ambiguous add

Invite	Members	When members will receive an invite to join a group
Join	Groups	For user to become member of the group
Edit	Content/ user or portal details	To enable the manipulation of existing page or object
Publish	Content (Edit mode)	Save changes, close edit mode and send content to appropriate place on portal (e.g. to My Teaching only if private)
Done	Content (Edit mode)	Save changes and close edit mode
Share	Content	Currently, used in two ways: for social share and embed OR permissions and view access
Assign	Content/award	
In context of task assignment. Does not imply a formal enrol and check out process to content. 

Expected outcome: Content or award will appear in learner's my learning under assigned
Enrol	Content/award	
An official registration of member into a course (also implies a formal check out process)

Expected outcome: Content or award will appear in learner's my learning under in progress
Begin	Course	For user to enter learning mode of course for the first time
Launch	Course	For user to enter learning mode of course that they have already started
View details	Content/ groups/ users/ awards	For user to enter a more detailed view of object. Can be signified by card, in-line link in list item or info icon.
Like / dislike	Content	
For users to rate quality of content

❗️Currently, we convert 2 item rating scale (like and dislike) to a 5 star rating scale (1 - 5 stars)

Remove

Not delete or erase	Members from groups, users from portal, content	When object may be taken away from the set of objects and set aside, but not deleted permanently. Implies that

💬 For example, removing a member from a group will not delete them permanently off the portal
OR when removing a course from My Learning but not necessarily deleting course
Log in	Portal	
Sign up	Portal	
Export	Users, enrolments	
Import	Enrolments, users 	
Block	User	

### Destructive actions

Destructive actions are defined by a loss of data and their irreversible outcomes 
Delete

Not remove or erase	Portal, members, content	When object is about to be removed permanently from portal or set of objects

❗️Always signify destructive and irreversible nature of action with red
❗️Always warn user before executing any irreversible action
Cancel (and close)	Modals/actions	To disrupt the action the user was in the middle of completing and dismiss any changes without saving
