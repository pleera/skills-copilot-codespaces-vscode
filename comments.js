// Create web server
// Run: node comments.js

// Import modules
var http = require('http');
var url = require('url');
var fs = require('fs');
var qs = require('querystring');

// Create web server
http.createServer(function (req, res) {
    // Get the query string
    var query = url.parse(req.url, true).query;
    var name = query.name;

    // Read the comments file
    fs.readFile('comments.txt', function (err, data) {
        if (err) throw err;

        // Split the file by new line
        var comments = data.toString().split('\n');

        // Create the response
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<html><body>');

        // Add all the comments to the response
        for (var i = 0; i < comments.length; i++) {
            res.write(comments[i] + '<br>');
        }

        // Add the form to the response
        res.write('<form method="GET" action="comments.js">');
        res.write('<input type="text" name="name">');
        res.write('<input type="submit" value="Comment">');
        res.write('</form>');

        // Add the comment to the file
        if (name != null) {
            fs.appendFile('comments.txt', name + '\n', function (err) {
                if (err) throw err;
            });
        }

        res.end('</body></html>');
    });
}).listen(8080);

// Print message to console
console.log('Server running at http://localhost:8080/');