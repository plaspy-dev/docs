---
slug: /condor/ge_810/configuration
id: ge_810-configuration
sidebar_label: Configuration
title: Condor - GE-810 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Condor GE-810 con ajustes de servidor Plaspy y comandos SMS para la puesta en marcha
keywords:
  - Configuración Condor GE-810
  - Instalación Condor GE-810
  - Configuración GE-810 para Plaspy
  - Configuración del rastreador Plaspy
  - Configuración de dispositivo de monitoreo personal
  - Configuración de rastreador portátil
  - Configuración de servidor GPRS
  - Configuración de comandos SMS
  - Integración de dispositivo de monitoreo
  - Ajustes del servidor del dispositivo
---

# Condor - Configuración GE-810

Esta página documenta el contexto público de configuración para usar el dispositivo de monitoreo personal Condor GE-810 con la plataforma Plaspy. Reúne los ajustes de servidor Plaspy que necesitará y reproduce los comandos SMS públicos que se usan comúnmente para apuntar el dispositivo a Plaspy. Use esta guía para preparar el GE-810 para reportar a Plaspy y verificar la conectividad básica.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; sin embargo, los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El GE-810 admite comandos de configuración vía SMS como los que se muestran a continuación y emplea la conexión celular para enviar eventos y telemetría a Plaspy una vez que el servidor y el APN estén configurados correctamente.

## Resumen de la configuración

El objetivo de la configuración es preparar el GE-810 para comunicarse de forma confiable con Plaspy, de modo que los equipos de monitoreo reciban eventos, registros de voz y alertas de manipulación con prontitud. Típicamente, la configuración define el APN del equipo, el endpoint del servidor, el transporte, los intervalos de reporte y un alias identificador para que el dispositivo aparezca correctamente en la plataforma Plaspy.

- Configure el APN del operador para que el dispositivo tenga acceso a datos móviles y pueda reportar.
- Establezca el endpoint y el puerto del servidor Plaspy para que la telemetría vaya al destino correcto.
- Seleccione el tipo de transporte si el dispositivo requiere elección entre UDP o TCP.
- Defina un intervalo de reporte para que las actualizaciones regulares lleguen a Plaspy y se muestren en el panel.
- Valide la conectividad con un comando de verificación y confirme que el dispositivo sea visible en Plaspy.

## Ajustes del servidor Plaspy

Utilice estos ajustes públicos exactos de Plaspy al configurar el GE-810 para Plaspy:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte: se admite UDP o TCP; configure el dispositivo según el transporte que requiera
- Plaspy detecta automáticamente el protocolo del rastreador

Tenga en cuenta que Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y que la detección automática de protocolo elimina la necesidad de seleccionar un protocolo en el lado de Plaspy una vez que el dispositivo esté apuntando al servidor.

## Requisitos habituales antes de la configuración

- Un dispositivo GE-810 cargado con la batería instalada y listo para configurar.
- Una SIM celular activa con datos habilitados y el APN correcto para el operador.
- Acceso a un teléfono o a una pasarela SMS capaz de enviar mensajes de configuración al dispositivo.
- El número IMEI del dispositivo disponible para usar al crear un alias identificador o al registrar el equipo.
- Conocimiento del APN del operador y, si aplica, el usuario y la contraseña del APN.
- Acceso a las instrucciones o herramientas del fabricante Condor para comportamientos específicos del dispositivo y peculiaridades de firmware.

## Cómo se conecta este rastreador a Plaspy

El GE-810 transmite eventos del dispositivo, estado y registros de eventos de voz a través de la red celular al endpoint compartido de Plaspy. Una vez aplicados los ajustes de servidor y APN, el dispositivo reportará según el intervalo configurado y enviará alertas como manipulación o vibración para que los equipos de monitoreo vean la actividad en tiempo real.

- El dispositivo envía telemetría y mensajes de eventos al endpoint de Plaspy d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Plaspy acepta conexiones usando UDP o TCP y detecta automáticamente el protocolo del dispositivo.
- Las actualizaciones regulares de posición y estado aparecen en Plaspy según el intervalo de reporte configurado.
- Los eventos de manipulación, retiro y vibración se reportan de inmediato para que los supervisores puedan reaccionar.
- Se pueden usar comandos de verificación para confirmar que el dispositivo está conectado al servidor configurado antes de la validación en la plataforma.

## Flujo típico de configuración

1. Acceda al método oficial de configuración Condor para el GE-810, típicamente comandos SMS o la herramienta suministrada por el proveedor, y confirme que el dispositivo responde.
2. Ingrese el servidor Plaspy como d.plaspy.com o 54.85.159.138 en la configuración de servidor del dispositivo.
3. Establezca el puerto del servidor en 8888, que es el puerto compartido de Plaspy usado por todos los dispositivos.
4. Seleccione UDP o TCP en el dispositivo si el firmware requiere elegir el transporte.
5. Configure el APN del operador y cualquier usuario o contraseña de APN que requiera la SIM.
6. Aplique o guarde la configuración y reinicie el dispositivo si es necesario para que los cambios surtan efecto.
7. Valide que el dispositivo reporte a Plaspy usando el comando de verificación del equipo o confirmando la visibilidad en la plataforma Plaspy.

## Ejemplos de comandos de configuración

El GE-810 admite configuración vía SMS. Los siguientes comandos SMS públicos muestran un flujo de configuración típico. La contraseña de ejemplo usada en estos comandos es 0000, que es el valor predeterminado documentado en el contenido público. Reemplace los marcadores antes de enviar.

- Configure el APN del operador. Reemplace [apn] por el APN de su operador. Si su operador requiere usuario o contraseña de APN, incluya [apnu] y [apnp] donde se indica.
```
APN,0000,[apn]
APN,0000,[apn],[apnu],[apnp]
```
- Establezca un identificador de 5 dígitos (alias) para identificar el dispositivo en su sistema. Use los últimos 5 dígitos del IMEI. Ejemplo si el IMEI termina en 67890:
```
ALIAS,0000,67890#
```
- Configure la zona horaria a UTC 0
```
GMT,0000,-0#
```
- Configure el servidor GPRS hacia Plaspy usando la IP pública y el puerto. Este comando apunta explícitamente el dispositivo a Plaspy
```
SERVIDOR,0000,54.85.159.138,8888,U,A#
```
- Establezca el intervalo de actualización a cada 1 minuto
```
INTERVALO,0000,M,6#
```
- Active el modo GPRS en el dispositivo
```
GPRS,0000,A#
```
- Compruebe la conexión y los ajustes actuales
```
CONEXION,0000#
```

Notas sobre marcadores de posición y valores
- [apn], [apnu], [apnp]: mantenga estos marcadores y reemplácelos con el APN, usuario APN y contraseña APN de su operador móvil según sea necesario.
- Formato del alias: reemplace el alias de ejemplo por los últimos cinco dígitos reales del IMEI del dispositivo.
- El comando SERVIDOR anterior usa la IP pública de Plaspy y el puerto compartido 8888 e incluye un indicador de transporte; conserve el orden que se muestra al emitir los comandos.

## Notas de configuración

- La configuración vía SMS es compatible y se usa comúnmente para la provisión inicial; siga las indicaciones de Condor respecto a límites de envío y formato de SMS.
- Las revisiones de firmware o hardware pueden cambiar la sintaxis de los comandos o los parámetros admitidos; consulte la documentación de Condor para diferencias específicas del dispositivo.
- El dispositivo puede permitir la selección entre UDP y TCP; elija el transporte requerido por el firmware y configure el servidor en consecuencia. Plaspy detectará automáticamente el protocolo del rastreador una vez que el dispositivo llegue al servidor.
- Confirme los ajustes del APN del operador y pruebe la conectividad de datos antes de confiar en intervalos de reporte frecuentes para evitar un consumo inesperado de datos.
- La contraseña predeterminada de ejemplo en los comandos públicos es 0000; verifique si su unidad utiliza un valor predeterminado distinto y considere cambiar las credenciales por defecto si el dispositivo lo permite.

## Por qué usar Plaspy con esta configuración

Usar el GE-810 con Plaspy centraliza los reportes de eventos, las alertas de manipulación y retiro, y los registros de eventos de voz en una sola plataforma de monitoreo. Para organizaciones que gestionan programas de libertad supervisada o similares, esta configuración ayuda a garantizar visibilidad oportuna de incidentes y reportes consistentes entre dispositivos. Apuntar el GE-810 al endpoint compartido de Plaspy con el APN y los ajustes de transporte correctos es el paso clave para integrar los eventos del dispositivo en los flujos de trabajo de monitoreo.

Para obtener más información sobre Plaspy y cómo la plataforma maneja la conectividad y el monitoreo de dispositivos, visite https://www.plaspy.com. Para los comandos específicos más recientes, notas de firmware y guía del fabricante para el GE-810, verifique los detalles con Condor en https://condorskyseeker.com/ ya que las especificaciones del fabricante y los métodos de configuración pueden cambiar con el tiempo.
