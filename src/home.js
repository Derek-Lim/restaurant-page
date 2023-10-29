export default function homePage() {
    const content = document.querySelector('#content');

    //Add restaurant name
    const name = document.createElement('div');
    name.classList.add('name');
    name.classList.add('one');
    name.textContent = "Beary's Breakfast Bar";
    content.append(name);

    //Add description section
    const description = document.createElement('div');
    description.classList.add('description');
    description.classList.add('two');
    content.append(description);
    //Add text for description
    const descriptionText = document.createElement('p');
    descriptionText.classList.add('text');
    descriptionText.textContent = "Beary's has the best honeycomb! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again."
    description.append(descriptionText);
    //Add author for text
    const descriptionAuthor = document.createElement('div');
    descriptionAuthor.classList.add('author');
    descriptionAuthor.textContent = 'Goldilocks'
    description.append(descriptionAuthor);

    //Add store hours section
    const hours = document.createElement('div');
    hours.classList.add('hours');
    hours.classList.add('three');
    content.append(hours);
    //Add heading for store hours
    const hoursHeading = document.createElement('div');
    hoursHeading.classList.add('heading');
    hoursHeading.textContent = 'Hours';
    hours.append(hoursHeading);
    //Add Sunday hours
    const hoursSunday = document.createElement('div');
    hoursSunday.textContent = 'Sunday: 8am - 8pm';
    hours.append(hoursSunday);
    //Add Monday hours
    const hoursMonday = document.createElement('div');
    hoursMonday.textContent = 'Monday: 6am - 6pm';
    hours.append(hoursMonday);
    //Add Tuesday hours
    const hoursTuesday = document.createElement('div');
    hoursTuesday.textContent = 'Tuesday: 6am - 6pm';
    hours.append(hoursTuesday);
    //Add Wednesday hours
    const hoursWednesday = document.createElement('div');
    hoursWednesday.textContent = 'Wednesday: 6am - 6pm';
    hours.append(hoursWednesday);
    //Add Thursday hours
    const hoursThursday = document.createElement('div');
    hoursThursday.textContent = 'Thursday: 6am - 10pm';
    hours.append(hoursThursday);
    //Add Friday hours
    const hoursFriday = document.createElement('div');
    hoursFriday.textContent = 'Friday: 6am - 10pm';
    hours.append(hoursFriday);
    //Add Saturday hours
    const hoursSaturday = document.createElement('div');
    hoursSaturday.textContent = 'Saturday: 8am - 10pm';
    hours.append(hoursSaturday);

    //Add Location section
    const location = document.createElement('div');
    location.classList.add('location');
    location.classList.add('four');
    content.append(location);
    //Add heading for location section
    const locationHeading = document.createElement('div');
    locationHeading.classList.add('heading');
    locationHeading.textContent = 'Location';
    location.append(locationHeading);
    //Add address
    const address = document.createElement('div')
    address.classList.add('address');
    address.textContent = '123 Forest Drive, Forestville, Maine';
    location.append(address);
 
    return content;
}