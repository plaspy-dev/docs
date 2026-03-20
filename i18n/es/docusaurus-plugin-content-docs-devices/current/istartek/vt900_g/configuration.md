---
slug: /istartek/vt900_g/configuration
id: vt900_g-configuration
sidebar_label: Configuration
title: iStartek - VT900-G Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del rastreador iStartek VT900 G para conectar con Plaspy
keywords:
  - configuración iStartek VT900 G
  - configuración VT900 G Plaspy
  - configuración de servidor VT900 G iStartek
  - rastreador GPS VT900 G Plaspy
  - guía de configuración rastreador vehicular
  - comandos SMS VT900 G
  - configuración servidor rastreador GPS
  - configuración seguimiento de flota VT900 G
  - integración rastreador Plaspy
  - configuración APN VT900 G
---

# iStartek - VT900-G Configuración

Esta página documenta la información pública de configuración para usar el rastreador iStartek VT900-G con Plaspy. Se centra en los ajustes compartidos del servidor, los pasos comunes de preparación del dispositivo y los comandos SMS prácticos que se publican para este modelo, con el fin de conectar el equipo a la plataforma de seguimiento de Plaspy.

Plaspy usa ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Cuando están disponibles, incluimos ejemplos de comandos SMS del VT900-G publicados por el fabricante para ayudarle a aplicar los ajustes de Plaspy.

## Resumen de la configuración

El objetivo de la configuración es dejar al VT900-G listo para enviar de forma fiable datos GNSS, telemetría y eventos a Plaspy y permanecer visible en la plataforma incluso durante breves interrupciones de red. El proceso típicamente configura el acceso a la red, apunta el dispositivo al servidor de Plaspy y establece los intervalos de reporte.

- Configure el APN del equipo para que tenga acceso de datos móviles para GPRS o 3G.
- Apunte el rastreador a Plaspy usando los ajustes de servidor compartidos para que Plaspy reciba los datos.
- Establezca un intervalo de carga periódico para que la ubicación y los eventos se reporten con la cadencia requerida.
- Valide la conectividad y use un comando de verificación para confirmar que los parámetros se aplicaron.
- Asegúrese de que el dispositivo pueda almacenar datos en búfer localmente para que los registros pendientes se suban a Plaspy después de cortes de red.

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and all devices use the same port for reporting

## Requisitos típicos antes de la puesta en marcha

- Un VT900-G alimentado e instalado o conectado a una fuente de alimentación de banco estable y, si está disponible, con la batería de respaldo colocada.
- Una tarjeta SIM activa con datos habilitados y la información APN correcta proporcionada por su operador móvil.
- Acceso al método de configuración que soporte la unidad, como comandos SMS o herramientas de configuración del proveedor.
- Cobertura celular para UMTS/HSDPA o GSM/GPRS según la variante de su modelo.
- Una cuenta en Plaspy o acceso a la plataforma Plaspy para confirmar que el dispositivo aparece y reporta después de la configuración.
- El manual del usuario del VT900-G o la referencia del fabricante para verificar diferencias específicas de firmware.

## Cómo se conecta este rastreador a Plaspy

El VT900-G transmite posiciones GNSS, telemetría y mensajes de evento a través de la red celular al endpoint y puerto del servidor Plaspy. Plaspy procesa esos mensajes y utiliza la detección automática de protocolo para mapear el protocolo del rastreador sin requerir la selección manual del protocolo por dispositivo en la configuración de la plataforma.

- El rastreador envía ubicaciones y telemetría a d.plaspy.com o a 54.85.159.138 en el puerto 8888.
- El transporte puede ser UDP o TCP según soporte el dispositivo y la red; Plaspy acepta ambos en el mismo puerto.
- Los mensajes de evento y alarma provenientes de entradas digitales, OBD o CANBUS y sensores externos son reenviados a Plaspy para alertas e informes.
- Los registros almacenados en la memoria flash del dispositivo se suben a Plaspy una vez que se restaura la conectividad.
- Plaspy procesa los mensajes entrantes y los presenta en tiempo real para monitoreo e informes históricos.

## Flujo típico de configuración

1. Obtenga el manual del usuario del VT900-G y confirme los métodos de configuración soportados para su versión de firmware y revisión de hardware.
2. Verifique que el dispositivo tenga una SIM con datos operativa y obtenga las credenciales APN del operador.
3. Ingrese la dirección del servidor Plaspy enviando d.plaspy.com o 54.85.159.138 al dispositivo como destino del servidor.
4. Configure el puerto 8888 para el reporte al servidor y elija UDP o TCP si el dispositivo requiere selección explícita del transporte.
5. Aplique o guarde la configuración y reinicie el dispositivo si las instrucciones del fabricante solicitan un reboot para aplicar los ajustes.
6. Valide que el dispositivo reporte a Plaspy comprobando la actividad en la plataforma Plaspy y usando el comando de verificación del equipo.
7. Monitoree las actualizaciones de posición regulares y verifique que los datos en búfer se suban después de simular una interrupción.

## Ejemplos de comandos de configuración

El VT900-G soporta configuración vía SMS. Los siguientes comandos SMS públicos se proporcionan en el ejemplo de configuración publicado por el fabricante. Preserve los marcadores tal cual al aplicar los comandos.

- Reinicio opcional a configuración de fábrica
```text
FACTORY#
```
- Establecer zona horaria a UTC 0
```text
GMT,E,0#
```
- Configurar el APN del operador. Reemplace {{apn}} por el APN de su operador. Si es necesario, incluya usuario {{apnu}} y contraseña {{apnp}} separados por comas
```text
APN,{{apn}}#
```
- Ejemplo con usuario y contraseña de APN opcionales
```text
APN,{{apn}},{{apnu}},{{apnp}}#
```
- Configurar el servidor GPRS usando el dominio Plaspy y el puerto compartido
```text
SERVER,1,d.plaspy.com,8888#
```
- O configurar el servidor GPRS usando la IP del servidor Plaspy y el puerto compartido
```text
SERVER,0,54.85.159.138,8888#
```
- Establecer intervalo de actualización periódico a 60 segundos
```text
TIMER,60#
```
- Consultar parámetros actuales del dispositivo
```text
PARAM#
```

Notas sobre los marcadores de posición
- {{apn}} es la cadena APN del operador móvil necesaria para datos GPRS o 3G.
- {{apnu}} y {{apnp}} son campos opcionales de usuario y contraseña del APN si su operador los requiere.

## Notas de configuración

- La configuración vía SMS está soportada en el VT900-G como se muestra arriba. Pueden existir herramientas del fabricante o utilidades USB/serial según el firmware.
- Diferentes revisiones de firmware pueden aceptar formatos de comando ligeramente distintos o requerir selección de transporte por separado; confirme siempre con el manual del VT900-G.
- Elija UDP o TCP según las necesidades de su instalación; Plaspy acepta ambos en el puerto 8888 y detecta automáticamente el protocolo correcto.
- Mantenga precisas las credenciales del APN y asegúrese de que la SIM cuente con un plan de datos adecuado para evitar huecos en los reportes.
- Después de la configuración, use el comando PARAM# y la plataforma Plaspy para verificar que el dispositivo está reportando y que los registros en búfer se suben tras reconexiones.

## Por qué usar Plaspy con esta configuración

Usar el VT900-G con Plaspy ofrece una vía práctica para obtener visibilidad confiable de la flota, monitoreo de eventos y reconstrucción histórica de viajes. El desempeño GNSS del dispositivo, sus capacidades de reporte celular y el almacenamiento en búfer a bordo, combinados con la ingesta y detección de protocolo de Plaspy, entregan telemetría continua para supervisión operativa y flujos de trabajo de seguridad.

Para saber más sobre Plaspy y cómo soporta dispositivos como el VT900-G visite https://www.plaspy.com. Para los pasos de configuración específicos más recientes, notas de firmware y documentación del fabricante, verifique la información en el sitio de iStartek https://istartek.com/ ya que los métodos de configuración y el comportamiento del firmware pueden cambiar con el tiempo.
