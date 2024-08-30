import { formatCurrency, formatNumber } from 'utils/format';

describe('format', () => {
    test('formatNumber for 1000 ZAR', () => {
        expect(formatNumber(1000.51, 2)).toEqual('1 000.51');
    });

    test('formatNumber for 1.87654321', () => {
        expect(formatNumber(1.87654321, 8)).toEqual('1.87654321');
    });

    test('formatCurrency for 87654321 BTC', () => {
        expect(formatCurrency(1.87654321, 'BTC')).toEqual('1.87654321 BTC');
    });

    test('formatCurrency for R100 000.00', () => {
        expect(formatCurrency(100_000.51, 'ZAR')).toEqual('R100 000.51');
    });

    test('formatCurrency for R100 000.50', () => {
        expect(formatCurrency(100_000.5, 'ZAR')).toEqual('R100 000.50');
    });
});