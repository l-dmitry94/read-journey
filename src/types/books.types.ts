export interface IBook {
    _id: string;
    title: string;
    author: string;
    imageUrl: string;
    totalPages: number;
    recommend: boolean;
}

export interface IAddBookData extends Pick<IBook, 'title' | 'author' | 'totalPages'> {}
