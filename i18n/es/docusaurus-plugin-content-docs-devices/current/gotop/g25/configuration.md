---
slug: /gotop/g25/configuration
id: g25-configuration
sidebar_label: Configuration
title: GOTOP - G25 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador GOTOP G25 con Plaspy con ajustes de servidor y pasos prácticos
keywords:
  - GOTOP G25 configuración
  - GOTOP G25 instalación
  - GOTOP G25 configuración de servidor
  - GOTOP G25 Plaspy
  - GOTOP G25 rastreador GPS
  - configuración de rastreador de activos
  - configuración de rastreo de vehículos
  - seguimiento de flotas GOTOP
  - plataforma de rastreo G25
  - guía de configuración GOTOP
---

# GOTOP - G25 Configuración

Esta página documenta el contexto público de configuración para usar el GOTOP G25 con la plataforma Plaspy. Explica los ajustes de servidor que Plaspy espera y describe los pasos prácticos y las comprobaciones que suelen realizar instaladores e integradores para que el G25 pueda reportar correctamente a Plaspy y permitir el monitoreo de activos.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador en su endpoint. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Use esta guía como referencia práctica y consulte la documentación del fabricante para instrucciones específicas y actualizadas.

## Resumen de la configuración

El objetivo de este proceso es preparar un GOTOP G25 para que envíe datos de ubicación y estado a Plaspy y así los activos sean visibles en su plataforma de monitoreo. El endpoint público y los valores de puerto de Plaspy son utilizados por casi todos los dispositivos compatibles y la plataforma identifica automáticamente el protocolo del rastreador.

- Configure el G25 para que reporte a Plaspy usando el endpoint y puerto compartidos.
- Asegúrese de que el dispositivo tenga alimentación y conectividad móvil funcional antes de probar.
- Seleccione el método de transporte que requiere el equipo y ajústelo a los valores de Plaspy.
- Guarde o aplique los cambios y, si es necesario, reinicie el equipo para que la nueva configuración surta efecto.
- Valide la conectividad confirmando que el dispositivo aparece en Plaspy tras la configuración.

## Ajustes del servidor de Plaspy

Use los siguientes ajustes públicos de servidor al configurar el GOTOP G25 para Plaspy:

- Server domain: d.plaspy.com
- Server IP: 54.85.159.138
- Port: 8888
- Transport: UDP or TCP may be used depending on device settings
- Plaspy automatically detects the tracker protocol at its endpoint and uses the same port for all supported devices

Estos valores son los ajustes públicos y compartidos que Plaspy espera para las conexiones entrantes de los rastreadores.

## Requisitos habituales antes de la configuración

- Dispositivo encendido y batería suficientemente cargada para la configuración y las pruebas
- SIM de datos activa y registrada en una red móvil compatible con 4G LTE, 3G o 2G según disponibilidad
- Acceso al método de configuración GOTOP que requiera su unidad, como comandos SMS o la herramienta de configuración del proveedor
- Identificador del dispositivo disponible, por ejemplo IMEI o número de serie, para registro y solución de problemas
- Acceso a una cuenta de Plaspy o al soporte para confirmar que el dispositivo es visible después de la configuración
- Capacidad para recibir respuestas del dispositivo o registros que verifiquen que los ajustes se aplicaron

## Cómo se conecta este rastreador a Plaspy

Al configurarse para Plaspy, el G25 enviará sus actualizaciones de posición y estado al endpoint y puerto compartidos de Plaspy. Plaspy recibe el tráfico del dispositivo y determina automáticamente el protocolo, por lo que el mismo puerto puede servir a muchos modelos diferentes.

- El rastreador se configura para reportar al servidor de Plaspy en d.plaspy.com o a su IP 54.85.159.138
- Los datos se envían por el puerto 8888, que Plaspy utiliza para todas las conexiones de dispositivos
- El transporte puede ser UDP o TCP según cómo esté configurado el G25
- Plaspy detecta automáticamente el protocolo del rastreador y procesa los mensajes entrantes
- Una vez reportando correctamente, el dispositivo será visible en Plaspy para monitoreo en tiempo real de ubicación y eventos

## Flujo de configuración habitual

1. Acceda al método oficial de configuración GOTOP recomendado para su versión de firmware y hardware (por ejemplo, comandos SMS de parámetros o la aplicación de configuración GOTOP).
2. Ingrese d.plaspy.com como dominio del servidor o use la IP del servidor 54.85.159.138 si el dispositivo requiere una dirección IP.
3. Establezca el puerto del servidor en 8888, ya que Plaspy utiliza este puerto para los dispositivos compatibles.
4. Seleccione el tipo de transporte UDP o TCP si el dispositivo requiere una selección explícita.
5. Aplique o guarde la configuración en el rastreador siguiendo el procedimiento del fabricante.
6. Reinicie el dispositivo si el fabricante lo requiere o después de aplicar los ajustes para asegurar que los cambios entren en vigor.
7. Valide que el G25 reporta a Plaspy comprobando la actividad del dispositivo en la plataforma Plaspy o confirmando la recepción en el servidor con el soporte de Plaspy.

## Ejemplos de comandos de configuración

El GOTOP G25 soporta ajustes por parámetros vía SMS y funciones de consulta, pero los comandos y la sintaxis exactos pueden variar según firmware y herramientas del proveedor. Debido a que los conjuntos de comandos son específicos por modelo, siga la documentación oficial de GOTOP o la herramienta de configuración suministrada por su proveedor para los comandos SMS o de software precisos para establecer servidor, puerto y transporte.

Al usar configuración por SMS, normalmente establecerá el dominio o la IP del servidor y el puerto. Por ejemplo, la sintaxis SMS del dispositivo suele incluir marcadores de posición similares a [apn] para el valor del APN. Conserve los marcadores si copia ejemplos de la documentación del fabricante y reemplácelos por los valores de su operador o cuenta.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar los comandos disponibles y los nombres exactos de los parámetros; confirme siempre el conjunto de comandos para la versión de firmware de su dispositivo.
- El G25 admite configuración por SMS y herramientas del proveedor; elija el método que mejor se adapte a su implementación y a las herramientas del instalador.
- Plaspy usa el mismo puerto 8888 para todos los dispositivos y realiza la detección automática de protocolo, por lo que no es necesario cambiar puertos por modelo.
- Cuando un dispositivo requiere selección de transporte, pruebe tanto UDP como TCP si la primera opción no conecta de inmediato, y luego verifique en Plaspy.
- Mantenga un registro del identificador del dispositivo y de cualquier respuesta a comandos durante la configuración para facilitar la resolución de problemas con GOTOP o con el soporte de Plaspy.

## Por qué usar Plaspy con esta configuración

Integrar el GOTOP G25 con Plaspy ofrece una solución práctica para obtener visibilidad y control operativo de activos que requieren largos tiempos en espera y instalaciones robustas. Con el soporte del G25 para redes móviles y la posibilidad de configurar por SMS, puede integrarse en flujos de trabajo de monitoreo de flotas y activos que usan el endpoint compartido de Plaspy para centralizar los reportes de los dispositivos.

Learn more about Plaspy on the main website https://www.plaspy.com and verify the latest device specific configuration and firmware details on the manufacturer site https://www.gotop.cc/. Manufacturer specifications, setup methods, and device behavior may change over time so always confirm current instructions with the official GOTOP documentation.
