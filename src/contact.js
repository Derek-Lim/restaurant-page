export default function contact() {
    const content = document.querySelector('#content');

        //Add page title
        const title = document.createElement('div');
        title.classList.add('title');
        title.classList.add('one');
        title.textContent = "Contact Us";
        content.append(title);
    
        //Add manager profile
        const manager = document.createElement('div');
        manager.classList.add('manager');
        manager.classList.add('two');
        content.append(manager);
        //Add name
        const managerName = document.createElement('div');
        managerName.classList.add('title');
        managerName.textContent = "Papa Bear";
        manager.append(managerName);
        //Add title
        const managerRole = document.createElement('div');
        managerRole.classList.add('content');
        managerRole.textContent = 'Manager';
        manager.append(managerRole);
        //Add number
        const managerNumber = document.createElement('div');
        managerNumber.classList.add('content');
        managerNumber.textContent = '555-555-5555';
        manager.append(managerNumber);
        //Add email
        const managerEmail = document.createElement('div');
        managerEmail.classList.add('content');
        managerEmail.textContent = 'perfectlyFakeEmail@notReal.com';
        manager.append(managerEmail);

        //Add chef profile
        const chef = document.createElement('div');
        chef.classList.add('chef');
        chef.classList.add('three');
        content.append(chef);
        //Add name
        const chefName = document.createElement('div');
        chefName.classList.add('title');
        chefName.textContent = 'Mama Bear';
        chef.append(chefName);
        //Add title
        const chefRole = document.createElement('div');
        chefRole.classList.add('content');
        chefRole.textContent = 'Chef';
        chef.append(chefRole);
        //Add number
        const chefNumber = document.createElement('div');
        chefNumber.classList.add('content');
        chefNumber.textContent = '666-666-6666';
        chef.append(chefNumber);
        //Add email
        const chefEmail = document.createElement('div');
        chefEmail.classList.add('content');
        chefEmail.textContent = 'totallyFakeEmail@notReal.com';
        chef.append(chefEmail);

        //Add waiter profile
        const waiter = document.createElement('div');
        waiter.classList.add('waiter');
        waiter.classList.add('four');
        content.append(waiter);
        //Add name
        const waiterName = document.createElement('div');
        waiterName.classList.add('title');
        waiterName.textContent = 'Baby Bear';
        waiter.append(waiterName);
        //Add title
        const waiterTitle = document.createElement('div');
        waiterTitle.classList.add('content');
        waiterTitle.textContent = 'Waiter';
        waiter.append(waiterTitle);
        //Add number
        const waiterNumber = document.createElement('div');
        waiterNumber.classList.add('content');
        waiterNumber.textContent = '777-777-7777';
        waiter.append(waiterNumber);
        //Add email
        const waiterEmail = document.createElement('div');
        waiterEmail.classList.add('content');
        waiterEmail.textContent = 'definitelyFakeEmail@notReal.com';
        waiter.append(waiterEmail);
     
        return content;
}