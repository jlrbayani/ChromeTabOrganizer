# ChromeTabOrganizer
 A chrome extension that is able to sort tabs based on certain categories such as type or domain and unused timers.
 This extension is meant to alleviate any struggles for people who often have many tabs open and want to have a cleaner Chrome experience. 


## Features
This is a tentative list of features to work on as we proceed with this project. We may later find down the line that some features might be impossible or too difficult for our desired scope. 

1. The ability to categorize different tabs together based on **website type** (ie. YouTube tabs or Wiki tabs). This could also extend to the extension being to categorize based on similar data within each tab even if under different domains (such as a Youtube video about penguins whilst having a Wiki tab about penguins being sorted close to one another). 

2. The ability to categorize different tabs based on **unused timers** (ie. tabs that haven't been opened for a while would get marked by a distinct colour). By extension, it should be able to sort the tabs in this manner as well. 

3. To do the above automatically or not. The user can choose either or in the user interface. 

4. Have a **simple user interface** to allow functionalities above to work with one another or be separated. (ie. enable website sorting while disabling time based sorting or allowing both to work in some fashion concurrently; this should be scalable if we plan on adding more categorization features in the future)

## How to Use Extension During Development
Temporary instructions to use this extension. 

1. Fork the repository at https://github.com/jlrbayani/ChromeTabOrganizer

2. Open the Extensions Icon on Chrome and go to "Manage extensions" 

3. Enable **Developer Mode** and click "Load unpacked" to search for the folder of the forked repository

4. This extension should now be added, and could be reloaded from this page. NOTE: Extension reload is required if updates are made to manifest.json, any service worker code (ie. background tasks), or content scripts
