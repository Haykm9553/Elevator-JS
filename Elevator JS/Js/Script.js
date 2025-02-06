document.addEventListener("DOMContentLoaded", () => {
    const userFloors = document.querySelectorAll(".UserFloor");
    const elevators = document.querySelectorAll(".Elevator > div");
    const floorHeight = 47.6; 


    function getClosestElevator(targetFloor) {
        let closestElevator = null;
        let minDistance = Infinity;

        elevators.forEach(elevator => {
            const currentFloor = parseInt(elevator.getAttribute("current-floor"));
            const distance = Math.abs(currentFloor - targetFloor);

            if (distance < minDistance) {
                minDistance = distance;
                closestElevator = elevator;
            }
        });

        return closestElevator;
    }


    userFloors.forEach(floor => {
        floor.addEventListener("click", () => {
            const targetFloor = parseInt(floor.dataset.floor);
            const closestElevator = getClosestElevator(targetFloor);

            if (closestElevator) {
                const currentFloor = parseInt(closestElevator.getAttribute("current-floor"));
                const distance = targetFloor - currentFloor;

                closestElevator.setAttribute("current-floor", targetFloor);
                closestElevator.style.transform = `translateY(${-(targetFloor - 1) * floorHeight }px)`;

                console.log(
                    closestElevator
                );
            }
        });
    });
});