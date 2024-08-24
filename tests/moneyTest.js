import {formatCurrency} from '../scripts/utils/money.js'

console.log('test suite: formatcurrency')
console.log('normal currency')

if (formatCurrency(2095) === '20.95')
{
    console.log('passed');
} else {
    console.log('failed')
}

console.log('works with zero')

if (formatCurrency(0) === '0.00')
    {
        console.log('passed');
    } else {
        console.log('failed')
    }
    console.log('tricky number ending with decimal')

    if (formatCurrency(2000.5) === '20.01')
        {
            console.log('passed');
        } else {
            console.log('failed')
        }