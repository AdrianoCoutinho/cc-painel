/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { getDaysInMonth, getMonth } from "date-fns";

axios.defaults.baseURL = "http://localhost:3333";

export const healthCheck = async (): Promise<any> => {
  try {
    const result = await axios.get("/healthcheck");
    return result.status;
  } catch (error: any) {
    if (error.request?.response) {
      const result = error.request.response;
      return JSON.parse(result);
    }
    return {
      ok: false,
      message: error.toString(),
    };
  }
};

export const login = async (email: string, password: string): Promise<any> => {
  try {
    if (email === "admin@system.com" && password === "123")
      return {
        ok: true,
        token: "123",
      };
    return {
      ok: false,
    };
  } catch (error: any) {
    if (error.request?.response) {
      return {
        ok: false,
        message: "usuário ou senha incorretos",
      };
    }

    return {
      ok: false,
      message: error.toString(),
    };
  }
};

export const userCount = async (): Promise<any> => {
  try {
    const userLoggedIn = localStorage.getItem("APP_ACCESS_TOKEN");

    const config = {
      headers: {
        Authorization: `Bearer ${userLoggedIn}`,
      },
    };

    const result = await axios.get("/admin/users/total", config);
    if (result.status === 200) {
      return result;
    }
    return {
      ok: false,
      message: "erro ao buscar número de usuários",
    };
  } catch (error) {
    return {
      ok: false,
      code: 500,
      message: error,
    };
  }
};

export const totalDeposits = async (): Promise<any> => {
  try {
    const userLoggedIn = localStorage.getItem("APP_ACCESS_TOKEN");

    const config = {
      headers: {
        Authorization: `Bearer ${userLoggedIn}`,
      },
    };

    const result = await axios.get("/admin/deposits/total", config);
    if (result.status === 200) {
      return result;
    }
    return {
      ok: false,
      message: "erro ao buscar número de depósitos",
    };
  } catch (error) {
    return {
      ok: false,
      code: 500,
      message: error,
    };
  }
};

export const recipeOfTheDay = async (): Promise<any> => {
  try {
    const userLoggedIn = localStorage.getItem("APP_ACCESS_TOKEN");

    const config = {
      headers: {
        Authorization: `Bearer ${userLoggedIn}`,
      },
    };

    const dataAtual = new Date();
    const dia = dataAtual.getDate();
    const mes = dataAtual.getMonth() + 1; // Note que os meses começam do zero, então adicionamos 1.
    const ano = dataAtual.getFullYear();

    const dataFormatada = `${ano}-${mes.toString().padStart(2, "0")}-${dia
      .toString()
      .padStart(2, "0")}`;

    const dataToSend = {
      start_date: `${dataFormatada}T00:00:00.000Z`,
      final_date: `${dataFormatada}T23:59:59.999Z`,
    };

    const resultDeposit = await axios.post(
      "/admin/deposits/list/filter",
      dataToSend,
      config
    );

    const resultWithdraw = await axios.post(
      "/admin/withdrawals/list/filter",
      dataToSend,
      config
    );

    const getHour = (date: Date) => {
      const data = new Date(date);
      const hora = data.getUTCHours();
      return hora;
    };

    const formatedDataWithdrawals = resultWithdraw.data.map(
      (withdraw: any) => ({
        id: withdraw.id,
        updated: getHour(withdraw.updated_at).toString(),
        value: withdraw.value,
      })
    );

    const formatedDataDeposits = resultDeposit.data.map((deposit: any) => ({
      id: deposit.id,
      updated: getHour(deposit.updated_at).toString(),
      value: deposit.value,
    }));

    const sumsDeposits: number[] = [];

    for (let i = 0; i <= 23; i++) {
      const sum: number = formatedDataDeposits
        .filter((deposit: any) => deposit.updated === i.toString())
        .reduce(
          (acumulador: number, elemento: any) => acumulador + elemento.value,
          0
        );

      sumsDeposits.push(sum);
    }

    const sumsWithdrawals: number[] = [];

    for (let i = 0; i <= 23; i++) {
      const sum: number = formatedDataWithdrawals
        .filter((withdrawal: any) => withdrawal.updated === i.toString())
        .reduce(
          (acumulador: number, elemento: any) => acumulador + elemento.value,
          0
        );

      sumsWithdrawals.push(sum);
    }

    if (sumsDeposits.length === sumsWithdrawals.length) {
      const resultado = [];

      for (let i = 0; i < sumsDeposits.length; i++) {
        resultado.push(sumsDeposits[i] - sumsWithdrawals[i]);
      }
      console.log(resultado);
      return { resultado };
    } else {
      console.log("Os arrays não têm o mesmo comprimento.");
    }
  } catch (error) {
    return {
      ok: false,
      code: 500,
      message: error,
    };
  }
};

export const getTotalRecipeOfTheDay = async (): Promise<any> => {
  const result = await recipeOfTheDay();
  const sum = result.resultado.reduce(
    (accumulator: number, currentValue: number) => {
      return accumulator + currentValue;
    },
    0
  );
  if (sum >= 1000000) {
    return `${(sum / 1000000).toFixed(1)}mi`;
  }
  if (sum >= 1000 && sum <= 999999) {
    return (sum / 1000).toFixed(1) + "k";
  } else {
    return sum.toString();
  }
};

export const withdrawTotal = async (): Promise<any> => {
  function getFormattedDate(): string {
    const currentDate = new Date();

    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const day = String(currentDate.getDate()).padStart(2, "0");
    const hours = "23";
    const minutes = "59";
    const seconds = "59";

    const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

    return formattedDate;
  }

  const currentDateFormatted = getFormattedDate();

  try {
    const userLoggedIn = localStorage.getItem("APP_ACCESS_TOKEN");

    const config = {
      headers: {
        Authorization: `Bearer ${userLoggedIn}`,
      },
    };

    const dataToSend = {
      start_date: "2000-01-01 00:00:00",
      final_date: currentDateFormatted,
    };

    const result = await axios.post(
      "/admin/withdrawals/total/filter",
      dataToSend,
      config
    );
    if (result.status === 200) {
      return result;
    }
    return {
      ok: false,
      message: "erro ao buscar número total de saídas",
    };
  } catch (error) {
    return {
      ok: false,
      code: 500,
      message: error,
    };
  }
};

export const depositTotal = async (): Promise<any> => {
  try {
    const userLoggedIn = localStorage.getItem("APP_ACCESS_TOKEN");

    const config = {
      headers: {
        Authorization: `Bearer ${userLoggedIn}`,
      },
    };

    const result = await axios.get("/admin/deposits/total", config);
    if (result.status === 200) {
      return result;
    }
    return {
      ok: false,
      message: "erro ao buscar número total de saídas",
    };
  } catch (error) {
    return {
      ok: false,
      code: 500,
      message: error,
    };
  }
};

export const getUser = async (): Promise<any> => {
  const userLoggedIn = localStorage.getItem("APP_ACCESS_TOKEN");
  const config = {
    headers: {
      Authorization: `Bearer ${userLoggedIn}`,
    },
  };
  try {
    const result = await axios.get("/admin/details", config);
    return result;
  } catch (error) {
    console.error("Erro na solicitação:", error);
  }
};

export const getDepositsValuesOfMouth = async () => {
  const arrayOfTotalPerMouth = [];
  const hoje = new Date();
  const diasNoMes = getDaysInMonth(hoje);
  const currentMonth = getMonth(hoje);
  for (let i = 1; i <= currentMonth + 1; i++) {
    const userLoggedIn = localStorage.getItem("APP_ACCESS_TOKEN");
    const config = {
      headers: {
        Authorization: `Bearer ${userLoggedIn}`,
      },
    };

    const dataToSend = {
      start_date: `2024-${i}-01 00:00:00`,
      final_date: `2024-${i}-${diasNoMes} 23:59:59`,
    };
    try {
      const resultDeposit = await axios.post(
        "/admin/deposits/list/filter",
        dataToSend,
        config
      );

      const listDeposits = resultDeposit.data.map(
        (objeto: any) => objeto.value
      );

      const totalValueDeposits: number = listDeposits.reduce(
        (acumulador: number, valor: number) => acumulador + valor,
        0
      );
      arrayOfTotalPerMouth.push(totalValueDeposits);
      if (arrayOfTotalPerMouth.length < 12) {
        const zerosToAdd: number = 12 - arrayOfTotalPerMouth.length;

        arrayOfTotalPerMouth.push(...Array(zerosToAdd).fill(0));
      }
    } catch (error) {
      console.error("Erro na solicitação:", error);
    }
  }
  return arrayOfTotalPerMouth;
};

export const getExitstsValuesOfMouth = async () => {
  const arrayOfTotalPerMouth = [];
  const hoje = new Date();
  const diasNoMes = getDaysInMonth(hoje);
  const currentMonth = getMonth(hoje);
  for (let i = 1; i <= currentMonth + 1; i++) {
    const userLoggedIn = localStorage.getItem("APP_ACCESS_TOKEN");
    const config = {
      headers: {
        Authorization: `Bearer ${userLoggedIn}`,
      },
    };

    const dataToSend = {
      start_date: `2024-${i}-01 00:00:00`,
      final_date: `2024-${i}-${diasNoMes} 23:59:59`,
    };
    try {
      const resultWithdraw = await axios.post(
        "/admin/withdrawals/list/filter",
        dataToSend,
        config
      );

      const listDeposits = resultWithdraw.data.map(
        (objeto: any) => objeto.value
      );

      const totalValueresultWithdraw: number = listDeposits.reduce(
        (acumulador: number, valor: number) => acumulador + valor,
        0
      );
      arrayOfTotalPerMouth.push(totalValueresultWithdraw);
      if (arrayOfTotalPerMouth.length < 12) {
        // Calcular a quantidade de zeros necessários
        const zerosToAdd: number = 12 - arrayOfTotalPerMouth.length;

        // Adicionar zeros ao final do array
        arrayOfTotalPerMouth.push(...Array(zerosToAdd).fill(0));
      }
    } catch (error) {
      console.error("Erro na solicitação:", error);
    }
  }

  return arrayOfTotalPerMouth;
};

export const getAllUsers = async (): Promise<any> => {
  const userLoggedIn = localStorage.getItem("APP_ACCESS_TOKEN");
  const config = {
    headers: {
      Authorization: `Bearer ${userLoggedIn}`,
    },
  };

  try {
    const result = await axios.post("/admin/users/list", {}, config);
    return result.data;
  } catch (error) {
    console.error("Erro na solicitação:", error);
  }
};

export const getAllWithdraws = async (): Promise<any> => {
  const userLoggedIn = localStorage.getItem("APP_ACCESS_TOKEN");
  const config = {
    headers: {
      Authorization: `Bearer ${userLoggedIn}`,
    },
  };

  try {
    const result = await axios.post("/admin/withdrawals/list", {}, config);
    return result.data;
  } catch (error) {
    console.error("Erro na solicitação:", error);
  }
};

export const updateProfileInfo = async (toUpdate: any): Promise<any> => {
  const formatedUser: { [key: string]: string } = {};
  for (const key in toUpdate) {
    if (toUpdate[key] !== "") {
      formatedUser[key] = toUpdate[key];
    }
  }
  const userLoggedIn = localStorage.getItem("APP_ACCESS_TOKEN");
  const config = {
    headers: {
      Authorization: `Bearer ${userLoggedIn}`,
    },
  };

  try {
    const result = await axios.patch("/users/update", formatedUser, config);
    return result.data;
  } catch (error) {
    console.error("Erro na solicitação:", error);
  }
};

// export const getUserDrawerDetail = async (id: string): Promise<any> => {
//   try {
//     const result = {
//       idade: 24,
//       genero: "Masculino",
//       cidade: "Niterói",
//       estado: "Rio de Janeiro",
//       pais: "Brasil",
//       cep: "21843-215",
//       telefone: "+55 021 9 9345-3456",
//       email: "vitor.cabral23@outlook.com",
//       plataforma: "Casa Bet Candle",
//       dataCadastro: "25/02/2024",
//       ticketMedio: "R$345,34",
//       contaMarketing: "Não",
//     };

//     return result;
//   } catch (error) {
//     console.error("Erro na solicitação:", error);
//   }
// };
