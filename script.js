document.addEventListener('DOMContentLoaded', () => {
    const resources = {
        wood: 3,
        stone: 0,
        gold: 0
    };

    let depotQuantity = 0;
    let maxResource = 4;

    const updateDepotDisplay = () => {
        const depotElement = document.getElementById('depot-quantity');
        depotElement.textContent = depotQuantity;

        // Recalculate the new maximum resource limit
        const newMaxResource = maxResource + (depotQuantity * 2);

        // Update maximum values in the resource tracker
        document.querySelector('.maximum-wood').textContent = newMaxResource;
        document.querySelector('.maximum-stone').textContent = newMaxResource;
        document.querySelector('.maximum-gold').textContent = newMaxResource;

        // Adjust current resources if they exceed the new maximum
        Object.keys(resources).forEach(resource => {
            if (resources[resource] > newMaxResource) {
                resources[resource] = newMaxResource;
                updateResourceDisplay(resource, resources[resource]);
            }
        });
    };

    const updateResourceDisplay = (resource, quantity) => {
        // Update the current value for the resource
        const currentElement = document.querySelector(`.current-${resource}`);
        currentElement.textContent = quantity;
    };

    const incrementResource = (resource) => {
        const maxResourceLimit = maxResource + (depotQuantity * 2);
        if (resources[resource] < maxResourceLimit) {
            resources[resource]++;
            updateResourceDisplay(resource, resources[resource]);
        }
    };

    const decrementResource = (resource) => {
        if (resources[resource] > 0) {
            resources[resource]--;
            updateResourceDisplay(resource, resources[resource]);
        }
    };

    document.getElementById('build-depot-button').addEventListener('click', () => {
        if (depotQuantity >= 4) {
            alert("You can only build 4 depots!");
            return;
        }
        depotQuantity++;
        updateDepotDisplay();
    });

    document.getElementById('remove-depot-button').addEventListener('click', () => {
        if (depotQuantity > 0) {
            depotQuantity--;
            updateDepotDisplay();
        }
    });

    document.getElementById('wood-button').addEventListener('click', () => {
        incrementResource('wood');
    });

    document.getElementById('stone-button').addEventListener('click', () => {
        incrementResource('stone');
    });

    document.getElementById('gold-button').addEventListener('click', () => {
        incrementResource('gold');
    });

    // Add event listeners for remove buttons
    document.getElementById('remove-wood-button').addEventListener('click', () => {
        decrementResource('wood');
    });

    document.getElementById('remove-stone-button').addEventListener('click', () => {
        decrementResource('stone');
    });

    document.getElementById('remove-gold-button').addEventListener('click', () => {
        decrementResource('gold');
    });
});