import { useMemo, useState } from "react";
import type { ReactNode } from "react";

import { Input } from "../Input";

import "./styles.css";

export interface DataTableColumn<T> {
  id?: string;
  header: string;
  accessor?: keyof T;
  width?: number | string;
  align?: "left" | "center" | "right";
  render?: (item: T) => ReactNode;
}

interface DataTableProps<T> {
  title?: string;
  description?: string;
  actions?: ReactNode;

  data: T[];
  columns: DataTableColumn<T>[];

  loading?: boolean;

  searchable?: boolean;
  searchPlaceholder?: string;
  searchKeys?: (keyof T)[];

  emptyMessage?: string;
}

export function DataTable<T>({
  title,
  description,
  actions,
  data,
  columns,
  loading = false,
  searchable = false,
  searchPlaceholder = "Pesquisar...",
  searchKeys = [],
  emptyMessage = "Nenhum registro encontrado.",
}: DataTableProps<T>) {
  const [search, setSearch] = useState("");

  const filteredData = useMemo(() => {
    if (!searchable || !search.trim() || searchKeys.length === 0) {
      return data;
    }

    const term = search.toLowerCase().trim();

    return data.filter((item) =>
      searchKeys.some((key) => {
        const value = item[key];

        if (value === null || value === undefined) {
          return false;
        }

        return String(value).toLowerCase().includes(term);
      })
    );
  }, [data, search, searchable, searchKeys]);

  return (
    <div className="data-table-wrapper">
      {(title || actions) && (
        <div className="data-table-header">
          <div>
            {title && <h3>{title}</h3>}
            {description && <p>{description}</p>}
          </div>

          {actions && (
            <div className="data-table-actions">
              {actions}
            </div>
          )}
        </div>
      )}

      {searchable && (
        <div className="data-table-toolbar">
          <Input
            placeholder={searchPlaceholder}
            value={search}
            onChange={(event) =>
              setSearch(event.target.value)
            }
          />
        </div>
      )}

      {loading ? (
        <div className="data-table-loading">
          Carregando...
        </div>
      ) : filteredData.length === 0 ? (
        <p className="data-table-empty">
          {emptyMessage}
        </p>
      ) : (
        <>
          <table className="data-table">
            <thead>
              <tr>
                {columns.map((column) => (
                  <th
                    key={column.id ?? column.header}
                    style={{
                      width: column.width,
                      textAlign: column.align ?? "left",
                    }}
                  >
                    {column.header}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {filteredData.map((item, rowIndex) => (
                <tr key={rowIndex}>
                  {columns.map((column) => (
                    <td
                      key={column.id ?? column.header}
                      style={{
                        textAlign: column.align ?? "left",
                      }}
                    >
                      {column.render
                        ? column.render(item)
                        : String(
                            column.accessor
                              ? item[column.accessor] ?? "-"
                              : "-"
                          )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>

          <div className="data-table-footer">
            Total de registros:{" "}
            <strong>{filteredData.length}</strong>
          </div>
        </>
      )}
    </div>
  );
}