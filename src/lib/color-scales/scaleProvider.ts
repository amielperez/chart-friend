import scales from './scales';
const scaleProvider = (scaleName: string): any => {
    return scales[scaleName];
}

export default scaleProvider;
