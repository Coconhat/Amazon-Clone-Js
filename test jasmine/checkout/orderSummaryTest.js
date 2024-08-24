import {renderOrderSummary} from '../../scripts/checkout/orderSummary';

describe('Test suite: renderOrderSummary', () => {
    it('Display the cart', () => {
        document.querySelector('.js-test-container').innerHTML = `
        <div class="js-order-summary"></div>
        `
    });
})