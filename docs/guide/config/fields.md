# Config Fields

> More info coming soon...

## extensions.new.add_library_doc

```toml
["extensions.new"]
add_library_doc = true
```

```bash
export AWIRIX_EXTENSIONS_NEW_ADD_LIBRARY_DOC="true"
```

Add library documentation "awirix.lua" when creating a new extension

## extensions.new.init_git_repo

```toml
["extensions.new"]
init_git_repo = true
```

```bash
export AWIRIX_EXTENSIONS_NEW_INIT_GIT_REPO="true"
```

Initialize a git repository when creating a new extension

## extensions.safe_mode

```toml
[extensions]
safe_mode = true
```

```bash
export AWIRIX_EXTENSIONS_SAFE_MODE="true"
```

Enable safe mode for extensions.
If enabled, system commands will be disabled
and the extension will be unable to access the filesystem outside of API methods.

## icon.show_extension_flag

```toml
[icon]
show_extension_flag = false
```

```bash
export AWIRIX_ICON_SHOW_EXTENSION_FLAG="false"
```

Show extension's flag based on its language

## icon.show_extension_icon

```toml
[icon]
show_extension_icon = true
```

```bash
export AWIRIX_ICON_SHOW_EXTENSION_ICON="true"
```

Show extension's icon

## logs.level

```toml
[logs]
level = "info"
```

```bash
export AWIRIX_LOGS_LEVEL="info"
```

Logs level.
Available options are: (from less to most verbose)
panic, fatal, error, warn, info, debug, trace

## logs.write

```toml
[logs]
write = false
```

```bash
export AWIRIX_LOGS_WRITE="false"
```

Write logs to file

## path.downloads

```toml
[path]
downloads = "."
```

```bash
export AWIRIX_PATH_DOWNLOADS="."
```

Default downloads path

## path.extensions

```toml
[path]
extensions = ""
```

```bash
export AWIRIX_PATH_EXTENSIONS=""
```

Extensions path. Leave empty for default

## path.logs

```toml
[path]
logs = ""
```

```bash
export AWIRIX_PATH_LOGS=""
```

Logs path. Leave empty for default

## tui.clickable

```toml
[tui]
clickable = false
```

```bash
export AWIRIX_TUI_CLICKABLE="false"
```

Enable support for mouse clicks in TUI

## tui.padding.bottom

```toml
["tui.padding"]
bottom = 0
```

```bash
export AWIRIX_TUI_PADDING_BOTTOM="0"
```

Bottom padding for TUI

## tui.padding.left

```toml
["tui.padding"]
left = 0
```

```bash
export AWIRIX_TUI_PADDING_LEFT="0"
```

Left padding for TUI

## tui.padding.right

```toml
["tui.padding"]
right = 1
```

```bash
export AWIRIX_TUI_PADDING_RIGHT="1"
```

Right padding for TUI

## tui.padding.top

```toml
["tui.padding"]
top = 0
```

```bash
export AWIRIX_TUI_PADDING_TOP="0"
```

Top padding for TUI

## tui.prompt_symbol

```toml
[tui]
prompt_symbol = "> "
```

```bash
export AWIRIX_TUI_PROMPT_SYMBOL="> "
```

Prompt symbol to use in text input

## tui.show_app_version

```toml
[tui]
show_app_version = true
```

```bash
export AWIRIX_TUI_SHOW_APP_VERSION="true"
```

Show app version on the top left corner of the TUI

## tui.show_description

```toml
[tui]
show_description = true
```

```bash
export AWIRIX_TUI_SHOW_DESCRIPTION="true"
```

Show item's description in TUI

## tui.show_extension_author

```toml
[tui]
show_extension_author = false
```

```bash
export AWIRIX_TUI_SHOW_EXTENSION_AUTHOR="false"
```

Show extension's author in TUI

## video.default_player

```toml
[video]
default_player = "auto"
```

```bash
export AWIRIX_VIDEO_DEFAULT_PLAYER="auto"
```

Default video player.
'auto' is a special value that will try to use the most suitable player.
