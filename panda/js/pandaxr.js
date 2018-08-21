let rotDelta = 10;
let ui_layout = null;

document.addEventListener('DOMContentLoaded', function() {
    ui_layout = document.querySelector('[a-layout]');
    rotDelta = 360 / ui_layout.children.length;

    document.querySelector('#btnSeguent').setAttribute('onClick', 'rotar(true)');
    document.querySelector('#btnAnterior').setAttribute('onClick', 'rotar(false)');
});

let rotar = function(dir){
    let currentAngle = toDegrees(ui_layout.object3D.rotation.y);
    let nAngle = 0;
    if(dir)
        nAngle = currentAngle + rotDelta;
    else
        nAngle = currentAngle - rotDelta;
    let tween_rot = new AFRAME.TWEEN.Tween(ui_layout.object3D.rotation).to({y:toRadians(nAngle)}, 250);
    tween_rot.easing(TWEEN.Easing.Cubic.Out);
    tween_rot.start();
}