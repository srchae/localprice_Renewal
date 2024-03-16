// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// For simplicity of teaching, we're manually defining these types.
// However, these types are generated automatically if you're using an ORM such as Prisma.

// TypeScript 개발자인 경우:
// 데이터 유형을 수동으로 선언하고 있지만 더 나은 유형 안전성을 위해 Prisma를 권장합니다., 데이터베이스 스키마를 기반으로 유형을 자동으로 생성합니다.
//   Next.js는 프로젝트에서 TypeScript를 사용하는지 감지하고 필요한 패키지와 구성을 자동으로 설치합니다.Next.js에는 TypeScript 플러그인 도 함께 제공됩니다.코드 편집기의 경우 자동 완성 및 유형 안전성을 지원합니다.

// 여기서는 데이터베이스에서 선언된 객체(테이블)들의 반환될 type을 수동으로 정의합니다.
// 데이터베이스에서의 객체 타입을 지정해주는 곳
export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export type Customer = {
  id: string;
  name: string;
  email: string;
  image_url: string;
};

export type Invoice = {
  id: string;
  customer_id: string;
  amount: number;
  date: string;
  // In TypeScript, this is called a string union type.
  // It means that the "status" property can only be one of the two strings: 'pending' or 'paid'.
  status: 'pending' | 'paid';
};

export type Revenue = {
  month: string;
  revenue: number;
};

export type LatestInvoice = {
  id: string;
  name: string;
  image_url: string;
  email: string;
  amount: string;
};

// The database returns a number for amount, but we later format it to a string with the formatCurrency function
export type LatestInvoiceRaw = Omit<LatestInvoice, 'amount'> & {
  amount: number;
};

export type InvoicesTable = {
  id: string;
  customer_id: string;
  name: string;
  email: string;
  image_url: string;
  date: string;
  amount: number;
  status: 'pending' | 'paid';
};

export type CustomersTableType = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_invoices: number;
  total_pending: number;
  total_paid: number;
};

export type FormattedCustomersTable = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_invoices: number;
  total_pending: string;
  total_paid: string;
};

export type CustomerField = {
  id: string;
  name: string;
};

export type InvoiceForm = {
  id: string;
  customer_id: string;
  amount: number;
  status: 'pending' | 'paid';
};
