---
slug: /queclink/wr100_leu/configuration
id: wr100_leu-configuration
sidebar_label: Configuration
title: QuecLink - WR100 LEU Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el QuecLink WR100 LEU con Plaspy, incluye ajustes de servidor y ejemplos de comandos SMS
keywords:
  - Configuración QuecLink WR100 LEU
  - Configuración WR100 LEU
  - QuecLink configuración Plaspy
  - Ajustes de servidor WR100 LEU
  - Configuración de rastreador Plaspy
  - Configuración GPS QuecLink
  - Comandos SMS WR100 LEU
  - Guía de compatibilidad Plaspy
  - Configuración de servidor rastreador GPS
  - Configuración rastreador de flota
---

# QuecLink - Configuración WR100 LEU

Esta página documenta el contexto público de configuración para utilizar la pasarela QuecLink WR100 LEU con la plataforma Plaspy. Explica los valores de servidor compartidos por Plaspy, el flujo de trabajo general y contiene ejemplos de comandos SMS que aparecen en muestras públicas de configuración de QuecLink. Utilice esta página para comprender qué debe configurarse en el dispositivo o mediante la interfaz de gestión antes de registrar el equipo en Plaspy.

Plaspy utiliza el mismo servidor y puerto para los dispositivos soportados y detecta automáticamente el protocolo del rastreador para simplificar la integración. Los pasos del lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. La descripción del WR100 LEU y los ejemplos de comandos SMS incluidos muestran una opción de configuración por SMS y los valores de servidor importantes que debe aplicar cuando apunte el dispositivo a Plaspy.

## Resumen de la configuración

Este proceso prepara el WR100 LEU o los rastreadores conectados compatibles con Plaspy para enviar telemetría y eventos a la plataforma. El objetivo es asegurar que la pasarela y cualquier rastreador adjunto tengan los ajustes correctos de servidor, APN y tipo de transporte para que Plaspy reciba actualizaciones de ubicación y estado de forma confiable.

- Apunte el dispositivo o el rastreador conectado al endpoint y puerto del servidor Plaspy para que los datos se enruten a la plataforma.
- Configure el APN y los parámetros del operador para que el equipo tenga conectividad de datos móviles cuando sea necesario.
- Seleccione el tipo de transporte UDP o TCP y confirme que la pasarela use el puerto compartido de Plaspy para las conexiones salientes.
- Aplique y guarde las configuraciones, luego valide que el dispositivo esté reportando correctamente a Plaspy.
- Use los comandos SMS de ejemplo provistos como referencia pública para dispositivos que soportan configuración por SMS.

## Ajustes de servidor de Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador cuando los dispositivos se conectan al servidor

## Requisitos típicos antes de la configuración

- Confirme que el dispositivo tenga alimentación y sea accesible mediante el método de configuración elegido, como la interfaz web, SSH o SMS, según lo soporte la pasarela o el rastreador.
- Una tarjeta SIM válida con un plan de datos activo y los valores APN correctos del operador si el dispositivo usará backhaul celular.
- Acceso a la interfaz de gestión del WR100 LEU o al canal de comandos SMS utilizado por su instalación o las herramientas del instalador.
- El dispositivo debe ejecutar firmware compatible con los comandos SMS publicados o con los procedimientos de gestión que planea utilizar.
- Conocimiento de la contraseña del equipo si se requiere para la configuración; los ejemplos públicos usan la contraseña predeterminada queclink.

## Cómo se conecta este rastreador a Plaspy

Cuando está configurado, el WR100 LEU o los rastreadores compatibles conectados envían paquetes de telemetría y eventos al endpoint del servidor Plaspy. El router actúa como una capa de transporte resistente para que Plaspy reciba datos de ubicación, alertas y estado de los dispositivos de campo de manera confiable.

- Los dispositivos se configuran para reportar al endpoint compartido de Plaspy d.plaspy.com o a la IP del servidor 54.85.159.138 en el puerto 8888.
- El transporte puede seleccionarse como UDP o TCP según la compatibilidad del equipo y consideraciones de red.
- Plaspy detecta automáticamente el protocolo del rastreador cuando los datos llegan al puerto 8888, por lo que no es necesario seleccionar protocolo en el lado de la plataforma.
- La pasarela reenvía paquetes de rastreador GPS, notificaciones de eventos y mensajes de estado para que Plaspy pueda mostrar ubicación y activar notificaciones.
- Se realiza monitorización operacional y validación después de la configuración para confirmar que los paquetes llegan y son parseados por Plaspy.

## Flujo de trabajo común de configuración

1. Acceda al método de configuración oficial de QuecLink para su equipo, como la interfaz web del WR100 LEU, SSH o la interfaz de comandos SMS del fabricante.
2. En los ajustes de servidor del dispositivo ingrese el dominio de Plaspy d.plaspy.com o la IP del servidor 54.85.159.138.
3. Establezca el puerto del servidor en 8888, que Plaspy utiliza para todos los dispositivos soportados.
4. Elija el protocolo de transporte UDP o TCP si el equipo requiere selección de transporte.
5. Configure el APN y las credenciales del operador según sea necesario para la conectividad celular, manteniendo los marcadores de posición si se utilizan.
6. Aplique o guarde la configuración y reinicie el dispositivo si el firmware o la interfaz de gestión lo requieren.
7. Valide que el dispositivo reporte a Plaspy confirmando que el equipo aparece y envía mensajes a la plataforma.

Si su instalación usa comandos SMS para la configuración, incluya esos comandos en la secuencia anterior y aplíquelos en el orden recomendado por el fabricante.

## Ejemplos de comandos de configuración

Los siguientes comandos SMS de ejemplo se tomaron de muestras públicas de configuración de QuecLink y muestran un flujo típico de configuración por SMS. La contraseña predeterminada del dispositivo mostrada en el ejemplo público es queclink. Los marcadores de posición como [apn], [apnu] y [apnp] deben reemplazarse por el APN del operador, el usuario del APN y la contraseña del APN según sea necesario.

1. Paso inicial opcional para restaurar valores de fábrica
```text
AT+GTRTO=queclink,4,,,,,,FFFF$
```

2. Ajuste la zona horaria a UTC 0
```text
AT+GTTMA=queclink,+,0,0,0,,,,,,FFFF$
```

3. Configure el APN del operador con marcadores de posición
```text
AT+GTBSI=queclink,[apn],[apnu],[apnp],,,,,FFFF$
```
- Reemplace [apn] por el APN de su operador
- Reemplace [apnu] por el usuario del APN si es requerido
- Reemplace [apnp] por la contraseña del APN si es requerida

4. Configure el servidor GPRS para Plaspy usando tanto el dominio como la IP y el puerto 8888
```text
AT+GTSRI=queclink,4,,1,d.plaspy.com,8888,54.85.159.138,8888,,0,0,0,,,,FFFF$
```
- Este comando configura el dispositivo para reportar a d.plaspy.com y a 54.85.159.138 en el puerto 8888

5. Establezca el intervalo de actualización de posición a 60 segundos
```text
AT+GTFRI=queclink,1,1,0,0,,,60,60,60,60,7F,40,0,,,FFFF$
```

6. Active la notificación del botón SOS en la entrada 2
```text
AT+GTSOS=queclink,2,2,,0,0,0,0,0,0,,,FFFF$
```

Use estos comandos en el orden mostrado cuando siga un flujo de configuración por SMS. Confirme el resultado de cada comando según el formato de respuesta de su dispositivo y el comportamiento del firmware del WR100 LEU o del rastreador.

## Notas de configuración

- La contraseña predeterminada usada en los comandos de muestra pública es queclink. Cambie las credenciales predeterminadas conforme a su política de seguridad después de la configuración inicial.
- Las versiones de firmware y las revisiones de hardware pueden cambiar la sintaxis de los comandos o los parámetros disponibles. Verifique el soporte de comandos en el firmware de su dispositivo antes de desplegar masivamente.
- El WR100 LEU soporta múltiples métodos de gestión. Si prefiere no usar SMS, utilice la interfaz web oficial o los flujos SSH provistos por el fabricante.
- Elija UDP o TCP en función de la confiabilidad de la red y los requisitos de transporte. Plaspy acepta cualquiera en el puerto 8888 y detecta automáticamente el protocolo del rastreador.
- Siempre confirme los valores y credenciales APN con su operador móvil y mantenga los marcadores de posición exactamente como están al insertar valores reales.

## Por qué usar Plaspy con esta configuración

Configurar la pasarela WR100 LEU y los rastreadores compatibles con Plaspy para usar el endpoint compartido de Plaspy simplifica la integración y reduce la complejidad de configuración por dispositivo. El WR100 LEU proporciona backhaul resistente y funciones de gestión para que los datos del rastreador lleguen a Plaspy de manera fiable, permitiendo visibilidad en tiempo real, alertas y monitorización operacional en flotas y despliegues remotos.

Para obtener más información sobre Plaspy y cómo su despliegue puede beneficiarse de un servidor compartido visite https://www.plaspy.com. Para métodos de configuración específicos de dispositivos, comportamiento de firmware y detalles del fabricante, verifique la información en el sitio oficial de QuecLink https://www.queclink.com/.
