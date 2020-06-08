# colorlist

Learning RN with Alex Banks from LinkedIn Learning. This was done in 2020, so used the new packages.

## Motive

The course was released in 2017, and RN did go through some changes since then. Some of the components that Alex used during the course were not available when I was following him, in Jun 2020. Hoping I could contribute to the community, I have made created this repo.

## What did not work?

Things that did not work include:

- Chapter 4 - ListView : ListView is deprecated, so the whole "data storage" thing is long gone. I used FlatList, and simply added the ColorForm 'above' FlatList. Refer To ColorList.js and find FlatList for more details.
- Chapter 5 - AsyncStore : AsyncStore is said to be deprecated, but was still working, so I didn't bother implementing the new package, as it was sufficient for my purpose.
- Chatper 5 - Navigation : This was rather a huge change. I followed the instructions on [Official Website](https://reactnavigation.org/) so I recommend everyone to do the same. To see how I used those to mimic Alex's work, refer to App.js. Big changes were the introduction of ROUTE.
- Chapter 5 - WebView : Now need to install 'react-native-webview'. Refer to [their official NPM page](https://www.npmjs.com/package/react-native-webview) for more details. Make sure to LINK by running 'react-native link' and also do 'pod install' inside the 'ios' folder. I don't know how it usually works, but it was not working until I did the 'pod install' inside iOS folder. I'm on a MAC, FYI.

## Other Notes:

For the 'fetch' exercise, I coudln't be bothered to create a new app, so I just added anoter button to the colorlist app.

If you have any questions, feel free to ask.
