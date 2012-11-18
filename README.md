# jquery-mt

Micro-templating plugin for jQuery. Lightweight, no precompilation.
Probably more useful for quick compilation of dynamic strings than for HTML templating.

## Usage

    $.mt("http://twitter.com/search/realtime/?q={{user.first}}%20{{user.last}}", { user: {
      first: "Adam",
      last: "Brown"
    }})

