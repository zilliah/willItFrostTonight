# Will there be frost tonight?

A tool to check if it will frost in your location tonight. Save your outdoor plants!

See it live at: https://zilliah.github.io/willItFrostTonight/

![frost1](https://user-images.githubusercontent.com/6020261/171516300-732e104f-d60a-42ea-907b-d2a5067164ab.png)
![frost2](https://user-images.githubusercontent.com/6020261/171516309-dbd70b72-b608-4827-affa-17089a5b131f.png)
![frost3](https://user-images.githubusercontent.com/6020261/171517713-1f134dfc-8648-48d3-9128-21643c3ef6ee.png)


# About

A minimal page to see if there will be frost tonight in your city. Enter your city, and the page will update with the frost report, without a lot of extra unnecessary weather information.

Default location is Ottawa, Ontario, Canada.

# TIL

This is the first time I have used multiple fetches that rely on each other, so I had to figure out how to chain those and manage the input from the user without ending up with fetches that failed. I also learned that adding a new font or two is an easy way to make simple styling look nicer.

# Improvements

The user should be able to save their location in localStorage, so they can use the page as a homepage and get frost information when they open their browser, without clicking anything. 

The location selection has issues for multiple cities with the same name: it will just select the first result. Instead, the user should be shown a list of the matches and be able to select the appropriate city. At the moment, users are shown their current state so they are at least aware if it is incorrect.
