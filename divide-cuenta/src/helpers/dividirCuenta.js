export function calcularCuenta(cuenta,propina=10,personas){

    let total = Number((cuenta+cuenta*propina)/personas);

    return total;

}

