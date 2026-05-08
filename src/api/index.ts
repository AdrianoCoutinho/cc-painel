/**
 * Mock API layer.
 *
 * This project ships with no backend on purpose — it is a portfolio piece.
 * Every export below resolves a fake response with a small artificial delay
 * so the UI behaves like a real network call (loading states, async hooks).
 */

const delay = (ms = 300) =>
  new Promise<void>((resolve) => setTimeout(resolve, ms));

// -----------------------------------------------------------------------------
// Auth
// -----------------------------------------------------------------------------

/**
 * Demo credentials. Hardcoded on purpose — this is a public portfolio piece
 * with no backend, so visitors should be able to sign in immediately.
 */
export const DEMO_CREDENTIALS = {
  email: "demo@tradeflow.dev",
  password: "demo1234",
} as const;

export const healthCheck = async (): Promise<number> => {
  await delay(50);
  return 200;
};

export type LoginResult =
  | { ok: true; token: string }
  | { ok: false; message: string };

export const login = async (
  email: string,
  password: string
): Promise<LoginResult> => {
  await delay(400);
  if (
    email === DEMO_CREDENTIALS.email &&
    password === DEMO_CREDENTIALS.password
  ) {
    return { ok: true, token: `demo-${Date.now()}` };
  }
  return { ok: false, message: "Credenciais inválidas" };
};

// -----------------------------------------------------------------------------
// KPIs
// -----------------------------------------------------------------------------

const okResponse = <T>(data: T) => ({ status: 200, data });

export const userCount = async () => {
  await delay();
  return okResponse({ user_count: 2_500_300, total: 2_500_300 });
};

export const totalDeposits = async () => {
  await delay();
  return okResponse({ total: 12_450_000 });
};

export const withdrawTotal = async () => {
  await delay();
  return okResponse({ total: 3_120_000 });
};

export const depositTotal = async () => {
  await delay();
  return okResponse({ total: 12_450_000 });
};

// -----------------------------------------------------------------------------
// Hourly / monthly aggregates
// -----------------------------------------------------------------------------

export const recipeOfTheDay = async (): Promise<{ resultado: number[] }> => {
  await delay();
  const resultado = Array.from({ length: 24 }, (_, hour) =>
    Math.round(40_000 + Math.sin(hour / 4) * 35_000 + Math.random() * 8_000)
  );
  return { resultado };
};

export const getTotalRecipeOfTheDay = async (): Promise<string> => {
  const { resultado } = await recipeOfTheDay();
  const sum = resultado.reduce((a, b) => a + b, 0);
  if (sum >= 1_000_000) return `${(sum / 1_000_000).toFixed(1)}mi`;
  if (sum >= 1_000) return `${(sum / 1_000).toFixed(1)}k`;
  return sum.toString();
};

const monthlySeries = (base: number) => {
  const currentMonth = new Date().getMonth();
  return Array.from({ length: 12 }, (_, i) =>
    i <= currentMonth
      ? Math.round(base + Math.sin(i) * base * 0.4 + Math.random() * base * 0.2)
      : 0
  );
};

export const getDepositsValuesOfMouth = async (): Promise<number[]> => {
  await delay();
  return monthlySeries(900_000);
};

export const getExitstsValuesOfMouth = async (): Promise<number[]> => {
  await delay();
  return monthlySeries(450_000);
};

// -----------------------------------------------------------------------------
// Profile
// -----------------------------------------------------------------------------

const demoUser = {
  id: "demo-admin",
  name: "Administrador",
  email: "admin@tradeflow.dev",
  real_balance: 10_000,
  profile_picture_url: "https://i.pravatar.cc/150?img=68",
};

export const getUser = async () => {
  await delay();
  return okResponse(demoUser);
};

export const updateProfileInfo = async (
  toUpdate: Record<string, string>
): Promise<{ ok: true; updated: Record<string, string> }> => {
  await delay();
  return { ok: true, updated: { ...toUpdate } };
};

// -----------------------------------------------------------------------------
// Lists
// -----------------------------------------------------------------------------

const firstNames = [
  "Carlos",
  "Ana",
  "Pedro",
  "Júlia",
  "Lucas",
  "Maria",
  "Felipe",
  "Camila",
  "Rafael",
  "Beatriz",
];
const lastNames = [
  "Silva",
  "Souza",
  "Costa",
  "Almeida",
  "Pereira",
  "Lima",
  "Rocha",
  "Mendes",
  "Reis",
  "Castro",
];

const buildUsers = (count: number) =>
  Array.from({ length: count }, (_, i) => {
    const first = firstNames[i % firstNames.length];
    const last = lastNames[(i * 3) % lastNames.length];
    return {
      id: `user-${i + 1}`,
      name: `${first} ${last}`,
      email: `${first.toLowerCase()}.${last.toLowerCase()}@example.com`,
      created_at: new Date(2024, i % 12, (i % 27) + 1).toISOString(),
    };
  });

export const getAllUsers = async (): Promise<{ user: ReturnType<typeof buildUsers> }> => {
  await delay();
  return { user: buildUsers(20) };
};

const buildWithdraws = (count: number) =>
  Array.from({ length: count }, (_, i) => ({
    id: `withdraw-${i + 1}`,
    value: 100 + ((i * 73) % 4900),
    created_at: new Date(Date.now() - i * 86_400_000).toISOString(),
    updated_at: new Date(Date.now() - i * 86_400_000).toISOString(),
    transaction_status: i % 4 === 0 ? "pending" : "completed",
  }));

export const getAllWithdraws = async (): Promise<{
  withdraw: ReturnType<typeof buildWithdraws>;
}> => {
  await delay();
  return { withdraw: buildWithdraws(15) };
};
