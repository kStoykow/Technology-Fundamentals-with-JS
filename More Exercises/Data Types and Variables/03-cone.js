function parameters(radius, height) {
    let volume = (1 / 3) * Math.PI * (radius * radius) * height;
    let slantHeight = Math.sqrt((radius * radius) + (height * height));
    let lateralSurface = Math.PI * radius * slantHeight;
    let baseSurface = Math.PI * (radius * radius);
    let totalSurface = lateralSurface + baseSurface;

    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${totalSurface.toFixed(4)}`);
}