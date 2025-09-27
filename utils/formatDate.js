const option = {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    timeZoneName: 'short'
}

const dateFormatter = new Intl.DateTimeFormat('en-US', option);

function formatDate(date) {
    return dateFormatter.format(date).replace(" at ", ", ");
}

module.exports = formatDate;