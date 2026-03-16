import React, { useState, useMemo, useEffect } from 'react';
import DocSidebarItems from '@theme-original/DocSidebarItems';
import { translate } from '@docusaurus/Translate';
import './styles.css';

export default function DocSidebarItemsWrapper(props) {

  const [filter, setFilter] = useState("");
  const [debouncedFilter, setDebouncedFilter] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedFilter(filter);
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [filter]);

  const filteredItems = useMemo(() => {
    if (!debouncedFilter || props.level != 1) {
      return props.items;
    }

    function recursiveFilter(items, filterText) {
      const lowerFilter = filterText.toLowerCase();
      return items
        .map((item) => {
          let newItems = item.items;
          if (item.items) {
            newItems = recursiveFilter(item.items, filterText);
          }

          const isMatch = item.label?.toLowerCase().includes(lowerFilter);
          const hasVisibleChildren = newItems && newItems.length > 0;

          if (isMatch || hasVisibleChildren) {
            return {
              ...item,
              items: newItems,
              collapsed: hasVisibleChildren ? false : item.collapsed,
            };
          }
          return null;
        })
        .filter(Boolean);
    }

    return recursiveFilter(props.items, debouncedFilter);
  }, [props.items, debouncedFilter]);

  if (props.level == 1)
    return (
      <>
        <div className="doc-sidebar-filter-wrapper">
          <input
            type="text"
            placeholder={translate({
              id: 'sidebar.filter.placeholder',
              message: 'Filter...',
              description: 'Placeholder for sidebar filter input'
            })}
            className="doc-sidebar-filter"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
          {filter && (
            <button
              className="doc-sidebar-filter-clear"
              onClick={() => {
                setFilter("");
                setDebouncedFilter("");
              }}
              aria-label="Clear filter"
            >
              &times;
            </button>
          )}
        </div>
        <DocSidebarItems {...props}
          key={debouncedFilter ? 'filtered' : 'unfiltered'}
          items={filteredItems}
        />
      </>
    );

  return (
    <DocSidebarItems {...props}
      key={debouncedFilter ? 'filtered' : 'unfiltered'}
      items={filteredItems}
    />
  );
}
