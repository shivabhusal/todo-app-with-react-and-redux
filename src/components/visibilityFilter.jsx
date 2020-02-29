import React from 'react'

export default function VisibilityFilter({ filters }) {
    return (
        filters.map((filter,i) => <button key={`filter-${i}`}>{filter}</button>)
    )
}