---
slug: /v_sun/tlt_1f/configuration
id: tlt_1f-configuration
sidebar_label: Configuration
title: V-SUN - TLT-1F Configuration
sidebar_class_name: menu_item_tracker
description: Configure el V-SUN TLT-1F para usarlo con Plaspy mediante ajustes de servidor compartido y configuración por SMS o GPRS
keywords:
  - configuración V-SUN TLT-1F
  - configuración TLT-1F
  - rastreador GPS V-SUN Plaspy
  - configuración servidor TLT-1F
  - configuración SMS TLT-1F
  - configuración rastreador Plaspy
  - configuración seguimiento de vehículos
  - configuración GPRS rastreador
  - configuración GPS vehículo
  - configuración gestión de flotas
---

# V-SUN - TLT-1F Configuración

Esta página documenta el contexto público de configuración para usar el dispositivo de rastreo vehicular V-SUN TLT-1F con Plaspy. Reúne los pasos y comandos prácticos públicamente disponibles para apuntar el rastreador a los servidores de Plaspy y explica qué debe preparar antes de integrar el TLT-1F en la plataforma Plaspy.

Plaspy utiliza ajustes de servidor compartidos para los dispositivos soportados y detecta automáticamente el protocolo del rastreador. Los pasos de configuración por parte del fabricante pueden variar según la versión de firmware, variaciones de hardware, tipo de instalación y herramientas del proveedor. El TLT-1F soporta métodos de conexión SMS y GPRS TCP, por lo que esta guía incluye ejemplos de comandos SMS tomados de la documentación pública del equipo y explica cómo aplicarlos para dirigir el dispositivo a Plaspy.

## Resumen de configuración

El objetivo de la configuración es preparar el TLT-1F para que se comunique de forma fiable con el endpoint del servidor Plaspy y así el dispositivo informe ubicación y eventos operativos a la plataforma.

- Configure el APN del dispositivo para que los datos GPRS permitan el envío por Internet.
- Apunte la configuración del servidor GPRS del dispositivo al dominio o IP de Plaspy y establezca el puerto compartido de Plaspy.
- Elija el transporte (UDP o TCP) si el dispositivo requiere selección de transporte para el reporte por GPRS.
- Active el reporte por GPRS y el modo GPS para que el dispositivo comience a enviar datos de ubicación a Plaspy.
- Valide la conectividad y confirme que el dispositivo aparece en Plaspy después de la configuración.

## Ajustes del servidor de Plaspy

- Dominio del servidor: d.plaspy.com
- IP del servidor: 54.85.159.138
- Puerto: 8888
- Soporte de transporte: UDP o TCP; el dispositivo puede configurarse usando UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador y todos los dispositivos usan el mismo puerto

## Requisitos habituales antes de la configuración

- Un dispositivo TLT-1F con alimentación y accesible, con una SIM activa que soporte datos GPRS y SMS (según lo indique la documentación de su proveedor).
- Conocimiento de la contraseña por defecto del dispositivo cuando sea necesaria para la configuración (el ejemplo público usa 0000).
- Acceso al método oficial de configuración V-SUN soportado por su unidad, comúnmente comandos SMS o herramientas del proveedor.
- El APN correcto, usuario de APN y contraseña de APN del operador celular que sirve al dispositivo.
- Posibilidad de reiniciar o cortar y restablecer la alimentación del dispositivo después de aplicar la configuración.
- Una cuenta o acceso a la plataforma Plaspy para validar que el dispositivo aparece y reporta correctamente tras la configuración.

## Cómo se conecta este rastreador a Plaspy

El TLT-1F puede configurarse para enviar reportes GPRS vía TCP o UDP al endpoint del servidor Plaspy. Una vez que el dispositivo está apuntando a Plaspy y el GPRS está habilitado, el rastreador transmite actualizaciones periódicas de ubicación que Plaspy recibe y muestra.

- El rastreador se configura para reportar al endpoint compartido de Plaspy y al puerto (d.plaspy.com o 54.85.159.138 en el puerto 8888).
- El transporte de datos puede ser TCP o UDP según la configuración; elija el transporte compatible con su instalación.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que múltiples protocolos de proveedores pueden aceptarse en el mismo puerto.
- Tras la configuración, el dispositivo envía reportes de ubicación y eventos a la plataforma Plaspy para su visibilidad y monitoreo.
- La validación en Plaspy confirma la conectividad y el correcto envío de reportes.

## Flujo típico de configuración

1. Acceda al método oficial de configuración V-SUN para su unidad (comandos SMS o software del proveedor).
2. Establezca el APN del dispositivo usando los parámetros del operador para que los datos GPRS puedan conectarse.
3. Ingrese el endpoint del servidor Plaspy usando el dominio d.plaspy.com o la dirección IP 54.85.159.138.
4. Configure el puerto 8888 para el reporte GPRS y elija UDP o TCP si su equipo exige selección de transporte.
5. Aplique o guarde los ajustes de configuración en el dispositivo y habilite el modo de reporte por GPRS.
6. Reinicie o corte la alimentación del dispositivo si el equipo o el firmware lo requieren.
7. Valide que el dispositivo reporte a Plaspy y que las actualizaciones de ubicación aparezcan en la plataforma.

## Ejemplos de comandos de configuración

Los siguientes comandos SMS se toman de ejemplos públicos de configuración del V-SUN TLT-1F. La configuración de muestra usa la contraseña por defecto del dispositivo 0000. Envíe estos comandos como mensajes SMS al número del rastreador en el orden mostrado al realizar la configuración inicial.

1. Reinicio opcional a configuración de fábrica (use solo si necesita restaurar valores por defecto)
```text
*RESET#0000##
```

2. Establecer el APN del operador (reemplace [apn], [apnu] y [apnp] con los valores de su operador)
- Si su APN no requiere usuario ni contraseña, omita los campos [apnu] y [apnp] cuando el proveedor soporte esa sintaxis.
```text
#803#0000#[apn]#[apnu]#[apnp]##
```
- Explicación de los marcadores:
  - [apn] = nombre del APN del operador
  - [apnu] = usuario del APN (dejar en blanco u omitir si no es requerido)
  - [apnp] = contraseña del APN (dejar en blanco u omitir si no es requerido)

3. Configurar el servidor GPRS hacia Plaspy usando la IP del servidor Plaspy y el puerto 8888
```text
#804#0000#54.85.159.138#8888##
```
- Alternativamente, puede usar el dominio d.plaspy.com en herramientas del proveedor que acepten nombres de host.

4. Establecer el intervalo de actualización en movimiento (el ejemplo público establece 120 segundos)
```text
#805#0000#120#1##
```

5. Establecer el intervalo de actualización en reposo (el ejemplo público establece 120 segundos)
```text
#809#0000#120#1##
```

6. Habilitar el modo de reporte por GPRS
```text
7100000
```

7. Activar el modo GPS
```text
2220000
```

Notas sobre estos comandos:
- El orden importa para la configuración inicial: primero APN, luego servidor, luego intervalos de reporte y finalmente habilitar GPRS y GPS.
- Mantenga la contraseña por defecto 0000 salvo que la haya cambiado; incluya la contraseña correcta del dispositivo en los comandos donde sea requerida.

## Notas de configuración

- Las revisiones de firmware y hardware pueden modificar la sintaxis de los comandos o las funciones disponibles; siempre verifique los comandos según la versión de firmware del equipo.
- Los ejemplos públicos del TLT-1F utilizan configuración por SMS; algunas implementaciones usan herramientas del proveedor o métodos por USB/serial en su lugar.
- Cuando el dispositivo acepte un nombre de host, puede usar d.plaspy.com; de lo contrario use la IP del servidor Plaspy 54.85.159.138 con el puerto 8888.
- Elija UDP o TCP en función de las consideraciones de red y el soporte del dispositivo; Plaspy acepta ambos y detecta automáticamente el protocolo usado.
- Proteja la contraseña del dispositivo al enviar comandos de configuración; cámbiela si su política de seguridad lo requiere.

## Por qué usar Plaspy con esta configuración

Usar el TLT-1F con Plaspy ofrece una vía sencilla para recopilar datos de ubicación y eventos desde vehículos empleando métodos comunes de reporte por GPRS. Apuntar el rastreador al endpoint compartido de Plaspy simplifica la integración, ya que la plataforma acepta múltiples protocolos de dispositivos en un solo puerto y detecta automáticamente el protocolo en uso.

Learn more about Plaspy and how to get started at https://www.plaspy.com. Manufacturer specifications, command syntax, and firmware behavior can change over time, so confirm the latest device specific setup details and command references on the V-SUN website http://www.v-sun.cc/ before final deployment.
