'use client'
import React, { useEffect, useState } from 'react'
import app from '@/app/firebaseconf'
import {
    getFirestore,
    collection,
} from 'firebase/firestore';

import { useCollectionData } from 'react-firebase-hooks/firestore';

import BooksGrid from '@/components/BooksGrid';

const Books = () => {
    const db = getFirestore(app);
    const colRef = collection(db, 'books');
    const [books] = useCollectionData(colRef);

    return (
        <div className='container'>
            {books ? <BooksGrid books={books} /> :
                <div className="container my-3 text-center">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            }
        </div>
    )
}

export default Books