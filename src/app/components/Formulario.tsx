import React, {useEffect, useState} from "react";
import { useFetchAditionalPlan } from "../../hooks/useFetchAditionalPlan";
import { useFetchBranch } from "../../hooks/useFetchBranch";
import { useFetchTypeDocuments } from "../../hooks/useFetchTypeDocuments";
import { useFetchTypePlans } from "../../hooks/useFetchTypePlans";
import { Document, Documentos } from "../interfaces/data";

export const Formulario = () => {

  const { dataDocumentos } = useFetchTypeDocuments()
  
  const { dataBranch } = useFetchBranch()

  const { dataTypePlans } = useFetchTypePlans()

  const { dataAditional } = useFetchAditionalPlan()
  
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Cotizador</h5>
          <form>
            <div className="row mb-3">
              <label className="col-sm-2 col-form-label">
                Tipo de Documento
              </label>
              <div className="col-sm-10">
                <select
                  className="form-select"
                  aria-label="Default select example"
                  required
                  defaultValue={0}
                >
                  <option value="0" disabled>Seleccione</option>
                  {
                    dataDocumentos && dataDocumentos.map((tipoDocumento:Document, index) => 
                    <option key={"documento"+index} value={tipoDocumento.DATO}>{tipoDocumento.TEXTO}</option>  
                    )
                  }
                </select>
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="inputText" className="col-sm-2 col-form-label">
                N° Documento
              </label>
              <div className="col-sm-10">
                <input type="text" className="form-control" required />
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="inputText" className="col-sm-2 col-form-label">
                Nombre
              </label>
              <div className="col-sm-10">
                <input type="text" className="form-control" required />
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="inputText" className="col-sm-2 col-form-label">
                Apellido
              </label>
              <div className="col-sm-10">
                <input type="text" className="form-control" required />
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="inputNumber" className="col-sm-2 col-form-label">
                Numero Telefono
              </label>
              <div className="col-sm-10">
                <input type="text" className="form-control" required />
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="inputEmail" className="col-sm-2 col-form-label">
                Correo
              </label>
              <div className="col-sm-10">
                <input type="email" className="form-control" required />
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-sm-2 col-form-label">Marca</label>
              <div className="col-sm-10">
                <select
                  className="form-select"
                  aria-label="Default select example"
                  required
                  defaultValue={0}
                >
                  <option value="0" disabled>Seleccione</option>
                  {
                    dataBranch && dataBranch.map((branch, index) => 
                    <option key={"marca"+index} value={branch.COD_MARCA}>{branch.TXT_DESC}</option>  
                    )
                  }
                </select>
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-sm-2 col-form-label">Modelo</label>
              <div className="col-sm-10">
                <select
                  className="form-select"
                  aria-label="Default select example"
                  required
                  defaultValue={0}
                >
                  <option value="0" disabled>Seleccione</option>
                </select>
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="inputEmail" className="col-sm-2 col-form-label">
                Valor Vehiculo
              </label>
              <div className="col-sm-10">
                <div className="input-group w-auto ">
                  <span className="input-group-text">$</span>
                  <input
                    type="number"
                    step="0.01"
                    min="1"
                    className="form-control"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="inputNumber" className="col-sm-2 col-form-label">
                Año Vehiculo
              </label>
              <div className="col-sm-10">
                <input type="number" min="1" className="form-control" />
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-sm-2 col-form-label">Tipo de Planes</label>
              <div className="col-sm-10">
                <select
                  className="form-select"
                  aria-label="Default select example"
                  required
                  defaultValue={0}
                >
                  <option value="0" disabled>Seleccione</option>
                  {
                    dataTypePlans && dataTypePlans.map((Plan, index) => 
                    <option key={"tipo-plan"+index} value={Plan.DATO}>{Plan.TEXTO}</option>  
                    )
                  }
                </select>
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-sm-2 col-form-label">Plan de cobertura</label>
              <div className="col-sm-10">
                <select
                  className="form-select"
                  aria-label="Default select example"
                  required
                  defaultValue={0}
                >
                  <option value="0" disabled>Seleccione</option>
                  {
                    dataBranch && dataBranch.map((branch, index) => 
                    <option value={branch.COD_MARCA}>{branch.TXT_DESC}</option>  
                    )
                  }
                </select>
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-sm-2 col-form-label">Plan de Cobertura Adicional</label>
              <div className="col-sm-10">
                <select
                  className="form-select"
                  aria-label="Default select example"
                  required
                  defaultValue={0}
                >
                  {
                    dataAditional && dataAditional.map((plan, index) => 
                    <option key={"adicional"+index} value={plan.DATO}>{plan.TEXTO}</option>  
                    )
                  }
                </select>
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-sm-2 col-form-label" />
              <div className="col-sm-10">
                <button type="button" className="btn btn-primary">
                  Enviar Cotización
                </button>
                <button type="button" className="btn btn-warning ms-3">
                  Limpiar Formulario
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
