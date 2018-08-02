import {renderDevice, renderNumbers, renderTotals} from '../views';
// Accepts element and device array and runs all functions from the views folder
export const renderParts = (element, devices) => {
    renderDevice(element, devices)
    renderTotals(element, devices)
    renderNumbers(element, devices)
}