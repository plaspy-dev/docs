---
slug: /xexun/tk_203/configuration
id: tk_203-configuration
sidebar_label: Configuration
title: Xexun - TK-203 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Xexun TK-203 para usar con Plaspy, incluyendo comandos SMS y ajustes de servidor
keywords:
  - Configuración Xexun TK 203
  - Configuración Xexun TK-203
  - Configuración TK 203 Plaspy
  - Configuración tracker Plaspy
  - Ajustes servidor GPS
  - Comandos SMS TK 203
  - Guía configuración Xexun
  - Integración plataforma GPS Plaspy
  - Configuración seguimiento vehicular
  - Configuración tracker GPRS
---

# Xexun - TK-203 Configuración

Esta página recopila los pasos públicos y comandos SMS prácticos para preparar un Xexun TK-203 y que reporte ubicación y eventos a Plaspy. El TK-203 soporta GSM, GPRS, GPS, control por SMS, reporte automático de posición y alertas habituales como SOS, geocercas, movimiento, exceso de velocidad y batería baja.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del tracker, por lo que muchos modelos usan el mismo endpoint y puerto. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor; utilice esta guía junto con el manual del dispositivo y las instrucciones del vendedor cuando estén disponibles.

## Resumen de configuración

Este proceso prepara el TK-203 para enviar actualizaciones de ubicación y alertas a Plaspy usando la conexión GPRS del tracker o comandos SMS para la configuración inicial. En la práctica, se ajustan los datos APN de la red, el endpoint del servidor Plaspy, el modo de reporte y un intervalo de actualización adecuado para que el dispositivo sea visible y activo en Plaspy.

- Configure el APN de datos móviles y, si aplica, las credenciales del APN para que el dispositivo acceda a GPRS
- Establezca el endpoint del servidor para que el TK-203 reporte a Plaspy
- Seleccione el modo de transporte si es necesario y fije el intervalo de reporte para actualizaciones automáticas
- Valide la conectividad confirmando que el dispositivo reporte al servidor Plaspy y aparezca en la plataforma
- Opcionalmente use comandos SMS para la configuración inicial y solución de problemas si la configuración GPRS aún no está activa

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP
- Plaspy detecta automáticamente el protocolo del tracker

Estos son los valores públicos de Plaspy usados para apuntar el TK-203 al servicio. Plaspy utiliza el mismo puerto para todos los dispositivos soportados y realiza detección automática del protocolo para interpretar los mensajes entrantes.

## Requisitos típicos antes de la configuración

- Un TK-203 con batería cargada y acceso a su interfaz de SMS o configuración
- Una tarjeta SIM válida instalada con datos y SMS habilitados y saldo suficiente o un plan de datos para GPRS
- Documentación del fabricante o acceso al método de configuración del vendedor para enviar comandos SMS
- Conocimiento de la contraseña o PIN del dispositivo si se requiere para configurar vía SMS; la contraseña por defecto en los ejemplos es 123456
- Cobertura básica en el lugar de la instalación que permita operación GPRS y GPS

## Cómo se conecta este tracker a Plaspy

El TK-203 puede configurarse para reportar vía GPRS a un servidor remoto para que Plaspy reciba mensajes de ubicación y eventos para su visualización y monitoreo. Los puntos de configuración son el APN, la IP o dominio del servidor, el puerto, el modo de transporte y el intervalo de reporte.

- El dispositivo envía reportes periódicos de posición al endpoint y puerto compartidos de Plaspy
- Eventos del dispositivo como SOS, activación de geocerca, movimiento, exceso de velocidad y batería baja pueden reenviarse a Plaspy una vez configurado el servidor
- El TK-203 puede configurarse por comandos SMS para iniciar GPRS y la configuración del servidor antes de que exista acceso total a la red
- Plaspy reconoce los mensajes entrantes y aplica detección automática de protocolo, por lo que no necesita seleccionar el protocolo manualmente en la plataforma
- Una configuración correcta asegura visibilidad y monitoreo operativo en Plaspy para flotas o seguimiento personal

## Flujo de configuración habitual

1. Acceda al método de configuración oficial del fabricante o al software, o prepárese para enviar comandos SMS según lo documente el vendedor.
2. Ingrese la información del servidor Plaspy en el dispositivo o vía SMS usando el dominio d.plaspy.com o la IP 54.85.159.138 según lo permita el dispositivo.
3. Configure el puerto a 8888 como puerto de destino para los reportes a Plaspy.
4. Elija UDP o TCP si el dispositivo solicita selección de transporte y soporta ambas opciones.
5. Aplique o guarde la configuración del dispositivo y permita que intente una conexión GPRS usando el APN y las credenciales proporcionadas.
6. Reinicie el dispositivo si las instrucciones del fabricante recomiendan un reinicio para aplicar los ajustes de red.
7. Valide que el dispositivo reporte a Plaspy y aparezca en la plataforma, confirmando actualizaciones periódicas y envío de eventos.

## Ejemplos de comandos de configuración

El TK-203 puede configurarse enviando mensajes SMS al dispositivo. Los comandos de ejemplo a continuación se presentan en el orden que suele usarse para la configuración inicial. Los ejemplos usan la contraseña por defecto 123456 donde se indica. Si su dispositivo usa otra contraseña reemplace 123456 por la correcta.

- Comando opcional de restauración de fábrica (usar solo si necesita resetear la configuración)
```text
begin123456
```

- Establecer el APN del operador móvil. Reemplace [apn] por el APN de su operador.
```text
apn123456 [apn]
```

- Establecer el nombre de usuario del APN si su operador lo requiere. Reemplace [apnu] por el usuario del APN.
```text
apnuser123456 [apnu]
```

- Establecer la contraseña del APN si su operador lo requiere. Reemplace [apnp] por la contraseña del APN.
```text
apnpasswd123456 [apnp]
```

- Establecer el endpoint y puerto GPRS hacia Plaspy. El comando siguiente usa la IP y puerto de Plaspy. Si su firmware acepta nombres de dominio puede usar d.plaspy.com en lugar de la IP cuando corresponda.
```text
adminip123456 54.85.159.138 8888
```

- Activar el modo GPRS para permitir el reporte de datos (usar según lo proporcione el dispositivo).
```text
gprsmode123456
```

- Definir el intervalo de actualización automática a 60 segundos. Mantenga el token de contraseña intacto.
```text
t060s***n123456
```

Notas sobre los marcadores de posición
- [apn] es el APN de su operador móvil para datos GPRS
- [apnu] es el nombre de usuario del APN si el operador lo exige
- [apnp] es la contraseña del APN si el operador lo exige

Envíe cada SMS al TK-203 desde un número autorizado y espere las respuestas de confirmación del dispositivo cuando estén disponibles. Use el comando de restauración de fábrica solo cuando pretenda restablecer la configuración a los valores por defecto.

## Notas de configuración

- Las versiones de firmware y las revisiones de hardware pueden modificar los comandos SMS disponibles o la sintaxis; verifique siempre con el manual del dispositivo para su firmware.
- El TK-203 admite configuración vía SMS con los comandos públicos mostrados; algunos instaladores prefieren las herramientas del proveedor cuando están disponibles.
- Elija TCP o UDP según la preferencia del instalador o la recomendación del proveedor; Plaspy acepta ambos transportes en el puerto 8888.
- Confirme el APN y las credenciales del operador con su proveedor móvil antes de configurar GPRS.
- Plaspy utiliza el mismo puerto para todos los dispositivos soportados y detecta automáticamente el protocolo del tracker en las conexiones entrantes.

## Por qué usar Plaspy con esta configuración

Configurar el Xexun TK-203 para reportar a Plaspy le brinda una forma centralizada de ver actualizaciones periódicas de ubicación y recibir notificaciones de eventos como SOS, geocercas, movimiento, exceso de velocidad y alertas de batería. Usar los ajustes de servidor compartidos de Plaspy simplifica el despliegue en flotas mixtas, ya que la plataforma detecta automáticamente el protocolo del tracker y usa el mismo puerto de destino para los dispositivos soportados.

Para obtener más información sobre Plaspy y los servicios que ofrece visite https://www.plaspy.com. Para instrucciones específicas del dispositivo, notas de firmware y recursos de soporte del fabricante verifique la información actual en el sitio oficial de Xexun https://www.xexun.com/.
