import {
    EuiFieldSearch
} from '@elastic/eui';

type SimpleBibliographicSearchBarProps = {
    queryText?: string
    onQueryChange: (query: string) => void
}

const SimpleBibliographicSearchBar = (props: SimpleBibliographicSearchBarProps) => {
    const {
        queryText,
        onQueryChange
    } = props;

    return (
        <EuiFieldSearch
            value={queryText}
            onChange={evt => {
                onQueryChange(evt.target.value)
            }}
        />
    );
}

export default SimpleBibliographicSearchBar;