const milesToKilometers = miles => {
    return miles * 1.60934;
};
const conversion = inches => {
    return inches * 0.393701;

}
const distanceConverter = {
    milesToKilometers,
    conversion,
};

export default distanceConverter;