const empleados = [
  {
    id: 1,
    nombre: 'Fernado',
  },
  {
    id: 2,
    nombre: 'Linda',
  },
  {
    id: 3,
    nombre: 'Karen',
  },
];

const salarios = [
  {
    id: 1,
    salario: 1000,
  },
  {
    id: 2,
    salario: 2000,
  },
];
const id = 3;

const getEmpleado = (id, callback) => {
  return new Promise((res, rej) => {
    const empleado = empleados.find((e) => e.id === id)?.nombre;

    empleado ? res(empleado) : rej(`El empleado con el id ${id} no exite`);
  });
};

const getSalario = (id) => {
  return new Promise((res, rej) => {
    const salario = salarios.find((e) => e.id === id)?.salario;

    salario ? res(salario) : rej(`El empleado con id ${id} no tiene salario`);
  });
};

const getInforUsuario = async (id) => {
  try {
    const empleado = await getEmpleado(id);
    const salario = await getSalario(id);

    return `El empleado ${empleado} tiene un salario ${salario}`;
  } catch (error) {
    throw error;
  }
};

getInforUsuario(id)
  .then((msg) => {
    console.log('Todo bien');
    console.log(msg);
  })
  .catch((err) => {
    console.log('TODO MAL');
    console.log(err);
  });
