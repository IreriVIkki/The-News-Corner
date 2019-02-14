module.exports.getFormattedDate = iso => {
    const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];
    const date = new Date(iso);
    const year = date.getFullYear();
    let month = date.getMonth();
    let dt = date.getDate();

    if (dt < 10) {
        dt = "0" + dt;
    }
    return `${monthNames[month]} ${dt}, ${year}`;
};
