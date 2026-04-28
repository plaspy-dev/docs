---
slug: /aovx/ag300/configuration
id: ag300-configuration
sidebar_label: Configuration
title: AOVX - AG300 Configuration
sidebar_class_name: menu_item_tracker
description: Configuración del AOVX AG300 para Plaspy con guía de servidor e integración práctica del rastreador
keywords:
  - configuración AOVX AG300
  - configuración AOVX AG300 para Plaspy
  - configuración del servidor AOVX AG300
  - configuración del rastreador GPS AOVX AG300
  - configuración del rastreador AG300
  - configuración AG300 para Plaspy
  - configuración del servidor para rastreador GPS
  - configuración de rastreador de activos
  - configuración de la plataforma GPS Plaspy
  - configuración del rastreador AOVX
---

# AOVX - AG300 Configuration

En esta página encontrará el contexto de configuración pública para usar el AOVX AG300 con Plaspy. Aquí se explica la información del servidor, el flujo de configuración y los comandos disponibles públicamente para preparar el rastreador y comunicarlo con la plataforma.

Plaspy utiliza una configuración de servidor compartida para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador después de que el equipo se conecta. Los pasos exactos de configuración del fabricante pueden variar según el firmware, la revisión de hardware, el tipo de instalación y las herramientas que AOVX proporcione.

## Panorama de la configuración

El proceso de configuración del AOVX AG300 está pensado para dirigir el rastreador al servidor de Plaspy, confirmar que el dispositivo use los parámetros de conexión correctos y asegurarse de que pueda reportar datos de forma confiable. Una vez que el rastreador envía mensajes al punto de conexión compartido de Plaspy, la plataforma puede identificar el protocolo y comenzar a procesar los eventos entrantes.

- Prepare el rastreador para que pueda comunicarse con el punto de conexión del servidor de Plaspy.
- Ingrese el host y el puerto compartidos de Plaspy que usan los dispositivos compatibles.
- Seleccione el método de transporte correcto si el dispositivo requiere UDP o TCP.
- Aplique los parámetros de operadora y de reporte necesarios para la comunicación inicial.
- Valide que el rastreador esté reportando activamente después de guardar la configuración.
- Use las herramientas de visibilidad de Plaspy para confirmar que el dispositivo aparezca en línea y empiece a transmitir datos.

## Parámetros del servidor de Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Compatibilidad de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador después de que el dispositivo se conecta
- Todos los dispositivos compatibles en Plaspy usan el mismo puerto

## Requisitos habituales antes de configurar

- Confirme que el rastreador tenga energía y esté listo para configurarse.
- Tenga acceso al método o software oficial de configuración de AOVX.
- Verifique que el dispositivo pueda editarse con el flujo de trabajo disponible del fabricante.
- Prepare los datos públicos del servidor de Plaspy antes de iniciar la configuración.
- Asegúrese de que el entorno de instalación permita que el rastreador se comunique normalmente.
- Revise la documentación más reciente de AOVX para identificar notas de configuración específicas del modelo.

## Cómo se conecta este rastreador a Plaspy

El AG300 se conecta enviando sus datos al punto de conexión compartido del servidor de Plaspy en el puerto 8888. Después de apuntar el dispositivo a d.plaspy.com o a la IP del servidor 54.85.159.138, Plaspy recibe la conexión entrante, identifica el protocolo automáticamente y comienza a procesar los mensajes del rastreador.

- El rastreador se configura para reportar al servidor compartido de Plaspy en lugar de un punto de conexión específico para el dispositivo.
- Se puede usar UDP o TCP en el puerto 8888 según el método de configuración del fabricante.
- Una vez que el tráfico llega a Plaspy, la plataforma detecta automáticamente el protocolo del rastreador.
- Luego, la ubicación y los eventos del dispositivo pueden mostrarse en la interfaz de Plaspy para su monitoreo.
- El reporte continuo permite visibilidad operativa y revisión del historial en Plaspy.
- Si el dispositivo requiere reiniciarse después de guardar los ajustes, debe reconectarse usando los datos de servidor almacenados.

## Flujo común de configuración

1. Abra el método o software oficial de configuración de AOVX para el AG300.
2. Ingrese el dominio del servidor de Plaspy d.plaspy.com o la IP del servidor 54.85.159.138.
3. Establezca el puerto en 8888.
4. Elija UDP o TCP si el dispositivo solicita una selección de transporte.
5. Aplique o guarde la configuración para que el rastreador almacene los nuevos datos del servidor.
6. Reinicie el dispositivo si el flujo del fabricante lo requiere.
7. Confirme que el rastreador comience a reportar a Plaspy y aparezca en la plataforma.
8. Si es necesario, revise nuevamente la configuración guardada para verificar los valores del servidor y del reporte.

## Ejemplos de comandos de configuración

El flujo público de configuración del AG300 incluye comandos SMS para APN, servidor, intervalo de reporte y modo de datos. Los campos de reemplazo en el comando APN representan los valores de su operadora.

- Configure el APN de la operadora

```text
APN,{{apn}}# 
```

Si su operadora requiere usuario y contraseña, los campos opcionales se incluyen en el mismo formato de comando.

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

- Cambie el rastreador al modo GPRS

```text
GPRSON,1#
```

- Verifique la configuración guardada

```text
PARAM#
```

- Verifique el estado del rastreador

```text
STATUS#
```

## Notas de configuración

- Los comandos públicos de configuración pueden variar ligeramente según la versión del firmware o la versión regional del dispositivo.
- El AG300 puede admitir configuración por SMS además de las herramientas o flujos de trabajo propios del fabricante.
- Plaspy usa el mismo puerto para todos los dispositivos compatibles, lo que simplifica la configuración del lado del servidor.
- Las opciones UDP y TCP deben seleccionarse según la interfaz de configuración del dispositivo y el método público disponible para la instalación.
- Siempre confirme los valores guardados después de la configuración para asegurarse de que el rastreador esté usando correctamente los datos del servidor de Plaspy.

## Por qué usar Plaspy con esta configuración

Usar el AOVX AG300 con Plaspy ofrece una forma práctica de centralizar la visibilidad de activos, el monitoreo de eventos y el rastreo de largo plazo en una sola plataforma. La configuración compartida del servidor de Plaspy y la detección automática del protocolo ayudan a reducir la complejidad de integración, manteniendo al mismo tiempo un enfoque de instalación alineado con los flujos de trabajo estándar del fabricante.

Para organizaciones que necesitan supervisión confiable de activos, el AG300 puede configurarse para reportar en Plaspy usando el mismo punto de conexión público y el mismo puerto que emplean otros dispositivos compatibles. Para conocer más sobre Plaspy, visite https://www.plaspy.com. Para obtener los detalles más recientes de configuración del dispositivo, el comportamiento del firmware y la guía del fabricante, verifique la información actual en el sitio oficial de AOVX en https://www.aovx.com/.
