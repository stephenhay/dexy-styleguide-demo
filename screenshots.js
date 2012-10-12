var casper = require('casper').create({
    viewportSize: {
        width: 800,
        height: 600
    }
});

casper.start('/Users/stephenhay/Desktop/omg-its-a-live-demo/mockup/index.html', function() {
});

casper.then(function () {
    this.captureSelector('dexy--button.png', 'button');
});

casper.run();
