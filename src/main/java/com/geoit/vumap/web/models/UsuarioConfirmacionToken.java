package com.geoit.vumap.web.models;

import lombok.Data;

@Data
public class UsuarioConfirmacionToken {
    private Integer idConfirmacionToken;
    private Integer idTipoConfirmacion;
    private Long idUsuario;
    private String tokenConfirmacion;
}