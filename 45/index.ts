type CarType = {
    manufacturer: string;
    model_name: string;
}

const car_info = (
    {
        manufacturer,
        model_name
    }: CarType,
    other: Record<string, string> = {}
) => ({
    manufacturer, model_name, ...other
});

console.log(car_info({
    manufacturer: 'Toyota', model_name: 'Corolla'
}, {
    color: 'White',
    light_color: 'Blue'
}));