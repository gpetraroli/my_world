import {PointerLockControls} from "three/examples/jsm/controls/PointerLockControls.js";

const moveForward = (controls) => {
    controls.moveForward(0.1);
};

const moveBackward = (controls) => {
    controls.moveForward(-0.1);
};

const moveLeft = (controls) => {
    controls.moveRight(-0.1);
};

const moveRight = (controls) => {
    controls.moveRight(0.1);
};

const Controls = (camera, renderer) => {
    const controls = new PointerLockControls(camera, renderer.domElement);

    renderer.domElement.addEventListener('click', () => {
        controls.lock();
    });

    document.addEventListener('keydown', (event) => {
        switch (event.code) {
            case 'KeyW':
                moveForward(controls);
                break;
            case 'KeyA':
                moveLeft(controls);
                break;
            case 'KeyS':
                moveBackward(controls);
                break;
            case 'KeyD':
                moveRight(controls);
                break;
        }
    });

    return controls;
};



export default Controls;