import { MallardDuck } from './MallardDuck';
import { WildTurkey } from './WildTurkey';
import { TurkeyAdapter } from './TurkeyAdapter';
import { Duck } from './Duck';

const duck: Duck = new MallardDuck();
const turkey = new WildTurkey();
const turkeyAdapter: Duck = new TurkeyAdapter(turkey);

console.log('The Duck says:');
duck.quack();
duck.fly();

console.log('\nThe Turkey says:');
// turkey implements Turkey directly
// (we call methods directly to show behavior)
(turkey as any).gobble();
(turkey as any).fly();

console.log('\nThe TurkeyAdapter (as a Duck) says:');
turkeyAdapter.quack();
turkeyAdapter.fly();
