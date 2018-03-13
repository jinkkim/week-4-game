for (var x=1; x <= 100; x++) {
    var skip = 0;
    if (x % 3 == 0) {
        document.write('fizz');
        skip = 1;
    }
    if (x % 5 == 0) {
        document.write('buzz');
        skip = 1;
    }
    if (x % 15 == 0) {
        document.write('fizzbuzz');
        skip = 1;
    }
    if (!skip) {
        document.write(x);
    }
    document.write('<br>'); //line breaks to enhance output readability
}