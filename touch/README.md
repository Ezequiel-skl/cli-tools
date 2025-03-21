
# **Clone to touch command**

This is a clone of the `touch` command from the linux terminal. It allows you to create multiple files with different extensions or incremental names.

## commands 

### create invidual files with different extensions
```bash
touch file.ts file2.js readme.md etc.txt
```

### create multiple files with only extension
```bash
touch [file1, file2, file3].ts
```

### create incremental name file
```bash
touch file[1..10].ts
```

## task 

- [ ] add tests with vitest
- [ ] refactor code
- [ ] add flags
  - [ ] --astro-components / auto create astro components, ex: `touch --astro-components src/input.astro src/output.astro`
