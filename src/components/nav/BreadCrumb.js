import React from 'react'

export default function BreadCrumb() {
    return (
        <div className="container">
            <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center align-items-center">
                <li className="breadcrumb-item"><a href="/movies">Movies</a></li>
                <li className="breadcrumb-item active" aria-current="page"><a href="/series">Series</a></li>
            </ol>
            </nav>
      </div>
    )
}
