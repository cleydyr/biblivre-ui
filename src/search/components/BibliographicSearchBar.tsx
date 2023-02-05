import { EuiSearchBar } from '@elastic/eui';
import { useState } from 'react';
import AdvancedBibliographicSearchBar from './AdvancedBibliographicSearchBar';
import SimpleBibliographicSearchBar from './SimpleBibliographicSearchBar';

export const BibliographicSearchBar = () => {
    const [isAdvanced, setAdvanced] = useState(false);

    return (
        <div>
            <div>
                {isAdvanced ? <AdvancedBibliographicSearchBar /> : <SimpleBibliographicSearchBar />}
            </div>
            <div>
                
            </div>
        </div>
    );
}
