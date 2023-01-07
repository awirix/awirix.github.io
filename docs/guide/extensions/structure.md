# Structure

Since extensions are just a folders with bunch of files, each extensions must contain few specific files in order to be functional.

```
extension
├── passport.json
├── tester.lua
└── scraper.lua
```

[[toc]]

## Passport

Passport contains information about extension's name, description,
requirements (operating system, external programs) and such.

## Tester

Tester is a file, that implements just one function

```lua
function test() end
```

This function is being run by the CI in order to verify extensions status.

::: info
While it's better to include `tester.lua` with some meaningful tests in your
extension, its absence won't cause any errors.
:::

You can also import [scraper](#scraper) module to test it's steps.
For example:

```lua
local scraper = require('scraper')

local M = {}

function M.test()
   local results = scraper.search.handler('test query')
   assert(#results > 0, 'Search did not return any results')
end

return M
```

## Scraper

Scraper is the extension's core. It defines the functionality of the extension.

In order to work, `scraper.lua` must implement some **steps**.

**Steps**, in essence, are just a handler functions that accept
[Media](#media) or text query and may output other medias.

Before going in further to what **steps** should be defined, let's run through the
basic types.

### Media

`Media` is an intermediate object (a lua table, basically) that represents
a single media.

For example, imagine your extensions has some sort of search function that
gets the query and returns found results. Those results are essentially are
lists of media. Sounds not too complex right?

Now, let's see how media looks like

| Field       | Type                        | Description                                              |
| ----------- | --------------------------- | -------------------------------------------------------- |
| title       | string                      | Title that is used a string representation of the media. |
| description | string?                     | A short description of the media. Keep it one line.      |
| info        | (fun(self: Media): string)? | Additional long info about this media. Supports markdown |

> Question mark `?` means that type is optional -- it can be absent

Any other fields, e.g. `url` or `my_super_important_field`, will be preserved
when media is passed between states. So, while the fields above are
reserved by **Awirix** and considered
_special_ (they provide additional functionality based on their presence)
anything else is left for your needs.

### Noun

A small object that represents singular and plural forms of the noun.

| Field    | Type    | Description   |
| -------- | ------- | ------------- |
| singular | string? | Singular form |
| error    | string? | Plural form   |

### Context

`Context` is object that is passed to the each state handler and is used to
report progress or raise errors.

| Field    | Type                  | Description                                                    |
| -------- | --------------------- | -------------------------------------------------------------- |
| progress | func(message: string) | Sets the progress message to the given one                     |
| error    | func(message: string) | Stops the execution and raises an error with the given message |

In generated extension's template you would see something like

```lua
-- @param media Media
-- @param ctx Context
function(media, ctx) end
```

That means you can use `ctx` param like this

```lua
ctx.progress('Sending request...')
ctx.progress('Parsing response...')
ctx.error('Oops!')
```

Alright, not let's move to the **steps** themselves

### Search

A step that accepts text query by providing a user a text input screen.

This step may be omitted if this extension does not provide searching functionality.
Might be the case if it is dedicated to the single show, movie, book etc.

```lua
local M = {}

M.search = {
    handler = function(query, ctx) return {} end
}

return M
```

| Field       | Type                                      | Description                                           |
| ----------- | ----------------------------------------- | ----------------------------------------------------- |
| title       | string?                                   | Title to show when typing query.                      |
| subtitle    | string?                                   | Title in the list of search results.                  |
| placeholder | string?                                   | Placeholder to show in the search input               |
| handler     | fun(query: string, ctx: Context): Media[] | Function that will be called to search for the media. |
| noun        | Noun?                                     | Noun that is used to name a single media.             |

### Layers

Each layer returns a list of sub-media for the given one.
For example, you can search for a show, then selected show will be passed to
the first layer that's responsible for returning show's seasons. After that,
the selected season will be passed to the second layer that would
return season's episodes.

Layers may be omitted (`nil` or `0` length) if this extension does not provide
such functionality (e.g. just search and watch, no seasons, no episodes).
Each layer receives a single media selected from the `search` step or previous
layer. If `search` step is omitted, first layer will receive a `nil` instead
of the media.

> However, scraper **must** have either `layers`, `search` or _both_

```lua
local M = {}

M.layers = {
   {
      title = 'Layer 1',
      handler = function(media, ctx) return {} end
   },
   {
      title = 'Layer 2',
      handler = function(media, ctx) return {} end
   }
}


return M
```

| Field   | Type                                     | Description                                    |
| ------- | ---------------------------------------- | ---------------------------------------------- |
| title   | string                                   | Title to show in the list of layer's results.  |
| handler | fun(media: Media, ctx: Context): Media[] | Function that will be called to run the layer. |
| noun    | Noun?                                    | Noun that is used to name a single media.      |

### Actions

Actions are further actions that can be performed on the selected media.
Something like _streaming_ or _downloading_ the selected media.

Actions may be omitted (`nil` or `0` length) if this extension does not provide
such functionality (e.g. just media browsing, no actions), which is rare case
but is allowed if you want to.

```lua
local M = {}

M.actions = {
   {
      title = 'Stream',
      description = 'Plays in your default video player'
      max = 1,
      handler = function (medias, ctx) end
   },
   {
      title = 'Download',
      handler = function (medias, ctx) end
   }
}

return M
```

Note, that actions accept `Media[]` in their handlers.
It makes sense for `Download` action to accept 10 or 20 medias to download them
all at once but looks weird for the `Stream` action.
Therefore, you can control how many medias an action can accept
by changing `min/max` fields.

In this example, `Stream` action has field `max` set to `1`. That way,
if user selected multiple medias, they would not be able to select this action.

```lua
{
    title = 'Stream',
    description = 'Plays in your default video player'
    max = 1,
    handler = function (medias, ctx)
        -- here we 100% than we won't receive more than 1 medias
        local media = medias[1]
    end
}
```

| Field       | Type                               | Description                                                  |
| ----------- | ---------------------------------- | ------------------------------------------------------------ |
| title       | string                             | Title to show in the list of actions.                        |
| description | string?                            | Short description of the action.                             |
| handler     | fun(medias: Media[], ctx: Context) | Function that will be called to perform the action.          |
| min         | number?                            | Minimum number of the selected medias to perform this action |
| max         | number?                            | Maximum number of the selected medias to perform this action |
