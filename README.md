# atom-react-redux package

Bootstrap code to extend Atom the React-Redux way. See [blog post for details](https://medium.com/@victordoss/extend-atom-editor-the-react-redux-way-bea1b8e21e35)

### Getting started

- Install yarn (if not already installed)
- Clone this code and change the git remote to your username/myapp.
```
git clone https://github.com/vidoss/atom-react-redux.git myapp
cd myapp
git remote rm origin
git remote add origin https://github.com/myusername/myapp.git
```
- yarn install
- yarn build
- yarn watch
- Link this atom package.
```
cd ..
apm link myapp
```
