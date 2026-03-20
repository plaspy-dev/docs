---
slug: /meitrack/mvt_600/configuration
id: mvt_600-configuration
sidebar_label: Configuration
title: Meitrack - MVT-600 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para conectar el Meitrack MVT-600 a Plaspy con ejemplos prácticos de servidor y comandos SMS
keywords:
  - configuración Meitrack MVT-600
  - guía de instalación MVT 600
  - configuración servidor Meitrack
  - instalación MVT 600 Plaspy
  - guía configuración rastreador GPS
  - comandos SMS Meitrack
  - configuración rastreador vehicular Plaspy
  - integración plataforma GPS
  - configuración seguimiento de flotas
  - ajustes GPRS Meitrack
---

# Meitrack - Configuración del MVT-600

Esta página presenta la información pública necesaria para usar el Meitrack MVT-600 con Plaspy. Aquí encontrará los ajustes prácticos del servidor, el flujo de trabajo habitual y ejemplos de comandos SMS que se emplean en configuraciones públicas para preparar el dispositivo y que reporte ubicaciones y eventos a Plaspy. Use esta guía como referencia práctica junto con las instrucciones del fabricante o del proveedor.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y la herramienta o sintaxis SMS que utilice su proveedor. El MVT-600 admite configuración vía SMS y reportes por GPRS en ejemplos públicos; esta página incorpora ambos junto con la información del servidor requerida por Plaspy.

## Resumen de la configuración

El objetivo del proceso de configuración es dejar el MVT-600 listo para comunicarse con Plaspy de forma fiable y mostrarse en la plataforma para seguimiento, notificación de eventos y monitoreo operativo. Allí donde sea posible, los comandos SMS son un método práctico para aplicar los ajustes mostrados, incluyendo la configuración GPRS y los intervalos de reporte.

- Apuntar el rastreador para que envíe datos GPRS al servidor de Plaspy y así poder rastrear el dispositivo en la plataforma.
- Configurar el intervalo de reporte y los eventos para que la plataforma reciba datos de ubicación y alarmas en tiempo oportuno.
- Verificar el APN y la conectividad de la SIM para que las sesiones GPRS se establezcan correctamente al reportar a Plaspy.
- Usar SMS o la herramienta del fabricante para aplicar los ajustes y confirmar que el dispositivo es accesible desde Plaspy.
- Conservar el registro de la contraseña del dispositivo y cambiarla si su política de seguridad lo requiere.

## Ajustes del servidor Plaspy

- Dominio del servidor: d.plaspy.com
- IP del servidor: 54.85.159.138
- Puerto: 8888
- Transporte: soporte para UDP o TCP; el equipo puede configurarse para usar cualquiera de los dos en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador
- Todos los dispositivos en Plaspy utilizan el mismo puerto para la comunicación con el servidor

## Requisitos típicos antes de la configuración

- Un MVT-600 instalado y con alimentación, con acceso a su interfaz de configuración o a SMS
- Una tarjeta SIM activa con plan de datos y las credenciales APN correctas para GPRS
- La contraseña por defecto del dispositivo si es necesaria para enviar comandos SMS de configuración (en ejemplos públicos se usa 0000 como defecto)
- Acceso al método oficial de configuración Meitrack, por ejemplo comandos SMS o software del proveedor
- Un procedimiento de prueba para validar que el dispositivo es visible en Plaspy tras la configuración

## Cómo se conecta este rastreador a Plaspy

El MVT-600 se configura para enviar datos de ubicación y eventos al endpoint y puerto compartidos de Plaspy. Una vez que el dispositivo apunta a Plaspy y la sesión de red se establece, Plaspy detectará el protocolo del rastreador y comenzará a recibir la telemetría para seguimiento en vivo, alertas y registros históricos.

- El rastreador envía paquetes GPRS a d.plaspy.com o a 54.85.159.138 en el puerto 8888
- El equipo puede configurarse para usar UDP o TCP según el firmware y la preferencia del instalador
- Plaspy detecta automáticamente el protocolo usado por el rastreador para un correcto parseo
- Los reportes de eventos y las actualizaciones periódicas hacen que el dispositivo sea visible en Plaspy para su monitoreo
- Una conexión exitosa permite a Plaspy recibir alarmas, reportes de movimiento y la telemetría configurada

## Flujo de trabajo habitual de configuración

1. Acceda al método oficial de configuración Meitrack para su equipo, normalmente comandos SMS o el software del proveedor.
2. Ingrese la dirección del servidor de Plaspy especificando d.plaspy.com o la IP 54.85.159.138, según el formato de comando del dispositivo.
3. Configure el puerto en 8888; tenga en cuenta que Plaspy usa el mismo puerto para todos los dispositivos compatibles.
4. Elija UDP o TCP como transporte si el dispositivo requiere selección explícita.
5. Aplique o guarde la configuración y reinicie el dispositivo si el firmware o el flujo de trabajo lo exigen.
6. Valide la conectividad confirmando que el rastreador reporta a Plaspy y aparece en la plataforma con las actualizaciones esperadas.
7. Si el reporte falla, verifique las credenciales APN, la conectividad de datos de la SIM y que los comandos SMS fueron aceptados por el dispositivo.

## Comandos de configuración de ejemplo

El ejemplo público de configuración del Meitrack MVT-600 que aparece a continuación utiliza comandos SMS. La configuración de muestra asume que la contraseña del dispositivo es 0000, que es el valor de fábrica en este ejemplo público. Reemplace {{apn}}, {{apnu}} y {{apnp}} por el APN, usuario APN y contraseña APN de la tarjeta SIM según lo requiera su operador. Los comandos deben enviarse como mensajes SMS separados y en el orden indicado cuando el orden sea importante.

1. Reinicio opcional a fábrica o restauración de valores de fábrica (usar solo si es necesario):
```
0000,F11
```

2. Configure el servidor GPRS para Plaspy. Este ejemplo usa la IP y el puerto de Plaspy e incluye un marcador para el APN. Si su dispositivo acepta un nombre de dominio en lugar de IP, puede usar d.plaspy.com en lugar de la IP.
```
0000,A21,2,54.85.159.138,8888,{{apn}},{{apnu}},{{apnp}}
```
- Explicación: {{apn}} es el APN de datos móviles. {{apnu}} y {{apnp}} son los marcadores para el usuario y la contraseña del APN y deben omitirse si el operador no los requiere.

3. Ajuste la zona horaria a UTC 0:
```
0000,B36,0
```

4. Establezca el intervalo de actualización periódica a 1 minuto:
```
0000,A12,6,0
```
- Explicación: La sintaxis exacta del parámetro A12 puede variar según el firmware. Este ejemplo define un modo de reporte e intervalo de 1 minuto como se muestra en el ejemplo público.

5. Configure el reporte de eventos (el ejemplo público asigna valor 0 a los eventos):
```
0000,C03,0
```

Nota: Mantenga la contraseña del dispositivo y la sintaxis de los comandos consistentes con su firmware. Si su firmware requiere el nombre de dominio en lugar de la IP, reemplace 54.85.159.138 por d.plaspy.com en el comando A21.

## Notas sobre la configuración

- La configuración vía SMS es un método habitual para dispositivos Meitrack y se usa en el ejemplo público anterior; las herramientas del proveedor pueden ofrecer una alternativa con interfaz gráfica.
- Las versiones de firmware y las variantes regionales pueden cambiar la sintaxis de parámetros SMS y los conjuntos de comandos disponibles; siempre confirme la sintaxis para su versión de firmware.
- Elija UDP o TCP según la recomendación del instalador y el comportamiento de la red; Plaspy acepta ambos y detecta el protocolo de forma automática.
- Verifique los valores de APN, usuario y contraseña con el operador móvil antes de enviar comandos para el servidor GPRS.
- Si realiza un reinicio de fábrica como parte de la preparación, tome esa acción como opcional y úsela solo cuando sea necesario para reconfigurar un equipo.

## Por qué usar Plaspy con esta configuración

Usar Plaspy con el Meitrack MVT-600 permite a las organizaciones centralizar la visibilidad de sus vehículos, el monitoreo de eventos y los reportes históricos, manteniendo un endpoint y puerto consistentes para todos los dispositivos compatibles. Las capacidades del MVT-600, como snapshots de cámara opcionales, entradas de sensores y reporte de eventos, lo convierten en una opción flexible para flotas que requieren tanto rastreo de ubicación como telemetría complementaria.

Learn more about Plaspy and how it integrates with devices like the Meitrack MVT-600 at https://www.plaspy.com. For the latest device-specific configuration methods, firmware notes, and official command references verify current information on the manufacturer website https://www.meitrack.com/
