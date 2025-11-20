import React, { useState } from "react";
import { Table, ScrollArea, TextInput } from "@mantine/core";

export default function AuditTrailTable({ data }) {
  const [search, setSearch] = useState("");

  // Filter rows by search
  const filteredData = data.filter(
    (row) =>
      row.action.toLowerCase().includes(search.toLowerCase()) ||
      row.title.toLowerCase().includes(search.toLowerCase()) ||
      row.user.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <h2
        style={{
          fontFamily: "Georgia, serif",
          marginBottom: "12px",
        }}
      >
        AUDIT TRAIL
      </h2>

      {/* Scrollable Table */}
      <ScrollArea style={{ height: 400 }}>
        <Table
          striped
          highlightOnHover
          style={{ borderCollapse: "collapse", width: "100%", fontSize: "14px" }}
        >
          <thead>
            <tr style={{ backgroundColor: "#d2dae2", fontWeight: 600 }}>
              <th style={{ border: "1px solid #a0a0a0", padding: "8px" }}>Action</th>
              <th style={{ border: "1px solid #a0a0a0", padding: "8px" }}>Title of the article</th>
              <th style={{ border: "1px solid #a0a0a0", padding: "8px" }}>User</th>
              <th style={{ border: "1px solid #a0a0a0", padding: "8px" }}>Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row, index) => (
              <tr key={index}>
                <td
                  style={{
                    border: "1px solid #a0a0a0",
                    padding: "8px",
                    color: row.action === "Deleted" ? "red" : "#0077ff",
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  {row.action}
                </td>
                <td style={{ border: "1px solid #a0a0a0", padding: "8px" }}>{row.title}</td>
                <td style={{ border: "1px solid #a0a0a0", padding: "8px" }}>{row.user}</td>
                <td style={{ border: "1px solid #a0a0a0", padding: "8px" }}>{row.timestamp}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </ScrollArea>
    </>
  );
}
