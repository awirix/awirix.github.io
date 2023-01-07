# What is Awirix?

Awirix is a powerful multimedia metascraper that aims to replace
all existing small media scrapers.

::: warning
Awirix is currently in alpha status. It is already suitable for daily use, but some things may still change between minor releases.
:::

## Motivation

Take a look at [ani-cli](https://github.com/pystardust/ani-cli).
It's great, but in order to use it you need

1.  POSIX shell interpreter, which implies installing [WSL](https://en.wikipedia.org/wiki/Windows_Subsystem_for_Linux) if you use Windows
2.  Auxiliary programs

    -   grep
    -   sed
    -   awk
    -   curl
    -   _...the list goes on_

And, most importantly, all scrapers of such kind suffer from the same problem

> _"Webscraping means extracting data from places on the web that don't want it to be extracted. Depending on what service you're scraping, they will resist by changing things up a lot. It's a cat and mouse game where scrapers, especially those with only one source, need to adapt frequently."_ - [@port19x](https://github.com/pystardust/ani-cli/discussions/946#discussioncomment-4548763)

However, Awirix is kinda different in this sense. If one extensions gets broken
the user can always switch to another one and continue using Awirix.
