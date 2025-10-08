export type Nav = {
  title: string;
  url?: string;
  searchTerm?: string;
};

export type NavWithChild = {
  title: string;
  child: Nav[];
};
