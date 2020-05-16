# Rules for commit messages
Commits will have a standard structure that serves to describe exactly what happened in that commit
```batch
<type>[optional scope]: <decription>

[optional body]

[optional foorter]
```

The short version from terminal:
```batch
git commit -a -m"<TYPE>[optional SCOPE]: <DESCRIPTION>"
```
Every commit has a _TYPE_ that falls into a predefined category, the specific categories are:
* `feat`: introduces a new feature to the codebase (this correlates with a MINOR in SemVer es: 2.0.0 -> 2.1.0).
* `fix`: a bugfix in your codebase (this correlates with a PATCH in semVer es: 2.0.0 -> 2.0.1).
* `BREAKING CHANGE`: is a total change of your code, this is also can be used with a previous tag like `BREAKING CHANGE: feat: <description>`
 (this correlates with a MAJOR in SemVer es: 2.0.0 -> 3.0.0).
* `docs`: a change in the README or documentation
* `refactor`: a change in production code focused on upgrade code readability and style

The _SCOPE_ specifies what you have changed, preferably in a single word.
The _DESCRIPTION_ is a one line that specifies what the change is.
