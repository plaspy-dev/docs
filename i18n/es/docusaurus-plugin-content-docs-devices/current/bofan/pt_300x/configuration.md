---
slug: /bofan/pt_300x/configuration
id: pt_300x-configuration
sidebar_label: Configuration
title: Bofan - PT-300X Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Bofan PT-300X con ajustes de servidor Plaspy y comandos SMS
keywords:
  - configuración Bofan PT-300X
  - instalación Bofan PT-300X
  - configuración PT-300X Plaspy
  - configuración rastreador GPS Bofan
  - configuración servidor PT-300X
  - configuración SMS Bofan PT-300X
  - configuración GPRS PT-300X
  - configuración rastreador Plaspy
  - configuración rastreador vehicular
  - configuración plataforma seguimiento PT-300X
---

# Bofan - Configuración PT-300X

Esta página describe el contexto público de configuración para usar el rastreador Bofan PT-300X con la plataforma Plaspy. Se enfoca en los ajustes prácticos y los comandos SMS que se usan habitualmente para apuntar el dispositivo a Plaspy y comprobar la conectividad básica. Cuando los comandos del fabricante son públicos, aquí se incluyen como referencia y conveniencia.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo se conecta. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor; por ello trate los comandos y el flujo de trabajo aquí como una guía práctica y generalmente aplicable basada en información pública.

## Resumen de configuración

El objetivo de la configuración es dejar al PT-300X listo para comunicarse de forma confiable con Plaspy, validar la conectividad y habilitar la visibilidad y el reporte del dispositivo en la plataforma. El PT-300X admite reportes por SMS y GPRS usando TCP o UDP; los comandos de ejemplo que siguen muestran un flujo común de configuración por SMS que muchos instaladores utilizan.

- Configure el identificador del dispositivo para que Plaspy asocie los reportes con el activo correcto.
- Establezca el APN de datos móviles para que el rastreador pueda crear conexiones GPRS al usar reporte por datos.
- Apunte el dispositivo al endpoint del servidor Plaspy para que los datos de ubicación y eventos lleguen a la plataforma.
- Defina el intervalo de reporte para que las actualizaciones de posición se ajusten a sus necesidades de monitoreo.
- Valide la conectividad y confirme que el rastreador aparece en Plaspy tras la configuración.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta
- Todos los dispositivos en Plaspy usan el mismo puerto para simplificar la configuración

## Requisitos previos habituales

- Una unidad PT-300X alimentada y funcional con acceso a su tarjeta SIM o al número de teléfono capaz de recibir SMS.
- Una SIM válida con datos móviles habilitados y el APN correcto para el operador.
- Acceso al método de configuración del fabricante, como comandos SMS o el software oficial del proveedor.
- Conocer el IMEI del dispositivo para poder derivar o confirmar el identificador del rastreador.
- Una herramienta o teléfono capaz de enviar SMS al número del rastreador si va a usar configuración por SMS.
- Acceso a la cuenta de Plaspy o a la interfaz administrativa para confirmar que el dispositivo aparece después de la configuración.

## Cómo se conecta este rastreador a Plaspy

El PT-300X se configura para reportar al endpoint y puerto compartidos de Plaspy, de modo que Plaspy pueda ingerir los mensajes de ubicación y eventos. Según su configuración, el rastreador envía actualizaciones periódicas y alertas de eventos a la plataforma por GPRS TCP o UDP, y algunas funciones pueden controlarse o verificarse vía SMS.

- El rastreador envía actualizaciones de posición al intervalo configurado hacia el endpoint del servidor Plaspy.
- Alertas de eventos como exceso de velocidad, activación de geocerca, batería baja o SOS se envían a Plaspy cuando el dispositivo los genera.
- El equipo se configura para usar los ajustes de servidor de Plaspy para que los datos de ubicación se dirijan a la cuenta correcta en la plataforma.
- Plaspy recibe conexiones en el puerto 8888 y detecta automáticamente el protocolo del rastreador, por lo que en la mayoría de los casos no es necesario seleccionar el protocolo manualmente.
- Si se usa configuración por SMS, los comandos se envían al número del dispositivo para actualizar los ajustes GPRS y del servidor.

## Flujo típico de configuración

1. Acceda al método oficial de configuración del fabricante o al software, o prepárese para enviar comandos SMS al número del dispositivo.
2. Configure la dirección del servidor a d.plaspy.com o la IP 54.85.159.138 según lo acepte el dispositivo.
3. Establezca el puerto del servidor en 8888 (Plaspy usa el mismo puerto para todos los dispositivos).
4. Elija UDP o TCP como transporte si el dispositivo solicita una selección de transporte.
5. Configure el identificador del dispositivo y el APN usando los comandos o herramientas del fabricante.
6. Aplique o guarde la configuración en el dispositivo y reinícielo si el firmware lo requiere.
7. Valide que el dispositivo reporte a Plaspy y que aparezca en su cuenta o vista de la plataforma.

## Ejemplos de comandos de configuración

El PT-300X admite configuración por SMS. A continuación se indican los comandos públicos que pueden enviarse como mensajes SMS al número del dispositivo. La configuración de ejemplo usa la contraseña de fábrica 000000 por defecto. Reemplace los marcadores donde se indique.

- Restauración de fábrica (paso inicial opcional)
```text
000000DFT
```
Nota: Esto restablece el equipo a los valores de fábrica. Úselo solo si necesita restaurar valores por defecto antes de una configuración nueva.

- Establecer identificador del dispositivo de 14 dígitos usado con Plaspy
```text
000000GID<14-digit-identifier>
```
Explicación: Use las últimas 14 cifras del IMEI como identificador si sigue la convención común de Plaspy. Reemplace \<14-digit-identifier> por las 14 cifras reales.

- Configurar el APN del operador
```text
000000APN[apn],[apnu],[apnp]
```
Explicación: Mantenga los marcadores [apn], [apnu] y [apnp]. Complete [apn] con el APN del operador. Use [apnu] para el usuario del APN y [apnp] para la contraseña del APN si el operador lo requiere. Si no se necesita usuario o contraseña, omita esos valores o déjelos en blanco según la sintaxis SMS del dispositivo.

- Establecer el servidor GPRS a Plaspy usando la IP pública y el puerto
```text
000000SVR54.85.159.138,8888
```
Explicación: Este comando apunta el rastreador a la IP y puerto del servidor Plaspy. Algunas versiones de firmware pueden aceptar nombres de dominio, pero el comando público mostrado usa la dirección IP.

- Establecer intervalo de actualización a 1 minuto
```text
000000GTI60
```
Explicación: El valor 60 representa un intervalo de 60 segundos para los reportes periódicos de posición.

Importante: La contraseña por defecto en estos ejemplos es 000000. Si la contraseña del dispositivo ha sido cambiada, anteponga los comandos con la contraseña activa. Confirme siempre la sintaxis SMS correcta para la versión de firmware de su equipo.

## Notas sobre la configuración

- La configuración por SMS es compatible y de uso común en unidades PT-300X; asegúrese de que su teléfono emisor pueda comunicarse con el número del dispositivo.
- Las variantes de firmware o regionales pueden aceptar nombres de dominio o requerir una sintaxis SMS diferente; consulte la documentación del fabricante si tiene dudas.
- Elija UDP o TCP según el comportamiento de la red y las recomendaciones de Plaspy o de su operador; Plaspy detectará el protocolo automáticamente una vez que el dispositivo se conecte.
- Mantenga la contraseña del dispositivo segura y considere cambiarla después de la configuración inicial si el equipo lo permite.
- Después de aplicar los ajustes de servidor y APN, espere unos minutos y luego verifique que el rastreador aparece en Plaspy para confirmar la conectividad de extremo a extremo.

## Por qué usar Plaspy con esta configuración

Usar Plaspy con el Bofan PT-300X ofrece a las organizaciones una vía sencilla para centralizar los datos de ubicación y eventos de sus vehículos. El endpoint de servidor compartido de Plaspy y el puerto consistente reducen la complejidad de configuración por dispositivo, y la detección automática del protocolo facilita la incorporación para que los equipos comiencen a reportar con mínima selección manual de protocolo.

Learn more about Plaspy and how to integrate trackers at https://www.plaspy.com. For the latest device specific instructions, firmware details, and manufacturer guidance verify current information on the official Bofan site https://www.bofancloud.com/ as methods and firmware behavior can change over time.
