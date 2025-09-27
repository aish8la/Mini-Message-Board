const option = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    timeZoneName: 'short'
}

const dateFormatter = new Intl.DateTimeFormat('en-US', option);

function formatDate(date) {
    return dateFormatter.format(date);
}

module.exports = formatDate;