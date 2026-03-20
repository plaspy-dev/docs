---
slug: /bofan/pt_600/configuration
id: pt_600-configuration
sidebar_label: Configuration
title: Bofan - PT-600 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Bofan PT-600 con ajustes de servidor Plaspy, comandos SMS y lista de verificación para dejar el rastreador en línea
keywords:
  - configuración Bofan PT-600
  - instalación Bofan PT-600
  - Bofan PT-600 Plaspy
  - configuración servidor PT-600
  - configuración SMS PT-600
  - configuración GPRS PT-600
  - configuración rastreador GPS Bofan
  - ajuste seguimiento PT-600
  - configuración APN PT-600
  - configuración rastreador Plaspy
---

# Bofan - PT-600 Configuración

Esta página describe el contexto público de configuración para usar el Bofan PT-600 con la plataforma Plaspy. Reúne los ajustes de servidor prácticos y ejemplos de comandos SMS que se usan comúnmente para conectar un PT-600 a Plaspy. Use esta guía para entender qué debe configurar en el equipo antes de que aparezca en Plaspy.

El PT-600 admite configuración y reporte por SMS y GPRS; el fabricante facilita comandos SMS que sirven durante la instalación. Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, aunque los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el método de instalación y las herramientas del proveedor.

## Resumen de la configuración

El objetivo del proceso es preparar el PT-600 para establecer sesiones de datos confiables con Plaspy y que el dispositivo sea visible en la plataforma. Las acciones públicas típicas incluyen establecer el identificador del equipo, configurar el APN de datos móviles y apuntar el rastreador al servidor y puerto de Plaspy.

- Establecer o confirmar la contraseña del dispositivo y, si corresponde, realizar un reinicio de fábrica opcional antes del aprovisionamiento.
- Configurar un identificador de 14 dígitos, normalmente derivado del IMEI, para que Plaspy pueda empatar el equipo con sus registros.
- Definir el APN del operador móvil y las credenciales necesarias para que el rastreador use GPRS para reportes en línea.
- Configurar el endpoint GPRS de Plaspy para que el rastreador envíe datos al host y puerto correctos.
- Ajustar el intervalo de reporte o latido para que el dispositivo envíe actualizaciones de posición con la frecuencia deseada.
- Validar la conectividad por SMS o comprobando que el equipo se active en Plaspy.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte compatible UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que un único endpoint de cuenta soporta muchos tipos de equipo
- Tenga en cuenta que Plaspy usa el mismo puerto para todos los dispositivos compatibles

## Requisitos típicos antes de la configuración

- Un PT-600 con batería cargada o alimentado por el vehículo y una SIM operativa que soporte datos GPRS y SMS.
- El número IMEI del equipo disponible para configurar el identificador y el emparejamiento.
- APN del operador móvil, y usuario y contraseña del APN si el operador lo requiere.
- Acceso a un emisor de SMS (teléfono, pasarela SMS o la herramienta de configuración del fabricante) para enviar comandos de configuración.
- Acceso a la documentación oficial de Bofan o soporte del proveedor para detalles específicos de firmware.
- Comprensión básica de si usará transporte TCP o UDP en caso de que el equipo requiera selección explícita.

## Cómo se conecta este rastreador a Plaspy

Al configurarlo para Plaspy, el PT-600 se apunta al servidor de la plataforma y envía datos de ubicación y del equipo a través de la red móvil al endpoint y puerto compartidos de Plaspy. Plaspy detecta automáticamente el protocolo del rastreador y procesa los mensajes entrantes para que el equipo sea visible en la plataforma.

- El rastreador se configura para reportar a d.plaspy.com o alternativamente a la IP 54.85.159.138 en el puerto 8888.
- La comunicación normalmente usa sesiones de datos GPRS; el SMS está disponible para configuración remota y verificación rápida.
- Los reportes se envían según el intervalo configurado, de modo que Plaspy recibe actualizaciones de posición y eventos.
- Plaspy usa el mismo puerto para todos los dispositivos y determina automáticamente el protocolo del rastreador a nivel de plataforma.
- Una vez que comienzan los reportes, el dispositivo aparece en Plaspy para monitoreo, alertas por eventos y consulta de histórico.

## Flujo de trabajo común de configuración

1. Acceda al método o software oficial de configuración de Bofan, o prepare un emisor de SMS capaz de mandar comandos de configuración al PT-600.
2. Introduzca el destino de Plaspy ya sea como dominio d.plaspy.com o como la IP 54.85.159.138 según lo permita la interfaz del dispositivo.
3. Establezca el puerto del servidor en 8888, tal como requiere Plaspy, y confirme que el equipo usará ese puerto para reportar.
4. Si el equipo requiere seleccionar el transporte, elija UDP o TCP según la preferencia del instalador o las opciones del dispositivo.
5. Configure el APN y las credenciales requeridas para que se establezca la conectividad GPRS.
6. Aplique o guarde la configuración y reinicie el dispositivo si el fabricante recomienda un reinicio para que los cambios surtan efecto.
7. Valide que el equipo reporte a Plaspy revisando el estado en la plataforma Plaspy o confirmando el acuse de recibo del servidor vía SMS cuando esté soportado.

## Comandos de configuración de ejemplo

El PT-600 se puede configurar mediante comandos SMS enviados desde un teléfono móvil o una pasarela SMS. Los comandos de ejemplo abajo usan el prefijo de contraseña del dispositivo. La contraseña por defecto en estos ejemplos públicos es 000000. Si su contraseña ha sido cambiada, sustituya la contraseña en cada comando según corresponda.

- Reinicio de fábrica inicial opcional (usar solo si es necesario)
```text
000000DFT
```

- Establecer un identificador de 14 dígitos para Plaspy. Reemplace \<last14imei> con los últimos 14 dígitos del IMEI del dispositivo
```text
000000GID<last14imei>
```

- Configurar el APN del operador móvil. Reemplace los marcadores {{apn}}, {{apnu}} y {{apnp}} según corresponda
```text
000000APN{{apn}},{{apnu}},{{apnp}}
```
Explicación: {{apn}} es el nombre del APN. {{apnu}} y {{apnp}} son el usuario y la contraseña opcionales del APN y deben dejarse vacíos u omitirse si el operador no los exige.

- Configurar el servidor GPRS de Plaspy por IP y puerto
```text
000000SVR54.85.159.138,8888
```
Esto configura el equipo para reportar directamente a la IP y puerto del servidor Plaspy. Alternativamente puede usar d.plaspy.com si su dispositivo soporta nombres de dominio.

- Establecer el intervalo de actualización a 60 segundos
```text
000000GTI60
```
Esto ajusta el latido de reporte. Cambie el valor numérico al intervalo requerido en segundos si es necesario.

Nota: Los comandos deben enviarse en el orden apropiado para su despliegue. Una secuencia común es reinicio de fábrica opcional, establecer GID, configurar APN, configurar servidor y luego establecer intervalo. Siempre reemplace la contraseña por defecto si su dispositivo ha sido reconfigurado.

## Notas de configuración

- La configuración por SMS es compatible públicamente con los dispositivos PT-600 y se usa con frecuencia en instalaciones de campo donde el acceso directo a la unidad es limitado.
- Las revisiones de firmware y las variaciones de hardware pueden cambiar la sintaxis de los comandos o los parámetros soportados. Verifique los comandos según la versión de firmware de su equipo.
- Elija UDP o TCP en el dispositivo solo si es necesario; Plaspy detectará automáticamente el protocolo del rastreador en el servidor una vez que lleguen los mensajes al puerto compartido.
- Use el identificador de 14 dígitos derivado del IMEI que el instalador o la plataforma espera para que el equipo se asigne correctamente en Plaspy.
- Tenga a mano las credenciales del APN. La ausencia o incorrecta configuración del APN es la causa más común de fallos en el registro GPRS.

## Por qué usar Plaspy con esta configuración

Configurar el Bofan PT-600 para que reporte a Plaspy ofrece una vía práctica para integrar rastreo vehicular con cámara, identificación de conductores y eventos de alarma en una sola plataforma de gestión de flotas. Con los ajustes de servidor compartidos de Plaspy y la detección automática de protocolos, los instaladores pueden apuntar múltiples tipos de rastreadores al mismo endpoint y dejar que Plaspy se encargue del parseo de protocolos y del alta de dispositivos.

Para saber más sobre Plaspy, visite https://www.plaspy.com. Para los comandos específicos más recientes, notas de firmware y guía del fabricante para el PT-600, verifique los detalles en el sitio oficial de Bofan https://www.bofancloud.com/ ya que las especificaciones del fabricante y los métodos de configuración pueden cambiar con el tiempo.
