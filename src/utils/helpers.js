import books from '../assets/icons/books.svg';
import film from '../assets/icons/film.svg';
import music from '../assets/icons/music.svg';
import theater from '../assets/icons/theater.svg';
import boardgame from '../assets/icons/board-game.svg';
import cartoon from '../assets/icons/cartoon.svg';
import celebrity from '../assets/icons/celebrity.svg';
import comics from '../assets/icons/comics.svg';
import art from '../assets/icons/art.svg';
import anime from '../assets/icons/anime.svg';
import animals from '../assets/icons/animals.svg';
import computer from '../assets/icons/computer.svg';
import gadget from '../assets/icons/gadget.svg';
import geography from '../assets/icons/geography.svg';
import history from '../assets/icons/history.svg';
import mathematics from '../assets/icons/mathematics.svg';
import mythology from '../assets/icons/mythology.svg';
import politics from '../assets/icons/politics.svg';
import sciencenature from '../assets/icons/science-nature.svg';
import sports from '../assets/icons/sports.svg';
import television from '../assets/icons/television.svg';
import vehicles from '../assets/icons/vehicles.svg';
import videogame from '../assets/icons/video-game.svg';
import general from '../assets/icons/general.svg';

const imagesMap = {
    9: general,
    10: books,
    11: film,
    12: music,
    13: theater,
    14: television,
    15: videogame,
    16: boardgame,
    17: sciencenature,
    18: computer,
    19: mathematics,
    20: mythology,
    21: sports,
    22: geography,
    23: history,
    24: politics,
    25: art,
    26: celebrity,
    27: animals,
    28: vehicles,
    29: comics,
    30: gadget,
    31: anime,
    32: cartoon
};

export const getCategoryIcon = id => {
    return imagesMap[id] || "";
};