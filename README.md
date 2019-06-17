# cf-app-chrome-dstate

This app causes hanging D-State processes (somehow randomly)
It fetches a website with a chrome worker that is hardcoded as fast as possible (change the url is needed).
 

It works best when
1. The App runs at its disk limit(usually 900MB)
2. Someone restarts the garden process gracefully with monit

And produces issues that may be documented here: 
 - https://docs.google.com/document/d/1Uoz_GxXo40mE3WDDUP1H5je16FIAbjAFb2nwjf
 - https://docs.google.com/document/d/1Ph7j__TJco1ZO592re3fJyCCP-kgyfd2YRxLRD_IzFU/edit

But we,ve probably also seen new ones taht does not match the description in these documents.

