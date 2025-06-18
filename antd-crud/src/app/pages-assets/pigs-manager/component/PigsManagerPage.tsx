import { Table } from "antd";

export const PigsManagerPage = () => {
  const dataSource = [
    {
      key: 1,
      name: "Tyron",
    },
    {
      key: 2,
      name: "Alexis",
    },
  ];
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
  ];
  return (
    <>
      <Table dataSource={dataSource} columns={columns} />
    </>
  );
};
