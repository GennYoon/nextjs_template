interface Customer {
  id: number;
  name: string;
  email: string;
  phone: string;
  password: string;
  lastConnectedAt: Date;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
}
