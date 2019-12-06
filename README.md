# Office Maps

An interactive tool to search for meeting rooms on an office map.

## Proposed Functionality

* [ ] Maps will be flat images (maybe PDFs), and initially will be committed directly into the repo.
* [ ] Users will be able to use the web UI to add & edit "room" data for each map. Defining things like room name, details, and possibly adding tags/labels to each room on a map.
    * [ ] Rooms will initially be defined as single points/coordinates on the map. My hope is that this will UX complexity of drawing & recording complex geometric shapes to define a room.
    * [ ] This metadata will be stored in account-wide NerdStorage, to allow users to make edits to the data that are visible to other map users, without making a git commit.
    * [ ] We should allow some sort of export/import functionality so that the metadata can be backed up & restored.
* [ ] Users will be able to view, search, and filter the list of room names across all maps.
* [ ] Users will be able to select a specific room. When selected, its associated map and location will be displayed, as well as any description, labels, etc.
    * [ ] Users will be able to share the URL of a specific room.

## Local Development

Run the following scripts:

```
npm install
npm start
```

Visit https://one.newrelic.com/?nerdpacks=local and :sparkles:

Note: If you have multiple nr1 profiles configured and want to run this Nerdpack with a profile other than the default, create an `.nr1-options` file with the contents `--profile=my-custom-profile`. Subsequent invocations of `npm start` will use these options.
