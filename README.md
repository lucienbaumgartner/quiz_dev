## Quiz app for the DDJ18 course at UZH

following things still need to be done:

- [ ] write proper style sheet (sass)
- [x] check sass - css conversion
- [x] write 101 for students
- [x] check iframe implementability
- [ ] fix bugs

## 101

### How I can I do my own quiz using the app?

The easiest is the following:

1. create a Github account
2. fork this repository
3. clone the repo

```
cd ../where/you/want/the/project/folder
git clone https://github.com/<your_username>/quiz_dev
```

4. to add your own content, just edit the following lines in the `script.js` as to include your custom data (make sure that your DO NOT change the variable names in the array!):

```
var quiz = [
       {
           "question" : "Q1: Who came up with the theory of relativity?",
           "image" : "http://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Albert_Einstein_Head.jpg/220px-Albert_Einstein_Head.jpg",
           "choices" : [
                                   "Nicolaus Copernicus",
                                   "Albert Einstein",
                                   "Ralph Waldo Emmerson"
                               ],
           "correct" : "Albert Einstein",
           "explanation" : "Albert Einstein drafted the special theory of relativity in 1905.",
           "graphics" : '<img src="http://upload.wikimedia.org/wikipedia/commons/thumb/9/94/US_%242_obverse-high.jpg/320px-US_%242_obverse-high.jpg" alt="Smiley face" height="200" width="200" class="center">'
       },
       {
         ....
        },
   ];
```

### A note on including graphics in your explanation box

If you want to include graphics as part of your explanation to an answer, you need to include the whole HTML/CSS-specification of the picture to control its aestethics:

```
[[script.js]]
...

"graphics" : '<img src="http://upload.wikimedia.org/wikipedia/commons/thumb/9/94/US_%242_obverse-high.jpg/320px-US_%242_obverse-high.jpg" alt="" height="200" width="200" class="custom_class">'
...
```

Note that you can specify properties of the class of the image in your sass file, as follows:

```
[[stylesheet.sass]]
...

.custom_class {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 70%;
    margin-bottom: 30px;
}
...
```


### Deploy the app on your website

To deploy the app on your website or your blog entry you just need to include it within an iframe-element:

```
<iframe src="https://lucienbaumgartner.github.io/quiz_dev/" width="200" height="200"></iframe>
```

### Working with sass-stylesheets

The app is enables the use of sass (syntactically awesome style sheets - aka css on steroids). If you are familiar with the format, you have to set up a ruby sass-css converter. To do so, run the following commands in your terminal to install ruby via homebrew as well as the sass gem:

```
$ brew install ruby
$ gem install sass
```

Now you can tell ruby to watch your either a folder with all your sass files in order to convert them to the output path (your css folder), or just single files. In this case We just listen to the whole folder

```
$ cd quiz_dev
$ sass --watch sass:css
```

Now all the changes done to any files in `/sass` are automatically converted to updated in the `/css` folder.
