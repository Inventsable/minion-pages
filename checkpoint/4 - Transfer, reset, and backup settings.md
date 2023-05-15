## Transfer, reset, and backup settings

This panel automatically creates a folder for it's own settings and lazyloaded content like these help pages. Whenever you change a setting value, this is written to the following file:

- Windows: `C:/Users/[USER]/AppData/Roaming/Checkpoint/settings.json`
- Mac: `~/Library/Preferences\Checkpoint\settings.json`

When the panel first opens, it will attempt to grab the contents of this file. If you want to transfer settings between machines you can copy the above into the correct location (and create the `Checkpoint` folder if it doesn't yet exist) to have the same settings loaded.

## Reset

To clear all settings back to default, a `Reset data` option exists in the flyout menu of the panel at the very bottom. Note that this will clear all the panel's data and immediately rewrite the above `settings.json` file since the values of the settings have been changed.
