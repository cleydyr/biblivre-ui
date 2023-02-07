import { useState } from 'react';
import AdvancedBibliographicSearchBar from './AdvancedBibliographicSearchBar';
import SimpleBibliographicSearchBar from './SimpleBibliographicSearchBar';

type BibliographicSearchBarProps = {
    query?: string
    onQueryChange: (query: string) => void
}

export const BibliographicSearchBar = (props: BibliographicSearchBarProps) => {
    const {
        query,
        onQueryChange
    } = props;

    const [isAdvanced, setAdvanced] = useState(false);

    return (
        <div>
            <div>
                {
                    isAdvanced ?
                        <AdvancedBibliographicSearchBar onQueryChange={onQueryChange} />
                        : <SimpleBibliographicSearchBar queryText={query} onQueryChange={onQueryChange} />
                }
            </div>
            <div>

            </div>
        </div>
    );
}
