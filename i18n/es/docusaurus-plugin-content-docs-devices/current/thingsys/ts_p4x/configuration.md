---
slug: /thingsys/ts_p4x/configuration
id: ts_p4x-configuration
sidebar_label: Configuration
title: ThingSys - TS-P4X Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración y servidor para conectar el ThingSys TS-P4X con la plataforma Plaspy
keywords:
  - configuración ThingSys TS-P4X
  - instalación ThingSys TS-P4X
  - configuración TS-P4X Plaspy
  - configuración servidor TS-P4X
  - configuración rastreador GPS TS-P4X
  - configuración rastreador para contenedor
  - configuración dispositivo Plaspy
  - configuración GPRS rastreador
  - seguimiento de flotas TS-P4X
  - configuración SMS TS-P4X
---

# ThingSys - Configuración TS-P4X

Esta página explica el contexto público de configuración para usar el rastreador ThingSys TS-P4X con la plataforma Plaspy. Resume los ajustes de servidor compartidos por Plaspy, los prerrequisitos habituales y los comandos SMS públicos de ThingSys para que el dispositivo reporte posición y telemetría a Plaspy. Utilice esta guía junto con el manual del TS-P4X y las herramientas del fabricante para la gestión completa del equipo.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos exactos en el equipo del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas de configuración del proveedor. El TS-P4X permite la configuración por SMS para parámetros básicos como APN y servidor; los ejemplos a continuación reflejan los comandos públicos disponibles.

## Resumen de la configuración

Esta configuración prepara el TS-P4X para enviar registros de ubicación y telemetría por GPRS a Plaspy, de modo que el dispositivo sea visible en la plataforma para seguimiento en tiempo real y reproducción histórica. El proceso normalmente consiste en aplicar los datos del APN del operador, apuntar el equipo al endpoint y puerto de Plaspy, y verificar que los datos llegan correctamente.

- Configure el APN del operador móvil, el usuario y la contraseña si son necesarios para que el rastreador establezca conectividad GPRS.
- Indique al dispositivo que reporte al servidor de Plaspy usando la dirección y el puerto proporcionados.
- Seleccione el protocolo de transporte si el equipo requiere elegir entre UDP y TCP.
- Guarde y aplique la configuración; si es necesario, realice un reinicio para que los ajustes entren en vigor.
- Verifique la conectividad y que las ubicaciones y eventos de alarma aparezcan en Plaspy.

## Ajustes del servidor Plaspy

- Use el dominio de Plaspy d.plaspy.com para configuraciones basadas en DNS si el dispositivo acepta un dominio.
- La IP conocida de Plaspy es 54.85.159.138 para configuraciones directas por IP.
- El puerto 8888 es el puerto de ingestión de Plaspy y se utiliza con todos los dispositivos compatibles.
- El TS-P4X puede enviarse datos usando UDP o TCP según el firmware y la configuración.
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta al servidor y usa el mismo puerto para todos los equipos.

## Requisitos habituales antes de la configuración

- Un TS-P4X con batería cargada y suficiente alimentación de respaldo o energía externa para completar los pasos de configuración.
- Una SIM celular válida con datos habilitados y GPRS disponible en el área de despliegue.
- El APN del operador móvil y, si aplica, el usuario y la contraseña del APN para la SIM.
- Acceso al método de configuración por SMS de ThingSys o a la herramienta de configuración del fabricante para el TS-P4X.
- Conocimiento de la contraseña del equipo para comandos SMS protegidos; la contraseña pública por defecto en los ejemplos es 123456.
- Acceso físico al dispositivo para la activación inicial y para confirmar el estado de los LEDs y la colocación.

## Cómo se conecta este rastreador a Plaspy

El TS-P4X transmite posiciones y telemetría por GPRS al endpoint y puerto del servidor Plaspy. Plaspy ingiere flujos de ubicación, eventos de alarma y los registros almacenados en áreas sin cobertura una vez que se restablece la conectividad, lo que permite monitorear activos en tiempo real y revisar el historial.

- El rastreador se configura para reportar a d.plaspy.com o directamente a 54.85.159.138 en el puerto 8888.
- El transporte de datos puede enviarse por UDP o TCP según la configuración del equipo y el comportamiento de la red.
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo establece una sesión en el puerto compartido.
- Los eventos de alarma, cambios de estado de bloqueo y los registros almacenados en zonas sin cobertura se reenvían a Plaspy para generación de eventos y almacenamiento histórico.
- Una vez validado el reporte, el dispositivo será visible en Plaspy para seguimiento en vivo y análisis.

## Flujo típico de configuración

1. Acceda al método oficial de configuración ThingSys para el TS-P4X, por ejemplo el conjunto de comandos por SMS o la utilidad de configuración documentada por el fabricante.
2. Ingrese la dirección del servidor Plaspy usando el dominio d.plaspy.com o la IP directa 54.85.159.138 según lo permita el dispositivo.
3. Establezca el puerto del servidor en 8888, que es el puerto estándar de ingestión de Plaspy usado por los dispositivos.
4. Elija UDP o TCP si el dispositivo requiere una selección explícita del transporte para el envío de datos.
5. Aplique o guarde la configuración y envíe los comandos de confirmación necesarios vía SMS o mediante la herramienta de configuración.
6. Reinicie el dispositivo si las instrucciones del fabricante indican que es necesario para aplicar los ajustes de red.
7. Valide que el TS-P4X está reportando a Plaspy comprobando la presencia del dispositivo y las actualizaciones de ubicación recientes en la plataforma.

## Comandos de configuración de ejemplo

El TS-P4X soporta comandos por SMS para muchas tareas básicas de configuración. A continuación se muestran los comandos SMS públicos documentados por ThingSys. La contraseña por defecto del dispositivo usada en estos ejemplos es 123456. Conserve y reemplace los marcadores de posición al aplicar los comandos.

1. Reinicio opcional a fábrica (usar solo cuando sea necesario):
```
FORMAT
```
Este comando restablece los ajustes del equipo a los valores de fábrica. Considere este paso como opcional y utilícelo únicamente cuando sea necesario arrancar desde una configuración limpia.

2. Establecer el APN del operador (reemplace {{apn}} con el APN de su operador):
```
apn123456 {{apn}}
```

3. Establecer el usuario del APN (reemplace {{apnu}} con el usuario del APN si es requerido):
```
apnuser123456 {{apnu}}
```

4. Establecer la contraseña del APN (reemplace {{apnp}} con la contraseña del APN si es requerido):
```
apnpasswd123456 {{apnp}}
```

5. Configurar el servidor GPRS a Plaspy con la IP pública y el puerto:
```
ip54.85.159.138 8888
```
Este SMS configura el dispositivo para reportar directamente a Plaspy en 54.85.159.138 puerto 8888. Puede usar el dominio d.plaspy.com en su lugar si el dispositivo admite entrada DNS vía SMS o la utilidad de configuración.

6. Consultar ajustes y estado actuales:
```
CXZT
```
Este comando de verificación recupera los valores de configuración actuales del dispositivo para que pueda confirmar los parámetros de APN y servidor.

Notas sobre los marcadores de posición
- {{apn}} es la cadena APN del operador móvil.
- {{apnu}} es el usuario del APN cuando el operador lo requiere.
- {{apnp}} es la contraseña del APN cuando el operador lo requiere.
Conserve estos marcadores de posición y reemplace con los valores de su operador al enviar los SMS.

## Observaciones de configuración

- La configuración por SMS es comúnmente soportada en el TS-P4X; confirme los prefijos exactos de los comandos y el requisito de contraseña según la documentación del fabricante y la versión de firmware.
- La selección de transporte entre UDP y TCP puede afectar el comportamiento de entrega en algunas redes; pruebe ambos si la conectividad o los patrones de entrega difieren.
- Las revisiones de firmware y hardware pueden cambiar la sintaxis de comandos o los parámetros disponibles. Verifique siempre los comandos contra el manual del TS-P4X o las notas de soporte de ThingSys.
- Plaspy usa el mismo puerto 8888 para todos los dispositivos y detecta automáticamente el protocolo del rastreador, por lo que debe concentrarse en asegurar que la dirección del servidor y el puerto estén configurados correctamente.
- Al usar la configuración por IP directa con ip54.85.159.138 8888, confirme que el dispositivo admite entrada de IP directa vía SMS; de lo contrario, utilice el dominio d.plaspy.com si está disponible.

## Por qué usar Plaspy con esta configuración

Configurar el TS-P4X para reportar a Plaspy ofrece visibilidad consistente para contenedores y remolques que requieren montaje resistente y larga duración de batería. Usar los ajustes de servidor compartidos de Plaspy simplifica despliegues a gran escala porque la plataforma acepta conexiones en un solo puerto y detecta automáticamente el protocolo del rastreador, reduciendo la complejidad de configuración por dispositivo.

Para conocer más sobre Plaspy y cómo soporta flujos de trabajo de seguimiento de flotas y activos visite https://www.plaspy.com. Para los comandos de configuración específicos más recientes, notas de firmware y la documentación completa del TS-P4X verifique la información actual en el sitio de ThingSys https://www.thingsys.com/ dado que los métodos de configuración del fabricante y el comportamiento del firmware pueden cambiar con el tiempo.
