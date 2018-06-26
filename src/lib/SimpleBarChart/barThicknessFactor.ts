const barThicknessFactor = (thicknessSetting: BaseBarChart.BarThickness): number => {
    switch (thicknessSetting) {
        case 'thinner':
            return 0.75;
        case 'thinnest':
            return 0.5;
        default:
            return 0.95;
    }
}

export default barThicknessFactor;
