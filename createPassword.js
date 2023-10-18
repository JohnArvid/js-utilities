function createPassword() {
    let sequence = function() {
        return Math.round(Math.random() * 100_000_000).toString(36)
    };
    let password = "";
    let i = 3
    while (i > 0) {
        password += sequence();
        i--;
        if (i > 0) password += "-";
    }
    return password;
}