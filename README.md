# DaisyUi vue kit

This is a vue kit for daisyui, it's a simple way to use daisyui in your vue project.
Originally forked from [@LaFibreDuDev/daisyui-vue-kit](https://github.com/LaFibreDuDev/daisyui-vue-kit) and upgraded to the latest version of dependencies.

## Installation

### Docker

Before you start, make sure you have [docker](https://docs.docker.com/get-started/get-docker/) installed on your machine.

```bash
docker compose up
```

### Local

Before you start, make sure you have a package manager like [npm](https://www.npmjs.com/get-npm) or [yarn](https://yarnpkg.com/getting-started/install) installed on your machine.

```bash
npm install && npm run dev
```

## Commands

### Docker Compose

Enter the container:

```bash
docker compose exec web bash
```

### NPM

Check oudated packages:

```bash
npm outdated
```

Update packages:

```bash
npm install $(npm outdated | cut -d' ' -f 1 | sed '1d' | xargs -I '$' echo '$@latest' | xargs echo)
```

For more commands, check official [npm documentation](https://docs.npmjs.com/cli-documentation/cli).

## License

DWTFYWPL

## Contributing

Before any contribution, please read the [contributing guide](CONTRIBUTING.md).
This project is a work in progress, and we welcome contributions from the community. If you have any ideas or suggestions, please feel free to open an issue or a pull request.
We are always looking for ways to improve the project and make it more useful for everyone.

## TODO

- [x] Fix InputField focus ring (Label - try using inject-provide system to disable ring ??) [see TextInputWithLabelInsideTplStr]
- [ ] Questionnable - Why ButtonLink exists ?

## Roadmap

- [ ] Add all daisyui components
  - [ ] Add all Actions
    - [x] Button
    - [x] Dropdown
    - [x] Modal
    - [x] Swap
    - [ ] ThemeController
  - [x] Add all DataDisplay
    - [x] Accordion
    - [x] Avatar
    - [x] Badge
    - [x] Card
    - [x] Carousel
    - [x] ChatBubble
    - [x] Collapse
    - [x] Countdown
    - [x] Diff
    - [x] Kdb
    - [x] List
    - [x] Stat
    - [x] Status
    - [x] Table
    - [x] Timeline
  - [x] Add all Navigation
    - [x] Breadcrumb
    - [x] Dock
    - [x] Link
    - [x] Menu
    - [x] Navbar
    - [x] Pagination
    - [x] Steps
    - [x] Tabs
  - [x] Add all Feddback
    - [x] Alert
    - [x] Loading
    - [x] Progress
    - [x] RadialProgress
    - [x] Skeleton
    - [x] Toats
    - [x] Tooltip
  - [ ] Add all DataInput
    - [ ] Calendar
    - [x] Checkbox
    - [x] Fieldset
    - [x] FileInput
    - [x] Filter
    - [x] Label
    - [x] Radio
    - [x] Range
    - [x] Rating
    - [x] Select
    - [x] InputField
    - [x] Textarea
    - [ ] Toggle
    - [ ] Validator
  - [ ] Add all Layout
    - [ ] Divider
    - [ ] Drawer
    - [ ] Footer
    - [ ] Hero
    - [ ] Indicator
    - [x] Join
    - [ ] Mask
    - [ ] Stack
  - [ ] Ad all Mockup
    - [ ] Browser
    - [ ] Code
    - [ ] Phone
    - [ ] Window
