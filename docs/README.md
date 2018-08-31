# Spreadshare Webapp

[![Build Status](https://circleci.com/bb/spreadshare/webapp.svg?style=shield&circle-token=c0dc0ba2d8c917a32fda7c6a988b8afb2a8599cf)](https://circleci.com/bb/spreadshare/webapp)

---

This documentation is separated in three main parts:

- `template/` folder, which contains documentation about 
  [`wemake-vue-template`][wemake-vue-template]. This folder should be 
  in sync with the latest version in the upstream. 
  You do not need to modify it on most of the times

- `project/` folder, contains documentation specific to your project. 
  Feel free to add anything to it

- `documents/` folder contains binary files, such as: 
  images, MS Word documents, and spreadsheets

## Where to go next

If you don't know how this project is structured, consider reading
through [`architecture`](template/architecture.md) section.
It will give you a brief overview of everything we have inside this project.

Or if you are familiar with this structure, 
you can jump start reading these docs 
from the [`development`](template/development.md) part.

## Gitbook

We use [`gitbook`](https://github.com/GitbookIO/gitbook) to build 
and host our documentation.
Make sure to create an account there to store your own copy.

The [configuration](https://toolchain.gitbook.com/config.html) can be found [here](https://github.com/wemake-services/wemake-vue-template/blob/master/book.json).

To build a local version of docs, run: `yarn docs:build`.
You can always preview the docs live with `yarn docs:serve`.

If you want to add new pages, change order 
or rename something, go to `SUMMARY.md`.

## documentation.js

We also use [`documentation.js`](https://github.com/documentationjs/documentation) 
to build our API docs.

It is then included as `project/api.md`. See [an example](api.md).
To build it run: `yarn docs:api`.

## Updating template

After you start a project with this template 
it very easy to catch up with the latest changes.

All you have to do is:

1. Go to your `README.md` file and find an update link

2. You will see a diff of what has changed since your template version

3. Pick things you need from the latest changes

4. Replace commit hashes in `README.md` with the current 
  commit hash from `master` branch in [the template repo][wemake-vue-template]

Come back for more updates!

[wemake-vue-template]: https://github.com/wemake-services/wemake-vue-template
