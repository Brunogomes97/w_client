export type NoteData = {
    id: string,
    title: string,
    createdAt: string,
    type: 'personal' | 'work' | 'study' | 'idea' | 'reminder' | 'todo',
    description: string

}



export type FetchingNoteData = {
    data: [NoteData];
    total_items: number;
    offset: number;
    limit: number;
    search: string;
};


export type NotesColumnData = NoteData