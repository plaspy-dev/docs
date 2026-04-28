---
slug: /aovx/vl300r_4g/configuration
id: vl300r_4g-configuration
sidebar_label: Configuration
title: AOVX - VL300R - (4G) Configuration
sidebar_class_name: menu_item_tracker
description: Configure el AOVX VL300R 4G para Plaspy con ajustes de servidor público pasos de configuración y comandos prácticos
keywords:
  - configuración AOVX VL300R
  - configuración AOVX VL300R para Plaspy
  - configuración de servidor AOVX VL300R
  - configuración del rastreador GPS VL300R 4G
  - configuración del software de rastreo VL300R 4G
  - configuración de rastreador GPS Plaspy
  - rastreador GPS compatible con Plaspy
  - configuración de rastreador vehicular
  - configuración de rastreador de flota
  - configuración de plataforma GPS
---

# AOVX - VL300R - (4G) Configuration

Esta página cubre el contexto de configuración pública para usar el AOVX VL300R - (4G) con Plaspy. Se enfoca en los valores básicos del servidor, el flujo general de configuración y los comandos SMS públicos disponibles para la provisión inicial del rastreador.

El VL300R - (4G) es un rastreador GPS vehicular cableado diseñado para instalaciones de flotas y telemática, y Plaspy puede trabajar con este modelo mediante ajustes compartidos de la plataforma. Plaspy usa el mismo puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, mientras que los pasos exactos de configuración del lado del fabricante pueden variar según el firmware, la revisión de hardware, el tipo de instalación y la herramienta del proveedor que se utilice.

## Resumen de configuración

Configurar el VL300R - (4G) para Plaspy significa preparar el dispositivo para que pueda llegar al endpoint del servidor de Plaspy, transmitir datos de forma constante y mantenerse visible en la plataforma para el rastreo y la supervisión operativa. La configuración normalmente comienza con el método propio del dispositivo y luego aplica los valores de servidor de Plaspy que el rastreador utiliza para reportar.

- Ingrese el destino del servidor de Plaspy en el método de configuración del rastreador.
- Use el puerto compartido de Plaspy para que el dispositivo pueda enviar correctamente los datos de rastreo.
- Seleccione el transporte que requiera el dispositivo cuando deba elegirse UDP o TCP.
- Confirme que el rastreador esté configurado para reportar al endpoint de Plaspy y no a un destino de prueba local.
- Verifique la configuración después de guardarla para asegurarse de que el dispositivo esté listo para enviar datos.
- Revise nuevamente la configuración si el rastreador se mueve, se restablece o se actualiza con un firmware diferente.

## Ajustes del servidor de Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte para UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la implementación en los modelos compatibles

## Requisitos habituales antes de configurar

- El rastreador debe estar instalado y encendido según las indicaciones del fabricante.
- Debe tener acceso al método o software oficial de configuración de AOVX para este modelo.
- El dispositivo debe estar listo para aceptar comandos de configuración o cambios en sus parámetros.
- Debe confirmar que el rastreador pueda comunicarse a través de la red usada en la instalación.
- Mantenga disponibles los datos del servidor de Plaspy durante el proceso de configuración.
- Revise la documentación más reciente del fabricante si el firmware o el flujo de configuración han cambiado.

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el VL300R - (4G) envía sus datos de rastreo al endpoint y puerto compartidos del servidor de Plaspy, donde Plaspy recibe e interpreta automáticamente el protocolo entrante del dispositivo. Esto permite que el rastreador aparezca en la plataforma sin necesidad de asignar un puerto distinto para cada modelo.

- El rastreador se dirige a d.plaspy.com o 54.85.159.138 para el reporte.
- Los datos se envían por el puerto 8888, que es el puerto común de Plaspy para los dispositivos compatibles.
- El dispositivo puede usar UDP o TCP según el método de configuración y el comportamiento del firmware.
- Plaspy identifica automáticamente el protocolo del rastreador después de la primera comunicación válida.
- Una vez recibidos los datos, el dispositivo puede supervisarse en Plaspy para obtener visibilidad de ubicación y operación.
- Cualquier evento compatible del dispositivo queda luego disponible para los flujos de rastreo y el control de flota.

## Flujo típico de configuración

1. Abra el método o software oficial de configuración de AOVX para el VL300R - (4G).
2. Ingrese el dominio del servidor de Plaspy d.plaspy.com o, si es necesario, la IP del servidor 54.85.159.138.
3. Configure el puerto de reporte en 8888.
4. Elija UDP o TCP si el dispositivo o el firmware requiere seleccionar un transporte.
5. Aplique o guarde la configuración en el rastreador.
6. Reinicie el dispositivo si el flujo del fabricante lo requiere.
7. Confirme que el rastreador comience a reportar a Plaspy.
8. Revise el dispositivo en Plaspy para validar que el protocolo y la conexión se estén detectando correctamente.

## Ejemplos de comandos de configuración

El flujo público de configuración de este rastreador incluye comandos SMS para la configuración del APN, la definición del servidor, el control del intervalo, la activación de GPRS y las consultas de estado. Los marcadores como `{{apn}}`, `{{apnu}}` y `{{apnp}}` representan valores de APN específicos del operador, nombre de usuario APN opcional y contraseña APN opcional.

- Configure el APN del operador

```text
APN,{{apn}}#
```

- Configure el APN del operador con nombre de usuario y contraseña cuando sea necesario

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

- El método de configuración del fabricante puede variar según la versión del firmware o el flujo de trabajo del instalador.
- Si el dispositivo admite tanto UDP como TCP en su interfaz de configuración, use el transporte que coincida con su método de implementación y con la documentación.
- Los comandos SMS mostrados arriba son comandos públicos de configuración y son útiles para la provisión inicial y la verificación.
- Plaspy usa un puerto de servidor compartido entre los dispositivos compatibles, por lo que el mismo valor de puerto se utiliza de forma consistente durante la configuración.
- Confirme siempre la documentación más reciente de AOVX para conocer el comportamiento específico del modelo y cualquier cambio relacionado con el firmware.

## Por qué usar Plaspy con esta configuración

Usar el AOVX VL300R - (4G) con Plaspy ofrece a los operadores de flotas una forma práctica de centralizar el rastreo de ubicación, la visibilidad de los dispositivos y la supervisión operativa mediante una configuración de servidor compartida. La combinación de un puerto común, la detección automática del protocolo y valores públicos de configuración sencillos ayuda a simplificar la implementación en múltiples dispositivos compatibles.

Para las organizaciones que necesitan un rastreo vehicular confiable, el flujo de trabajo de Plaspy proporciona una ruta clara desde la configuración del dispositivo hasta el monitoreo y los reportes en vivo. Para conocer más sobre Plaspy y sus capacidades de rastreo de flotas, visite https://www.plaspy.com. Para obtener la información más actualizada sobre la configuración específica del dispositivo, el comportamiento del firmware y la guía del fabricante, verifique la información más reciente en https://www.aovx.com/.
