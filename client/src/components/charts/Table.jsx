import { useMemo } from 'react'
import { useTable, useFilters  } from 'react-table'
import styles from './Table.module.css'

export const Table = () => {

  const data = useMemo(
    () => [
      { name: 'Иманкулов Артур Александрович', city: "Екатеринбург", edu: 'УрФУ' },
      { name: 'Обухов Даниил Александрович', city: "Екатеринбург", edu: 'УрГУПС' },
      { name: 'Маканков Павел Евгеньевич', city: "Рудный", edu: 'УрФУ' },
      { name: 'Белова Дарья Андреевна', city: "Екатеринбург", edu: 'УрФУ' },
      { name: 'Токарев Алексей Андреевна', city: "Екатеринбург", edu: 'УрФУ' },
    ],[]
  )

  const columns = useMemo(
    () => [
      { Header: 'ФИО', accessor: 'name' },
      { Header: 'Город', accessor: 'city' },
      { Header: 'ВУЗ', accessor: 'edu' },
    ],[]
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setFilter,
  } = useTable({ columns, data }, useFilters)

  const handleFilterChange = (e, columnId) => {
    const value = e.target.value || undefined
    setFilter(columnId, value)
  }

  return (
    <div className={styles.box}>
      <div className={styles.title}>
        <h1>Получатели стипендиальной поддержки</h1>
      </div>
      <table {...getTableProps()} style={{ borderCollapse: 'collapse' }} className={styles.table}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                >
                  {column.render('Header')}
                  <div>
                    <input
                      type="text"
                      onChange={(e) => handleFilterChange(e, column.id)}
                      style={{ marginTop: '4px' }}
                      placeholder='Поиск'
                    />
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td
                    {...cell.getCellProps()}
                  >
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className={styles.btn}>
        <p>Всего: 5</p>
        <button>Показать полностью</button>
      </div>
    </div>
  )
}
