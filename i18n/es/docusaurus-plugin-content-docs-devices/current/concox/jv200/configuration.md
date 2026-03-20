---
slug: /concox/jv200/configuration
id: jv200-configuration
sidebar_label: Configuration
title: Concox - JV200 Configuration
sidebar_class_name: menu_item_tracker
description: Configurar Concox JV200 para Plaspy con ajustes de servidor y comandos SMS para GPRS
keywords:
  - Configuración Concox JV200
  - Configuración JV200
  - Configuración servidor JV200
  - Configuración Plaspy JV200
  - Configuración rastreador GPS Concox
  - Configuración SMS JV200
  - Configuración rastreador vehicular Plaspy
  - Configuración GPRS rastreador
  - Ajustes APN JV200
  - Configuración dispositivo Plaspy
---

# Concox - JV200 Configuración

Esta página describe el contexto público de configuración para usar el rastreador Concox JV200 con la plataforma Plaspy. Explica los ajustes de servidor compartidos que Plaspy requiere y los comandos SMS típicos y el flujo de trabajo que puede utilizar para preparar las unidades JV200 para reportar a Plaspy. La información que sigue se basa en comandos de configuración públicos y prácticas habituales; siempre verifique la documentación del dispositivo para detalles específicos de firmware.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero los pasos exactos del lado del fabricante pueden variar según el firmware, la revisión de hardware, el tipo de instalación y las herramientas del vendedor. El JV200 es un rastreador vehicular GSM+GPRS+GPS con soporte AGPS para posicionamiento rápido, y el dispositivo puede configurarse mediante comandos SMS como se muestra en la sección de comandos de ejemplo.

## Resumen de configuración

Preparar un Concox JV200 para su uso con Plaspy se centra en habilitar la comunicación GPRS, configurar el APN correcto para la SIM instalada y apuntar el dispositivo al endpoint y puerto del servidor de Plaspy. El JV200 suele usar comandos SMS para la configuración, lo que permite realizar la puesta en marcha inicial sin software especializado.

- Configure el APN y los parámetros GPRS para que el JV200 pueda conectarse a las redes de datos móviles.
- Apunte el dispositivo a los ajustes de servidor de Plaspy para que la ubicación y la telemetría lleguen a la plataforma.
- Seleccione el transporte (UDP o TCP) si se requiere y establezca el puerto que usa Plaspy.
- Valide la conectividad y confirme que el dispositivo sea visible en Plaspy.
- Use comandos simples de verificación para comprobar la configuración del dispositivo vía SMS.

## Ajustes del servidor de Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP; el dispositivo puede configurarse usando cualquiera de los dos en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador
- Todos los dispositivos en Plaspy usan el mismo puerto

## Requisitos habituales antes de la configuración

- Una unidad Concox JV200 con alimentación instalada o accesible para la configuración inicial.
- Una tarjeta SIM activa con datos móviles y capacidad para SMS y los datos APN correctos del operador.
- Acceso a un teléfono capaz de enviar SMS al rastreador o a la herramienta de configuración del fabricante si está disponible.
- Conocimiento básico del número de serie o identificador del dispositivo para poder localizarlo en Plaspy después de la configuración.
- Las instrucciones del fabricante correspondientes a la versión de firmware instalada en el JV200.

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el JV200 usa la red móvil para establecer una sesión GPRS y transmite la ubicación y los datos del dispositivo al endpoint compartido del servidor de Plaspy en el puerto 8888. Plaspy recibe la conexión y determina automáticamente el protocolo del rastreador para procesar los mensajes entrantes.

- El rastreador se apunta a d.plaspy.com o directamente a 54.85.159.138 como servidor GPRS.
- Los datos se envían al puerto 8888, que es el puerto estándar que Plaspy utiliza para todos los dispositivos.
- El transporte puede ser UDP o TCP según la configuración del dispositivo; ambas opciones están soportadas.
- Plaspy detecta automáticamente el protocolo entrante, por lo que no es necesario elegir manualmente el protocolo en la plataforma.
- El reporte permite la visibilidad de la ubicación y el estado básico del dispositivo en Plaspy para monitoreo y operaciones.

## Flujo típico de configuración

1. Acceda al método oficial de configuración de Concox para el JV200 (comandos SMS o herramienta del proveedor) según lo indicado en la documentación del fabricante.
2. Configure el APN del dispositivo usando el comando APN y reemplace los marcadores con los valores de su operador.
3. Ingrese d.plaspy.com o 54.85.159.138 como servidor GPRS y establezca el puerto 8888.
4. Elija UDP o TCP si el dispositivo requiere una selección de transporte y guarde ese ajuste.
5. Habilite o inicie el modo GPRS en el dispositivo y aplique o guarde la configuración.
6. Reinicie el dispositivo si el firmware lo requiere o después de cambios importantes.
7. Valide que el JV200 reporte a Plaspy y aparezca como dispositivo activo en la plataforma.

## Ejemplos de comandos de configuración

El Concox JV200 puede configurarse enviando mensajes SMS al dispositivo. A continuación se muestran los comandos SMS públicos en el orden típico de aplicación.

- Paso inicial opcional para restablecer el dispositivo a valores de fábrica. Use esto solo si desea borrar la configuración existente.

```text
FACTORY#
```

- Establecer la zona horaria a UTC 0 (ejemplo).

```text
GMT,E,0#
```

- Configurar el APN del operador. Reemplace los marcadores con los datos del APN de su operador.
  - {{apn}} : nombre del APN del operador (requerido)
  - {{apnu}} : usuario del APN (opcional)
  - {{apnp}} : contraseña del APN (opcional)

```text
APN,{{apn}}{{apnu ? ',' + {{apnu}} : ''}}{{apnp ? ',' + {{apnp}} : ''}}#
```

- Establecer el servidor GPRS por dominio (recomendado) o por IP. Ambas opciones apuntan el dispositivo a Plaspy en el puerto 8888.

```text
SERVER,1,d.plaspy.com,8888,0#
```

o

```text
SERVER,0,54.85.159.138,8888,0#
```

- Establecer el intervalo de actualización de ubicación cada 60 segundos. Se muestran dos formatos de temporizador comunes.

```text
TIMER,60#
```

o

```text
TIMER,60,60#
```

- Habilitar el modo GPRS en el dispositivo.

```text
GPRSON,1#
```

- Verificar los parámetros actuales de GPRS y servidor.

```text
GPRSSET#
```

Notas sobre los comandos de ejemplo
- Preserve marcadores como {{apn}}, {{apnu}} y {{apnp}} al componer los SMS. Reemplace estos marcadores por los valores de su operador.
- El comando SERVER anterior muestra las opciones de dominio e IP. Usar d.plaspy.com se recomienda para facilitar el mantenimiento, pero la IP 54.85.159.138 está disponible si es necesario.
- El puerto 8888 es el que usa Plaspy para todos los dispositivos compatibles.

## Notas de configuración

- La configuración basada en SMS es un método común y sencillo para la puesta en marcha inicial del JV200; asegúrese de que la SIM pueda recibir SMS y tenga GPRS habilitado.
- Las diferencias de firmware y las revisiones de hardware pueden cambiar la sintaxis o el comportamiento de los comandos; confirme los comandos exactos para el firmware de su dispositivo.
- Elija UDP o TCP según las capacidades del equipo y las condiciones de la red; Plaspy admite ambas opciones en el puerto 8888.
- Usar el dominio d.plaspy.com es preferible porque Plaspy gestiona la detección de protocolo y la continuidad del endpoint; la IP directa se ofrece como alternativa.
- Después de la configuración, use el comando de verificación GPRSSET# y confirme que el dispositivo aparezca en Plaspy.

## Por qué usar Plaspy con esta configuración

Configurar el Concox JV200 para que reporte a Plaspy ofrece una forma directa de agregar rastreo en tiempo real y visibilidad operativa para vehículos. Con el JV200 reportando a un endpoint compartido de Plaspy en el puerto 8888, las organizaciones obtienen entrega de datos consistente hacia una plataforma que maneja automáticamente las diferencias de protocolo entre dispositivos.

Para conocer más sobre Plaspy y las capacidades de la plataforma, visite https://www.plaspy.com. Para obtener los detalles más recientes sobre la configuración específica del dispositivo, la sintaxis de comandos y las instrucciones de firmware del Concox JV200, verifique la información oficial del fabricante en https://www.iconcox.com/ ya que los métodos de configuración y el comportamiento del dispositivo pueden cambiar con el tiempo.
