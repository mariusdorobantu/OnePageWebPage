import myProfileImg from '../../images/iamhim.png';
import lorandBook from '../../images/lorand.jpg';
import sooGoodBook from '../../images/soogood.jpg';
import newEarthBook from '../../images/newearthtolle.jpg';
import invingatorulBook from '../../images/paulcoleho.jpg';
import theAlchimist from '../../images/alchimistul.jpg';
import ideeBaniBook from '../../images/napoleonHill.jpg';
import homoDeusBook from '../../images/homoDeus.jpg';
import deCeBook from '../../images/brianTracy.jpg';
import bodySaisNoBook from '../../images/gabormathe.jpg';
import steveJobs from '../../images/steveJobs.jpg';
import atomicHabitsBooks from '../../images/atomicHabits.jpg';
import hotAtentieBook from '../../images/hotiAtentie.jpg';


interface Book {
    ImageUrl: string
    Description: string
}

export const books: Book[] = [
    { ImageUrl: lorandBook, Description: 'Description for Lorand Book' },
    { ImageUrl: sooGoodBook, Description: 'Description for So Good Book' },
    { ImageUrl: newEarthBook, Description: 'Description for New Earth Book' },
    { ImageUrl: invingatorulBook, Description: 'Description for Invingatorul Book' },
    { ImageUrl: theAlchimist, Description: 'Description for The Alchimist' },
    { ImageUrl: ideeBaniBook, Description: 'Description for Idee Bani Book' },
    { ImageUrl: homoDeusBook, Description: 'Description for Homo Deus Book' },
    { ImageUrl: deCeBook, Description: 'Description for De Ce Book' },
    { ImageUrl: bodySaisNoBook, Description: 'Description for Body Says No Book' },
    { ImageUrl: steveJobs, Description: 'Description for Steve Jobs Book' },
    { ImageUrl: atomicHabitsBooks, Description: 'Description for Atomic Habits Book' },
    { ImageUrl: hotAtentieBook, Description: 'Description for Hoti Atentie Book' }
];

export const profileImg = myProfileImg;
