const local = 'openssl-wrapper';
const openssl = require(local);

/**
 * Generate an example RSA key.
 * @param {*} password
 */
function generateRSAKey(password) {
    return openssl.exec('genrsa', {
        des3: true,
        passout: `pass:${password}`,
        '2048': false
    }, function (err, buffer) {
        if (err) {
            console.error(err.toString());
        }
        console.log(buffer.toString());
    });
}

generateRSAKey('test123');