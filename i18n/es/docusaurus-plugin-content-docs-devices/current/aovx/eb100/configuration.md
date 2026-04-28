---
slug: /aovx/eb100/configuration
id: eb100-configuration
sidebar_label: Configuration
title: AOVX - EB100 Configuration
sidebar_class_name: menu_item_tracker
description: Configuración del AOVX EB100 para Plaspy y flujo de rastreo público
keywords:
  - configuración AOVX EB100
  - configuración AOVX EB100 para Plaspy
  - configuración del servidor AOVX EB100
  - configuración de la plataforma GPS AOVX EB100
  - configuración del software de rastreo AOVX EB100
  - guía de configuración EB100
  - configuración EB100 en Plaspy
  - configuración del rastreador AOVX
  - configuración de etiqueta sensor Bluetooth
  - configuración de etiqueta sensor ambiental
---

# AOVX - EB100 Configuration

Esta página cubre el contexto de configuración pública para usar el AOVX EB100 con Plaspy. El EB100 se describe como una etiqueta sensor ambiental, y la información de configuración aquí se enfoca en los comandos públicos y los valores de servidor disponibles para preparar el dispositivo para enviar datos a la plataforma Plaspy.

Plaspy usa ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Eso significa que el objetivo principal de la configuración es apuntar el EB100 al endpoint correcto de Plaspy y confirmar que la configuración del lado del fabricante se haya completado de una manera que coincida con el firmware del dispositivo, la revisión de hardware, el método de instalación y las herramientas del proveedor que estén en uso.

## Resumen de la configuración

El EB100 debe prepararse para que pueda enviar sus datos al endpoint del servidor de Plaspy usando los ajustes públicos provistos para este modelo. En la práctica, la configuración consiste en definir los parámetros de red, confirmar el intervalo de reporte y validar que el dispositivo esté listo para reenviar datos por el canal de comunicación previsto.

- Configure el dispositivo para usar el endpoint y el puerto del servidor de Plaspy para el reporte.
- Confirme que el dispositivo esté configurado con el APN correcto del operador antes de intentar la transmisión de datos.
- Aplique el intervalo de reporte para que el dispositivo envíe actualizaciones con la frecuencia esperada.
- Habilite el modo de datos requerido para que el dispositivo se comunique con la plataforma Plaspy.
- Verifique los ajustes guardados con los comandos públicos de verificación cuando estén disponibles.
- Confirme que el dispositivo esté reportando a través del servicio compartido de Plaspy y que los datos aparezcan correctamente en la plataforma.

## Ajustes del servidor Plaspy

Use los siguientes ajustes públicos de Plaspy para la configuración del EB100:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador
- Todos los dispositivos en Plaspy usan el mismo puerto para este tipo de configuración

## Requisitos típicos antes de configurar

Antes de aplicar la configuración, asegúrese de que el EB100 esté listo para el aprovisionamiento y de que tenga disponible el método oficial del fabricante.

- Confirme que tiene acceso al método o software oficial de configuración de AOVX.
- Asegúrese de que el dispositivo esté encendido y listo para la configuración.
- Prepare los datos del APN del operador si el dispositivo usará datos móviles.
- Verifique que pueda enviar los comandos públicos de configuración usando el método del fabricante compatible.
- Revise que el firmware y la revisión de hardware coincidan con la guía de configuración que está siguiendo.
- Consulte la documentación más reciente del fabricante antes de desplegar a gran escala.

## Cómo se conecta este rastreador a Plaspy

El EB100 usa los valores de configuración públicos para dirigir su reporte hacia el servicio de Plaspy. Una vez configurado, el dispositivo puede reenviar sus datos usando el dominio o la IP del servidor especificados y el puerto compartido utilizado por Plaspy, mientras Plaspy identifica automáticamente el protocolo que usa el rastreador.

- El dispositivo se apunta a d.plaspy.com o a 54.85.159.138 para la comunicación con Plaspy.
- El puerto compartido 8888 se usa para el reporte del dispositivo.
- Se puede elegir UDP o TCP si el dispositivo o la herramienta del fabricante requiere una selección de transporte.
- Plaspy detecta automáticamente el protocolo del rastreador, lo que reduce la necesidad de seleccionar manualmente el protocolo en la plataforma.
- Después de guardar el dispositivo y reiniciarlo si es necesario, debería comenzar a reportar al entorno de Plaspy.

## Flujo habitual de configuración

1. Abra el método oficial de configuración de AOVX o el software del fabricante para el EB100.
2. Ingrese el APN del operador requerido para la conectividad de datos si el flujo de configuración se lo solicita.
3. Configure la dirección del servidor como d.plaspy.com o, si lo prefiere, la IP de Plaspy 54.85.159.138.
4. Establezca el puerto 8888 como puerto de reporte.
5. Elija UDP o TCP si el dispositivo o la herramienta requieren una selección de transporte.
6. Guarde o aplique los cambios de configuración en la herramienta del fabricante o mediante el flujo de mensajes compatible.
7. Reinicie el dispositivo si el procedimiento de configuración lo requiere.
8. Valide que el rastreador esté reportando correctamente a Plaspy y que el dispositivo aparezca como se espera.

## Ejemplos de comandos de configuración

El flujo de configuración pública del EB100 usa comandos por mensaje de texto. El método exacto puede variar según la herramienta del fabricante, el firmware o el proceso de despliegue, pero la secuencia de comandos pública a continuación refleja la información de configuración disponible.

- Configure el APN del operador

```text
APN,{{apn}}#
```

Si el operador requiere usuario y contraseña, los marcadores de posición pueden incluirse tal como los proporciona el flujo del fabricante:

```text
APN,{{apn}},{{apnu}},{{apnp}}#
```

- Configure el servidor GPRS para Plaspy

```text
SERVER,1,d.plaspy.com,8888,0#
```

- Configure el intervalo de actualización

```text
TIMER,60,60#
```

- Cambie el dispositivo al modo GPRS

```text
GPRSON,1#
```

- Consulte la configuración actual

```text
PARAM#
```

- Consulte el estado del rastreador

```text
STATUS#
```

## Notas de configuración

- Los comandos públicos mostrados arriba deben ingresarse exactamente como los admita el flujo y el firmware del dispositivo.
- Si su método de despliegue requiere seleccionar UDP o TCP, siga la guía del fabricante para esa opción de transporte.
- El endpoint de Plaspy se comparte entre los dispositivos compatibles, y la plataforma detecta automáticamente el protocolo del rastreador.
- El EB100 se describe como una etiqueta sensor ambiental, por lo que el enfoque de la configuración está en la conectividad y el reporte, más que en ajustes específicos de GPS.
- Para obtener resultados más confiables, compare el flujo público de configuración con la documentación más reciente de AOVX antes del despliegue.

## Por qué usar Plaspy con esta configuración

Usar el EB100 con Plaspy permite recopilar datos de sensores ambientales en la misma plataforma que se utiliza para monitoreo y supervisión operativa. Esto facilita combinar datos de condición con flujos de trabajo más amplios de flota o logística, especialmente cuando el EB100 se despliega junto con otros dispositivos conectados.

La configuración compartida del servidor de Plaspy y la detección automática del protocolo simplifican la parte de la plataforma, mientras que la configuración del EB100 se enfoca en preparar el rastreador para reportar de forma constante. Si desea conocer más sobre Plaspy, visite https://www.plaspy.com. Para obtener la información más reciente sobre la configuración específica del dispositivo, el comportamiento del firmware y la guía del fabricante, verifique la documentación vigente en https://www.aovx.com/.
