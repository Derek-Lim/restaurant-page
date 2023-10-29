export default function menuPage() {
    const content = document.querySelector('#content');

    //Add title
    const title = document.createElement('div');
    title.classList.add('title');
    title.classList.add('one');
    title.textContent = 'Menu';
    content.append(title);

    //Add menu item 1
    const itemOne = document.createElement('div');
    itemOne.classList.add('honey-tea');
    itemOne.classList.add('two');
    content.append(itemOne);
    //Add item name
    const itemOneName = document.createElement('div');
    itemOneName.classList.add('heading');
    itemOneName.textContent = 'Honey Tea';
    itemOne.append(itemOneName);
    //Add item description
    const itemOneDescription = document.createElement('p');
    itemOneDescription.classList.add('description');
    itemOneDescription.textContent = 'A warm, sweet tea made with the highest quality honey and a bit of lemon to start your day off right!'
    itemOne.append(itemOneDescription);
    //Add item price
    const itemOnePrice = document.createElement('div');
    itemOnePrice.classList.add('price');
    itemOnePrice.textContent = '$2';
    itemOne.append(itemOnePrice);

    //Add menu item 2
    const itemTwo = document.createElement('div');
    itemTwo.classList.add('honeycomb');
    itemTwo.classList.add('three');
    content.append(itemTwo);
    //Add item name
    const itemTwoName = document.createElement('div');
    itemTwoName.classList.add('heading');
    itemTwoName.textContent = 'Honeycomb';
    itemTwo.append(itemTwoName);
    //Add item description
    const itemTwoDescription = document.createElement('p');
    itemTwoDescription.classList.add('description');
    itemTwoDescription.textContent = 'Are you a bear like us? Then you will love our honeycomb (that we definitely did not steal from the bees). And, yes, humans, it is just a piece of honeycomb, not the popular breakfast cereal.'
    itemTwo.append(itemTwoDescription);
    //Add item price
    const itemTwoPrice = document.createElement('div');
    itemTwoPrice.classList.add('price');
    itemTwoPrice.textContent = '$6';
    itemTwo.append(itemTwoPrice);

    //Add menu item 3
    const itemThree = document.createElement('div');
    itemThree.classList.add('beary-bowl');
    itemThree.classList.add('four');
    content.append(itemThree);
    //Add item name
    const itemThreeName = document.createElement('div');
    itemThreeName.classList.add('heading');
    itemThreeName.textContent = 'Beary Bowl';
    itemThree.append(itemThreeName);
    //Add item description
    const itemThreeDescription = document.createElement('p');
    itemThreeDescription.classList.add('description');
    itemThreeDescription.textContent = 'Get a big ole bowl of our berries! Side of honey is $1 extra.'
    itemThree.append(itemThreeDescription);
    //Add item price
    const itemThreePrice = document.createElement('div');
    itemThreePrice.classList.add('price');
    itemThreePrice.textContent = '$7';
    itemThree.append(itemThreePrice);

    return content;
}