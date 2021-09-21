import { expect } from 'chai';
import { GildedRose } from '../app/gilded-rose';
import { Item } from '../app/items';

describe('conjured items', () => {
    it('should update quality for conjured sellin 1 day', () => {
        const gildedRose = new GildedRose([ new Item('Conjured', 1, 2) ]);
        const items = gildedRose.updateQuality();
         const added =items[0]
        expect(added.quality).to.equal(0);
        expect(added.sellIn).to.equal(0);
    });
     
    it('should update conjured quality 4x as fast for sellin 0 days', () => {
        const gildedRose = new GildedRose([ new Item('Conjured', 0, 4) ]);
        const items = gildedRose.updateQuality();
         const added =items[0]
        expect(added.quality).to.equal(0);
        expect(added.sellIn).to.equal(-1);
    });

    it('conjured item quality should never go below 0', () => {
        const gildedRose = new GildedRose([ new Item('Conjured', 0, 1) ]);
        const items = gildedRose.updateQuality();
        const added = items[0]
        expect(added.quality).to.equal(0);
        expect(added.sellIn).to.equal(-1);
    });

    it('should lower quality by 3 if exactly 5 days left', () => {
        const gildedRose = new GildedRose([ new Item('Conjured', 5, 6 )])
        const items = gildedRose.updateQuality();
        const added = items[0]
        expect(added.quality).to.equal(3);
        expect(added.sellIn).to.equal(4);
    })
})
