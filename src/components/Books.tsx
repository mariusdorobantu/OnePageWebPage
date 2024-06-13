import  { useState } from 'react';
import { books, Book, profileImg  } from './data/Books-data';

const Books = () => {
    const [selectedBookUrl, setSelectedBookUrl] = useState<string | undefined>(undefined);

    const handleToggleComments = (bookUrl: string) => 
        selectedBookUrl === bookUrl ? setSelectedBookUrl(undefined) : setSelectedBookUrl(bookUrl)
    
    return ( 
        <div id="books--wrapper">
            <p className="mb-4 codding--paragraph books--paragraph"><span  className="codding--paragraph span--coding--journey">my</span> 12 game changing books</p>
            <div className="books--testimonal--container">
                <div className="left--testimonial--content">
                    <img className="testimonial--img"
                         src={profileImg} 
                         alt="">
                    </img>
                </div>
                <div className="right--testimonial--content">
                    <p className="testimonial--personal--quote">
                        <span className="quote">“</span>
                        My personal quote right here.
                    </p>
                    <p className="testimonial--paragraphs">
                        In my first year as a manager i found myself uneducated, so i begun to read!
                        Down below you will find my all time favorite books that made me to love reading again, ' the GAME CHANGERS '.
                    </p>
                    <p>Marius <span className="testimonial--myjob">Junior Frontend dev. | former top-manager in sales</span></p>
                </div>
            </div>
            <div className="books--main--container">
                {books.map(book => (<div key={book.ImageUrl} className="book-1 book--elements">
                    <div className="cover--strings--container">
                        <img 
                            className="books--cover--img scale-effect"
                            src={book.ImageUrl} 
                            alt="So good they can't ignore you -- book cover">
                        </img>
                        <button className="bnt--blue--standard"
                                onClick={() => handleToggleComments(book.ImageUrl)}>
                                {book.ImageUrl === selectedBookUrl ? "Hide Comments" : "Show Comments"}
                        </button>
                    </div>
                    <div className={`books--comments ${book.ImageUrl === selectedBookUrl ? 'show-box' : 'hidden'}`}>
                        <p className="title--books--comments">Soo good they can't ignore you</p>
                        <p className="author--books--comments">by Cal Newport | Personal development</p>
                        <p className="myComments--books--comments">
                            {book.Description}
                        </p>
                    </div>
                </div>))}
            </div>
        </div>
        
    )
}

export default Books;
