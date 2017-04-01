

## To start

-   Install npm

    on windows <https://chocolatey.org/> is recommended. install it, then
    ```
    choco install nodejs.install
    choco install python2
    ```

-   clone this repository
    ```
    git clone <https://github.com/bfs15/AIncremental.git>
    cd AIncremental
    ```

-   install dependencies
    ```
    npm install
    ```


#### to build:
```
npm run build
```


#### to develop:

-   You are in branch master, go to branch dev
    ```
    git checkout dev
    ```

-   Open a new branch for your work from branch dev
    ```
    git checkout -b feature-i-will-code
    ```

-   build code for development, it watches file changes
    ```
    npm start
    ```

-   open the html in
    ```
    build/index.html
    ```

-   install your favorite react/react dev tools on your browser


### Using git to manage your changes

-   Check what changes you made (what you have uncommited)
    ```
    git status
    ```

-   Stage relevant files for this commit
    ```
    git add {fileName1} {fileName2} ...
    ```

-   commit with a short but descriptive message
    ```
    git commit -m 'what your changes did'
    ```

-   Push to the origin
    ```
    git push origin your-branch
    ```
    git push also works, just be sure you are on your branch

#### Merge branch

-   If your branch is ready you need to know if **dev** has something you don't have
    ```
    # on your branch
    git pull origin dev
    ```

-   Resolve conflicts if any appear

    Conflicts mean you probably changed something that was also changed in **dev**, you'll need create a code that implements both changes most of the time.

    Have focus and a decent tool, search the net if you don't know "how to resolve git conflicts". Atom editor has a nice plugin for this

-   You can now open a merge/pull request from your branch to branch **dev**

    Go to <https://github.com/bfs15/AIncremental/compare>

#### Tips

-   To save your changes without erasing them, stash them temporarily:
    ```
    git stash
    git stash list # to see the list of saves you have
    git stash apply stash@{X} # To get back what you did, X is the number on the list
    # or just 'git stash apply' for the most recent stash
    git stash drop stash@{X} # to remove from stash
    ```

    You can stash changes you made on **dev**, create your branch and apply them there. If you forgot to change branches beforehand.

-   You can see all the commits with:
```
gitk
```
