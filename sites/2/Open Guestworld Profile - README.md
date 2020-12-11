# Open Guestworld Profile

### Process

**sqlcmd_ogp.ps1** is a PowerShell script that is scheduled (Windows Task Scheduler) to *run every 15 mins* (e.g. 3pm, 3:15pm, 3:30pm, 3:45pm, 4pm, etc.) 24/7.

This script exports the 211 card numbers and their corresponding Guestworld IDs into a JSON file called '**exportedIDs.json**'.

***

The webpage is located at http://172.16.10.23/OpenGuestworldProfile/  (http://ogp.meltrotter.org also redirects to the same place).

With a barcode reader attached to the computer, the inputted number goes into the search box and will open up the guest's Guestworld profile. This is done using JavaScript. The JavaScript looks for the inputted 211 card number's corresponding Guestworld ID. Then the returned Guestworld ID is appended the http://172.16.10.23:5006/Guest/ServiceHistory/ URL, which pulls up their Guestworld profile.

