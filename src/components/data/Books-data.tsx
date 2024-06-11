import myProfileImg from '../../../public/images/iamhim.png';
import lorandBook from '../../../public/images/Books/lorand.jpg';
import sooGoodBook from '../../../public/images/Books/soogood.jpg';
import newEarthBook from '../../../public/images/Books/newearthtolle.jpg';
import invingatorulBook from '../../../public/images/Books/paulcoleho.jpg';
import theAlchimist from '../../../public/images/Books/alchimistul.jpg';
import ideeBaniBook from '../../../public/images/Books/napoleonHill.jpg';
import homoDeusBook from '../../../public/images/Books/homoDeus.jpg';
import deCeBook from '../../../public/images/Books/brianTracy.jpg';
import bodySaisNoBook from '../../../public/images/Books/gabormathe.jpg';
import steveJobs from '../../../public/images/Books/steveJobs.jpg';
import atomicHabitsBooks from '../../../public/images/Books/atomicHabits.jpg';
import hotAtentieBook from '../../../public/images/Books/hotiAtentie.jpg';


interface Book {
    ImageUrl: string
    Description: string
}

export const books: Book[] = [
    { ImageUrl: lorandBook, 
      Description: 'Description for Lorand Book' 
    },
    { ImageUrl: sooGoodBook, 
      Description: 'Description for So Good Book' 
    },
    { ImageUrl: newEarthBook, 
      Description: 'Description for New Earth Book' 
    },
    { ImageUrl: invingatorulBook, 
      Description: 'Description for Invingatorul Book' 
    },
    { ImageUrl: theAlchimist, 
      Description: 'Description for The Alchimist' 
    },
    { ImageUrl: ideeBaniBook, 
      Description: 'Description for Idee Bani Book' 
    },
    { ImageUrl: homoDeusBook,
      Description: 'Description for Homo Deus Book' 
    },
    { ImageUrl: deCeBook,
      Description: 'Description for De Ce Book'
    },
    { ImageUrl: bodySaisNoBook,
      Description: 'Description for Body Says No Book'
    },
    { ImageUrl: steveJobs,
      Description: 'Description for Steve Jobs Book' 
    },
    { ImageUrl: atomicHabitsBooks,
      Description: 'Description for Atomic Habits Book' 
    },
    { ImageUrl: hotAtentieBook, 
      Description: 'Description for Hoti Atentie Book' 
    }
];

export const profileImg = myProfileImg;
