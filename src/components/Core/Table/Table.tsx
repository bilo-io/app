import clsx from 'clsx';
import { useAppTheme } from 'hooks';
import React from 'react';
import { useExpanded, useTable } from 'react-table';

interface TableStyles {
  th?: any;
  td?: any;
  tr?: any;
  table?: any;
  thead?: any;
}

interface TableProps {
  data: any[];
  columns: any[];
  padded?: boolean;
  onClickRow?: Function | null;
  canExpand?: boolean;
  renderRowSubComponent?: Function | null;
  noDataMessage?: string;
  serverErrorMessage?: any;
  styles?: TableStyles;
}

export const Table: React.FC<TableProps> = ({
  data,
  columns,
  padded,
  onClickRow,
  renderRowSubComponent,
  noDataMessage,
  serverErrorMessage,
  styles
}) => {
  const { theme } = useAppTheme();
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state: {
      // @ts-ignore
      expanded
    }
  } = useTable(
    {
      columns,
      data,
      // @ts-ignore
      initialState: { pageIndex: 1 }
    },
    useExpanded
  );

  return (
    <div className="w-full relative auto-scroll-x no-scrollbar">
      <div className="overflow-x-auto h-full">
        <table
          {...getTableProps()}
          // className={`w-full table-fixed border-separate ${styles?.table}`}
          className={clsx(`w-full border-separate table-fixed  ${styles?.table}`, {
            'pb-20': padded
          })}
          style={{
            borderSpacing: '0px 4px',
            width: '100%'
          }}
        >
          <thead className={`rounded-lg ${styles?.thead}`}>
            {headerGroups.map((headerGroup, h) => (
              <tr {...headerGroup.getHeaderGroupProps()}
                key={h}
                className={`${styles?.tr}`}
              >
                {headerGroup.headers.map((column, i) => (
                  <th
                    {...column.getHeaderProps()}
                    key={`header-${h}-${i}`}
                    style={{
                      paddingLeft: '0rem',
                      textAlign: 'left',
                      width: '100%'
                    }}
                    className={clsx(
                      '',
                      'bg-input-background text-header-text text-sm text-left px-3 py-2 font-normal',
                      {
                        'rounded-l-lg': i === 0,
                        'rounded-r-lg': i === columns.length - 1
                      }
                    )}
                  >
                    {column.render('Header')}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          {/* <div className="w-full relative" /> */}
          <hr className="absolute w-full" />

          <tbody {...getTableBodyProps()}>
            {rows.length <= 0 && (
              <tr className="mt-4 w-full text-center">
                <td
                  style={{
                    padding: '15px',
                    verticalAlign: 'middle'
                  }}
                  className={clsx(
                    'bg-background mt-4 text-body-text text-center whitespace-whitespace-pre-wrap rounded-l-lg rounded-r-lg'
                  )}
                >
                  {serverErrorMessage || noDataMessage}
                </td>
              </tr>
            )}

            {rows.length > 0 &&
              rows.map((row, i) => {
                prepareRow(row);
                const rowProps = row.getRowProps();
                return (
                  <React.Fragment key={`row-${i}`}>
                    <tr
                      {...rowProps}
                      key={`row-${i}`}
                      onClick={() => onClickRow?.(row.original)}
                      className={clsx('my-2 border-b', {
                        backgroundColor: theme?.TEXT + '99',
                        borderBottom: `1px solid ${theme.TEXT}`,
                        'cursor-pointer': !!onClickRow
                      })}
                    >
                      {row.cells.map((cell, c) => {
                        const lastIndex = row.cells.length - 1;

                        return (
                          <td
                            {...cell.getCellProps()}
                            key={`cell-${i}-${c}`}
                            style={{
                              padding: '2px',
                              verticalAlign: 'middle'
                            }}
                            className={clsx(
                              'my-2 text-header-text text-left whitespace-whitespace-pre-wrap',
                              {
                                'rounded-l-lg': c === 0,
                                'rounded-r-lg': c === lastIndex
                              }
                            )}
                          >
                            {cell.render('Cell')}
                          </td>
                        );
                      })}
                    </tr>
                    {/* @ts-ignore */}
                    {(row.isExpanded || expanded[i]) && (
                      <tr>
                        <td colSpan={columns.length}>
                          {renderRowSubComponent?.({ row, rowProps })}
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
