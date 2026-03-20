---
slug: /tk_star/xe210/configuration
id: xe210-configuration
sidebar_label: Configuration
title: TK-Star - XE210 Configuration
sidebar_class_name: menu_item_tracker
description: Guía de configuración del rastreador TK-Star XE210 para conectarlo a Plaspy usando servidor compartido y ajustes por SMS o GPRS
keywords:
  - TK-Star XE210
  - configuración XE210
  - instalación XE210
  - configuración TK-Star
  - configuración de servidor XE210
  - configuración de dispositivo Plaspy
  - configuración de rastreador GPS
  - configuración de rastreo de vehículos
  - configuración SMS XE210
  - configuración GPRS para rastreador
---

# TK-Star - XE210 Configuración

Esta página documenta el contexto público de configuración para usar el rastreador GPS TK-Star XE210 con Plaspy. Se enfoca en los ajustes prácticos del servidor y el flujo de configuración que puede usar para apuntar el dispositivo a Plaspy, de modo que el rastreador reporte ubicación y estado a su cuenta de Plaspy. Las indicaciones a continuación se basan en comandos de configuración públicos y en los valores de servidor de Plaspy.

Plaspy utiliza ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Use esta página para preparar el XE210 para Plaspy y luego verifique el comportamiento del dispositivo con la documentación del fabricante y sus propias pruebas.

## Resumen de la configuración

El objetivo al configurar el XE210 para Plaspy es dejar el rastreador listo para comunicarse de forma confiable con el backend de Plaspy, de modo que las actualizaciones de ubicación, alarmas e informes de estado sean visibles en la plataforma. El proceso normalmente implica configurar el APN del operador móvil, establecer el endpoint del servidor GPRS, elegir el tipo de transporte si se solicita y confirmar el intervalo de reporte.

- Apuntar el dispositivo al endpoint del servidor de Plaspy para que los datos lleguen a su instancia de Plaspy
- Configurar el APN y las credenciales necesarias para que el rastreador use datos móviles
- Seleccionar UDP o TCP cuando el dispositivo pida un protocolo
- Ajustar un intervalo de subida adecuado según sus necesidades de monitoreo
- Validar la conectividad y confirmar que el rastreador aparece en Plaspy

## Ajustes del servidor de Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador y usa el mismo puerto 8888 para todos los dispositivos compatibles

Estos valores son el endpoint público de Plaspy que puede usar al configurar el XE210. Use el nombre de dominio o la IP del servidor en la configuración del dispositivo según lo que el rastreador acepte.

## Requisitos típicos antes de iniciar

- Una tarjeta SIM funcional, activada con plan de datos móviles y capacidad de SMS
- Acceso al método de configuración del XE210 proporcionado por el fabricante, como comandos SMS o software del proveedor
- El dispositivo debe contar con batería o alimentación suficiente para la configuración y el registro inicial en la red
- Conocimiento del APN del operador y, si aplica, del usuario y contraseña del APN para la tarjeta SIM
- Acceso a la contraseña por defecto del dispositivo si la configuración por SMS la requiere (la contraseña por defecto del XE210 se documenta más abajo)
- Una cuenta en Plaspy y conocimiento de los identificadores del dispositivo para poder confirmar el registro en la plataforma

## Cómo se conecta este rastreador a Plaspy

El XE210 puede configurarse para enviar su telemetría y ubicación al endpoint de Plaspy, de modo que Plaspy reciba actualizaciones periódicas y reportes de eventos. Una vez establecidos los parámetros de red y servidor, el rastreador usa datos móviles para crear una sesión con Plaspy y envía paquetes de posición y estado al endpoint compartido.

- El rastreador se configura con d.plaspy.com o 54.85.159.138 y usa el puerto 8888 para subir datos
- Seleccione UDP o TCP en el dispositivo cuando se le solicite; Plaspy acepta ambos y detecta el protocolo automáticamente
- El dispositivo envía cargas periódicas de ubicación según el intervalo de subida configurado
- Las alarmas y eventos de estado se transmiten a Plaspy y están disponibles para generar notificaciones en la plataforma
- Plaspy utiliza un único puerto para todos los dispositivos, por lo que configurar el puerto 8888 es suficiente para compatibilidad

## Flujo de configuración común

1. Acceda al método de configuración oficial del fabricante, como la interfaz de comandos SMS del XE210 o cualquier herramienta de configuración recomendada por TK-Star.
2. Si es necesario, restaure los valores de fábrica primero o confirme la contraseña del dispositivo para que los siguientes comandos SMS sean aceptados.
3. Introduzca d.plaspy.com o 54.85.159.138 como dirección del servidor GPRS en la configuración del dispositivo.
4. Configure el puerto 8888 para la comunicación con el servidor y elija UDP o TCP si el rastreador requiere seleccionar un transporte.
5. Configure el APN y el usuario y la contraseña del APN si su operador móvil lo exige.
6. Aplique o guarde la configuración y cambie el dispositivo a modo GPRS o modo de red según sea necesario.
7. Reinicie el dispositivo si el fabricante lo recomienda, luego valide que el XE210 reporte a Plaspy y aparezca en su interfaz de Plaspy.

## Comandos de configuración de ejemplo

El XE210 admite configuración por SMS. Los comandos de ejemplo a continuación son los comandos públicos SMS usados para la configuración inicial. La contraseña por defecto del dispositivo en estos ejemplos es 123456. Preserve los marcadores de posición tal como se muestran al enviar los comandos.

- Restablecimiento opcional a valores de fábrica (usar solo si necesita restaurar valores)
```text
begin123456
```

- Configurar el APN del operador
```text
apn123456 [apn]
```
Explicación: reemplace [apn] por el APN de su operador móvil, por ejemplo internet o el valor específico del operador.

- Configurar el usuario del APN (si es necesario)
```text
apnuser123456 [apnu]
```
Explicación: reemplace [apnu] por el usuario del APN si su operador lo requiere. Omita si no es necesario.

- Configurar la contraseña del APN (si es necesario)
```text
apnpasswd123456 [apnp]
```
Explicación: reemplace [apnp] por la contraseña del APN si su operador lo requiere. Omita si no es necesario.

- Establecer el servidor GPRS a Plaspy usando la IP del servidor y el puerto
```text
adminip123456 54.85.159.138 8888
```
Explicación: esto configura el dispositivo para enviar datos a la IP del servidor de Plaspy en el puerto 8888. Puede usar d.plaspy.com si el dispositivo acepta nombres de host.

- Fijar el intervalo de subida a 60 segundos
```text
upload123456 60
```
Explicación: ajuste el valor del intervalo para adecuarlo a su frecuencia de reporte requerida.

- Cambiar el dispositivo a modo GPRS
```text
gprs123456
```

Envía estos comandos en el orden mostrado al seguir un flujo de configuración inicial. Si su dispositivo o firmware admite configuración por hostname, puede reemplazar la IP del servidor por d.plaspy.com. Mantenga la contraseña por defecto 123456 en la cadena del comando a menos que ya la haya cambiado.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar el formato de los comandos SMS y los parámetros soportados; siempre verifique los comandos con el manual del XE210 correspondiente a su unidad.
- Normalmente puede usar d.plaspy.com o la IP 54.85.159.138 al configurar el servidor GPRS; utilice el hostname si prefiere resolución DNS.
- Elija UDP o TCP según su preferencia de instalación o según lo indique el dispositivo; Plaspy acepta ambos y detecta el protocolo automáticamente.
- La configuración por SMS es un método público común para el XE210, pero también pueden estar disponibles herramientas o software de configuración del fabricante.
- Si cambia la contraseña del dispositivo, actualice cualquier proceso de configuración o aprovisionamiento automatizado que utilice la contraseña anterior.

## Por qué usar Plaspy con esta configuración

Configurar el XE210 para enviar datos a Plaspy ofrece una forma directa de integrar el dispositivo en una única plataforma de monitoreo para visualización de ubicación, alertas de eventos y rutas históricas. Ajustar el servidor GPRS y el intervalo de subida le permite equilibrar la frecuencia de reporte y el consumo de datos, a la vez que garantiza que el rastreador se comunique de forma confiable con Plaspy.

Para obtener más información sobre Plaspy y las funciones de la plataforma visite https://www.plaspy.com. Para detalles actualizados específicos del dispositivo, formatos de comandos SMS y notas de firmware consulte la documentación oficial de TK-Star en https://www.tk-star.com/ que puede contener actualizaciones que afecten la configuración y el comportamiento.
