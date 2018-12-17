export function consumptionAvg(consumptionAvg, volumeFuel) {
    let distance = 0;
    distance=Math.round((volumeFuel*100)/consumptionAvg);

    return (distance);
}