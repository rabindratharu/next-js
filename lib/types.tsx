export interface Menu {
  menuItems: {
    edges: [
      {
        node: {
          uri: string;
          label: string;
          databaseId: string;
        };
      }
    ];
  };
}
