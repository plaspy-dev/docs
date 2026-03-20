---
slug: /arusnavi/arnavi_l3r100/configuration
id: arnavi_l3r100-configuration
sidebar_label: Configuration
title: Arusnavi - ARNAVI L3R100 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para conectar el rastreador ARNAVI L3R100 a Plaspy con ajustes de servidor compartido y pasos prácticos
keywords:
  - Arusnavi ARNAVI L3R100 configuración
  - ARNAVI L3R100 instalación
  - rastreador Arusnavi Plaspy
  - ARNAVI L3R100 configuración servidor
  - ARNAVI L3R100 configuración GPS
  - ARNAVI L3R100 configuración telemetría
  - configuración rastreador vehicular Arusnavi
  - integración ARNAVI L3R100 Plaspy
  - configuración plataforma GPS Arusnavi
  - ARNAVI L3R100 RS485 BLE configuración
---

# Arusnavi - ARNAVI L3R100 Configuración

Esta página documenta el contexto de configuración público para usar el rastreador Arusnavi ARNAVI L3R100 con la plataforma Plaspy. Explica los ajustes de servidor compartido de Plaspy a los que el L3R100 puede enviar datos, los requisitos habituales que debe verificar antes de integrar el equipo y el flujo de trabajo práctico que suelen seguir ingenieros e instaladores para que el dispositivo sea visible en Plaspy.

Plaspy utiliza ajustes de servidor compartidos para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando éste se conecta. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Use esta guía como referencia práctica y consulte la documentación del fabricante para procedimientos específicos del dispositivo.

## Resumen de la configuración

Esta sección explica el propósito de configurar un ARNAVI L3R100 para Plaspy y los resultados prácticos que debe esperar una vez completada la configuración.

- Preparar el L3R100 para enviar posiciones GNSS y telemetría a Plaspy para que las ubicaciones aparezcan en la plataforma.
- Asegurarse de que el equipo pueda alcanzar el endpoint del servidor Plaspy mediante la conexión GPRS del dispositivo y el APN correcto si es necesario.
- Seleccionar o confirmar los ajustes de transporte (UDP o TCP) y el puerto compartido de Plaspy para que la plataforma acepte el flujo del dispositivo.
- Validar la conectividad y el envío de telemetría en Plaspy para que el seguimiento en tiempo real, la notificación de eventos y la reproducción histórica funcionen correctamente.
- Opcionalmente, confirmar que los sensores BLE y RS485 reportan correctamente al equipo para que su telemetría sea reenviada a Plaspy.

## Ajustes del servidor Plaspy

Utilice los siguientes ajustes públicos de servidor de Plaspy al configurar el ARNAVI L3R100:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte compatible: UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador

Todos los dispositivos que envían datos a Plaspy usan el mismo puerto. Ingrese el dominio del servidor o la IP según lo permita la interfaz de configuración del equipo, y elija UDP o TCP según las opciones del dispositivo o la preferencia del instalador.

## Requisitos típicos antes de la configuración

- Alimentación estable al equipo y conexionado correcto según la documentación de instalación.
- Tarjeta SIM 2G/GPRS activa con plan de datos y APN correctamente configurado si el dispositivo usa conectividad celular.
- Acceso al método oficial de configuración del fabricante, como la interfaz web del L3R100, la herramienta de PC vía USB o las herramientas de configuración remota/SMS soportadas.
- Identificador o número de serie del dispositivo (por ejemplo IMEI o serial del fabricante) disponible para registro o verificación en Plaspy.
- Una cuenta u organización en Plaspy donde se registrará y monitoreará el dispositivo.
- Acceso físico a sensores BLE o RS485 si desea conectar y validar telemetría externa.

## Cómo se conecta este rastreador a Plaspy

El ARNAVI L3R100 reenvía posiciones GNSS, telemetría de sensores y mensajes de eventos al endpoint de monitoreo de Plaspy usando un protocolo de telemetría compatible. Configure el equipo para transmitir al endpoint y puerto compartidos de Plaspy para que la plataforma reciba y clasifique automáticamente la telemetría entrante.

- El dispositivo reporta posiciones y telemetría a d.plaspy.com (o a 54.85.159.138) en el puerto 8888.
- Elija el transporte UDP o TCP según el requerimiento del dispositivo; Plaspy acepta ambos y detecta el protocolo utilizado.
- El L3R100 puede transmitir a dos servidores de monitoreo simultáneamente, lo que permite redundancia e integración con Plaspy junto a otro backend si es necesario.
- La telemetría de sensores BLE y de sensores RS485 cableados conectados al L3R100 se reenvía a Plaspy una vez que el dispositivo envía su flujo de datos agregado.
- Mensajes orientados a eventos como encendido, apertura de puertas o cambios en entradas discretas se envían a Plaspy para habilitar alertas y flujos de trabajo basados en reglas.

## Flujo de configuración habitual

Secuencia práctica que siguen instaladores e integradores para conectar unidades ARNAVI L3R100 a Plaspy:

1. Acceda al método oficial de configuración del fabricante (interfaz web, herramienta de PC vía USB Type-C o método de configuración remota soportado).
2. Ingrese la dirección del servidor Plaspy: utilice d.plaspy.com o 54.85.159.138 según la interfaz del dispositivo.
3. Establezca el puerto de destino en 8888, ya que Plaspy utiliza el mismo puerto para todos los rastreadores compatibles.
4. Seleccione el protocolo de transporte (UDP o TCP) si el equipo requiere elegirlo.
5. Introduzca el APN y los datos de conectividad SIM necesarios para que el dispositivo acceda a Internet público y al servidor Plaspy.
6. Guarde o aplique la configuración y reinicie el equipo si las instrucciones del fabricante requieren un reinicio.
7. Valide en Plaspy que el dispositivo informe correctamente y que las actualizaciones de posición y telemetría se muestren en la plataforma.

## Ejemplos de comandos de configuración

El ARNAVI L3R100 admite configuración vía web y PC y puede aceptar comandos SMS o de configuración remota según el firmware y las herramientas del proveedor. Los formatos exactos de los comandos y las herramientas varían según el firmware del fabricante y la región, por lo que confirme la sintaxis con la documentación de Arusnavi o con su proveedor.

Si emplea una utilidad de configuración del equipo o comandos SMS proporcionados por el fabricante, siga esos comandos oficiales para establecer el servidor en d.plaspy.com o 54.85.159.138 y el puerto 8888, y elija UDP o TCP según sea necesario. Dado que los conjuntos de comandos del fabricante difieren según las revisiones de firmware, esta guía no inventa una lista de comandos; consulte el manual oficial de configuración de Arusnavi para ejemplos precisos.

## Notas de configuración

- Las diferencias de firmware pueden cambiar los menús disponibles, la sintaxis de los comandos y las opciones de transporte; siempre verifique la versión de firmware del dispositivo antes de aplicar los pasos.
- Si puede elegir entre UDP y TCP, tenga en cuenta que Plaspy admite ambos y la elección puede afectar las garantías de entrega o el atravesamiento de firewalls en su entorno.
- Para conectividad celular, verifique la configuración del APN y la provisión de la SIM antes de realizar las pruebas de conectividad con el servidor.
- Al usar sensores BLE o RS485, valide la telemetría localmente en el dispositivo antes de las comprobaciones de extremo a extremo en Plaspy para poder aislar problemas entre sensor y red.
- Mantenga actualizadas la herramienta de configuración del fabricante y el firmware según las recomendaciones de Arusnavi para asegurar compatibilidad y seguridad.

## Por qué usar Plaspy con esta configuración

Usar el ARNAVI L3R100 con Plaspy ofrece a los operadores un rastreador compacto que reenvía posiciones GNSS multiconstelación y telemetría mixta de sensores a un endpoint compartido de Plaspy. Esta configuración ayuda a flotas y gestores de activos a obtener visibilidad en tiempo real, notificaciones basadas en eventos y telemetría consolidada tanto de sensores cableados como BLE sin necesidad de endpoints backend separados.

Para saber más sobre Plaspy y cómo soporta dispositivos como el ARNAVI L3R100 visite https://www.plaspy.com. Para los pasos de configuración específicos más recientes, notas de firmware y comandos del fabricante consulte la documentación oficial de Arusnavi en https://www.arusnavi.ru.
