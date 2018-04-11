trello-card-counter-addon
=========================

Mozilla Firefox to add a card counter to trello list.

You should replace this extension with some custom CSS code. Create a [`chrome/userContent.css`](http://superuser.com/questions/318912/how-to-override-the-css-of-a-site-in-firefox-with-usercontent-css) file in your Firefox profile and add this:

``` css
@-moz-document domain(trello.com) {
  .list-header-num-cards {
    display: block !important;
  }
}
```

This way the card counts automatically show up without any lag, no JS involved!
