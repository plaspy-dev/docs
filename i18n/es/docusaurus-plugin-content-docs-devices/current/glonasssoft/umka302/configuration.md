---
slug: /glonasssoft/umka302/configuration
id: umka302-configuration
sidebar_label: Configuration
title: GLONASSsoft - UMKa302 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para conectar el rastreador GLONASSsoft UMKa302 a Plaspy con ajustes de servidor compartido y pasos prácticos
keywords:
  - configuración GLONASSsoft UMKa302
  - configuración UMKa302
  - rastreador GLONASSsoft Plaspy
  - configuración de servidor UMKa302
  - configuración rastreador GPS UMKa302
  - integración UMKa302 Plaspy
  - rastreo de vehículos GLONASSsoft
  - configuración telemetría UMKa302
  - configuración bus CAN UMKa302
  - integración sensores BLE UMKa302
---

# GLONASSsoft - UMKa302 Configuración

Esta página ofrece la guía pública para usar el rastreador GLONASSsoft UMKa302 con Plaspy. Describe los ajustes de servidor prácticos y los pasos habituales necesarios para apuntar su dispositivo a Plaspy, de modo que el rastreador pueda enviar posiciones GNSS, telemetría derivada del CAN, datos de sensores BLE y registros de eventos a la plataforma.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos de configuración en el lado del fabricante pueden variar según la revisión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor; utilice esta guía junto con la documentación técnica del UMKa302 y el software de configuración de su proveedor.

## Resumen de la configuración

El proceso de configuración prepara el UMKa302 para comunicarse con Plaspy, valida la conectividad móvil y asegura que el equipo sea visible y reporte correctamente en la plataforma. El objetivo es registrar el endpoint del rastreador, verificar el transporte y la configuración del APN cuando aplique, y confirmar el flujo de telemetría para monitoreo en tiempo real e informes históricos.

- Configure el dispositivo para que reporte al endpoint del servidor de Plaspy y así la ubicación y la telemetría lleguen a la plataforma.
- Asegúrese de que el dispositivo tenga conexión celular activa y los ajustes APN correctos cuando use GSM GPRS.
- Seleccione el protocolo de transporte (UDP o TCP) si la herramienta de configuración del dispositivo lo requiere.
- Guarde y aplique los ajustes, y reinicie el equipo si el dispositivo o el firmware lo requieren para activar los cambios.
- Valide que la posición, la telemetría CAN y los datos de sensores BLE aparezcan en Plaspy después de la configuración.

## Ajustes del servidor Plaspy

Use los siguientes ajustes públicos de Plaspy al configurar su UMKa302:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol so you do not need to choose a protocol in Plaspy itself

Todos los UMKa302 configurados para Plaspy deben apuntar al mismo endpoint y puerto indicados arriba.

## Requisitos típicos antes de la configuración

- Acceso al método de configuración oficial del UMKa302 o a la herramienta del proveedor para ajustar parámetros de red y servidor.
- Un UMKa302 alimentado e instalado con alimentación válida del vehículo o alimentación de banco según la documentación del dispositivo.
- Una SIM celular activa con datos habilitados y los ajustes APN correctos para la región y el operador móvil.
- Familiaridad con la versión de firmware del dispositivo y con cualquier comando o menú específico del proveedor.
- microSD o caja negra interna configurada si se requiere registro sin conexión para sincronización posterior.
- Acceso administrativo a la cuenta de Plaspy o contacto en la plataforma si es necesario aprovisionar el dispositivo o asignar el activo.

## Cómo se conecta este rastreador a Plaspy

Cuando está configurado, el UMKa302 transmite posiciones GNSS, telemetría del bus CAN, lecturas de sensores BLE y registros de eventos al endpoint y puerto compartidos de Plaspy. Plaspy recibe y decodifica los mensajes entrantes, los asocia con el activo correcto y pone los datos a disposición para monitoreo en vivo e informes.

- El UMKa302 está configurado para reportar a d.plaspy.com (o 54.85.159.138) en el puerto 8888.
- El transporte puede ser UDP o TCP según la opción de configuración del dispositivo y la preferencia del instalador.
- Plaspy detecta automáticamente el protocolo del rastreador para que la plataforma acepte datos del UMKa302 sin necesidad de seleccionar el protocolo por dispositivo en Plaspy.
- La posición GNSS, la telemetría derivada del CAN y los datos de sensores BLE se reenvían a Plaspy para visibilidad en tiempo real y almacenamiento histórico.
- Los registros sin conexión almacenados en microSD o en la caja negra interna se suben a Plaspy cuando se restablece la conectividad.

## Flujo de trabajo común de configuración

1. Acceda al método de configuración oficial del UMKa302 o a la herramienta del proveedor según lo descrito por GLONASSsoft.
2. En los ajustes de servidor o GPRS del dispositivo, ingrese el dominio del servidor d.plaspy.com o la IP del servidor 54.85.159.138.
3. Establezca el puerto del servidor a 8888 como destino para los reportes del dispositivo.
4. Elija UDP o TCP si la configuración del rastreador requiere seleccionar un protocolo de transporte.
5. Configure los ajustes celulares como el APN y confirme el comportamiento de doble SIM si utiliza la función dual SIM del UMKa302.
6. Aplique o guarde la configuración en la herramienta del fabricante y siga cualquier indicación específica del dispositivo para confirmar los cambios.
7. Reinicie el equipo si el firmware o la herramienta lo requieren para activar los nuevos ajustes de servidor.
8. Valide que el UMKa302 reporte a Plaspy comprobando actualizaciones de posición y telemetría en la plataforma Plaspy.

## Ejemplos de comandos de configuración

El UMKa302 puede configurarse usando las herramientas oficiales de GLONASSsoft, interfaces web o serial del dispositivo, o métodos SMS/comando donde estén soportados. La sintaxis exacta de los comandos y los métodos varían según el firmware y la utilidad del proveedor; consulte el manual del dispositivo para obtener comandos precisos. Plaspy acepta los reportes del dispositivo en d.plaspy.com o 54.85.159.138 en el puerto 8888 mediante UDP o TCP y detectará el protocolo automáticamente.

Si dispone de comandos públicos específicos de GLONASSsoft o de su firmware que necesite aplicar, inclúyalos en su herramienta de configuración del proveedor o en la secuencia de SMS de acuerdo con la documentación del fabricante. Conserve los marcadores de posición como los valores de APN cuando use plantillas de comando y sustituya los valores por los del operador cuando sea necesario.

## Notas de configuración

- Plaspy utiliza el mismo puerto 8888 para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador en las conexiones entrantes.
- Se admiten TCP y UDP; elija el transporte que coincida con la preferencia del instalador o con los requisitos de la red. UDP suele ser más liviano, mientras que TCP aporta fiabilidad de conexión cuando es necesario.
- Las versiones de firmware y las herramientas del proveedor afectan las opciones de configuración disponibles; confirme los comandos y menús exactos en el manual del UMKa302 antes de aplicar cambios.
- El comportamiento de doble SIM y APN se controla en el lado del dispositivo; verifique ambas ranuras SIM y las configuraciones de conmutación por fallo si se requiere conectividad redundante.
- Utilice el registro en caja negra o microSD para instalaciones con conectividad intermitente y así evitar pérdida de datos hasta que se confirme la sincronización con Plaspy.

## Por qué usar Plaspy con esta configuración

Combinar el UMKa302 con Plaspy permite a las organizaciones centralizar la ubicación GNSS, la telemetría del bus CAN, los datos de sensores BLE y el registro de eventos en una única plataforma de monitoreo e informes. Esta configuración soporta seguimiento en vivo, diagnóstico del vehículo, monitoreo de combustible y análisis histórico robusto, ayudando a los equipos de operaciones a mantener visibilidad e información accionable en flotas mixtas.

Para saber más sobre Plaspy e integraciones compatibles, visite https://www.plaspy.com. Para los comandos específicos de configuración del dispositivo, notas de firmware y referencia técnica más recientes del UMKa302, verifique los detalles con el fabricante en https://glonasssoft.ru/ ya que los métodos de configuración y el comportamiento del firmware pueden cambiar con el tiempo.
